import React from 'react';
import { ArrowRight, Clock, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat pt-24 pb-16" style={{ backgroundImage: "url('/banner-web-eb5-1 copy copy.webp')" }}>
      <div className="absolute inset-0 bg-black/1"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4 mr-2" />
              Nộp hồ sơ để được bảo vệ quyền lợi toàn diện trước: 30 tháng 9, 2026
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Xây dựng tương lai vững chắc
              <span className="text-blue-400"> tại Hoa Kỳ</span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 leading-relaxed bg-gray-400/50 p-4 rounded-lg">
              An tâm đầu tư EB-5 trước khi Luật Bất Hồi Tố hết hiệu lực. Với 10 năm kinh nghiệm và 500+ nhà đầu tư thành công, chúng tôi hiểu rõ cách bảo vệ quyền lợi của bạn. Hãy để chúng tôi giúp bạn định cư Hoa Kỳ một cách nhanh chóng và hiệu quả.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center">
                Bắt đầu hành trình EB-5 của bạn
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-gray-100">Thành tích đã được chứng minh</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-gray-100">Hơn 500 hồ sơ thành công</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nắm bắt cơ hội đầu tư ngay hôm nay</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Bảo vệ khoản đầu tư EB-5 của bạn. 30/09/2026 là cơ hội cuối cùng để bảo lưu quyền lợi nhà đầu tư (Grandfathering)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Nộp hồ sơ sớm - Ưu tiên xét duyệt, rút ngắn thời gian chờ đợi</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Số lượng dự án EB-5 chất lượng, đặc biệt là các dự án ưu tiên phê duyệt (Rural) đang trở nên khan hiếm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;