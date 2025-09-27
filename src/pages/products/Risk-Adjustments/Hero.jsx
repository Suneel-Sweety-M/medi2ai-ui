import React from "react";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const buttonTap = {
    scale: 0.95,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-20"
    >
      <div className="">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <motion.div className="lg:w-1/2" variants={containerVariants}>
            <motion.h1
              variants={itemVariants}
              style={{ fontFamily: "Satoshi, sans-serif" }}
              className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
            >
              Improve value-based outcomes with{" "}
              <motion.span
                className="text-[#30C1A0]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                AI-powered risk{" "}
              </motion.span>
              adjustment software
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
            >
              Capture an accurate picture of each patient's RAF score and health
              status with data you can trust, surfaced at the point of care.
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="mt-6 bg-black/90 hover:bg-black text-white py-3 px-6 rounded-xl text-base font-medium shadow-lg shadow-gray-400"
            >
              Get Demo
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={imageVariants}
          >
            <motion.div>
              <img
                src="/phero.jpg"
                alt="Clinical report"
                className="w-full h-80 object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              {/* Animated Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-[#30C1A0]/20 via-transparent to-[#30C1A0]/10 rounded-2xl pointer-events-none"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(48, 193, 160, 0.2), transparent, rgba(48, 193, 160, 0.1))",
                    "linear-gradient(135deg, rgba(48, 193, 160, 0.1), transparent, rgba(48, 193, 160, 0.2))",
                    "linear-gradient(45deg, rgba(48, 193, 160, 0.2), transparent, rgba(48, 193, 160, 0.1))",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
