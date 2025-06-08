
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Upload, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-primary/20 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Career Enhancement</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Career Journey
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            AI-powered CV optimization, skill gap analysis, and personalized learning paths to land your dream job
          </p>

          {/* Interactive Demo Preview */}
          <div className="mb-12 relative">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 max-w-2xl mx-auto animate-fade-in delay-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground">SKANJO</span>
              </div>
              
              <div className="space-y-4">
                <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${animationStep === 0 ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'}`}>
                  <Upload className="h-5 w-5 text-primary" />
                  <span className="text-sm">Upload CV & Job Description</span>
                </div>
                <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${animationStep === 1 ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'}`}>
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-sm">AI Analysis & Skill Gap Detection</span>
                </div>
                <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${animationStep === 2 ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'}`}>
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm">Personalized Learning & CV Optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25">
              <Link to="/analyze" className="flex items-center space-x-2">
                <span>Start Analysis</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-accent/50 transition-all duration-300">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in delay-700">
            <p className="text-sm text-muted-foreground mb-6">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company) => (
                <div key={company} className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
