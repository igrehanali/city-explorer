"use client";
import Link from "next/link";
import { MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { SignOutConfirmDialog } from "@/components/ui/sign-out-confirm-dialog";

export default function HeaderSection() {
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-600/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-white">CityExplorer</span>
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full left-0 right-0 md:top-auto bg-purple-600/90 md:bg-transparent flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 space-x-0 md:space-x-6 p-4 md:p-0`}
        >
          <Link
            href="#features"
            className="text-white hover:text-white/80 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-white hover:text-white/80 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/help"
            className="text-white hover:text-white/80 transition-colors"
          >
            Help Center
          </Link>
          <Link
            href="#testimonials"
            className="text-white hover:text-white/80 transition-colors"
          >
            Testimonials
          </Link>
        </nav>
        {user ? (
          <>
            <div className="flex items-center space-x-4">
              <Link href="/profile">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  Profile
                </Button>
              </Link>
              <button
                onClick={() => setShowSignOutDialog(true)}
                className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Sign Out
              </button>
            </div>
            <SignOutConfirmDialog
              open={showSignOutDialog}
              onOpenChange={setShowSignOutDialog}
              onConfirm={handleSignOut}
            />
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-purple-600 hover:bg-white/90">
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
