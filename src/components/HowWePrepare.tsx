import React from 'react';
import { FileText, Search, Shield, Users, CheckCircle2, Clock } from 'lucide-react';

const HowWePrepare: React.FC = () => {
  const preparations = [
    {
      icon: Search,
      title: "Comprehensive Due Diligence",
      description: "We conduct thorough project analysis, developer background checks, and market research to identify the safest investment opportunities.",
      features: ["Financial analysis", "Market research", "Legal compliance review", "Risk assessment"]
    },
    {
      icon: FileText,
      title: "Meticulous Documentation",
      description: "Our team prepares bulletproof documentation packages that exceed USCIS standards, minimizing the risk of RFEs or denials.",
      features: ["Source of funds preparation", "Business plan development", "Legal document review", "Translation services"]
    },
    {
      icon: Shield,
      title: "Risk Mitigation Strategies",
      description: "We identify potential challenges before they become problems, implementing protective measures throughout your EB-5 journey.",
      features: ["Compliance monitoring", "Project oversight", "Legal protection", "Contingency planning"]
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Your dedicated team of attorneys, financial analysts, and immigration specialists work exclusively on your case from start to finish.",
      features: ["Personal case manager", "Attorney oversight", "Regular updates", "24/7 support availability"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How Exactly We Prepare You for EB-5 Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success in EB-5 isn't accidental. It's the result of meticulous preparation, 
            expert guidance, and unwavering attention to detail at every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {preparations.map((prep, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-colors group">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 rounded-lg p-3 group-hover:bg-blue-700 transition-colors">
                  <prep.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{prep.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{prep.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {prep.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Preparation Promise</h3>
              <p className="text-lg opacity-90 mb-6">
                We don't just handle your EB-5 application — we architect your success. 
                Every document, every strategy, every decision is made with your approval and peace of mind in mind.
              </p>
              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6" />
                <span className="text-lg">Average case preparation: 8-12 weeks</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">What Sets Us Apart:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Personalized strategy for each client
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Direct attorney involvement
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Transparent progress tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  No surprises, no hidden fees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWePrepare;