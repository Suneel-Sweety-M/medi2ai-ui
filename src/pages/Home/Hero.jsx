import React, { useState, useRef, useEffect } from 'react'
import { BsStars } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import Lottie from "lottie-react";
import aiAnimation from "../../animations/hero.json";
import aiAnimation1 from "../../animations/hero1.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Refs for animation elements
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const featuresRef = useRef(null);
  const buttonsRef = useRef(null);
  const lottieRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main heading animation
      gsap.fromTo(headingRef.current, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Subheading animation
      gsap.fromTo(subheadingRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Features list animation (staggered)
      gsap.fromTo(".feature-item", 
        { x: -30, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Buttons animation
      gsap.fromTo(buttonsRef.current, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Lottie animation entrance
      gsap.fromTo(lottieRef.current, 
        { x: 100, opacity: 0, rotation: -5 },
        { 
          x: 0, 
          opacity: 1, 
          rotation: 0,
          duration: 1.5, 
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: lottieRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Continuous subtle animations
      gsap.to(".float-animation", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Button hover animations
      const buttons = document.querySelectorAll('.cta-button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, heroRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={heroRef}
      className="flex flex-col  lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 lg:py-0 overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-2/5 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
        <h1 
          ref={headingRef}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-gray-800 my-4 font-bold text-left lg:text-left leading-tight lg:leading-snug xl:leading-tight 2xl:leading-snug'
        >
          Elevate every patient interaction
        </h1>

        <p 
          ref={subheadingRef}
          className="mt-5 text-base sm:text-lg md:text-xl lg:text-[13px] xl:text-lg  font-semibold text-left lg:text-left text-gray-600"
        >
          The AI copilot that brings clinical intelligence to value-based care.
        </p>

        {/* Features list */}
        <div ref={featuresRef} className="mt-6 md:mt-8 ">
          <div className="feature-item flex items-center justify-start lg:justify-start gap-3 mb-4">
            <div className="bg-[#30C1A0] p-1.5 sm:p-2 rounded-full">
              <BsStars className="text-white text-sm sm:text-base" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">AI-powered clinical decision support</p>
          </div>
          
          <div className="feature-item flex items-center justify-start lg:justify-start gap-3 mb-4">
            <div className="bg-[#30C1A0] p-1.5 sm:p-2 rounded-full">
              <BsStars className="text-white text-sm sm:text-base" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Real-time patient data analysis</p>
          </div>
          
          <div className="feature-item flex items-center justify-start lg:justify-start gap-3">
            <div className="bg-[#30C1A0] p-1.5 sm:p-2 rounded-full">
              <BsStars className="text-white text-sm sm:text-base" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Predictive analytics for better outcomes</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          ref={buttonsRef}
          className="flex  sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5 mt-8 md:mt-10 text-sm sm:text-base md:text-lg"
        >
          <div className="cta-button bg-black flex items-center gap-2 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
            <p>Book a Call</p>
            <FiArrowUpRight />
          </div>

          <div className="cta-button bg-gray-50 border-t border-[#30C1A0] text-black px-6 py-3 md:px-8 md:py-4 rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
            <p>See Our Services</p>
          </div>
        </div>
      </div>

      {/* RIGHT LOTTIE ANIMATION */}
      <div 
        ref={lottieRef}
        className="w-full lg:w-1/2 xl:w-1/2 2xl:w-3/5 mt-5 lg:mt-0 flex justify-center order-1 lg:order-2 "
      >
        <Lottie 
          animationData={aiAnimation1} 
          loop={true} 
          className="w-full h-64 mt-5 md:mt-0 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[750px] lg:h-[450px] xl:w-[800px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[500px]" 
        />
      </div>
    </div>
  )
}

export default Hero