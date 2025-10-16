import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Chị Trần N.T.N.",
      location: "Chấp thuận I-526E ngày 19/9/2025",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Loyalpass made our EB-5 journey seamless. Their expertise in project selection was invaluable, and their team guided us through every complexity with patience and professionalism. We received our green cards exactly as promised.",
      project: "Regional Center Project",
      year: "2023"
    },
    {
      name: "Anh Nguyen H.T.", 
      location: "Chấp thuận I-526E ngày 21/01/2025",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The transparency and communication from Loyalpass exceeded all expectations. They were always available for questions and provided detailed updates throughout the process. Worth every penny for peace of mind.",
      project: "TEA Investment",
      year: "2022"
    },
    {
      name: "Anh Trương K. H & Chị Lê T. D. V.",
      location: "Chấp thuận I-526E ngày 06/08/2025",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "After a disappointing experience with another firm, Loyalpass rescued our case. Their attention to detail and proactive approach turned our denied petition into an approval. Truly grateful for their dedication.",
      project: "Direct Investment",
      year: "2024"
    },
    {
      name: "Em Trương B.N.",
      location: "Được cấp Thẻ Xanh tháng 8/2025",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "As a busy professional, I needed experts I could trust completely. Loyalpass delivered exceptional service while I focused on my career. Their knowledge of the medical field EB-5 applications was impressive.",
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
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
                <p className="text-gray-700 leading-relaxed mb-6 pl-6">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                <span>{testimonial.project}</span>
                <span>Approved {testimonial.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Hãy trở thành câu chuyện thành công tiếp theo của chúng tôi</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              "Hơn 500 gia đình đã tin tưởng chúng tôi trong hành trình EB-5. Hãy để chúng tôi giúp bạn trở thành câu chuyện thành công tiếp theo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Đọc thêm các câu chuyện thành công
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
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