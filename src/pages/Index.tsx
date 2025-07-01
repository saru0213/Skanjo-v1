import BenefitsSection from "@/components/landing/Benefits";
import ComparisonSection from "@/components/landing/HowItDifferent";
import { CTASection } from "@/components/landing/CTASection";
import { FAQSection } from "@/components/landing/FAQsection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HeroSection } from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ProblemSection from "@/components/landing/Problem";
import SolutionSection from "@/components/landing/Solution";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialSection } from "@/components/landing/Testimonials";
import WhySkanjo from "@/components/landing/WhySkanjo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";



const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      <HeroSection />
      <ProblemSection/>
      <SolutionSection/>
      <WhySkanjo/>
      <HowItWorks/>
      <FeaturesSection/>
      <BenefitsSection/>
      <StatsSection />
      <ComparisonSection/>
     <TestimonialSection/>
      <FAQSection/>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
