import React from 'react';
import { FileText, Search, Shield, Users, CheckCircle2, Clock } from 'lucide-react';

const HowWePrepare: React.FC = () => {
  const preparations = [
    {
      icon: Search,
      title: "Thẩm định toàn diện",
      description: "Chúng tôi tiến hành phân tích dự án kỹ lưỡng, kiểm tra lý lịch nhà phát triển và nghiên cứu thị trường để xác định các cơ hội đầu tư an toàn nhất.",
      features: ["Phân tích tài chính đảm bảo an toàn cho khoản đầu tư", "Đánh giá tuân thủ pháp lý đảm bảo an toàn thẻ xanh vĩnh viễn", "Nghiên cứu thị trường đánh giá tính khả thi của dự án", "Đánh giá rủi ro và các biện pháp hạn chế rủi ro"]
    },
    {
      icon: FileText,
      title: "Quy trình chuẩn bị hồ sơ kỹ lưỡng",
      description: "Đội ngũ của chúng tôi chuẩn bị các bộ hồ sơ với tiêu chí đầy đủ, đảm bảo tuân thủ mọi tiêu chuẩn khắt khe, và đáp ứng các xu hướng xét duyệt của USCIS.",
      features: ["Chuẩn bị kỹ trong từng chi tiết hồ sơ nguồn vốn", "Xem xét kỹ lưỡng tính pháp lý, thống nhất của từng tài liệu", "Hồ sơ nguồn vốn được trình bày khoa học, mạch lạc", "Xem xét kỹ lưỡng hồ sơ của bạn qua nhiều bước, đảm bảo đáp ứng mọi yêu cầu của USCIS"]
    },
    {
      icon: Shield,
      title: "Chiến lược giảm thiểu rủi ro",
      description: "Chúng tôi xác định những thách thức tiềm ẩn trước khi chúng trở thành vấn đề, thực hiện các biện pháp bảo vệ trong suốt hành trình EB-5 của bạn.",
      features: ["Đánh giá kỹ lưỡng tính phù hợp của từng khách hàng với chương trình EB-5", "Cập nhật liên tục sự thay đổi trong chính sách xét duyệt nhập cư của chính phủ Hoa Kỳ", "Giám sát tuân thủ đảm bảo dự án tuân thủ mọi quy định của USCIS", "Giám sát dự án theo dõi sát sao tiến độ và hiệu quả của dự án đầu tư"]
    },
    {
      icon: Users,
      title: "Đội ngũ hỗ trợ tận tâm đồng hành cùng khách hàng",
      description: "Tại Loyalpass, chúng tôi hiểu rằng mỗi hồ sơ EB-5 là một hành trình cá nhân quan trọng. Vì vậy chúng tôi cung cấp dịch vụ trọn gói, minh bạch và cam kết đồng hành cùng khách hàng từ bước chuẩn bị đến khi hoàn tất.",
      features: ["Mỗi khách hàng sẽ có đội ngũ phụ trách chuyên biệt", "Hồ sơ của khách hàng được theo dõi kỹ lưỡng, cập nhật tiến độ định kỳ", "Giám sát của luật sư - mọi quyết định và các bước thực hiện đều có tư vấn pháp lý chuyên sâu", "Hỗ trợ 24/7 - đội ngũ sẵn sàng giải đáp và xử lý khẩn cấp bất kỳ lúc nào"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Loyalpass chuẩn bị cho khách hàng thành công như thế nào?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thành công trong EB-5 đến từ sự chuẩn bị tỉ mỉ, hướng dẫn chuyên môn và sự tận tâm. Loyalpass giúp khách hàng tiết kiệm thời gian, công sức và tối ưu hóa cơ hội đạt được thẻ xanh.
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

      </div>
    </section>
  );
};

export default HowWePrepare;