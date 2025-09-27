import React, { useEffect, useRef } from 'react';
import { GiArtificialIntelligence } from "react-icons/gi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
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

      // Header badge animation
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

      // Title animation
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

      // Subtitle animation
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

      // Button animation
      gsap.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className=" py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-20 "
    >
     

      <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <div className="text-start">
            <h1
              ref={titleRef}
              style={{ fontFamily: "Satoshi, sans-serif" }}
              className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
            >
              Boost quality performance with{' '}
              <span className="text-[#30C1A0]">AI-powered</span> care gap management
            </h1>
            <p 
              ref={subtitleRef}
              className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
            >
              Automate and streamline your quality management workflow. Close more care gaps without hours of data mining.
            </p>
           
          </div>
        </div>

        {/* Image Content */}
        <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden ">
            <img 
              ref={imageRef}
              src='/qm.jpg' 
              alt='AI Care Management' 
              className='mt-5 rounded-xl w-full h-64 object-cover' 
            />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;