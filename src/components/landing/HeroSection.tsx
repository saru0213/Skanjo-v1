import React from "react";
import {  Target,  Brain } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-0"
    >
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Target className="absolute bottom-20 right-20 w-12 h-12 text-primary-300 animate-float-delayed" />

        <Brain className="absolute bottom-1/4 left-1/4 w-10 h-10 text-accent-200 animate-float" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-7xl">
        <div className="mb-4 sm:mb-6 px-2 sm:px-0">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight drop-shadow-2xl animate-fade-in-down tracking-tight">
            Stop Ignoring Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-primary-300 to-foreground">
              Best Candidates
            </span>
          </h1>
        </div>

        <p className="text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 sm:mb-12 drop-shadow-lg animate-fade-in-up font-light leading-relaxed px-4 sm:px-6 lg:px-0">
          AI-powered CV screening for{" "}
          <span className="font-semibold text-primary">Zoho Recruit</span> that
          helps recruiters rescue online applicants from being overlooked.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-fade-in-up-delayed px-4 sm:px-0">
        
          <a
            href="#trial"
            className="group relative bg-gradient-to-r from-primary-600 to-accent-600 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-primary/25 transform hover:scale-105 sm:hover:scale-110 transition-all duration-500 w-full sm:w-auto max-w-xs sm:max-w-none overflow-hidden"
          >
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
          </a>

        
          <a
            href="#HowItWorks"
            className="group relative bg-white text-primary font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl border-2 border-primary-400 hover:bg-primary-50 transform hover:scale-105 sm:hover:scale-110 transition-all duration-500 w-full sm:w-auto max-w-xs sm:max-w-none overflow-hidden"
          >
            <span className="relative z-10">See How It Works</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-100 to-primary-100 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: -2s;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-fade-in-down {
          animation: fadeInDown 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animate-fade-in-up-delayed {
          animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};
