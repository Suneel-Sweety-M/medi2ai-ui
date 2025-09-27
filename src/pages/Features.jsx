import { BsFillBoxFill } from "react-icons/bs";
import { SiReactos } from "react-icons/si";
import { IoSettingsSharp, IoAnalytics } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    // GSAP Animations with ScrollTrigger
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
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
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
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
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards animation (staggered)
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Image animations
      gsap.fromTo(imagesRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          delay: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Icon animations
      gsap.fromTo(".service-icon",
        { opacity: 0, rotation: -180, scale: 0 },
        {
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 1,
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: ".service-icon",
            start: "top 90%",
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
      className="min-h-screen py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 bg-[#D8DFE5] text-black md:rounded-[10%]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center w-full">
        
        {/* Header */}
        <div 
          ref={headerRef}
          className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-balck mb-6"
        >
          <BsFillBoxFill />
          <p>Features</p>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <h1
            ref={titleRef}
            style={{ fontFamily: "Satoshi, sans-serif" }}
            className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
          >
            One AI Platform, Endless Care
          </h1>
          <p 
            ref={subtitleRef}
            className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
          >
            Discover how Medi2AI empowers clinicians, hospitals, and patients with smarter healthcare features.
          </p>
        </div>

        {/* Row 1 */}
        <div className="lg:flex items-stretch gap-4 mt-4 w-full">
          {/* First Card */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="lg:w-[60%] flex flex-col lg:flex-row gap-4 bg-[#F3F3F3] p-5 rounded-3xl shadow-lg shadow-gray-400"
          >
            <div className="lg:w-1/2">
              <img
                ref={el => imagesRef.current[0] = el}
                src="/robo.png"
                alt="AI in Healthcare"
                className="h-[200px] w-full object-cover rounded-xl shadow-lg shadow-gray-400"
              />
            </div>
            <div className="lg:w-1/2 space-y-2 mt-4 lg:mt-0">
              <div className="bg-[#F3F3F3] w-fit p-4 rounded-full shadow-xl shadow-gray-400 service-icon">
                <SiReactos size={20} />
              </div>
              <h2 className="text-2xl md:text-[30px]">AI Symptom Analysis</h2>
              <p className="text-base md:text-[17px]">
                Instantly analyze patient symptoms and suggest the most likely conditions, helping clinicians make quicker, data-backed decisions.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="lg:w-[40%] mt-5 lg:mt-0 bg-[#F3F3F3] p-5 rounded-3xl flex flex-col shadow-lg shadow-gray-400"
          >
            <div className="space-y-2">
              <div className="bg-black text-[#F3F3F3] w-fit p-4 rounded-full shadow-xl shadow-gray-400 service-icon">
                <IoSettingsSharp size={20} />
              </div>
              <h2 className="text-2xl md:text-[30px]">Automated Patient Workflows</h2>
              <p className="text-base md:text-[17px]">
                From triage to follow-ups, Medi2AI automates patient journeys to reduce wait times and optimize care delivery across hospitals.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="lg:flex items-stretch gap-4 mt-5 w-full">
          {/* Third Card */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="lg:w-[40%] bg-[#F3F3F3] p-5 rounded-3xl flex flex-col shadow-lg shadow-gray-400"
          >
            <div className="space-y-2">
              <div className="bg-black text-[#F3F3F3] w-fit p-4 rounded-full shadow-xl shadow-gray-400 service-icon">
                <IoAnalytics size={20} />
              </div>
              <h2 className="text-2xl md:text-[30px]">Predictive Analytics</h2>
              <p className="text-base md:text-[17px]">
                Leverage AI to predict patient risks, optimize hospital resources, and improve outcomes with real-time health analytics.
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div 
            ref={el => cardsRef.current[3] = el}
            className="lg:w-[60%] mt-5 lg:mt-0 flex flex-col lg:flex-row gap-4 bg-[#F3F3F3] p-5 rounded-3xl shadow-lg shadow-gray-400"
          >
            <div className="lg:w-1/2">
              <img
                ref={el => imagesRef.current[1] = el}
                src="/robo1.png"
                alt="AI Support"
                className="h-[200px] w-full object-cover rounded-xl shadow-lg shadow-gray-400"
              />
            </div>
            <div className="lg:w-1/2 space-y-2 mt-4 lg:mt-0">
              <div className="bg-[#F3F3F3] w-fit p-4 rounded-full shadow-xl shadow-gray-400 service-icon">
                <RiMessage2Fill size={20} />
              </div>
              <h2 className="text-2xl md:text-[30px]">Virtual Health Assistants</h2>
              <p className="text-base md:text-[17px]">
                Provide patients with 24/7 AI-powered chatbots for symptom checks, medication reminders, and seamless doctor-patient communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;