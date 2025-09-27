import React, { useEffect, useRef } from 'react'
import { GiArtificialIntelligence } from "react-icons/gi"
import { SiGoogleanalytics } from "react-icons/si";
import { CiSaveUp2 } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const OurSuccess = () => {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const numbersRef = useRef([]);

  useEffect(() => {
    // GSAP Animations with ScrollTrigger - Fast loading
    const ctx = gsap.context(() => {
      // Section entrance animation - FAST
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6, // Faster duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%", // Trigger earlier
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
          duration: 0.5, // Faster duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%", // Trigger earlier
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
          duration: 0.6, // Faster duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%", // Trigger earlier
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
          duration: 0.5, // Faster duration
          delay: 0.1, // Shorter delay
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 90%", // Trigger earlier
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
          duration: 0.6, // Faster duration
          stagger: 0.1, // Faster stagger
          delay: 0.2, // Shorter delay
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%", // Trigger earlier
            toggleActions: "play none none none"
          }
        }
      );

      // Number animations - FAST with count-up effect
      numbersRef.current.forEach((number, index) => {
        gsap.fromTo(number,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5, // Faster duration
            delay: 0.3 + (index * 0.1), // Shorter staggered delay
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: number,
              start: "top 90%", // Trigger earlier
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Image animations - FAST
      gsap.fromTo(imagesRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7, // Faster duration
          stagger: 0.1, // Faster stagger
          delay: 0.4, // Shorter delay
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current[0],
            start: "top 85%", // Trigger earlier
            toggleActions: "play none none none"
          }
        }
      );

      // Icon animations - FAST
      gsap.fromTo(".success-icon",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5, // Faster duration
          stagger: 0.08, // Faster stagger
          delay: 0.2, // Shorter delay
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".success-icon",
            start: "top 90%", // Trigger earlier
            toggleActions: "play none none none"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black rounded-[10%] mt-20"
    >
      {/* Section Header */}
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-balck mb-6"
      >
        <GiArtificialIntelligence />
        <p>Our AI Success</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          Medi2AI in Action
        </h1>
        <p 
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          Real-world healthcare success powered by AI-driven intelligence
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-4 mt-7 w-full max-w-6xl'>
        {/* Card 1 */}
        <div 
          ref={el => cardsRef.current[0] = el}
          className="bg-white p-5 rounded-3xl lg:w-1/2 overflow-hidden" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
        >
          <div className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400 success-icon'>
            <SiGoogleanalytics size={20} />
          </div>

          <div className='mt-5 space-y-1'>
            <h2 className='text-2xl md:text-[25px]'>Clinical Workflow Analysis</h2>
            <p className='text-sm md:text-[15px] text-gray-700'>
              Medi2AI evaluates hospital workflows to pinpoint where AI can improve efficiency and reduce delays in patient care.
            </p>
          </div>

          {/* divider */}
          <div className='bg-gray-300 w-full h-[1px] my-5' />

          <div className='flex items-center justify-between'>
            <h1 
              ref={el => numbersRef.current[0] = el}
              className='text-4xl md:text-[50px] font-semibold'
            >
              01
            </h1>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 bg-black rounded-full' />
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
            </div>
          </div>

          <div className='h-full'>
            <img 
              ref={el => imagesRef.current[0] = el}
              src='/phone.png' 
              alt='AI Workflow' 
              className='mt-5 rounded-xl h-full pb-4 object-cover w-full' 
            />
          </div>
        </div>

        {/* Card 2 & 3 */}
        <div className='flex flex-col gap-4 lg:w-1/2'>
          {/* Card 2 */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="bg-white p-5 rounded-3xl" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
          >
            <div className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400 success-icon'>
              <CiSaveUp2 size={20} />
            </div>

            <div className='mt-5 space-y-1'>
              <h2 className='text-2xl md:text-[25px]'>AI Deployment for Hospitals</h2>
              <p className='text-sm md:text-[15px] text-gray-700'>
                We deliver custom AI systems for diagnostics and patient monitoring, ensuring safety, compliance, and measurable outcomes.
              </p>
            </div>

            {/* divider */}
            <div className='bg-gray-300 w-full h-[1px] my-5' />

            <div className='flex items-center justify-between'>
              <h1 
                ref={el => numbersRef.current[1] = el}
                className='text-4xl md:text-[50px] font-semibold'
              >
                02
              </h1>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
                <div className='h-2 w-2 bg-black rounded-full' />
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
              </div>
            </div>

            <img 
              ref={el => imagesRef.current[1] = el}
              src='/drone.png' 
              alt='AI Deployment' 
              className='mt-5 rounded-xl h-[200px] w-full object-cover' 
            />
          </div>

          {/* Card 3 */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="bg-white p-5 rounded-3xl" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
          >
            <div className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400 success-icon'>
              <RiCustomerService2Fill size={20} />
            </div>

            <div className='mt-5 space-y-1'>
              <h2 className='text-2xl md:text-[25px]'>Continuous AI Support</h2>
              <p className='text-sm md:text-[15px] text-gray-700'>
                After deployment, Medi2AI ensures 24/7 support, retrains AI models, and adapts to evolving healthcare needs.
              </p>
            </div>

            {/* divider */}
            <div className='bg-gray-300 w-full h-[1px] my-5' />

            <div className='flex items-center justify-between'>
              <h1 
                ref={el => numbersRef.current[2] = el}
                className='text-4xl md:text-[50px] font-semibold'
              >
                03
              </h1>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
                <div className='h-2 w-2 bg-black rounded-full' />
              </div>
            </div>

            <img 
              ref={el => imagesRef.current[2] = el}
              src='/vr.png' 
              alt='AI Support' 
              className='mt-5 h-[200px] w-full object-cover rounded-xl' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurSuccess