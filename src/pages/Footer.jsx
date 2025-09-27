import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#D8DFE5] md:rounded-t-[10%] text-black mt-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MEDI2AI</h3>
            <p className="text-black mb-6 max-w-md">
              We empower healthcare providers with advanced AI solutions to enhance patient care, streamline operations, and improve outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Eagle-Eye-Tech/61555907854696/?mibextid=LQQJ4d" target='_blank' className="text-black hover:text-[#30C1A0] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/eagle-eye-technologies-llc/?viewAsMember=true" target='_blank' className="text-black hover:text-[#30C1A0] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:hr@eagleiitech.com" className="text-black hover:text-[#30C1A0] transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/chart-review" 
                  className="text-black hover:text-[#30C1A0] transition-colors"
                  onClick={scrollToTop}
                >
                  Chart Review
                </Link>
              </li>
              <li>
                <Link 
                  to="/risk-adjustments" 
                  className="text-black hover:text-[#30C1A0] transition-colors"
                  onClick={scrollToTop}
                >
                  Risk Adjustments
                </Link>
              </li>
              <li>
                <Link 
                  to="/quality-management" 
                  className="text-black hover:text-[#30C1A0] transition-colors"
                  onClick={scrollToTop}
                >
                  Quality Management
                </Link>
              </li>
              <li>
                <Link 
                  to="/analytics" 
                  className="text-black hover:text-[#30C1A0] transition-colors"
                  onClick={scrollToTop}
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-black">
              <li>USA: 1000 Bearcat Way Suite 105 Unit 5 Morrisville NC 27560</li>
              <li>hr@eagleiitech.com</li>
              <li>(919) 439-6578</li>
            </ul>
            <button
              onClick={() => window.location.href = 'mailto:hr@eagleiitech.com'}
              className="mt-6 px-6 py-2 bg-[#30C1A0] hover:bg-[#30C1A0]/50 rounded-md text-white font-medium transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-black">Subscribe for the latest healthcare AI insights</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#30C1A0] w-full md:w-64"
              />
              <button className="px-6 py-2 bg-[#30C1A0] hover:bg-[#30C1A0]/50 rounded-r-md text-white font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Eagle Eye Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-black hover:text-[#30C1A0] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-black hover:text-[#30C1A0] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-black hover:text-[#30C1A0] text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;