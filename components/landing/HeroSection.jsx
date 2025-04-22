"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { SignOutConfirmDialog } from "@/components/ui/sign-out-confirm-dialog";
import { useState } from "react";

export default function HeroSection() {
  const { user, signout } = useAuth();
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);

  const handleSignOut = async () => {
    try {
      await signout();
      setShowSignOutDialog(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <section
      className="container mx-auto px-4 py-20 md:py-32 lg:py-52 flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
      >
        Discover Amazing Places in Your City
      </h1>
      <p className="text-xl text-white/90 max-w-2xl mb-10">
        Explore the hidden gems, popular spots, and everything in between with
        our comprehensive city guide.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/locations" className="w-full sm:w-auto">
          <button className="w-full px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Explore Locations
          </button>
        </Link>
        {user ? (
          <>
            <button
              onClick={() => setShowSignOutDialog(true)}
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-purple-600 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Sign Out
            </button>
            <SignOutConfirmDialog
              open={showSignOutDialog}
              onOpenChange={setShowSignOutDialog}
              onConfirm={handleSignOut}
            />
          </>
        ) : (
          <Link href="/signup" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 text-lg font-semibold text-purple-600 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Create Account
            </button>
          </Link>
        )}
      </div>

      <div
        className="mt-16 relative w-full max-w-4xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl blur-[2px] z-0"></div>
        <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl z-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <Image
                src="/park.jpg"
                width={500}
                height={300}
                alt="City view"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-white">Central Park</h3>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-1" />
                <span>New York City</span>
                <div className="ml-auto flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <Image
                src="/beach.jpg"
                width={500}
                height={300}
                alt="Beach view"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-white">Venice Beach</h3>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Los Angeles</span>
                <div className="ml-auto flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>4.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
