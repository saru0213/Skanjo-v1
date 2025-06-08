
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
