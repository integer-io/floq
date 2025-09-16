import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "About Us", "Team", "FAQ", "Projects", "Contact us"
  ];

  const services = [
    "Pump Installation & Commissioning", "Preventive Maintenance Services", "Emergency Repair & Support", 
    "Spare Parts Supply", "Technical Consultation", "Performance Optimization"
  ];

  const recentPosts = [
    {
      title: "FloQ Pumps Now Available with 2-Year Comprehensive Warranty",
      date: "Jan 15 2024"
    },
    {
      title: "New Kirloskar Engine Integration for Enhanced Performance",
      date: "Dec 20 2023"
    },
    {
      title: "Expanding Global Export Operations Worldwide",
      date: "Nov 10 2023"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 group">
              <div className="flex items-center">
                <span className="text-3xl font-black text-white tracking-tight">Flo</span>
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center ml-1 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-5 h-5 bg-blue-500 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-1.5 bg-blue-300 rounded-t-full"></div>
                  </div>
                </div>
                <span className="text-xl font-light text-gray-300 ml-1">Pumps</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-orange-400">ABOUT COMPANY</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              FLOQ is your trusted destination for complete fluid handling solutions with 9+ years of experience, 
              delivering performance driven pumps backed by SMIE INDUSTRIES PVT LTD's proven legacy and innovation.
            </p>
            
            <div className="bg-orange-500 text-white p-3 rounded-lg mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <span className="font-bold">2 YEARS WARRANTY</span>
              </div>
              <p className="text-sm text-orange-100 mt-1">Comprehensive coverage on all FloQ pumps</p>
            </div>
            
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                <div key={index} className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-400">QUICK LINKS</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 cursor-pointer hover:translate-x-2 text-lg">
                  <ArrowUpRight className="h-5 w-5 text-orange-400" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-400">PUMP SERVICES</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 cursor-pointer hover:translate-x-2 text-lg">
                  <ArrowUpRight className="h-5 w-5 text-orange-400" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-400">RECENT POSTS</h3>
            <div className="space-y-8">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <div className="text-white text-xs font-bold text-center">
                      {index === 0 ? "WARRANTY" : index === 1 ? "ENGINE" : "EXPORT"}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 leading-tight hover:text-orange-400 transition-all duration-300 cursor-pointer text-lg group-hover:text-orange-400">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-4">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <span>Quick Call Us</span>
              <strong className="text-lg">+91-7358755442</strong>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <span>Mail Us On:</span>
              <strong className="text-lg">export@floqpump.com</strong>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5" />
            <span>Visit Location:</span>
            <strong className="text-lg">Kerala & Chennai, India</strong>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 py-8 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-lg">
              Copyright © 2024 <span className="text-orange-400 font-bold">FloQ Pumps</span> with 2-Year Warranty. All Rights Reserved by{" "}
              <span className="text-orange-400 font-bold">SMIE Industries</span> - 9+ Years Experience
            </p>
          </div>
          <div className="flex gap-8 text-base">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300">Terms & Condition</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300">Careers</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;