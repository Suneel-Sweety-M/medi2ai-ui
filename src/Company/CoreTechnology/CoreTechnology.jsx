import React, { useRef, useEffect } from 'react';
import { BsStars } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CoreTechnologies = () => {
  // Refs for GSAP animations - matching OurSuccess structure
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const featuresRef = useRef([]);
  const statsRef = useRef([]);
  const ctaRef = useRef(null);

  const technologies = [
    {
      id: 1,
      title: "AI-Powered Diagnostics",
      description: "Our advanced machine learning algorithms analyze medical data with unprecedented accuracy, helping clinicians detect conditions earlier and with greater precision.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" fill="url(#brainGradient)"/>
          <path d="M8 12h1m6 0h1m-4 0v-1m0 4v-1" stroke="white" strokeWidth="1"/>
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#236BBA"/>
              <stop offset="100%" stopColor="#30C1A0"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      features: ["Pattern Recognition", "Predictive Analysis", "Image Processing"],
      number: "01"
    },
    {
      id: 2,
      title: "Natural Language Processing",
      description: "Our NLP engine understands and processes complex medical terminology, extracting meaningful insights from unstructured clinical notes and medical literature.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                fill="url(#chatGradient)" stroke="url(#chatGradient)"/>
          <defs>
            <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#30C1A0"/>
              <stop offset="100%" stopColor="#236BBA"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      features: ["Clinical Text Analysis", "Semantic Understanding", "Terminology Mapping"],
      number: "02"
    },
    {
      id: 3,
      title: "Predictive Analytics",
      description: "Leverage historical and real-time patient data to predict health outcomes, identify at-risk populations, and optimize treatment plans.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v16a2 2 0 002 2h16" stroke="url(#chartGradient)"/>
          <path d="M7 14l4-4 4 4 4-4" stroke="url(#chartGradient)" fill="none"/>
          <path d="M7 10l4-4 4 4 4-4" stroke="url(#chartGradient)" fill="none"/>
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#236BBA"/>
              <stop offset="100%" stopColor="#30C1A0"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      features: ["Risk Stratification", "Outcome Prediction", "Trend Analysis"],
      number: "03"
    },
    {
      id: 4,
      title: "Data Integration Platform",
      description: "Seamlessly connect with EHR systems, medical devices, and healthcare databases to create a unified view of patient information.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" fill="url(#databaseGradient)"/>
          <circle cx="12" cy="12" r="3" fill="white"/>
          <path d="M12 5v14" stroke="white" strokeWidth="1"/>
          <path d="M5 12h14" stroke="white" strokeWidth="1"/>
          <defs>
            <linearGradient id="databaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#30C1A0"/>
              <stop offset="100%" stopColor="#236BBA"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      features: ["EHR Integration", "API Connectivity", "Data Normalization"],
      number: "04"
    },
    {
      id: 5,
      title: "Clinical Decision Support",
      description: "AI-driven insights at the point of care, providing evidence-based recommendations to enhance clinical decision-making and patient outcomes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="url(#shieldGradient)"/>
          <path d="M12 8v4l2 2" stroke="white" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="16" r="1" fill="white"/>
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#236BBA"/>
              <stop offset="100%" stopColor="#30C1A0"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      features: ["Evidence-Based Recommendations", "Treatment Optimization", "Alert System"],
      number: "05"
    },
    {
      id: 6,
      title: "Secure Cloud Infrastructure",
      description: "HIPAA-compliant cloud infrastructure ensuring the highest levels of security, scalability, and reliability for sensitive healthcare data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="url(#cloudGradient)"/>
          <path d="M12 12l2-2m-2 2l-2-2m2 2v4" stroke="white" strokeWidth="1.5" fill="none"/>
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#30C1A0"/>
              <stop offset="100%" stopColor="#236BBA"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      features: ["HIPAA Compliance", "Data Encryption", "High Availability"],
      number: "06"
    }
  ];

  // GSAP Animations with ScrollTrigger - Fast loading (same as OurSuccess)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation - FAST
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Header badge animation - FAST
      gsap.fromTo(headerRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Title animation - FAST
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Subtitle animation - FAST
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards animation (staggered) - FAST
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Icon animations - FAST
      gsap.fromTo(iconsRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: iconsRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Features animations - FAST
      gsap.fromTo(featuresRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.05,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Stats animations - FAST
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // CTA animation - FAST
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Hover animations for cards (matching OurSuccess style)
      cardsRef.current.forEach((card, index) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -5,
              duration: 0.3,
              ease: "power2.out",
              boxShadow: "0 0 30px rgba(0,0,0,0.2)"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
              boxShadow: "0 0 20px rgba(0,0,0,0.15)"
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-18"
    >
      {/* Section Header - Matching OurSuccess style */}
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6"
      >
        <BsStars />
        <p>Core Technologies</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          Core Technologies
        </h1>
        <p 
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          Powered by cutting-edge AI and machine learning, our platform transforms healthcare data into actionable insights for better patient outcomes.
        </p>
      </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 w-full max-w-7xl">
        {technologies.map((tech, index) => (
          <div 
            key={tech.id}
            ref={el => cardsRef.current[index] = el}
            className="bg-white p-5 rounded-3xl overflow-hidden hover:cursor-pointer transition-all duration-300"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
          >
            {/* Icon and Header */}
            <div className="flex items-center justify-between mb-4">
              <div 
                ref={el => iconsRef.current[index] = el}
                className="bg-black text-white p-3 rounded-xl w-fit shadow-lg shadow-gray-400"
              >
                <div className="w-8 h-8">
                  {tech.icon}
                </div>
              </div>
              
              <div className="flex items-center gap-2 ">
                {technologies.map((_, dotIndex) => (
                  <div 
                    key={dotIndex}
                    className={`h-2 w-2 rounded-full ${
                      dotIndex === index ? 'bg-[#30C1A0]' : 'bg-gray-400'
                    }`} 
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl md:text-[22px] font-semibold text-gray-800 mb-3">
              {tech.title}
            </h3>
            
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {tech.description}
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-4">
              {tech.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex}
                  ref={el => featuresRef.current.push(el)}
                  className="flex items-center text-sm text-gray-700"
                >
                  <div className="w-1 h-1 bg-black rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Divider and Footer */}
            <div className="bg-gray-300 w-full h-[1px] my-4 " />
            
            <div className="flex items-center justify-between">
              <span className="text-2xl md:text-[28px] font-semibold text-gray-800">
                {tech.number}
              </span>
              
              <div className="text-sm text-gray-600">
                Technology
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-7xl ">
        {[
          { value: "98%", label: "Diagnostic Accuracy" },
          { value: "250+", label: "Healthcare Institutions" },
          { value: "5M+", label: "Processed Records" }
        ].map((stat, index) => (
          <div 
            key={index}
            ref={el => statsRef.current[index] = el}
            className="bg-white p-6 rounded-3xl text-center interactive-element"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-[#30C1A0] mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div 
        ref={ctaRef}
        className="bg-white p-8 rounded-3xl w-full max-w-5xl text-center mt-12 shadow-lg shadow-gray-400 "
        style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Ready to Transform Healthcare with AI?
        </h3>
        <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
          Discover how Medi2AI's advanced technologies can enhance patient care and streamline clinical workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-[#30C1A0] hover:bg-black text-white px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 interactive-element">
            <span>Request a Demo</span>
          </div>
          <div className="bg-white border border-gray-300 text-black px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 interactive-element">
            <span>Contact Sales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTechnologies;