
import { Target, Zap, TrendingUp, Download, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "CV-JD Matching",
    description: "Upload your CV and job description to get an instant compatibility score with detailed insights.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Smart CV Scoring",
    description: "Get your original CV score and download an AI-optimized version that beats ATS systems.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Skill Gap Analysis",
    description: "Identify missing skills and get personalized learning paths to bridge the gaps.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: BookOpen,
    title: "Project Suggestions",
    description: "Get curated project ideas to build missing skills with clear deliverables and timelines.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Award,
    title: "AI Feedback System",
    description: "Submit your projects and receive detailed AI mentoring with actionable improvements.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Export your learning plan as PDF and share your progress with shareable links.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/20">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Advance Your Career
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive tools to optimize your CV, identify skill gaps, and create personalized learning paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
