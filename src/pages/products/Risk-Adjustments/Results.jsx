import React from "react";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";

const Results = () => {
  const stats = [
    {
      value: "75%",
      description: "Acceptance rate of AI diagnosis recommendations",
      number: "01",
    },
    {
      value: "86%",
      description: "Weekly active providers",
      number: "02",
    },
    {
      value: "49%",
      description: "Rate of newly identified conditions",
      number: "03",
    },
  ];

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
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardHover = {
    y: -10,
    rotateX: 5,
    rotateY: 2,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  };

  const cardTap = {
    scale: 0.98,
    rotateX: 0,
    rotateY: 0,
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-20"
    >
      <div className="w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6 mx-auto"
        >
          <BsStars />
          <p>Performance Metrics</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center mb-10"
          variants={itemVariants}
        >
          <motion.h1
            variants={itemVariants}
            style={{ fontFamily: "Satoshi, sans-serif" }}
            className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
          >
            High accuracy, high adoption
          </motion.h1>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              whileTap={cardTap}
              className="bg-white p-6 rounded-3xl text-center relative overflow-hidden"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* 3D Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#30C1A0]/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Number and Indicator */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <motion.h1
                  variants={numberVariants}
                  className="text-4xl md:text-[50px] font-semibold text-gray-800"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {stat.value}
                </motion.h1>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stats.map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className={`h-2 w-2 rounded-full ${
                        dotIndex === index ? "bg-black" : "bg-gray-400"
                      }`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                className="bg-gray-300 w-full h-[1px] my-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                viewport={{ once: true }}
              />

              {/* Content */}
              <motion.p
                className="text-sm text-gray-600 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.description}
              </motion.p>

              {/* Bottom Number */}
              <motion.div
                className="mt-4 flex justify-between items-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl font-semibold text-[#30C1A0]">
                  {stat.number}
                </span>
                <span className="text-sm text-gray-500">Metric</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Results;
