import React from "react";

const SolutionSection: React.FC = () => {
  return (
    <section
      id="solution"
      className="py-20 bg-white animate-on-scroll relative overflow-hidden"
    >
     
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
       
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-black mb-4 text-center tracking-tight leading-tight">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Skanjo
            </span>
            : The CV Intelligence Engine for Zoho Recruit
          </h2>

       
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
          <div className="relative flex justify-center">
            <div className="relative">
             
              <div
                className="rounded-3xl p-14 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-default border-4 border-white relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
                }}
              >
              
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-700"></div>
                </div>

              
                <div className="relative mb-5">
                  <div className="text-8xl mb-2 drop-shadow-lg transform hover:scale-110 transition-transform duration-300">
                    🤖
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-emerald-900 text-xs font-bold">
                      AI
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-semibold mb-3 text-white drop-shadow-sm">
                  AI-Powered Intelligence
                </h3>
                <p className="text-lg font-medium text-white/90 mb-6">
                  Chaos turned into clarity
                </p>

             
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <div className="text-xl font-bold text-white">20+</div>
                    <div className="text-xs text-white/80">AI Checks</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <div className="text-xl font-bold text-white">100x</div>
                    <div className="text-xs text-white/80">Faster</div>
                  </div>
                </div>
              </div>

             
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-green-200 rounded-full opacity-40 animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-emerald-600 rounded-full opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>

        
          <div className="space-y-8">
         
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl font-bold">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Solution
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">
                    Skanjo integrates seamlessly with Zoho Recruit to turn
                    hiring chaos into clarity:
                  </p>
                </div>
              </div>
            </div>

          
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </span>
                Key Features:
              </h3>

              <ul className="space-y-4 list-none">
                {[
                  { text: "Screens thousands of CVs in minutes", icon: "⚡" },
                  {
                    text: "Ranks them using 20+ intelligent contextual checks",
                    icon: "🎯",
                  },
                  {
                    text: "Explains WHY each candidate is a fit or not",
                    icon: "💡",
                  },
                  { text: "Generates custom interview questions", icon: "❓" },
                  {
                    text: "All from inside Zoho Recruit—no switching tabs",
                    icon: "🔗",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="group flex items-center gap-4 bg-gray-50 rounded-xl p-4 shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-gray-100"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-gray-800 text-lg font-medium flex-1">
                      {item.text}
                    </span>
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center md:text-left">
              <a
                href="#demo"
                className="group inline-flex items-center gap-3 bg-black text-white font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
                aria-label="See how Skanjo works"
              >
              
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="relative z-10">See How It Works</span>
                <span className="relative z-10 text-xl group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>

             
              <p className="text-gray-600 text-sm mt-3 font-medium">
                Seamless integration • No setup required • Instant results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
