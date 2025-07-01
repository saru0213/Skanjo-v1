import React from "react";

interface FeatureData {
  title: string;
  description: string;
  image: string;
}

const featuresData: FeatureData[] = [
  {
    title: "Relevance over Keywords",
    description:
      "Skanjo evaluates context—not just skills—using role, domain, and company-specific intelligence.",
    image: "/images/relevance.jpeg",
  },
  {
    title: "Speed That Matters",
    description:
      'Shortlists 1000+ CVs in minutes. No more "will screen later" fatigue.',
    image: "/images/speed.jpeg",
  },
  {
    title: "Insight That Helps Close",
    description:
      'Understand the "why" behind every match—not just the percentage.',
    image: "/images/insight.jpeg",
  },
  {
    title: "Native Integration",
    description:
      "Works 100% inside Zoho Recruit—no toggling, exporting, or manual syncing.",
    image: "/images/integration.jpeg",
  },
  {
    title: "Human in Control",
    description:
      "Skanjo gives clarity, not conclusions. Recruiters remain the decision-makers.",
    image: "/images/human.jpeg",
  },
];

const WhySkanjo: React.FC = () => {
  return (
    <section
      id="why-skanjo"
      className="py-20 bg-white animate-on-scroll relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
      
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-3xl sm:text-4xl md:text-6xl font-black mb-2 tracking-tight">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Skanjo
            </span>
            ?
          </h2>
          <p className="text-lg sm:text-xl font-medium text-gray-600">
            A tool for Recruiters, by Recruiters
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"></div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="space-y-12">
          {featuresData.map(({ title, description, image }, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition`}
            >
              <div className="md:w-1/3 h-64">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <p className="text-sm font-medium text-gray-800 uppercase mb-2">
                  Feature
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-gray-700 mb-6">{description}</p>
                <button className="w-max px-5 py-3 bg-gray-800 text-white rounded-lg font-medium hover:opacity-90 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySkanjo;
