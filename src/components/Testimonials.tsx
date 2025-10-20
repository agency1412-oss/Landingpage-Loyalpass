import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

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
      text: "Bắt tay với gia đình chúng tôi từ tháng 11/2024, chỉ trong vòng 4 tháng  với một phong cách làm việc chuyên nghiệp, cẩn thận, kiên trì và phối hợp nhiệt tình của đội ngũ Loyalpass đã giúp cho gia đình tôi chuẩn bị được một bộ hồ sơ hoàn thiện có rất nhiều chi tiết trong đó có những phần tưởng khó mà thực hiện để chúng tôi được USCIS xác nhận hồ sơ vào ngày 05/03/2025. Chính nhờ sự chuẩn bị khoa học, hợp lý, chặt chẽ nên bộ hồ sơ của chúng tôi đã được USCIS chấp thuận chỉ trong một thời gian ngắn 6.5 tháng vào ngày 19/09/2025.",
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{testimonial.location}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
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
                        className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors pl-6"
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

                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4 mt-4">
                  <span>{testimonial.project}</span>
                  <span>Approved {testimonial.year}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Hãy trở thành câu chuyện thành công tiếp theo của chúng tôi</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              "Hơn 500 gia đình đã tin tưởng chúng tôi trong hành trình EB-5. Hãy để chúng tôi giúp bạn trở thành câu chuyện thành công tiếp theo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                Đọc thêm các câu chuyện thành công
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-semibold">
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