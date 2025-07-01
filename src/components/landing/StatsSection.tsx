import React from "react";
import { TrendingUp, Users, Award, Zap, type LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  iconBg: string;
  iconColor: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: "50K+",
    label: "Professionals Helped",
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Interview Success Rate",
    iconBg: "bg-gradient-to-br from-green-100 to-emerald-200",
    iconColor: "text-green-600",
  },
  {
    icon: Award,
    value: "95%",
    label: "CV Score Improvement",
    iconBg: "bg-gradient-to-br from-yellow-100 to-orange-200",
    iconColor: "text-orange-600",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "AI Assistant",
    iconBg: "bg-gradient-to-br from-purple-100 to-purple-200",
    iconColor: "text-purple-600",
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
     
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Our Impact in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Numbers
            </span>
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"></div>
          </div>
          <p className="text-gray-700 font-medium max-w-2xl mx-auto">
            Join thousands of professionals enhancing their careers with
            Skanjo's AI-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat: Stat, index: number) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl ${stat.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
