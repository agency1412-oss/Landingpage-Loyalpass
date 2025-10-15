import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const InvestorSteps: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free consultation to assess your eligibility and discuss your immigration goals.",
      timeline: "Day 1"
    },
    {
      step: "02", 
      title: "Source of Funds Documentation",
      description: "Gather and prepare comprehensive documentation proving the lawful source of your investment capital.",
      timeline: "Weeks 1-4"
    },
    {
      step: "03",
      title: "Project Selection",
      description: "Choose from our vetted portfolio of qualifying EB-5 projects based on your risk tolerance and preferences.",
      timeline: "Weeks 2-6"
    },
    {
      step: "04",
      title: "Investment & Subscription",
      description: "Complete investment documentation and transfer funds to the chosen project's escrow account.",
      timeline: "Weeks 6-8"
    },
    {
      step: "05",
      title: "I-526E Petition Preparation",
      description: "Comprehensive preparation and filing of your I-526E immigrant investor petition with USCIS.",
      timeline: "Weeks 8-12"
    },
    {
      step: "06",
      title: "USCIS Review & Approval",
      description: "USCIS reviews your petition. Upon approval, move to consular processing or adjustment of status.",
      timeline: "12-18 months"
    },
    {
      step: "07",
      title: "Conditional Green Card",
      description: "Receive conditional permanent resident status valid for two years.",
      timeline: "Month 18-24"
    },
    {
      step: "08",
      title: "I-829 Removal of Conditions",
      description: "File I-829 petition to remove conditions and obtain permanent green card status.",
      timeline: "Month 22-24"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your EB-5 Journey: Step by Step
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures every detail is handled correctly, from initial consultation 
            to permanent green card approval.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((stepItem, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-600">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {stepItem.step}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{stepItem.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {stepItem.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{stepItem.description}</p>
                  </div>
                  
                  <div className="text-green-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Total Timeline: 2-3 Years to Permanent Residency</h3>
            <p className="text-lg opacity-90 mb-6">
              With proper preparation and expert guidance, most clients achieve permanent resident status within 24-36 months.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Timeline Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSteps;