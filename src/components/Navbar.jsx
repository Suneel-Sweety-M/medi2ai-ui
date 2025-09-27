import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHospital, FaChartLine, FaStethoscope, FaFileAlt, FaUserTie, FaTimes, FaCheckCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const dropdownRefs = {
    products: useRef(null),
    company: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = Object.values(dropdownRefs).every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );

      if (isOutside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName) => {
    console.log('Toggling dropdown:', dropdownName);
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleMouseEnter = (dropdownName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setShowModal(false);
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileLinkClick = (e, path) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Mobile link clicked, navigating to:', path);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    navigate(path);
    scrollToTop();
  };

  const dropdownContent = {
    products: {
      title: 'Products',
      items: [
        { title: 'Chart Review', icon: <FaStethoscope />, link: '/chart-review' },
        { title: 'Risk Adjustments', icon: <FaChartLine />, link: '/risk-adjustments' },
        { title: 'Quality Management', icon: <FaFileAlt />, link: '/quality-management' },
        { title: 'Analytics', icon: <FaChartLine />, link: '/analytics' },
      ],
    },
    company: {
      title: 'Company',
      items: [
        { title: 'About Us', icon: <FaUserTie />, link: '/about' },
        { title: 'Core Technologies', icon: <FaFileAlt />, link: '/technologies' },
      ],
    },
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/95 backdrop-blur-sm shadow-md' : 'py-3 bg-white/80'
          }`}
      >
        <div className="px-4 sm:px-6 lg:px-6 xl:px-13">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={scrollToTop}>
              <div className="flex items-center">
                <img
                  src="/hero.png"
                  alt="logo"
                  className="h-12 w-13 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-19 object-contain"
                />
                <h2 className="text-xl md:text-2xl font-bold text-gray-700">
                  MEDI<span className="text-[#30C1A0]">2AI</span>
                </h2>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-5 lg:space-x-7 text-sm font-medium">
              <Link
                to="/hospitals"
                className="text-gray-700 hover:text-[#30C1A0] transition-colors duration-200 py-2 relative group"
                onClick={scrollToTop}
              >
                Who We Serve
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#30C1A0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {Object.keys(dropdownContent).map((key) => (
                <div
                  key={key}
                  ref={dropdownRefs[key]}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="text-gray-700 hover:text-[#30C1A0] transition-colors duration-200 py-2 relative group flex items-center"
                  >
                    {dropdownContent[key].title}
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#30C1A0] transition-all duration-300 group-hover:w-full"></span>

                  </button>

                  {activeDropdown === key && (
                    <div
                      className="absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-3 z-50 animate-fadeIn"
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-800">{dropdownContent[key].title}</h3>
                      </div>
                      <div className="py-2">
                        {dropdownContent[key].items.map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#30C1A0] transition-colors duration-200"
                            onClick={() => { setActiveDropdown(null); scrollToTop(); }}
                          >
                            <div className="flex items-center">
                              <span className="mr-2">{item.icon}</span>
                              <span className="font-medium">{item.title}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center">
              <button
                onClick={() => setShowModal(true)}
                className="hidden md:block bg-gradient-to-r from-gray-900 to-black text-white px-5 py-2.5 rounded-xl hover:scale-105 duration-300 ease-in-out shadow-lg hover:shadow-xl transition-all font-medium text-sm"
              >
                Book a Call
              </button>

              <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden bg-white/95 backdrop-blur-lg px-6 mt-0 shadow-xl border-b border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0 overflow-hidden'
            }`}
        >
          <div className="flex flex-col space-y-4">
            <button
              onClick={(e) => handleMobileLinkClick(e, '/hospitals')}
              onTouchStart={(e) => handleMobileLinkClick(e, '/hospitals')}
              className="text-gray-700 hover:text-[#30C1A0] transition-colors duration-200 py-2 font-medium border-b border-gray-100 pb-3 flex items-center"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 100 }}
            >
              <span className="mr-2"><FaHospital /></span>
              <span>Who We Serve</span>
            </button>
            {Object.keys(dropdownContent).map((key) => (
              <div key={key} className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleDropdown(`${key}Mobile`)}
                  className="flex justify-between items-center w-full text-gray-700 hover:text-[#30C1A0] transition-colors duration-200 py-2 font-medium"
                >
                  {dropdownContent[key].title}
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === `${key}Mobile` ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === `${key}Mobile` && (
                  <div className="pl-4 mt-2 space-y-3">
                    {dropdownContent[key].items.map((item, index) => (
                      <button
                        key={index}
                        onClick={(e) => handleMobileLinkClick(e, item.link)}
                        onTouchStart={(e) => handleMobileLinkClick(e, item.link)}
                        className="block text-sm text-gray-600 hover:text-[#30C1A0] transition-colors duration-200 flex items-center w-full text-left"
                        style={{ pointerEvents: 'auto', position: 'relative', zIndex: 100 }}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => setShowModal(true)}
              className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 duration-300 ease-in-out shadow-lg mt-2 font-medium"
            >
              Book a Call
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out forwards;
          }
        `}</style>
      </nav>

      {/* Book a Call Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl md:h-[450px] overflow-y-auto h-full shadow-2xl max-w-md w-full relative overflow-hidden">
            {!isSubmitted ? (
              <>
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800">Book a Call</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-6 py-4">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30C1A0] focus:border-transparent transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30C1A0] focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30C1A0] focus:border-transparent transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30C1A0] focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 rounded-xl hover:scale-[1.02] duration-300 ease-in-out shadow-lg transition-all font-medium"
                  >
                    Schedule Call
                  </button>
                </div>

                <div className="px-6 py-3 bg-gray-50 text-center">
                  <p className="text-xs text-gray-500">
                    We'll get back to you within 24 hours to schedule your call
                  </p>
                </div>
              </>
            ) : (
              <div className="px-6 py-8 text-center">
                <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your request has been submitted successfully. We'll be in touch shortly to schedule your call.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#30C1A0] text-white py-2.5 px-6 rounded-xl hover:bg-[#2ab594] transition-colors duration-200 font-medium"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;