import React, { useEffect, useRef } from 'react';
import { BsStars } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  // Refs for GSAP animations - matching OurSuccess component structure
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const iconsRef = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    // GSAP Animations with ScrollTrigger - Fast loading (same as OurSuccess)
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

      // Image animations - FAST
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

      // Hover animations for service cards (matching OurSuccess style)
      cardsRef.current.forEach((card, index) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -5,
              duration: 0.3,
              ease: "power2.out",
              boxShadow: "0 0 30px rgba(0,0,0,0.2)"
            });
            gsap.to(imagesRef.current[index], {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
              boxShadow: "0 0 20px rgba(0,0,0,0.15)"
            });
            gsap.to(imagesRef.current[index], {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Service data with highlighted words
  const services = [
    {
      id: 1,
      title: "Physician Groups & Health Systems",
      number: "01",
      image: '/service1.jpg',
      alt: 'Physician groups & health systems',
      layout: 'image-right', // Image on right, content on left
      paragraphs: [
        "Physician groups and health systems use <span class='text-[#30C1A0]'>Medi2AI</span> to <span class='text-[#30C1A0]'>reduce provider burnout</span> and improve care quality by <span class='text-[#30C1A0]'>embedding clinical AI</span> directly into the point of care, seamlessly within their existing <span class='text-[#30C1A0]'>EHR workflows</span>.",
        "By equipping clinicians with the insights they need in real time, organizations can <span class='text-[#30C1A0]'>close more care gaps</span>, improve coding accuracy, and <span class='text-[#30C1A0]'>ease administrative burdens</span>.",
        "The results are <span class='text-[#30C1A0]'>better patient care</span>, audit-ready coding, optimized and predictable revenue, and greater confidence to take on additional risk in <span class='text-[#30C1A0]'>value-based contracts</span>."
      ]
    },
    {
      id: 2,
      title: "ACOs & MSOs",
      number: "02",
      image: '/acos2.jpg',
      alt: 'ACOs & MSOs',
      layout: 'image-left', // Image on left, content on right
      paragraphs: [
        "Accountable Care Organizations (ACOs) and Management Services Organizations (MSOs) rely on Medi2AI to <span class='text-[#30C1A0]'>empower their provider networks</span> with the clinical intelligence needed for <span class='text-[#30C1A0]'>accurate documentation</span>, proactive care decisions, and improved quality performance.",
        "By ensuring conditions and care gaps are addressed correctly from the start by the physician, Medi2AI helps <span class='text-[#30C1A0]'>reduce reliance on costly retrospective reviews</span>, drive Stars and HEDIS® performance, and support <span class='text-[#30C1A0]'>audit readiness</span>.",
        "The result is <span class='text-[#30C1A0]'>more complete and timely data</span>, better care, and stronger financial outcomes tied to <span class='text-[#30C1A0]'>value-based contracts</span>."
      ]
    },
    {
      id: 3,
      title: "Health Plans",
      number: "03",
      image: '/healthplan1.jpg',
      alt: 'Health plans',
      layout: 'image-right', // Image on right, content on left
      paragraphs: [
        "Health plans partner with <span class='text-[#30C1A0]'>Medi2ai</span> to <span class='text-[#30C1A0]'>optimize value-based performance</span> across Medicare Advantage, Marketplace (ACA), and Managed Medicaid programs.",
        "Whether plans are conducting retrospective reviews or adopting prospective workflows, Medi2AI enables <span class='text-[#30C1A0]'>real-time tracking</span> of risk adjustment and quality performance, helping payers prepare for audits and <span class='text-[#30C1A0]'>drive better outcomes</span>.",
        "By transitioning to prospective models, payers can <span class='text-[#30C1A0]'>enhance coding accuracy</span>, elevate quality scores, improve financial results, and foster stronger engagement with the <span class='text-[#30C1A0]'>physicians delivering care</span>."
      ]
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black rounded-[10%] mt-20"
    >
      {/* Section Header - Matching OurSuccess style */}
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6"
      >
        <BsStars />
        <p>Our Services</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          Healthcare AI Solutions
        </h1>
        <p 
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          Empowering healthcare organizations with AI-driven solutions for better patient outcomes and operational excellence.
        </p>
      </div>

      {/* Service Cards Container */}
      <div className='flex flex-col gap-8 mt-7 w-full max-w-7xl'>
        {services.map((service, index) => (
          <div 
            key={service.id}
            ref={el => cardsRef.current[index] = el}
            className="bg-white p-6 rounded-3xl overflow-hidden hover:cursor-pointer transition-all duration-300"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
          >
            <div className={`flex flex-col lg:flex-row gap-6 ${
              service.layout === 'image-left' ? 'lg:flex-row-reverse' : ''
            }`}>
              
              {/* Content Section - Always on the left for image-right, right for image-left */}
              <div className='lg:w-1/2 flex flex-col justify-center'>
                {/* Icon and Header */}
                <div className='flex flex-col'>
                  <div 
                    ref={el => iconsRef.current[index] = el}
                    className='bg-black text-white p-4 rounded-xl w-fit shadow-lg shadow-gray-400'
                  >
                    <BsStars size={24} />
                  </div>

                  <div className='mt-6 space-y-3'>
                    <h2 
                      ref={el => contentRefs.current[index * 4] = el}
                      className='text-2xl md:text-[28px] font-semibold'
                    >
                      {service.title}
                    </h2>
                    <div className='bg-gray-300 w-full h-[1px] my-4' />
                    
                    <div className='flex items-center justify-between'>
                      <h1 className='text-3xl md:text-[40px] font-semibold text-[#30C1A0]'>
                        {service.number}
                      </h1>
                      <div className='flex items-center gap-2'>
                        {services.map((_, dotIndex) => (
                          <div 
                            key={dotIndex}
                            className={`h-2 w-2 rounded-full ${
                              dotIndex === index ? 'bg-black' : 'bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Text */}
                <div className='space-y-4 mt-4'>
                  {service.paragraphs.map((paragraph, pIndex) => (
                    <p 
                      key={pIndex}
                      ref={el => contentRefs.current[index * 4 + pIndex + 1] = el}
                      className='text-sm md:text-[15px] text-gray-700 leading-relaxed'
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="mt-6 bg-black/90 hover:bg-black text-white px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 w-fit">
                  <span>Learn More</span>
                  <FiArrowUpRight className="text-lg" />
                </div>
              </div>

              {/* Image Section - Always on the opposite side of content */}
              <div className='lg:w-1/2'>
                <div className='rounded-xl overflow-hidden h-full'>
                  <img 
                    ref={el => imagesRef.current[index] = el}
                    src={service.image} 
                    alt={service.alt} 
                    className='w-full h-full object-cover rounded-xl transition-transform duration-300'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;