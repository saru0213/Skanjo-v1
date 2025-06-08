
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary)/0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-primary/30">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Ready to Transform?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Start Your Career
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Transformation Today
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their careers with SkillForge AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 text-lg px-10 py-7 rounded-xl shadow-lg shadow-primary/25">
              <Link to="/analyze" className="flex items-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-xl border-2 hover:bg-accent/50 transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 1-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
