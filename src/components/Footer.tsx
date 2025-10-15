import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <img src="/loyalpass-02.png" alt="Loyalpass" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Where there's a will, there's a way. Your trusted partner in EB-5 investment immigration 
              for over a decade.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>(855) 387-5327</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@eb5loyalpass.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                <span>Serving clients worldwide<br />with offices in major cities</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">EB-5 Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Selection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">I-526E Preparation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">I-829 Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Recovery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">EB-5 Process Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Current Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Important Notice</h4>
            <div className="bg-red-900 border border-red-700 rounded-lg p-4 mb-6">
              <p className="text-red-100 text-sm font-semibold mb-2">2026 Deadline Alert</p>
              <p className="text-red-200 text-sm">
                RIA grandfathering expires September 30, 2026. Don't miss this critical deadline.
              </p>
            </div>
            <a 
              href="https://eb5loyalpass.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Visit Main Website
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2025 Loyalpass. All rights reserved. | Attorney Advertising
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;