import React, { useRef, useEffect } from "react";
import { MdMoreTime } from "react-icons/md";
import { FaHeartPulse } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Results = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const numbersRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
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
            toggleActions: "play none none none",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current,
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
            toggleActions: "play none none none",
          },
        }
      );

      // Numbers animation
      numbersRef.current.forEach((number, index) => {
        gsap.fromTo(
          number,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.3 + index * 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: number,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Icons animation
      gsap.fromTo(
        iconsRef.current,
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
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const resultsData = [
    {
      icon: MdMoreTime,
      value: "9min",
      text: "Saved on chart review per patient",
      color: "from-[#30C1A0] to-[#28A890]",
    },
    {
      icon: FaHeartPulse,
      value: "23%",
      text: "Decrease in burnout",
      color: "from-[#30C1A0] to-[#28A890]",
    },
    {
      icon: IoMdAnalytics,
      value: "22%",
      text: "Increase in physician satisfaction",
      color: "from-[#30C1A0] to-[#28A890]",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="  flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-22 "
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          Proven Results
        </h1>
        <p
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          Based on an independent evaluation by the American Academy of Family
          Physicians
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {resultsData.map((item, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-6 rounded-3xl flex flex-col gap-4 relative overflow-hidden"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
          >
            {/* Icon */}
            <div
              ref={(el) => (iconsRef.current[index] = el)}
              className="bg-black text-white p-3 rounded-xl w-fit shadow-lg shadow-gray-400"
            >
              <item.icon size={24} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2
                ref={(el) => (numbersRef.current[index] = el)}
                className="text-4xl md:text-5xl font-semibold text-gray-800 mb-2"
              >
                {item.value}
              </h2>
              <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center gap-2 mt-4">
              {resultsData.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`h-2 w-2 rounded-full ${
                    dotIndex === index ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Results;
