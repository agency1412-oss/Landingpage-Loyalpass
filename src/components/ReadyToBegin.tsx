import React from 'react';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

const ReadyToBegin: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Begin Your EB-5 Journey?
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Time is running out. With the 2026 deadline approaching and processing times increasing, 
          every day matters. Let our decade of expertise guide you to success.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Time-Sensitive</h3>
            <p className="opacity-90">Don't miss the September 2026 deadline</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">500+ Success Stories</h3>
            <p className="opacity-90">Proven track record you can trust</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
            <p className="opacity-90">From application to green card</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center">
            Schedule Free Consultation
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
            Download EB-5 Guide
          </button>
        </div>

        <p className="mt-6 text-lg opacity-90">
          <strong>No obligation.</strong> Get expert advice tailored to your situation.
        </p>
      </div>
    </section>
  );
};

export default ReadyToBegin;