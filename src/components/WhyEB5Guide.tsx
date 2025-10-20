import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Shield, RefreshCw, TrendingUp } from 'lucide-react';

const WhyEB5Guide: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            EB-5 Is Very Different & You Need the Right Guidance
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The EB-5 program is unlike any other immigration program, with unique complexities that require expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group ${
              isVisible ? 'animate-on-scroll' : 'opacity-0'
            }`}
          >
            <div className="bg-blue-100 rounded-xl p-4 inline-flex mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
              <Shield className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors duration-300">
              EB-5 Investment Involves Risk
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              USCIS requires your investment to be at risk. Evaluating potential risks and applying mitigation strategies helps ensure your investment is safe.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Having worked with over 500 Vietnamese EB-5 investors, we have developed a set of standards to assess safe EB-5 projects and protect your capital.
            </p>
          </div>

          <div
            className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group ${
              isVisible ? 'animate-on-scroll animate-delay-100' : 'opacity-0'
            }`}
          >
            <div className="bg-green-100 rounded-xl p-4 inline-flex mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-500">
              <RefreshCw className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors duration-300">
              USCIS Frequently Changes Its Adjudication Policies
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              USCIS adjudicates Form I-526E and I-829 petitions based on specific standards but often updates its policies regarding source of funds, money transfer, and EB-5 project fund usage.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Collaborating with leading law firms and continuously supporting the Vietnamese EB-5 community allows us to stay updated with USCIS trends and provide the most relevant advice to our clients.
            </p>
          </div>

          <div
            className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group ${
              isVisible ? 'animate-on-scroll animate-delay-200' : 'opacity-0'
            }`}
          >
            <div className="bg-purple-100 rounded-xl p-4 inline-flex mb-6 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-500">
              <TrendingUp className="h-10 w-10 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-purple-700 transition-colors duration-300">
              Understanding Immigration Trends Helps You Prepare Better
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              By monitoring immigration policy impacts on case processing, we help you prepare effectively for your immigration journey.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              With years of experience navigating policy shifts and the EB-5 program, Loyalpass supports clients in building accurate, effective, and confident immigration plans.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bạn đã sẵn sàng cho EB-5 vào 2026?</h4>
              <p className="text-gray-700">
                "BẢO VỆ KHOẢN ĐẦU TƯ EB-5 CỦA BẠN: Luật Bất Hồi Tố (RIA) mang đến sự bảo vệ quan trọng cho các nhà đầu tư, nhưng sẽ hết hiệu lực vào ngày 30/09/2026. Đừng bỏ lỡ cơ hội này! Đảm bảo suất đầu tư của bạn ngay bây giờ để tránh các yêu cầu khắt khe hơn và thời gian xử lý lâu hơn" 
                <strong>Liên hệ tư vấn</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEB5Guide;