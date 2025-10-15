import React from 'react';
import { Award, Users, Target, Heart, CheckCircle, Eye } from 'lucide-react';

const LoyalpassStory: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "A decade of EB-5 expertise — your path to U.S. investment immigration"
    },
    {
      icon: Target,
      title: "Proactive Guidance",
      description: "We monitor changes closely and guide you every step of the way"
    },
    {
      icon: Heart,
      title: "Client-First Focus",
      description: "Your benefits come first — we prioritize your interests"
    },
    {
      icon: Users,
      title: "Respectful Support",
      description: "We respect your immigration story and diligently support it"
    },
    {
      icon: CheckCircle,
      title: "Credible Track Record",
      description: "Trusted by 500+ EB-5 investors"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We honor honesty and transparency to our clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Loyalpass Story
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over a decade, Loyalpass has been more than just an EB-5 advisory firm. 
              We've been trusted partners in the most important journey of our clients' lives — 
              their path to American residency.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Built on the foundation of <strong>"where there's a will there's a way,"</strong> we've 
              navigated complex immigration landscapes, celebrated countless success stories, and 
              stood by our clients through every challenge and triumph.
            </p>
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-lg">
                To provide expert guidance, unwavering support, and transparent service that 
                transforms immigration dreams into American realities.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <value.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyalpassStory;