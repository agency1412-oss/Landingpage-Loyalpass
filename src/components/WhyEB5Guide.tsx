import React from 'react';
import { AlertTriangle, MapPin, TrendingUp } from 'lucide-react';

const WhyEB5Guide: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            EB-5 Rất Khác Biệt & bạn cần những hướng dẫn chính xác
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chương trình EB-5 không giống bất kỳ chương trình nhập cư nào khác, với những phức tạp đặc thù đòi hỏi sự hướng dẫn của chuyên gia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <TrendingUp className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Đầu tư EB-5 yêu cầu chịu sự rủi ro
            </h3>
            <p className="text-gray-600 mb-6">
              USCIS yêu cầu khoản đầu tư của bạn cần chịu sự rủi ro, việc đánh giá các rủi ro tiềm ẩn và các biện pháp giảm thiểu rủi ro giúp khoản đầu tư của bạn được an toàn. Đồng hành cùng hơn 500 nhà đầu tư EB-5 Việt Nam, chúng tôi có bộ tiêu chuẩn đánh giá một dự án EB-5 an toàn, giúp bảo vệ vốn đầu tư của bạn.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Financial analysis & risk assessment</li>
              <li>• Job creation verification</li>
              <li>• Developer track record review</li>
              <li>• Legal compliance evaluation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
            <MapPin className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Already in the U.S.? EB-5 Still Works for You
            </h3>
            <p className="text-gray-600 mb-6">
              Many assume EB-5 is only for those outside the U.S., but it's an excellent 
              path for current visa holders seeking permanent status without employer dependency.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Adjustment of status available</li>
              <li>• No employer sponsorship required</li>
              <li>• Freedom to change jobs immediately</li>
              <li>• Family benefits included</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
            <AlertTriangle className="h-12 w-12 text-red-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Most People Miss: EB-5 Comes with Risks
            </h3>
            <p className="text-gray-600 mb-6">
              Without proper guidance, investors face significant risks including investment 
              loss, application denial, and missed deadlines that can derail their immigration plans.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Investment capital at risk</li>
              <li>• Complex legal requirements</li>
              <li>• Strict documentation standards</li>
              <li>• Timing-sensitive deadlines</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Critical 2026 Deadline Alert</h4>
              <p className="text-gray-700">
                The Reform and Integrity Act (RIA) grandfathering expires September 30, 2026. 
                Investors who file after this date will face stricter requirements and longer processing times. 
                <strong> Don't wait — secure your position now.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEB5Guide;