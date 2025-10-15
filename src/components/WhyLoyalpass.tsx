import React from 'react';
import { Award, Target, Shield, CheckCircle, Star, Users } from 'lucide-react';

const WhyLoyalpass: React.FC = () => {
  const advantages = [
    {
      icon: Award,
      title: "Decade of Proven Expertise",
      description: "10+ years specializing exclusively in EB-5, with deep knowledge of regulations, trends, and best practices.",
      stat: "10+ Years",
      statLabel: "EB-5 Expertise"
    },
    {
      icon: Users,
      title: "Trusted by 500+ Investors",
      description: "Our track record speaks for itself — hundreds of successful EB-5 cases and satisfied clients worldwide.",
      stat: "500+",
      statLabel: "Success Stories"
    },
    {
      icon: Target,
      title: "Proactive Problem Solving",
      description: "We anticipate challenges before they arise, keeping your case on track and stress-free.",
      stat: "24/7",
      statLabel: "Support Available"
    },
    {
      icon: Shield,
      title: "Your Interests Come First",
      description: "Unlike project marketers, we're independent advisors committed solely to your success and protection.",
      stat: "100%",
      statLabel: "Client-Focused"
    }
  ];

  const differentiators = [
    "Independent advice — no conflicts of interest",
    "Attorney-led team with immigration law expertise",
    "Rigorous project vetting and due diligence",
    "Transparent fee structure with no hidden costs",
    "Comprehensive post-investment support",
    "Multilingual team and global accessibility"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Investors Choose Loyalpass
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When your American dream is on the line, you need more than just a service provider. 
            You need a trusted partner with proven expertise and unwavering commitment to your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 rounded-lg p-3">
                  <advantage.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{advantage.description}</p>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">{advantage.stat}</div>
                    <div className="text-sm text-blue-700 font-medium">{advantage.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                The Loyalpass Difference
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We're not just another immigration firm. We're EB-5 specialists who understand 
                that your investment represents more than money — it's your family's future, 
                your dreams, and your trust in America.
              </p>
              <div className="space-y-4">
                {differentiators.map((diff, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{diff}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
              <Star className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
              <h4 className="text-2xl font-bold mb-4">Client Satisfaction</h4>
              <div className="text-4xl font-bold mb-2">98.5%</div>
              <p className="text-lg opacity-90 mb-6">of our clients would recommend us to family and friends</p>
              
              <div className="border-t border-white/20 pt-6 mt-6">
                <p className="text-lg font-semibold mb-2">"Where there's a will, there's a way"</p>
                <p className="opacity-90">Our founding principle and daily commitment to every client</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
            Experience the Loyalpass Difference
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyLoyalpass;