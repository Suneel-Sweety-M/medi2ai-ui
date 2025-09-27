import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.4,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, x: 50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-20 py-7 flex flex-col lg:flex-row items-center justify-center px-2 sm:px-6 md:px-10 text-black "
    >
      {/* Text Section */}
      <div className="text-start w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <motion.h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Less admin work, more time for{" "}
          <span className="text-[#30C1A0]">patient care</span>
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl leading-relaxed"
        >
          Get the most relevant patient data in one concise clinical summary,
          and have more time for meaningful patient interactions.
        </motion.p>

        <motion.button
          ref={buttonRef}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#28A890",
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-[#30C1A0] text-white py-3 px-8 rounded-xl text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ boxShadow: "0 0 20px rgba(48, 193, 160, 0.3)" }}
        >
          Get Demo
        </motion.button>
      </div>

      {/* Image Section */}
      <motion.div
        ref={imageRef}
        className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#30C1A0]/20 via-transparent to-[#30C1A0]/10 rounded-3xl z-10" />
        <img
          src="/report.jpg"
          alt="Clinical report"
          className="relative z-20 rounded-3xl w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
        />

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-6 right-6 w-4 h-4 bg-[#30C1A0] rounded-full opacity-30 z-30"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
