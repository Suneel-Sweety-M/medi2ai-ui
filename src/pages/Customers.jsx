import React, { useEffect, useRef } from 'react'
import { FaHeart } from "react-icons/fa6";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Customers = () => {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const testimonial1Ref = useRef(null);
  const testimonial2Ref = useRef(null);
  const testimonial3Ref = useRef(null);
  const testimonial4Ref = useRef(null);
  const statsRef = useRef([]);
  const numbersRef = useRef([]);

  useEffect(() => {
    // GSAP Animations with ScrollTrigger
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
            start: "top 85%",
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

      // First testimonial animation (left side)
      gsap.fromTo(testimonial1Ref.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonial1Ref.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Image testimonial animation (right side)
      gsap.fromTo(".testimonial-image",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonial-image",
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Small testimonials animation (staggered)
      gsap.fromTo([testimonial2Ref.current, testimonial3Ref.current, testimonial4Ref.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonial2Ref.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Stats section animation
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Number counting animation for stats
      numbersRef.current.forEach((ref, index) => {
        if (ref) {
          let targetValue;
          let suffix = '';
          
          if (index === 0) targetValue = 1000;
          else if (index === 1) {
            targetValue = 95;
            suffix = '%';
          } else if (index === 2) targetValue = 10;
          
          gsap.fromTo(ref, 
            { innerText: 0 },
            {
              innerText: targetValue,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 90%",
                toggleActions: "play none none none"
              },
              onUpdate: function() {
                ref.textContent = Math.floor(this.targets()[0].innerText) + suffix;
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-20 overflow-hidden"
    >
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-balck mb-6"
      >
        <FaHeart className='text-gray-400' />
        <p>Customers</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          What Our Clients Say
        </h1>
        <p 
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          Join customers who trust AI to transform their business.
        </p>
      </div>

      <div className='mt-10 flex flex-col gap-5 w-full max-w-6xl'>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div 
            ref={testimonial1Ref}
            className='p-4 bg-white flex w-full lg:w-[60%] relative flex-col items-center gap-3 rounded-xl' 
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
          >
            <h4 className='text-xl md:text-2xl text-center font-[600]'>
              Their <span className='text-[#30C1A0]'>AI-driven</span> approach helped us reach the right audience and <span className='text-[#30C1A0]'>grow faster</span> with smarter insights—streamlining our strategy, improving engagement, and <span className='text-[#30C1A0]'>delivering results</span> we couldn't achieve before.
            </h4>
            <img src='/quotes.svg' className='h-10 w-10 absolute bottom-5 hidden lg:block' alt="quotes" />
          </div>

          <div className='bg-white rounded-xl p-4 w-full lg:w-[40%] testimonial-image' style={{ boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}>
            <img src='/c1.png' className='h-[300px] object-cover rounded-xl w-full' alt="Customer" />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div 
            ref={testimonial2Ref}
            className='bg-white h-[200px] md:h-[250px] relative rounded-xl p-4' 
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
          >
            <p>We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us</p>

            <div className='flex items-center gap-3 mt-5 absolute bottom-5'>
              <img src='/doctor1.png' className='h-10 w-10 object-cover rounded-sm' alt="Customer"/>
              <div className="h-10 border-l-2 border-dashed border-gray-400"/>
              <div className='leading-[20px]'>
                <p className='text-lg md:text-[20px]'>Brendan</p>
                <p className='text-sm md:text-[15px] text-gray-600'>Director of Product</p>
              </div>
            </div>
          </div>

          <div 
            ref={testimonial3Ref}
            className='bg-white rounded-xl h-[200px] md:h-[250px] relative p-4' 
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
          >
            <p>Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We're already seeing results.</p>

            <div className='flex items-center gap-3 mt-5 absolute bottom-5'>
              <img src='/doctor2.png' className='h-10 w-10 object-cover rounded-sm' alt="Customer"/>
              <div className="h-10 border-l-2 border-dashed border-gray-400"/>
              <div className='leading-[20px]'>
                <p className='text-lg md:text-[20px]'>Lena M</p>
                <p className='text-sm md:text-[15px] text-gray-600'>Manager at NovaTech</p>
              </div>
            </div>
          </div>

          <div 
            ref={testimonial4Ref}
            className='bg-white rounded-xl p-4 h-[200px] md:h-[250px] relative' 
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
          >
            <p>From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction</p>

            <div className='flex items-center gap-3 mt-5 absolute bottom-5'>
              <img src='/doctor3.png' className='h-10 w-10 object-cover rounded-sm' alt="Customer"/>
              <div className="h-10 border-l-2 border-dashed border-gray-400"/>
              <div className='leading-[20px]'>
                <p className='text-lg md:text-[20px]'>Eli R</p>
                <p className='text-sm md:text-[15px] text-gray-600'>COO at GridFrame</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={el => statsRef.current[0] = el}
        className='flex items-center  gap-3 mt-10 justify-between w-full max-w-4xl'
      >
        <div 
          ref={el => statsRef.current[1] = el}
          className='flex flex-col md:items-center leading-[34px]'
        >
          <h1 
            ref={el => numbersRef.current[0] = el}
            className='text-3xl md:text-[35px] font-semibold'
          >
            1000+
          </h1>
          <p className='text-sm md:text-[17px] text-gray-600'>Success Stories</p>
        </div>

        <div className='h-[60px] w-[1px] bg-gray-300'/>

        <div 
          ref={el => statsRef.current[2] = el}
          className='flex flex-col md:items-center leading-[34px]'
        >
          <h1 
            ref={el => numbersRef.current[1] = el}
            className='text-3xl md:text-[35px] font-semibold'
          >
            95%
          </h1>
          <p className='text-sm md:text-[17px] text-gray-600'>Client Satisfaction</p>
        </div>

        <div className='h-[60px] w-[1px] bg-gray-300'/>

        <div 
          ref={el => statsRef.current[3] = el}
          className='flex flex-col md:items-center leading-[34px]'
        >
          <h1 
            ref={el => numbersRef.current[2] = el}
            className='text-3xl md:text-[35px] font-semibold'
          >
            10+
          </h1>
          <p className='text-sm md:text-[17px] text-gray-600'>Years Of Experience</p>
        </div>
      </div>
    </div>
  )
}

export default Customers