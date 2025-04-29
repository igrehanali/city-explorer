"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function HelpCenterPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [helpData, setHelpData] = useState({
    question: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHelpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const helpRef = await addDoc(collection(db, "helpRequests"), {
        userId: user?.uid || "anonymous",
        userEmail: user?.email || "anonymous",
        ...helpData,
        createdAt: new Date(),
        status: "pending",
      });

      toast.success("Your help request has been submitted successfully!");
      setHelpData({
        question: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting help request:", error);
      toast.error("Failed to submit help request. Please try again.");
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
              Help Center
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600">
              Have a question or need assistance? Fill out the form below and
              our team will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="question">Question</Label>
                  <Input
                    type="text"
                    id="question"
                    name="question"
                    value={helpData.question}
                    onChange={handleInputChange}
                    placeholder="What's your question?"
                    required
                    className="border-gray-200 focus:border-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={helpData.description}
                    onChange={handleInputChange}
                    placeholder="Please provide more details about your question or issue..."
                    required
                    className="min-h-[150px] border-gray-200 focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit Help Request"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
