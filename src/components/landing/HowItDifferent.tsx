import React, { useState } from "react";
import { Check, X, Star, Zap, Target } from "lucide-react";

const ComparisonSection: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const comparisonData = [
    {
      feature: "Intelligent Ranking",
      skanjo: true,
      zoho: false,
      manual: false,
      description: "AI-powered candidate scoring and ranking",
    },
    {
      feature: "Contextual Fit (role + industry + company)",
      skanjo: true,
      zoho: false,
      manual: false,
      description: "Matches candidates based on comprehensive context",
    },
    {
      feature: "Reasons Behind Scores",
      skanjo: true,
      zoho: false,
      manual: true,
      description: "Transparent scoring with detailed explanations",
    },
    {
      feature: "Auto-generated Interview Questions",
      skanjo: true,
      zoho: false,
      manual: false,
      description: "Personalized questions based on candidate profile",
    },
    {
      feature: "Built for Zoho Recruit",
      skanjo: true,
      zoho: true,
      manual: false,
      description: "Native integration with Zoho ecosystem",
    },
    {
      feature: "Handles Thousands Seamlessly",
      skanjo: true,
      zoho: true,
      manual: false,
      description: "Scale to process large volumes of applications",
    },
    {
      feature: "ROI on Job Board Spend",
      skanjo: true,
      zoho: false,
      manual: false,
      description: "Maximize return on recruitment investments",
    },
  ];

  const StatusIcon: React.FC<{ status: boolean; isHighlighted?: boolean }> = ({
    status,
    isHighlighted = false,
  }) => {
    if (status) {
      return (
        <div
          className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            isHighlighted
              ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg scale-110"
              : "bg-emerald-100 text-emerald-600"
          }`}
        >
          <Check className="w-5 h-5" />
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500">
          <X className="w-5 h-5" />
        </div>
      );
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
     
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 select-none">
            <Star className="w-4 h-4" />
            Feature Comparison
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">
            How is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Skanjo
            </span>{" "}
            different?
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            See why leading recruiters choose Skanjo over traditional methods
            and basic tools
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-x-auto">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 sm:px-8 py-6 min-w-[700px]">
            <div className="grid grid-cols-4 gap-6 items-center text-white">
              <div className="font-semibold text-lg whitespace-nowrap">
                Features
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 px-4 py-2 rounded-xl font-bold whitespace-nowrap">
                  <Zap className="w-5 h-5" />
                  Skanjo
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gray-600 px-4 py-2 rounded-xl font-medium whitespace-nowrap">
                  Zoho Default
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gray-500 px-4 py-2 rounded-xl font-medium whitespace-nowrap">
                  Manual
                </div>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200 min-w-[700px]">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-6 items-center px-4 sm:px-8 py-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 group ${
                  hoveredRow === index
                    ? "bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg"
                    : ""
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <div className="space-y-1">
                  <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {row.feature}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    {row.description}
                  </div>
                </div>

                <div className="flex justify-center">
                  <StatusIcon
                    status={row.skanjo}
                    isHighlighted={hoveredRow === index}
                  />
                </div>

                <div className="flex justify-center">
                  <StatusIcon status={row.zoho} />
                </div>

                <div className="flex justify-center">
                  <StatusIcon status={row.manual} />
                </div>
              </div>
            ))}
          </div>


          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 sm:px-8 py-8 rounded-b-3xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">
                  Ready to transform your recruitment?
                </h3>
                <p className="text-gray-300 max-w-sm mx-auto md:mx-0">
                  Join hundreds of recruiters who've made the switch
                </p>
              </div>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg mx-auto md:mx-0">
                <a href="#trial" className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Start Free Trial
                </a>
              </button>
            </div>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center bg-white shadow rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-gray-700 mb-2">95%</div>
            <div className="text-gray-700">Time Saved</div>
          </div>
          <div className="text-center bg-white shadow rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">3x</div>
            <div className="text-gray-700">Faster Hiring</div>
          </div>
          <div className="text-center bg-white shadow rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-accent-600 mb-2">200%</div>
            <div className="text-gray-700">Better ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
