
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiReactos, 
  SiBookstack, 
  SiCrystal 
} from "react-icons/si";
import { IoSettings } from "react-icons/io5";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Charts = () => {
  const sectionRef = useRef(null);
  const chartsRef = useRef([]);
  const imagesRef = useRef([]);
  const titlesRef = useRef([]);
  const textsRef = useRef([]);
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

      // Charts animation
      gsap.fromTo(
        chartsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: chartsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Images animation
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Icons animation
      gsap.fromTo(
        iconsRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Titles animation
      gsap.fromTo(
        titlesRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titlesRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Texts animation
      gsap.fromTo(
        textsRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textsRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const chartSections = [
    {
      image: "/Chat-img-1.jpg",
      title: "Reduce the burden of chart prep",
      description:
        "Review patient records in less than 2 minutes and get a deep understanding of every patient, without clicking through the EHR.",
      imageFirst: true,
      icon: SiReactos,
      iconPosition: "before-text", // Changed to before-text
    },
    {
      image: "/Chat-img-2.jpg",
      title: "Review all patient data, all in one place",
      description:
        "Get an organized view of each patient's uploaded documents. Medi2AI classifies and categorizes documents, adding easily searchable labels and clinical dates.",
      imageFirst: false,
      icon: IoSettings,
      iconPosition: "before-text",
    },
    {
      image: "/Chat-img-3.jpg",
      title: "Easily search the data you need within documents",
      description:
        "Drill down into the details without mining for data. Explore files and find the data points you need instantly.",
      imageFirst: true,
      icon: SiBookstack,
      iconPosition: "before-text", // Changed to before-text
    },
    {
      image: "/Chat-img-4.jpg",
      title: "Save time with AI-generated documentation",
      description:
        "Medi2AI is deeply integrated with the EHR, making it easy to master the value-based workflow without disrupting the clinical workflow.",
      imageFirst: false,
      icon: SiCrystal,
      iconPosition: "before-text",
    },
  ];

  const IconContainer = ({ icon: Icon, index, position }) => {
    if (!Icon) {
      console.warn(`Icon is not provided for index ${index}`);
      return null;
    }

    return (
      <motion.div
        ref={(el) => (iconsRef.current[index] = el)}
        className={`
          flex items-center justify-center p-4 rounded-2xl shadow-lg shadow-gray-500
          ${position === "before-text" ? "mb-6" : "mb-4"}
          bg-black text-white 
        `}
        style={{
          width: "fit-content",
          boxShadow: "0 0 20px rgba(48, 193, 160, 0.3)",
        }}
        whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon size={24} />
      </motion.div>
    );
  };

  return (
    <div
      ref={sectionRef}
      className=" py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-22"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h1
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          Chart Review Features
        </h1>
        <p className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl">
          Advanced AI-powered tools to streamline your clinical workflow
        </p>
      </div>

      <div className=" max-w-7xl mx-auto space-y-16">
        {chartSections.map((section, index) => (
          <motion.div
          style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
            key={index}
            ref={(el) => (chartsRef.current[index] = el)}
            className={`flex flex-col ${
              section.imageFirst ? "lg:flex-row shadow-xl shadow-gray-400 p-7 rounded-3xl" : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-12 p-7 rounded-3xl`}
          >
            {/* Image Container */}
            <motion.div
              ref={(el) => (imagesRef.current[index] = el)}
              className="w-full lg:w-1/2 relative"
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
              >
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 sm:h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 relative">
              {/* Icon before text for all sections */}
              <div className="mb-6 ">
                <IconContainer
                  icon={section.icon}
                  index={index}
                  position={section.iconPosition}
                  className="bg-black-200"
                />
              </div>

              <motion.h2
                ref={(el) => (titlesRef.current[index] = el)}
                className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 leading-tight"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {section.title}
              </motion.h2>

              <motion.p
                ref={(el) => (textsRef.current[index] = el)}
                className="text-sm sm:text-[15px] text-gray-700 mt-4 leading-relaxed"
              >
                {section.description}
              </motion.p>

              {/* Enhanced dots indicator */}
              <div className="flex items-center gap-3 mt-8">
                {chartSections.map((_, dotIndex) => (
                  <motion.div
                    key={dotIndex}
                    className={`h-3 w-3 rounded-full ${
                      dotIndex === index ? "bg-[#010f0c]" : "bg-gray-300"
                    }`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>

              {/* Floating decoration for text section */}
            
            </div>
          </motion.div>
        ))}
      </div>

    
    </div>
  );
};

export default Charts;