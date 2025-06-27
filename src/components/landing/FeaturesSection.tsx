import { Target, Zap, TrendingUp, Download, BookOpen, Award, Brain, Code, Sparkles } from "lucide-react";
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
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Features Showcase */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                See SKANJO in Action
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our AI-powered platform transforms your career journey
            </p>
          </div>

          {/* Compact Interactive Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Feature Demo 1 - CV Analysis */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-xl border border-primary/20 p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Feature Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">AI CV ANALYSIS</h3>
                    <p className="text-xs text-muted-foreground">Smart Resume Optimization</p>
                  </div>
                </div>

                {/* Compact Mock Interface */}
                <div className="bg-muted/20 rounded-lg p-3 border border-muted/30">
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full w-4/5" />
                    <div className="h-1.5 bg-muted/60 rounded-full w-3/4" />
                    <div className="h-1.5 bg-muted/40 rounded-full w-2/3" />
                    <div className="mt-3 p-2 bg-primary/10 rounded-md border border-primary/20">
                      <div className="text-xs text-primary font-semibold mb-1">KEY SKILLS</div>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-primary/20 text-primary text-xs rounded-full">React</span>
                        <span className="px-1.5 py-0.5 bg-accent/20 text-accent text-xs rounded-full">Python</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compact Callout */}
                <div className="absolute -top-2 -right-2 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    90% Match
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Demo 2 - Skills Gap */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-xl border border-primary/20 p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Feature Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-accent">SKILL GAPS</h3>
                    <p className="text-xs text-muted-foreground">Missing Skills</p>
                  </div>
                </div>

                {/* Compact Skills Interface */}
                <div className="bg-muted/20 rounded-lg p-3 border border-muted/30">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">JavaScript</span>
                      <span className="text-xs text-green-500">95%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-1.5 rounded-full w-[95%]" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Docker</span>
                      <span className="text-xs text-yellow-500">60%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-1.5 rounded-full w-[60%]" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Kubernetes</span>
                      <span className="text-xs text-red-500">25%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-red-500 to-red-400 h-1.5 rounded-full w-[25%]" />
                    </div>
                  </div>
                </div>

                {/* Highlight Element */}
                <div className="absolute -bottom-3 -left-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 border-2 border-accent rounded-full bg-accent/10 flex items-center justify-center animate-pulse">
                    <TrendingUp className="h-4 w-4 text-accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Demo 3 - Learning Path */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-xl border border-primary/20 p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Feature Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <Code className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-secondary">LEARNING PATH</h3>
                    <p className="text-xs text-muted-foreground">Roadmap</p>
                  </div>
                </div>

                {/* Compact Learning Interface */}
                <div className="bg-muted/20 rounded-lg p-3 border border-muted/30">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      <span className="text-xs line-through text-muted-foreground">Docker Fundamentals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <span className="text-xs font-medium">Kubernetes Basics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-muted/50 rounded-full" />
                      <span className="text-xs text-muted-foreground">Advanced Orchestration</span>
                    </div>
                    <div className="mt-2 p-2 bg-secondary/10 rounded-md border border-secondary/20">
                      <div className="text-xs text-secondary font-semibold">NEXT: Kubernetes cert</div>
                      <div className="text-xs text-muted-foreground">Est. 2 weeks</div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute -top-3 -right-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-secondary to-primary text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                    85%
                  </div>
                </div>
              </div>
            </div>
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
