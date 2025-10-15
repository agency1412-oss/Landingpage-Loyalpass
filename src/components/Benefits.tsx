import React from 'react';
import { Zap, Users, TrendingUp as Trending, ArrowRight } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Fast-Track to U.S. Residency",
      description: "Bypass traditional immigration queues with direct path to permanent residency through strategic investment.",
      features: ["Permanent resident status", "No sponsor required", "Direct application process"]
    },
    {
      icon: Users,
      title: "Inclusive Family Benefits",
      description: "Secure residency not just for yourself, but for your entire family including spouse and unmarried children under 21.",
      features: ["Spouse inclusion", "Children under 21", "Path to citizenship"]
    },
    {
      icon: Trending,
      title: "Boundless Opportunities",
      description: "Access world-class education, healthcare, business opportunities, and the freedom to live anywhere in the United States.",
      features: ["Educational access", "Healthcare benefits", "Business freedom"]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why EB-5 is Your Gateway to the American Dream
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The EB-5 program offers unparalleled advantages for investors seeking U.S. residency. 
            With the 2026 deadline approaching, now is the time to act.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-colors duration-300">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mb-6 group-hover:bg-blue-700 transition-colors">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              
              <ul className="space-y-2 mb-6">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;