import React from "react";

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden animate-on-scroll">
    
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
      
        <div className="text-center mb-20">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-black leading-tight drop-shadow-2xl tracking-tight mb-8">
            You're Paying to{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Post Jobs
            </span>
            So Why Are{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Applicants Being Ignored ?
            </span>
           
          </h2>

        
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
         
          <div className="space-y-8">
           
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl font-bold">!</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Problem
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">
                    Recruiters inside Zoho Recruit often skip online applicants
                    because of overwhelming resume volume, limited time, and
                    lack of context. This means great candidates are overlooked
                    simply because their resumes don't match job keywords
                    exactly.
                  </p>
                </div>
              </div>
            </div>
   
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">×</span>
                </span>
                This leads to:
              </h3>

              <ul className="space-y-4">
                {[
                  { icon: "⏳", text: "3–4 week delays per role" },
                  { icon: "💸", text: "Wasted job board spend" },
                  { icon: "🚫", text: "Missed top talent" },
                  { icon: "😠", text: "Hiring manager frustration" },
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
                    <div className="w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

         
          <div className="relative flex justify-center">
            <div className="relative">
           
              <div
                className="rounded-3xl p-14 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-default border-4 border-white relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #fecaca 0%, #f87171 100%)",
                }}
              >
               
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-700"></div>
                </div>

                
                <div className="relative mb-6">
                  <div className="text-8xl mb-2 drop-shadow-lg transform hover:scale-110 transition-transform duration-300">
                    📊
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow-sm">
                  Lost Opportunities
                </h3>
                <p className="text-lg font-medium text-white/90 mb-6">
                  Thousands of CVs ignored daily
                </p>

                {/* Added stats section */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <div className="text-xl font-bold text-white">73%</div>
                    <div className="text-xs text-white/90">Skipped</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <div className="text-xl font-bold text-white">3.2k</div>
                    <div className="text-xs text-white/90">Daily</div>
                  </div>
                </div>
              </div>

           
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-accent-200 rounded-full opacity-40 animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-600 rounded-full opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
