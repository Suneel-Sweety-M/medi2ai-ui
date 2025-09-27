import React, { useState, useRef, useEffect } from 'react';
import { BsStars } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Choose = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Refs for GSAP animations - matching OurSuccess structure
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const contentRefs = useRef([]);
  const navRef = useRef(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Benjamin Cook",
      title: "CEO, Cook Medical Group",
      image: "/doctor1.png",
      testimonial: "We chose Medi2AI because it was light years ahead of other systems that worked with our electronic record. Over 90% of our doctors used Medi2AI within the first week. Now we have every doctor using every day."
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer, HealthPlus Network",
      image: "/doctor2.png",
      testimonial: "Medi2AI has transformed our diagnostic process with its incredible accuracy. Our patient outcomes have improved by 35% since implementation, and our medical team absolutely loves the intuitive interface."
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      title: "Director of Innovation, Urban Medical Center",
      image: "/doctor3.png",
      testimonial: "The predictive analytics capabilities of Medi2AI are simply unmatched. We've reduced diagnostic errors by 42% and improved efficiency across all our departments. It's like having an expert consultant available 24/7."
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

      // Cards animation - FAST
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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

      // Image animations - FAST
      gsap.fromTo(imagesRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Navigation animation - FAST
      gsap.fromTo(navRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: navRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [doctors.length]);

  const nextDoctor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center  text-black w-full "
    >
      {/* Section Header - Matching OurSuccess style */}
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6"
      >
        <BsStars />
        <p>Testimonials</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-4xl md:text-[45px] font-normal leading-tight"
        >
          The most innovative <span className="bg-[#30C1A0]/50 px-2">value-based</span> organizations choose Medi2AI
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative  mt-7">
        {/* Navigation arrows */}
        <button 
          onClick={prevDoctor}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg interactive-element"
          style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextDoctor}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg interactive-element"
          style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Content */}
        <div 
          ref={el => cardsRef.current[0] = el}
          className="bg-white p-6 rounded-3xl interactive-element"
          style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Image */}
            <div className="flex-shrink-0">
              <img 
                ref={el => imagesRef.current[0] = el}
                src={doctors[currentIndex].image} 
                alt={doctors[currentIndex].name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-100"
              />
            </div>

            {/* Content */}
            <div className="flex-grow text-center md:text-left">
              <p 
                ref={el => contentRefs.current[0] = el}
                className="text-lg italic text-gray-700 mb-4 leading-relaxed"
              >
                "{doctors[currentIndex].testimonial}"
              </p>
              
              <div>
                <h3 
                  ref={el => contentRefs.current[1] = el}
                  className="text-xl font-semibold text-gray-800"
                >
                  {doctors[currentIndex].name}
                </h3>
                <h4 
                  ref={el => contentRefs.current[2] = el}
                  className="text-gray-600"
                >
                  {doctors[currentIndex].title}
                </h4>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-gray-300 w-full h-[1px] my-6" />

          {/* Navigation Dots */}
          <div 
            ref={navRef}
            className="flex justify-center items-center gap-4"
          >
            <span className="text-sm text-gray-600">{String(currentIndex + 1).padStart(2, '0')}</span>
            
            <div className="flex gap-2">
              {doctors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <span className="text-sm text-gray-600">{String(doctors.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;