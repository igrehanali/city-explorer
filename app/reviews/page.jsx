"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import FooterSection from "@/components/landing/FooterSection";

const RatingPage = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!user) {
      toast.error("You must be logged in.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "ratings"), {
        rating,
        message,
        userId: user.uid,
        userEmail: user.email,
        userName: user.displayName || "Anonymous",
        createdAt: serverTimestamp(),
      });

      toast.success("Rating submitted successfully!");
      setRating(0);
      setMessage("");
      router.push("/profile");
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = rating > 0 && message.trim().length > 0;

  return (
    <>
      <div className="max-w-xl mx-auto py-10 px-4 pt-32">
        <Toaster />
        <Card className="shadow-md border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Rate Your Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <div className="flex justify-center space-x-2 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={32}
                    className={`cursor-pointer transition-colors ${
                      (hovered ?? rating) >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {rating === 0
                  ? "Tap a star to rate"
                  : `You selected ${rating} star${rating > 1 ? "s" : ""}`}
              </span>
            </div>

            <div className="flex flex-col">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you loved or what we can improve..."
                className="resize-none"
                rows={4}
              />
              {message.trim().length === 0 && (
                <span className="text-sm text-red-500 mt-1">
                  Please write a message.
                </span>
              )}
            </div>

            <Button onClick={handleSubmit} disabled={!isFormValid || loading}>
              {loading ? "Submitting..." : "Submit Rating"}
            </Button>
          </CardContent>
        </Card>
      </div>
      <FooterSection />
    </>
  );
};

export default RatingPage;
