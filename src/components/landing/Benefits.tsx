import React from "react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      icon: "💰",
      title: "Better ROI",
      description:
        "Get better ROI on money spent searching for candidates - Job boards and ads cost money—but most resumes never get read",
    },
    {
      icon: "🎯",
      title: "Zero Missed Opportunities",
      description: "Every ignored CV is a missed opportunity",
    },
    {
      icon: "⚡",
      title: "Efficient Recruiting",
      description:
        "Manual shortlisting wastes recruiter time and frustrates managers",
    },
    {
      icon: "🏆",
      title: "Win Top Talent",
      description: "Slow hiring = losing good candidates to competitors",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
     
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight text-center">
          What can{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
            Skanjo
          </span>{" "}
          help you achieve
        </h2>

        <div className="flex justify-center mt-4 mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit: Benefit, index: number) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
