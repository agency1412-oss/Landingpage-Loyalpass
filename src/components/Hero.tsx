import React from 'react';
import { ArrowRight, Clock, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4 mr-2" />
              Critical Deadline: September 30, 2026
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Path to 
              <span className="text-blue-600"> U.S. Residency</span>
              <br />Starts Here
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't miss the RIA grandfathering deadline. With a decade of EB-5 expertise, 
              we've guided 500+ investors to success. Let us secure your American dream before it's too late.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center">
                Start Your EB-5 Journey
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
                Download Free Guide
              </button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-gray-600">Proven Track Record</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-gray-600">500+ Successful Cases</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Act Now?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">RIA grandfathering expires September 30, 2026</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Processing times increasing due to high demand</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Limited qualifying projects available</span>
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