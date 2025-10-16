import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const InvestorSteps: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Tư vấn ban đầu",
      description: "Tư vấn miễn phí để đánh giá đủ điều kiện và thảo luận về mục tiêu nhập cư của bạn.",
      timeline: "Ngày 1"
    },
    {
      step: "02", 
      title: "Hồ sơ chứng minh nguồn gốc vốn",
      description: "Thu thập và chuẩn bị tài liệu toàn diện chứng minh nguồn gốc hợp pháp của vốn đầu tư.",
      timeline: "Tuần 1-4"
    },
    {
      step: "03",
      title: "Lựa chọn dự án và đăng ký suất",
      description: "Chọn từ danh mục các dự án EB-5 đã được chúng tôi thẩm định kỹ lưỡng, ưu tiên an toàn Thẻ Xanh và bảo toàn vốn đầu tư.",
      timeline: "Tuần 2-6"
    },
    {
      step: "04",
      title: "Đầu tư",
      description: "Hoàn thành ký hồ sơ dự án và chuyển tiền vào tài khoản ký quỹ của dự án đã chọn.",
      timeline: "Tuần 6-8"
    },
    {
      step: "05",
      title: "Nộp đơn I-526E",
      description: "Hoàn thiện hồ sơ, Nộp đơn I-526E vào Sở Di trú và Nhập tịch Hoa Kỳ (USCIS).",
      timeline: "Tuần 8-10"
    },
    {
      step: "06",
      title: "Chấp thuận đơn I-526E",
      description: "USCIS xem xét và phê duyệt đơn I-526E của bạn. Thời gian phê duyệt ưu tiên dành cho dự án Rural.",
      timeline: "6-12 tháng"
    },
    {
      step: "07",
      title: "Phỏng vấn và Thẻ xanh có điều kiện",
      description: "Hồ sơ được chuyển qua NVC và lên lịch phỏng vấn tại Lãnh Sự Quán. Nhận thẻ xanh có điều kiện có hiệu lực trong hai năm.",
      timeline: "Tháng 18-24"
    },
    {
      step: "08",
      title: "Nộp đơn I-829- Xoá bỏ điều kiện",
      description: "Nộp đơn I-829 để xóa các điều kiện và nhận thẻ xanh vĩnh viễn.",
      timeline: "Tháng 21-24"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Quy trình thực hiện hồ sơ EB-5
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quy trình đã được chứng minh của chúng tôi đảm bảo mọi chi tiết đều được xử lý đúng cách, từ tư vấn ban đầu đến khi thẻ xanh vĩnh viễn được chấp thuận.
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
            <h3 className="text-2xl font-bold mb-4">Tổng thời gian: 6-24 tháng để có thẻ xanh</h3>
            <p className="text-lg opacity-90 mb-6">
              Với sự chuẩn bị đúng đắn và hướng dẫn chuyên môn, hầu hết khách hàng của chúng tôi đạt được thẻ xanh trong vòng 6 đến 24 tháng.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Bắt đầu Lộ trình của bạn ngay hôm nay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSteps;