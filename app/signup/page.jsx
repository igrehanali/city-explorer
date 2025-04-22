"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmPassword: "",
    terms: false,
  });

  const { signup, signInWithGoogle } = useAuth();
  const router = useRouter();

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!formData.terms) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    if (calculatePasswordStrength(password) < 50) {
      toast.error("Please choose a stronger password");
      return;
    }

    setIsLoading(true);
    try {
      await signup(formData.email, password, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: `${formData.firstName} ${formData.lastName}`,
      });
      toast.success("Account created successfully! Redirecting to profile...");
      router.push("/profile");
    } catch (error) {
      toast.error(error.message, { id: loadingToast });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      toast.success(
        "Account created successfully with Google! Redirecting to profile..."
      );
      router.push("/profile");
    } catch (error) {
      toast.error(error.message, { id: loadingToast });
    }
  };

  const passwordStrength = calculatePasswordStrength(password);
  const getPasswordStrengthText = () => {
    if (passwordStrength <= 25) return "Weak";
    if (passwordStrength <= 50) return "Fair";
    if (passwordStrength <= 75) return "Good";
    return "Strong";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md" data-aos="fade-up">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30">
          <div className="flex flex-col items-center space-y-2 mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">CityExplorer</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Create an Account</h1>
            <p className="text-white/80 text-center">
              Join our community of explorers and discover amazing places.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-white">
                  First Name
                </Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white transition-colors duration-200"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-white">
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white transition-colors duration-200"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white transition-colors duration-200"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white transition-colors duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {password && (
                <div className="mt-2 space-y-1">
                  <Progress
                    value={passwordStrength}
                    className="h-1 bg-white/20"
                  />
                  <p className="text-sm text-white/80">
                    Password Strength: {getPasswordStrengthText()}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-white">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white transition-colors duration-200"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-purple-600 hover:bg-white/90 transition-colors duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-white/80 bg-purple-600">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="mt-8 text-center">
            <p className="text-white/80">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-white font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
