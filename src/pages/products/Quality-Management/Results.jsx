import React, { useEffect, useRef } from 'react';
import { GiArtificialIntelligence } from "react-icons/gi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Results = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const numbersRef = useRef([]);
  const iconsRef = useRef([]);

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

      // Cards animation
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

      // Number animations
      numbersRef.current.forEach((number, index) => {
        gsap.fromTo(number,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.3 + (index * 0.1),
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: number,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Icon animations
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

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className=" py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-20"
    >
      {/* Section Header */}
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6"
      >
        <GiArtificialIntelligence />
        <p>Quality Results</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight max-w-4xl"
        >
          Improve quality metrics, improve quality of care
        </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-7 w-full max-w-7xl'>
        {/* Card 1 */}
        <div 
          ref={el => cardsRef.current[0] = el}
          className="bg-white p-5 rounded-3xl" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
        >
          <div 
            ref={el => iconsRef.current[0] = el}
            className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400'
          >
            <GiArtificialIntelligence size={20} />
          </div>

          <div className='mt-5 space-y-1'>
            <h1 
              ref={el => numbersRef.current[0] = el}
              className='text-4xl md:text-[50px] font-semibold'
            >
              100%
            </h1>
            <p className='text-sm md:text-[15px] text-gray-700'>
              Patient coverage with automated data scrub
            </p>
          </div>

          {/* divider */}
          <div className='bg-gray-300 w-full h-[1px] my-5' />

          <div className='flex items-center justify-between'>
            <span className='text-lg font-medium text-[#30C1A0]'>Result 01</span>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 bg-black rounded-full' />
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          ref={el => cardsRef.current[1] = el}
          className="bg-white p-5 rounded-3xl" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
        >
          <div 
            ref={el => iconsRef.current[1] = el}
            className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400'
          >
            <GiArtificialIntelligence size={20} />
          </div>

          <div className='mt-5 space-y-1'>
            <h1 
              ref={el => numbersRef.current[1] = el}
              className='text-4xl md:text-[50px] font-semibold'
            >
              12%
            </h1>
            <p className='text-sm md:text-[15px] text-gray-700'>
              Increase in measure satisfaction rates
            </p>
          </div>

          {/* divider */}
          <div className='bg-gray-300 w-full h-[1px] my-5' />

          <div className='flex items-center justify-between'>
            <span className='text-lg font-medium text-[#30C1A0]'>Result 02</span>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
              <div className='h-2 w-2 bg-black rounded-full' />
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          ref={el => cardsRef.current[2] = el}
          className="bg-white p-5 rounded-3xl" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
        >
          <div 
            ref={el => iconsRef.current[2] = el}
            className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400'
          >
            <GiArtificialIntelligence size={20} />
          </div>

          <div className='mt-5 space-y-1'>
            <h1 
              ref={el => numbersRef.current[2] = el}
              className='text-4xl md:text-[50px] font-semibold'
            >
              1 in 3
            </h1>
            <p className='text-sm md:text-[15px] text-gray-700'>
              Gaps closed based on evidence found by Medi2AI
            </p>
          </div>

          {/* divider */}
          <div className='bg-gray-300 w-full h-[1px] my-5' />

          <div className='flex items-center justify-between'>
            <span className='text-lg font-medium text-[#30C1A0]'>Result 03</span>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
              <div className='h-2 w-2 bg-black rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;