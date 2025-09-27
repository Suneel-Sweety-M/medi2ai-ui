import React, { useState, useRef, useEffect } from 'react';
import { BsStars } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridDistortion from './GridDistortion';
import Services from './Services';
import Success from './Success';
import Choose from './Choose';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Providers = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Refs for animation elements - matching OurSuccess structure
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const overlayRef = useRef(null);
  const ctaRef = useRef(null);
  const sectionsRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubscribed(true);
    setEmail('');
    
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

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

      // Overlay animation - FAST
      gsap.fromTo(overlayRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: overlayRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // CTA button animation - FAST
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Sections animations (staggered) - FAST
      gsap.fromTo(sectionsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Hover animations for interactive elements
      const interactiveElements = document.querySelectorAll('.interactive-element');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 0 30px rgba(0,0,0,0.2)"
          });
        });
        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 0 20px rgba(0,0,0,0.15)"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen  w-full py-7 flex flex-col items-center justify-center  text-black pt-22 "
    >
      {/* Background Image Distortion Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[600px] overflow-hidden rounded-3xl mb-12 shadow-xl shadow-gray-400 ">
        <GridDistortion
          imageSrc="/wws1.jpg"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div 
            ref={overlayRef}
            className="bg-white p-6 rounded-3xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl text-center interactive-element"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
          >
           

            <h2 
              ref={titleRef}
              style={{ fontFamily: "Satoshi, sans-serif" }}
              className="text-3xl sm:text-4xl md:text-[45px] font-normal leading-tight mb-4"
            >
              Who We Serve
            </h2>
            <p 
              ref={subtitleRef}
              className="text-sm sm:text-[15px] text-gray-700"
            >
              Medi2AI works with organizations across the healthcare landscape to transform
              clinical and financial performance through AI-powered solutions designed for
              value-based care.
            </p>
            
            {/* CTA Button */}
            <div 
              ref={ctaRef}
              className="mt-6 bg-black/90 hover:bg-black text-white px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 w-fit mx-auto interactive-element"
            >
              <span>Learn More</span>
              <FiArrowUpRight className="text-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gray-300 w-full h-[1px] my-8 max-w-4xl" />

      {/* Services Section */}
      <div 
        ref={el => sectionsRef.current[0] = el}
        className="w-full max-w-7xl "
      >
        <Services />
      </div>

      {/* Success Section */}
      <div 
        ref={el => sectionsRef.current[1] = el}
        className="w-full max-w-7xl  mt-12"
      >
        <Success />
      </div>

      {/* Choose Section */}
      <div 
        ref={el => sectionsRef.current[2] = el}
        className="w-full max-w-7xl  mt-12"
      >
        <Choose />
      </div>

      {/* CTA Section */}
      <div 
        ref={el => sectionsRef.current[3] = el}
        className="bg-white p-8 rounded-3xl w-full max-w-7xl mx-auto text-center mt-12 "
        style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
      >
        <div 
          ref={headerRef}
          className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6 mx-auto"
        >
          <BsStars />
          <p>Get Started</p>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Ready to Transform Your Healthcare Organization?
        </h3>
        <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
          Join hundreds of healthcare providers using Medi2AI to enhance patient care and operational efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-[#30C1A0] hover:bg-black text-white px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 interactive-element">
            <span>Schedule a Demo</span>
            <FiArrowUpRight />
          </div>
          <div className="bg-white border border-gray-300 text-black px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 interactive-element">
            <span>Contact Sales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;