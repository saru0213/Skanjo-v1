import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section id="trial" className="py-20 px-4 text-center bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 drop-shadow-sm">
          Ready to Turn CV Clutter Into Quality Candidates?
        </h2>
        <p className="text-lg mb-8 font-medium text-gray-700 drop-shadow-sm">
          Join hundreds of recruiters who trust{" "}
          <span className="font-semibold text-primary-600">Skanjo</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link
            to="/try"
            className="group relative bg-gradient-to-r from-primary-600 to-accent-600 font-bold text-lg sm:text-xl px-8 py-4 rounded-full shadow-2xl hover:shadow-primary/40 transform hover:scale-105 sm:hover:scale-110 transition-all duration-500 w-full sm:w-auto max-w-xs sm:max-w-none overflow-hidden text-primary-600"
          >
            <span className="relative z-10">Try Skanjo Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
          </Link>

          <Link
            to="/demo"
            className="group relative bg-white text-primary-600 font-bold text-lg sm:text-xl px-8 py-4 rounded-full shadow-xl border-2 border-primary-400 hover:bg-primary-50 transform hover:scale-105 sm:hover:scale-110 transition-all duration-500 w-full sm:w-auto max-w-xs sm:max-w-none overflow-hidden"
          >
            <span className="relative z-10">Schedule a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-100 to-primary-100 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
          </Link>
        </div>

        <p className="mt-4 opacity-80 text-sm drop-shadow-sm text-gray-600">
          No credit card required. Works directly inside Zoho Recruit.
        </p>
      </div>
    </section>
  );
};
