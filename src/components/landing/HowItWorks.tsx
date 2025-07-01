import React, { useState, useEffect } from "react";
import { Upload, Target, Zap, Brain, type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  borderColor: string;
}

const HowItWorks: React.FC = () => {
  const [animationStep, setAnimationStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps: Step[] = [
    {
      icon: Upload,
      title: "Upload CV & Job Description",
      desc: "Simply upload your current CV and the job description you're targeting",
      iconBg: "bg-gradient-to-r from-blue-500 to-blue-600",
      iconColor: "text-white",
      accentColor: "bg-blue-500/10 border-blue-500/30",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Target,
      title: "AI Analysis & Skill Gap Detection",
      desc: "Our AI analyzes compatibility and identifies missing skills instantly",
      iconBg: "bg-gradient-to-r from-green-500 to-emerald-600",
      iconColor: "text-white",
      accentColor: "bg-green-500/10 border-green-500/30",
      borderColor: "border-green-500/20",
    },
    {
      icon: Zap,
      title: "Personalized Learning & CV Optimization",
      desc: "Get your optimized CV and personalized learning path to success",
      iconBg: "bg-gradient-to-r from-orange-500 to-orange-600",
      iconColor: "text-white",
      accentColor: "bg-orange-500/10 border-orange-500/30",
      borderColor: "border-orange-500/20",
    },
  ];

  return (
    <section id="HowItWorks" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/20">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Simple Process
            </span>
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black leading-tight drop-shadow-2xl tracking-tight mb-8">
            How SKANJO{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400">
              Works for You
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Our AI-powered platform guides you through a simple 3-step process
            to transform your career prospects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-6 rounded-xl transition-all duration-500 transform ${
                    animationStep === index
                      ? `${step.accentColor} scale-105 shadow-lg`
                      : "bg-background/50 backdrop-blur-sm border border-border/50"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        animationStep === index
                          ? step.iconBg
                          : "bg-foreground/20"
                      }`}
                    >
                      <step.icon
                        className={`h-6 w-6 ${
                          animationStep === index
                            ? step.iconColor
                            : "text-white"
                        }`}
                      />
                    </div>
                    {animationStep === index && (
                      <div
                        className={`absolute inset-0 ${step.iconBg} opacity-30 rounded-xl animate-ping`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-3">
                      {step.desc}
                    </p>
                    <div className="w-full bg-border/50 rounded-full h-2">
                      <div
                        className={`h-2 ${
                          step.iconBg
                        } rounded-full transition-all duration-1000 ${
                          animationStep === index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Visual Representation */}
            <div className="relative">
              <div className="bg-background/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-border/50">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-purple-500/25">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    AI-Powered Analysis
                  </h3>
                  <p className="text-foreground/70">
                    Advanced algorithms working for your success.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <span className="text-sm font-medium text-blue-600">
                      CV-Job Match Score
                    </span>
                    <span className="text-lg font-bold text-blue-600">94%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="text-sm font-medium text-green-600">
                      Skills Identified
                    </span>
                    <span className="text-lg font-bold text-green-600">23</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <span className="text-sm font-medium text-orange-600">
                      Learning Projects
                    </span>
                    <span className="text-lg font-bold text-orange-600">5</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/40 rounded-full animate-bounce opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
