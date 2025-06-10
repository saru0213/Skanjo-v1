
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Upload, Zap, Brain, TrendingUp, Users, Code, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Advanced Background with Multiple Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'float 20s ease-in-out infinite'
            }}
          />
        </div>

        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/30 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-secondary/25 to-primary/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        
        {/* Mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/40 rotate-45 animate-spin" style={{ animationDuration: '10s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/50 rounded-full animate-bounce delay-500" />
        <div className="absolute bottom-32 left-20 w-3 h-12 bg-gradient-to-t from-primary/60 to-transparent animate-pulse" />
        <div className="absolute bottom-20 right-32 w-8 h-2 bg-secondary/40 animate-pulse delay-700" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Brain, Code, TrendingUp, Users, Briefcase, Target].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i * 0.5)}s`,
            }}
          >
            <Icon size={24 + (i * 4)} className="text-primary/60 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Data Visualization Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Bars */}
        <div className="absolute bottom-32 left-16 flex space-x-1 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-gradient-to-t from-primary/60 to-accent/40 animate-pulse"
              style={{
                height: `${20 + (i * 15)}px`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Circular Progress Indicators */}
        <div className="absolute top-32 right-20 opacity-25">
          <div className="relative w-16 h-16">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary/40"
                strokeDasharray="60 40"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Badge with Glow Effect */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-primary/30 animate-fade-in shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered Career Enhancement
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Revolutionary Main Heading with Advanced Effects */}
          <div className="relative mb-8">
            {/* Background Text Effect */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-5">
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-black">
                SKANJO
              </h1>
            </div>
            
            {/* Glowing Background Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
            </div>

            {/* Main Heading with Multiple Effects */}
            <h1 className="relative text-4xl sm:text-6xl lg:text-8xl font-black mb-6 animate-fade-in">
              <span className="block relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-shimmer bg-300% drop-shadow-2xl">
                  Transform Your
                </span>
                {/* Glowing underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-pulse" />
              </span>
              <br />
              <span className="block relative mt-4">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-300% filter drop-shadow-lg">
                  Career Journey
                </span>
                {/* Particle effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random()}s`,
                      }}
                    />
                  ))}
                </div>
              </span>
            </h1>

            {/* 3D Text Shadow Effect */}
            <div className="absolute inset-0 -z-10">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-primary/10 transform translate-x-2 translate-y-2">
                <span className="block">Transform Your</span>
                <br />
                <span className="block mt-4">Career Journey</span>
              </h1>
            </div>
          </div>

          {/* Enhanced Subtitle with Typing Effect */}
          <div className="relative mb-12">
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200 font-medium">
              <span className="bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
                AI-powered CV optimization, skill gap analysis, and personalized learning paths to land your dream job
              </span>
            </p>
            {/* Decorative elements */}
            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-primary/40 rounded-full animate-ping" />
            <div className="absolute -right-4 top-1/2 w-2 h-2 bg-accent/40 rounded-full animate-ping delay-500" />
          </div>

          {/* Enhanced Interactive Demo Preview */}
          <div className="mb-12 relative">
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl border-2 border-primary/20 p-8 max-w-2xl mx-auto animate-fade-in delay-300 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse delay-100" />
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-200" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-mono text-muted-foreground">SKANJO AI</span>
                </div>
              </div>
              
              {/* Enhanced Step Indicators */}
              <div className="space-y-4">
                <div className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 transform ${animationStep === 0 ? 'bg-gradient-to-r from-primary/20 to-accent/10 border-2 border-primary/30 scale-105 shadow-lg' : 'bg-muted/20 border border-muted/30'}`}>
                  <div className="relative">
                    <Upload className="h-6 w-6 text-primary" />
                    {animationStep === 0 && (
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold">Upload CV & Job Description</span>
                    <div className="w-full bg-muted/30 rounded-full h-1 mt-1">
                      <div className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ${animationStep === 0 ? 'w-full' : 'w-0'}`} />
                    </div>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 transform ${animationStep === 1 ? 'bg-gradient-to-r from-primary/20 to-accent/10 border-2 border-primary/30 scale-105 shadow-lg' : 'bg-muted/20 border border-muted/30'}`}>
                  <div className="relative">
                    <Target className="h-6 w-6 text-primary" />
                    {animationStep === 1 && (
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold">AI Analysis & Skill Gap Detection</span>
                    <div className="w-full bg-muted/30 rounded-full h-1 mt-1">
                      <div className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ${animationStep === 1 ? 'w-full' : 'w-0'}`} />
                    </div>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 transform ${animationStep === 2 ? 'bg-gradient-to-r from-primary/20 to-accent/10 border-2 border-primary/30 scale-105 shadow-lg' : 'bg-muted/20 border border-muted/30'}`}>
                  <div className="relative">
                    <Zap className="h-6 w-6 text-primary" />
                    {animationStep === 2 && (
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold">Personalized Learning & CV Optimization</span>
                    <div className="w-full bg-muted/30 rounded-full h-1 mt-1">
                      <div className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ${animationStep === 2 ? 'w-full' : 'w-0'}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with Advanced Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500 mb-8">
            <Button size="lg" asChild className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-110 transition-all duration-500 text-lg px-12 py-8 rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 border border-primary/20">
              <Link to="/analyze" className="flex items-center space-x-3 relative z-10">
                <span className="font-bold">Start Analysis</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group text-lg px-12 py-8 rounded-2xl border-2 border-primary/30 hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm">
              <span className="group-hover:text-primary transition-colors duration-300 font-semibold">Watch Demo</span>
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="mt-20 animate-fade-in delay-700">
            <p className="text-sm text-muted-foreground mb-8 font-medium">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company, i) => (
                <div key={company} className="relative group">
                  <div className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110 cursor-pointer">
                    {company}
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};