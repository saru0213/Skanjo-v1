import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Williams",
    role: "HR Manager at TechCorp",
    feedback:
      "Skanjo completely transformed our hiring process. Its AI-powered screening saves us hours each week and ensures we shortlist only the best candidates.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    feedback:
      "Using Skanjo improved my CV score by 90%. I landed my dream job within a month thanks to their actionable suggestions.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Chen",
    role: "Recruitment Lead at InnovateX",
    feedback:
      "We trust Skanjo for its accuracy and efficiency. The platform is intuitive and integrates seamlessly into our workflow.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
   
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Users Say
            </span>
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"></div>
          </div>
          <p className="text-gray-700 font-medium max-w-2xl mx-auto">
            Hear from professionals and recruiters who have transformed their
            hiring and career journey with Skanjo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-br from-primary-100 to-accent-200 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium mb-4">
                {testimonial.role}
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i: number) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
