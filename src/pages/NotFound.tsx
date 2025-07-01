import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full animate-fade-in">
        <h1 className="text-8xl font-extrabold text-gray-800 mb-6 select-none">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="text-gray-500 mb-8">
          The URL{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            {location.pathname}
          </code>{" "}
          was not found.
        </p>
        <a
          href="/"
          className="inline-block bg-gray-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
          aria-label="Return to homepage"
        >
          Return to Home
        </a>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
