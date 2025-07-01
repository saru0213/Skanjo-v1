import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Choose the Plan That Fits You Best
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Flexible pricing options to empower your career growth with SKANJO’s
            AI-powered tools.
          </p>
          <Button
            size="lg"
            className="bg-gray-600 hover:bg-gray-700 text-white text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300 inline-flex items-center justify-center mx-auto space-x-2"
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
