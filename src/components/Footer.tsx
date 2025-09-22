import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Company */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">FloQ Pumps</span>
            </div>
            
            <div>
              <h3 className="text-orange-500 text-xl font-bold mb-4">ABOUT COMPANY</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                FLOQ is your trusted destination for complete fluid handling solutions with 
                9+ years of experience, delivering performance driven pumps backed by 
                SMIE INDUSTRIES PVT LTD's proven legacy and innovation.
              </p>
              
              <div className="bg-orange-500 text-white p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <span className="font-bold">2 YEARS WARRANTY</span>
                </div>
                <p className="text-orange-100 text-sm">Comprehensive coverage on all FloQ pumps</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Youtube className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 text-xl font-bold mb-6">QUICK LINKS</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>About Us</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Team</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>FAQ</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Projects</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Contact us</span>
              </div>
            </div>
          </div>

          {/* Pump Services */}
          <div>
            <h3 className="text-orange-500 text-xl font-bold mb-6">PUMP SERVICES</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Pump Installation & Commissioning</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Preventive Maintenance Services</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Emergency Repair & Support</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Spare Parts Supply</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Technical Consultation</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors cursor-pointer">
                <span className="text-orange-500">↗</span>
                <span>Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 FloQ Pumps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;