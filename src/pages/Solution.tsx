import SolutionSection from "@/components/landing/Solution";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import React from "react";

const SolutionPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow mt-16">
        {" "}
      
        <SolutionSection />
      </main>

      <Footer />
    </div>
  );
};

export default SolutionPage;
