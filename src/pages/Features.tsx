
import { CheckCircle, Target, Zap, TrendingUp, Download, BookOpen, Award, ArrowRight, Star, Users, Brain, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "CV-JD Matching",
    description: "Upload your CV and job description to get an instant compatibility score with detailed insights.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    features: ["95% accuracy matching", "Real-time scoring", "ATS compatibility check", "Keyword optimization"]
  },
  {
    icon: TrendingUp,
    title: "Smart CV Scoring",
    description: "Get your original CV score and download an AI-optimized version that beats ATS systems.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    features: ["Professional scoring", "Industry benchmarking", "Format optimization", "Content enhancement"]
  },
  {
    icon: Zap,
    title: "Skill Gap Analysis",
    description: "Identify missing skills and get personalized learning paths to bridge the gaps.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    features: ["Visual skill mapping", "Priority ranking", "Learning estimates", "Progress tracking"]
  },
  {
    icon: BookOpen,
    title: "Project Suggestions",
    description: "Get curated project ideas to build missing skills with clear deliverables and timelines.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    features: ["Custom projects", "Step-by-step guides", "Resource links", "Difficulty levels"]
  },
  {
    icon: Award,
    title: "AI Feedback System",
    description: "Submit your projects and receive detailed AI mentoring with actionable improvements.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    features: ["Expert-level feedback", "Code review", "Best practices", "Improvement roadmap"]
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Export your learning plan as PDF and share your progress with shareable links.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    features: ["PDF reports", "Shareable links", "Progress tracking", "Portfolio builder"]
  }
];

const benefits = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Leveraging advanced machine learning to provide personalized career insights"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure. We never share your personal information"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands of professionals who have transformed their careers with SKANJO"
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-primary/20">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Complete Feature Suite</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Everything You Need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Accelerate Your Career
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              SKANJO provides a comprehensive suite of AI-powered tools to optimize your CV, identify skill gaps, and create personalized learning paths.
            </p>
            
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25">
              <Link to="/analyze" className="flex items-center space-x-2">
                <span>Try All Features Free</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Why Choose SKANJO?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built by career experts and powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to Transform Your Career?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have already accelerated their careers with SKANJO
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25">
                <Link to="/analyze" className="flex items-center space-x-2">
                  <span>Start Free Analysis</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-accent/50 transition-all duration-300">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
