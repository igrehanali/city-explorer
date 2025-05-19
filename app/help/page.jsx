"use client";

import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/lib/auth-context";
import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  serverTimestamp,
  getDocs,
  where,
} from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function ChatWithAdminPage() {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Create or find the chat between user and admin
  useEffect(() => {
    if (!user?.uid) return;

    const initializeChat = async () => {
      try {
        const chatQuery = query(
          collection(db, "chats"),
          where("userId", "==", user.uid)
        );
        const chatSnapshot = await getDocs(chatQuery);

        if (!chatSnapshot.empty) {
          // Chat already exists
          const existingChat = chatSnapshot.docs[0];
          setChatId(existingChat.id);
        } else {
          // Create new chat
          const newChatRef = doc(collection(db, "chats"));
          await setDoc(newChatRef, {
            userId: user.uid,
            userEmail: user.email,
            createdAt: serverTimestamp(),
          });
          setChatId(newChatRef.id);
        }
      } catch (error) {
        console.error("Error initializing chat:", error);
        toast.error("Failed to start chat.");
      }
    };

    initializeChat();
  }, [user]);

  // Listen to messages in real-time
  useEffect(() => {
    if (!chatId) return;

    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatId]);

  // Handle sending a message
  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      const messageRef = collection(db, "chats", chatId, "messages");
      await addDoc(messageRef, {
        text: message.trim(),
        senderId: user.uid,
        senderEmail: user.email,
        createdAt: serverTimestamp(),
        fromAdmin: false,
      });
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 mt-20">
      <main className="container mx-auto px-4 relative z-10">
        <div className="mb-6">
          <Link
            href="/"
            className="flex items-center text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-800">
              Chat with Support
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.fromAdmin ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-sm ${
                      msg.fromAdmin
                        ? "bg-purple-100 text-gray-800 rounded-bl-none"
                        : "bg-indigo-500 text-white rounded-br-none"
                    }`}
                  >
                    <div className="text-sm break-words">{msg.text}</div>
                    <div className="text-[10px] text-right text-white/70 mt-1">
                      {msg.createdAt?.toDate
                        ? msg.createdAt.toDate().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Sending..."}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 pt-4 border-t mt-4"
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !message}>
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
