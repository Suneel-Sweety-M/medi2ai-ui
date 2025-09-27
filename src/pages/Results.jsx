import React, { useState, useEffect, useRef } from 'react';
import { PiSlideshowDuotone } from "react-icons/pi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Results = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const tabsRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);
  const numberRefs = useRef([]);

  // Updated Medi2AI-focused case studies
  const tabData = [
    {
      title: "AI Symptom Checker & Triage",
      description: "Medi2AI's intelligent assistant analyzes patient symptoms, predicts possible conditions, and directs them to the right care level in seconds.",
      image: "h1.jpg",
      stats: [
        { value: 45, label: "Faster Triage Decisions" },
        { value: 60, label: "Reduced ER Overcrowding" }
      ]
    },
    {
      title: "Smart Medical Imaging Insights",
      description: "Using AI-driven diagnostics, Medi2AI assists doctors in detecting anomalies in X-rays, MRIs, and CT scans with unmatched accuracy.",
      image: "h2.jpg",
      stats: [
        { value: 92, label: "Diagnostic Accuracy" },
        { value: 30, label: "Reduced Misdiagnosis Rates" }
      ]
    },
    {
      title: "Virtual Health Monitoring & Alerts",
      description: "Our platform continuously tracks vitals like heart rate, oxygen levels, and glucose trends, alerting doctors and patients proactively.",
      image: "h3.jpg",
      stats: [
        { value: 40, label: "Lower Hospital Readmissions" },
        { value: 3, label: "Increase in Preventive Care" }
      ]
    }
  ];

  // Section animations on load
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

      // Tabs animation - FAST
      gsap.fromTo(tabsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Tab change animation with GSAP
  const handleTabClick = (index) => {
    if (index !== activeTab && !isAnimating) {
      setIsAnimating(true);
      
      // Animate current content out (image to left, content to right)
      gsap.to(imageRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });
      
      gsap.to(contentRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(index);
          
          // Reset position for new content (image from left, content from right)
          gsap.set(imageRef.current, {
            x: -50,
            opacity: 0
          });
          
          gsap.set(contentRef.current, {
            x: 50,
            opacity: 0
          });
          
          // Reset stats position
          gsap.set(statsRef.current, {
            opacity: 0,
            y: 20
          });
          
          // Animate new content in (image from left, content from right)
          gsap.to(imageRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });
          
          gsap.to(contentRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.1
          });
          
          // Animate stats with delay
          gsap.to(statsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.3,
            ease: "power2.out"
          });
          
          // Animate number counting
          numberRefs.current.forEach((ref, i) => {
            if (ref && tabData[index].stats[i]) {
              const targetValue = tabData[index].stats[i].value;
              const isPercent = tabData[index].stats[i].label.includes('%');
              const suffix = isPercent ? '%' : 'x';
              
              gsap.fromTo(ref, 
                { innerText: 0 },
                {
                  innerText: targetValue,
                  duration: 1.5,
                  ease: "power2.out",
                  snap: { innerText: 1 },
                  onUpdate: function() {
                    ref.textContent = Math.floor(this.targets()[0].innerText) + suffix;
                  }
                }
              );
            }
          });
          
          setIsAnimating(false);
        }
      });
    }
  };

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleTabClick((activeTab + 1) % 3);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTab, isAnimating]);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-20 overflow-hidden"
    >
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-balck mb-6"
      >
        <PiSlideshowDuotone className='text-gray-400' />
        <p>Results</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          Medi2AI Impact & Results
        </h1>
        <p 
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          Transforming healthcare with AI-powered solutions for patients and providers
        </p>
      </div>

      <div 
        ref={tabsRef}
        className='bg-white p-4 rounded-xl shadow-lg shadow-gray-400 mt-7 w-full max-w-6xl overflow-hidden'
      >
        <div className='grid grid-cols-3 gap-4 w-full'>
          {tabData.map((tab, index) => (
            <p 
              key={index}
              className={`px-3 py-3 text-center rounded-lg cursor-pointer transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-white text-black shadow-lg font-medium' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick(index)}
            >
              Result {index + 1}
            </p>
          ))}
        </div>

        <div className="mt-7 w-full flex flex-col lg:flex-row items-center gap-6 overflow-hidden">
          {/* Left column - Image (animates from left) */}
          <div className="w-full lg:w-1/2 overflow-hidden">
            <img
              ref={imageRef}
              src={tabData[activeTab].image}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
              alt="Result"
            />
          </div>

          {/* Right column - Content (animates from right) */}
          <div 
            ref={contentRef}
            className="w-full lg:w-1/2 overflow-hidden"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#30C1A0]">0{activeTab + 1}</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mt-2">{tabData[activeTab].title}</h3>
            <p className="text-base md:text-lg text-gray-600 mt-4">{tabData[activeTab].description}</p>

            <div className='mt-8 pb-7 grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {tabData[activeTab].stats.map((stat, index) => (
                <div 
                  key={index}
                  ref={el => statsRef.current[index] = el}
                  className="bg-white p-5 shadow-lg shadow-gray-400 flex flex-col items-center rounded-xl"
                >
                  <h2 
                    ref={el => numberRefs.current[index] = el}
                    className='text-3xl md:text-4xl font-bold text-[#30C1A0]'
                  >
                    {stat.value}{stat.label.includes('%') ? '%' : 'x'}
                  </h2>
                  <p className='text-base md:text-lg text-gray-700 text-center mt-2'>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;