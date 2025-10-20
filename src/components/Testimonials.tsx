import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
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

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  const testimonials = [
    {
      name: "Chị Trần N.T.N.",
      location: "Chấp thuận I-526E ngày 19/9/2025",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Bắt tay với gia đình chúng tôi từ tháng 11/2024, chỉ trong vòng 4 tháng  với một phong cách làm việc chuyên nghiệp, cẩn thận, kiên trì và phối hợp nhiệt tình của đội ngũ Loyalpass đã giúp cho gia đình tôi chuẩn bị được một bộ hồ sơ hoàn thiện có rất nhiều chi tiết trong đó có những phần tưởng khó mà thực hiện để chúng tôi được USCIS xác nhận hồ sơ vào ngày 05/03/2025. Chính nhờ sự chuẩn bị khoa học, hợp lý, chặt chẽ nên bộ hồ sơ của chúng tôi đã được USCIS chấp thuận chỉ trong một thời gian ngắn 6.5 tháng vào ngày 19/09/2025.
Gia đình chúng tôi chân thành cảm ơn sự nhiệt tình của Loyalpass, một công ty rất trẻ trong lĩnh vực tư vấn di trú định cư nhưng đã giúp niềm tin của chúng tôi được khẳng định vững chắc. Chúng tôi tin rằng Loyalpass với đội ngũ các bạn tư vấn chuyên nghiệp, nhiệt tình, cẩn trọng sẽ giúp cho Loyalpass ngày càng phát triển vững bền trong lĩnh vực tư vấn di trú. ",
      project: "Regional Center Project",
      year: "2023"
    },
    {
      name: "Anh Nguyen H.T.", 
      location: "Chấp thuận I-526E ngày 21/01/2025",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Là khách hàng của Cty Loyalpass gia đình chúng tôi  gồm năm thành viên từ tháng 02/2024 được sự hướng dẫn của quí Công ty Loyalpass , chúng tôi đã hoàn tất việc nộp hồ sơ và đến 20/01/2025 chúng tôi nhận được thư chấp thuận của USCIS . Thật sự đó là một thành công và tin vui cho sự hợp tác thật hiệu quả của Quí Công ty.",
      project: "TEA Investment",
      year: "2022"
    },
    {
      name: "Anh Trương K. H & Chị Lê T. D. V.",
      location: "Chấp thuận I-526E ngày 06/08/2025",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Nhờ sự tư vấn rõ ràng, nhanh chóng phản hồi , sự chuyên nghiệp và tận tuỵ của đội ngủ công ty đã giúp cho hồ sơ của bạn du học sinh nhận thẻ xanh trong khoảng thời gian nhanh nhất. Chân thành cám ơn các bạn.",
      project: "Direct Investment",
      year: "2024"
    },
    {
      name: "Em Trương B.N.",
      location: "Được cấp Thẻ Xanh tháng 8/2025",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Là một du học sinh đang học tại Mỹ, ban đầu em và ba mẹ cũng khá lo lắng, bỡ ngỡ vì không biết bắt đầu từ đâu. Nhưng nhờ sự hướng dẫn tận tình, rõ ràng và rất chuyên nghiệp từ Loyalpass mọi thứ trở nên nhẹ nhàng và suôn sẻ hơn rất nhiều. Đặc biệt, việc nhận được thẻ xanh có điều kiện (2 năm) chỉ sau 6 tháng thật sự là một kết quả ngoài mong đợi đối với cả gia đình em.",
      project: "Rural TEA Project",
      year: "2023"
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Khách hàng nói về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hãy lắng nghe những chia sẻ từ khách hàng của chúng tôi và bắt đầu hành trình EB-5 của bạn ngay hôm nay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedCards.has(index);
            const isLongText = testimonial.text.length > 200;

            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out group cursor-pointer ${
                  isVisible ? `animate-on-scroll animate-delay-${(index % 2) * 100}` : 'opacity-0'
                }`}
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{testimonial.location}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${starIndex * 50}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
                  <div
                    className="cursor-pointer"
                    onClick={() => isLongText && toggleExpand(index)}
                  >
                    <p
                      className={`text-gray-700 leading-relaxed mb-2 pl-6 transition-all duration-300 ${
                        !isExpanded && isLongText ? 'line-clamp-3' : ''
                      }`}
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: !isExpanded && isLongText ? 3 : 'unset',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {testimonial.text}
                    </p>
                    {isLongText && (
                      <button
                        className="text-blue-600 text-sm font-semibold hover:text-blue-700 hover:gap-1 transition-all pl-6 inline-flex items-center gap-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
                      >
                        {isExpanded ? 'Thu gọn' : 'Xem thêm...'}
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 group-hover:border-blue-200 pt-4 mt-4 transition-colors duration-300">
                  <span className="font-medium">{testimonial.project}</span>
                  <span className="font-medium">Approved {testimonial.year}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center ${
          isVisible ? 'animate-on-scroll animate-delay-300' : 'opacity-0'
        }`}>
          <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-500">
            <h3 className="text-3xl font-bold mb-4">Hãy trở thành câu chuyện thành công tiếp theo của chúng tôi</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              "Hơn 500 gia đình đã tin tưởng chúng tôi trong hành trình EB-5. Hãy để chúng tôi giúp bạn trở thành câu chuyện thành công tiếp theo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold">
                Đọc thêm các câu chuyện thành công
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold">
                Đặt lịch tư vấn ngay hôm nay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;