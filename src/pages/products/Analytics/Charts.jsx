import React, { useEffect, useRef } from 'react';
import { GiArtificialIntelligence } from "react-icons/gi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Charts = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const chartsRef = useRef([]);
  const imagesRef = useRef([]);
  const iconsRef = useRef([]);
  const numbersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation
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

      // Header animation
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

      // Charts animation
      gsap.fromTo(chartsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: chartsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Image animations
      gsap.fromTo(imagesRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Icon animations
      gsap.fromTo(iconsRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: iconsRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Number animations
      numbersRef.current.forEach((number, index) => {
        gsap.fromTo(number,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.4 + (index * 0.1),
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: number,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black "
    >
      {/* Section Header */}
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6"
      >
        <GiArtificialIntelligence />
        <p>Advanced Analytics</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight max-w-4xl"
        >
          Value-Based Performance Insights
        </h1>
      </div>

      {/* Chart 1 */}
      <div className='w-full max-w-7xl'>
        <div 
        ref={el => chartsRef.current[0] = el}
        className="bg-white p-5 rounded-3xl mb-8 w-full " style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 ">
          <div className="lg:w-1/2">
            <div 
              ref={el => iconsRef.current[0] = el}
              className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400'
            >
              <GiArtificialIntelligence size={20} />
            </div>

            <div className='mt-5 space-y-1'>
              <h2 className='text-2xl md:text-[25px]'>Enhance provider engagement with value-based goals</h2>
              <p className='text-sm md:text-[15px] text-gray-700'>
                Track usage and performance metrics by clinic, location, and individual users. Identify areas of friction and opportunities for training.
              </p>
            </div>

            <div className='flex items-center justify-between mt-6'>
              <h1 
                ref={el => numbersRef.current[0] = el}
                className='text-4xl md:text-[50px] font-semibold text-[#30C1A0]'
              >
                01
              </h1>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 bg-black rounded-full' />
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img 
              ref={el => imagesRef.current[0] = el}
              src="/analytics1.jpg" 
              alt="Provider Engagement" 
              className="rounded-xl w-full h-64 object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Chart 2 */}
      <div 
        ref={el => chartsRef.current[1] = el}
        className="bg-white p-5 rounded-3xl mb-8 w-full" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <img 
              ref={el => imagesRef.current[1] = el}
              src="/analytics2.jpg" 
              alt="HCC Transition" 
              className="rounded-xl w-full h-64 object-cover" 
            />
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div 
              ref={el => iconsRef.current[1] = el}
              className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400'
            >
              <GiArtificialIntelligence size={20} />
            </div>

            <div className='mt-5 space-y-1'>
              <h2 className='text-2xl md:text-[25px]'>Navigate the transition to HCC V28</h2>
              <p className='text-sm md:text-[15px] text-gray-700'>
                Medi2AI supports both HCC V24 and V28 risk adjustment models, enabling you to seamlessly transition during the blended period and beyond.
              </p>
            </div>

            <div className='flex items-center justify-between mt-6'>
              <h1 
                ref={el => numbersRef.current[1] = el}
                className='text-4xl md:text-[50px] font-semibold text-[#30C1A0]'
              >
                02
              </h1>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
                <div className='h-2 w-2 bg-black rounded-full' />
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart 3 */}
      <div 
        ref={el => chartsRef.current[2] = el}
        className="bg-white p-5 rounded-3xl w-full" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2">
            <div 
              ref={el => iconsRef.current[2] = el}
              className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400'
            >
              <GiArtificialIntelligence size={20} />
            </div>

            <div className='mt-5 space-y-1'>
              <h2 className='text-2xl md:text-[25px]'>Delve deeper with maximum flexibility</h2>
              <p className='text-sm md:text-[15px] text-gray-700'>
                Medi2AI's analytics platform offers unparalleled connectivity, allowing for seamless integration of clinical insights into your existing business intelligence dashboards.
              </p>
            </div>

            <div className='flex items-center justify-between mt-6'>
              <h1 
                ref={el => numbersRef.current[2] = el}
                className='text-4xl md:text-[50px] font-semibold text-[#30C1A0]'
              >
                03
              </h1>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
                <div className='h-2 w-2 bg-gray-400 rounded-full' />
                <div className='h-2 w-2 bg-black rounded-full' />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img 
              ref={el => imagesRef.current[2] = el}
              src="/analytics3.jpg" 
              alt="Flexible Analytics" 
              className="rounded-xl w-full h-64 object-cover" 
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Charts;