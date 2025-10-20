import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Target, Heart, CheckCircle, Eye } from 'lucide-react';

const LoyalpassStory: React.FC = () => {
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
  const values = [
    {
      icon: Award,
      title: "Chuyên môn đã được chứng minh",
      description: "Với 10 năm nghiệm về EB-5 - Loyalpass là bạn đồng hành tin cậy của hơn 500 gia đình trên hành trình tới Hoa Kỳ"
    },
    {
      icon: Target,
      title: "Hướng dẫn chuyên nghiệp và chủ động",
      description: "Luôn theo dõi sát sao mọi thay đổi và hướng dẫn khách hàng từng bước của quy trình nhập cư."
    },
    {
      icon: Heart,
      title: "Quyền lợi của khách hàng là ưu tiên của chúng tôi",
      description: "Chúng tôi đặt quyền lợi của khách hàng là kim chỉ nam trong mọi quyết định"
    },
    {
      icon: Users,
      title: "Hỗ trợ tận tâm",
      description: "Loyalpass: Người bạn đồng hành tin cậy trên hành trình nhập cư, luôn tôn trọng câu chuyện của khách hàng và hỗ trợ tận tâm để khách hàng đạt được thành công"
    },
    {
      icon: CheckCircle,
      title: "Thành tích đáng tin cậy",
      description: "Đối tác đáng tin cậy của hơn 500 nhà đầu tư EB-5 trên con đường nhập cư Hoa Kỳ"
    },
    {
      icon: Eye,
      title: "Minh bạch",
      description: "Chúng tôi đề cao sự trung thực và minh bạch, giúp khách hàng nắm rõ mọi thông tin và chủ động trong quá trình định cư"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Câu chuyện Loyalpass
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Mười năm kinh nghiệm, Loyalpass không chỉ là một công ty tư vấn EB-5. Chúng tôi đã trở thành đối tác đáng tin cậy trong hành trình quan trọng, kiến tạo con đường định cư thành công cho khách hàng - con đường đến thường trú nhân và công dân Hoa Kỳ.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Được xây dựng trên nền tảng "where there's a will, there's a way", chúng tôi đã vượt qua những thách thức phức tạp của luật nhập cư, vui mừng với vô số câu chuyện thành công, sát cánh cùng khách hàng qua mọi thử thách trong quá trình thực hiện hồ sơ.
            </p>
            <div className="bg-blue-600 text-white p-6 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Sứ mệnh của chúng tôi</h3>
              <p className="text-lg">
                Cung cấp hướng dẫn chuyên môn, hỗ trợ vững chắc và dịch vụ minh bạch để biến những giấc mơ nhập cư thành hiện thực.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-x-2 transition-all duration-300 group ${
                  isVisible ? `animate-on-scroll animate-delay-${Math.min(index, 3)}00` : 'opacity-0'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
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