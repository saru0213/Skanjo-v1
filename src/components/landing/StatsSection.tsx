
import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Professionals Helped",
    color: "text-blue-500",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Interview Success Rate",
    color: "text-green-500",
  },
  {
    icon: Award,
    value: "95%",
    label: "CV Score Improvement",
    color: "text-purple-500",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "AI Assistant",
    color: "text-orange-500",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 mb-4 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
