import React from "react";

import HeaderSection from "@/components/landing/HeaderSection";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PopularDestinationsSection from "@/components/landing/PopularDestinationsSection";
import TravelTipsSection from "@/components/landing/TravelTipsSection";
import FooterSection from "@/components/landing/FooterSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700">
      <main>
        <HeaderSection />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PopularDestinationsSection />
        <TravelTipsSection />
      </main>
      <FooterSection />
    </div>
  );
}
