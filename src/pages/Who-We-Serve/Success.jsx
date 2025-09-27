import React, { useRef, useEffect } from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoDiamond } from "react-icons/io5";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Success = () => {
  // Refs for GSAP animations - matching OurSuccess component structure
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const contentRefs = useRef([]);

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

      // Content animations - FAST
      gsap.fromTo(contentRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRefs.current[0],
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

  const successCards = [
    {
      icon: FaUserDoctor,
      title: "Chart review",
      description: "Advanced AI-powered chart analysis for comprehensive patient insights",
      number: "01"
    },
    {
      icon: HiOutlineLightBulb,
      title: "Risk adjustment",
      description: "Intelligent risk assessment and adjustment algorithms",
      number: "02"
    },
    {
      icon: IoDiamond,
      title: "Quality Management",
      description: "End-to-end quality control and management solutions",
      number: "03"
    },
    {
      icon: IoAnalyticsOutline,
      title: "Analytics",
      description: "Deep analytics and actionable insights for better decisions",
      number: "04"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center  text-black rounded-[10%] mt-20 "
    >
      {/* Section Header - Matching OurSuccess style */}
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6"
      >
        <BsStars />
        <p>Our Success Suite</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          The full suite for<br />value-based success
        </h1>
        <p 
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          Comprehensive solutions designed to drive excellence in value-based care delivery
        </p>
      </div>

      {/* Success Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-7 w-full max-w-7xl">
        {successCards.map((card, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="bg-white p-5 rounded-3xl overflow-hidden hover:cursor-pointer transition-all duration-300 flex flex-col"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
          >
            {/* Icon and Number Section */}
            <div className="flex items-center justify-between mb-4">
              <div 
                ref={el => iconsRef.current[index] = el}
                className="bg-black text-white p-3 rounded-xl w-fit shadow-lg shadow-gray-400"
              >
                <card.icon className="text-xl" />
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${
                  index === 0 ? 'bg-black' : 'bg-gray-400'
                }`} />
                <div className={`h-2 w-2 rounded-full ${
                  index === 1 ? 'bg-black' : 'bg-gray-400'
                }`} />
                <div className={`h-2 w-2 rounded-full ${
                  index === 2 ? 'bg-black' : 'bg-gray-400'
                }`} />
                <div className={`h-2 w-2 rounded-full ${
                  index === 3 ? 'bg-black' : 'bg-gray-400'
                }`} />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow">
              <h3 
                ref={el => contentRefs.current[index * 2] = el}
                className="text-xl md:text-[22px] font-semibold mb-3 text-gray-800"
              >
                {card.title}
              </h3>
              
              <p 
                ref={el => contentRefs.current[index * 2 + 1] = el}
                className="text-sm text-gray-600 mb-4 leading-relaxed"
              >
                {card.description}
              </p>
            </div>

            {/* Divider and Footer */}
            <div className="bg-gray-300 w-full h-[1px] my-3" />
            
            <div className="flex items-center justify-between mt-2">
              <span className="text-2xl md:text-[28px] font-semibold text-[#30C1A0]">
                {card.number}
              </span>
              
              <div className="flex items-center text-black gap-2 group cursor-pointer">
                <span className="text-sm font-medium group-hover:underline">Read more</span>
                <FaArrowRightLong className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section - Styled to match */}
      <div 
        ref={el => contentRefs.current[8] = el}
        className="mt-12 bg-white p-6 rounded-3xl w-full max-w-2xl text-center"
        style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          Ready to unlock your success potential?
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Discover how our suite of solutions can transform your value-based care initiatives.
        </p>
        <div className="bg-[#30C1A0] hover:bg-black text-white px-6 py-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 w-fit mx-auto">
          <span>Explore Solutions</span>
          <FaArrowRightLong className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Success;