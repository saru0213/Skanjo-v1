import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Is it safe to share candidate information with Skanjo?",
      answer:
        "Yes. Skanjo does not store or retain any candidate information. The tool performs real-time analysis on the CVs you upload and returns the screening results immediately. All data stays within your control, and the results are downloadable for internal use.",
    },
    {
      question: "Do I need technical support to install it?",
      answer:
        "No. Skanjo is a native Zoho Recruit plugin and can be installed in minutes.",
    },
    {
      question: "Does it work for all industries?",
      answer:
        "Yes. Skanjo's algorithm adapts across tech, sales, operations, and more.",
    },
  ];

  const toggleFaq = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-100 to-accent-200 text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Questions
            </span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq: FAQ, index: number) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left text-lg font-semibold text-gray-900 flex justify-between items-center"
              >
                {faq.question}
                <span className="text-2xl font-bold text-primary-600 ml-4 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

     
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};