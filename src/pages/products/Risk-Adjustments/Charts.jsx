import React from "react";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";

const Charts = () => {
  const charts = [
    {
      image: "/Risk-img-1.jpg",
      title: "Enhance risk adjustment accuracy",
      content:
        "Our proprietary AI engine surfaces diagnosis insights buried deep within the patient record, ensuring no condition is overlooked. Insights include newly suspected conditions based on clinical evidence from claims, health information exchange (HIE), and unstructured data from the EHR such as notes and imaging.",
      layout: "image-left",
      number: "01",
    },
    {
      image: "/Risk-img-2.jpg",
      title: "Empower clinicians with clinical intelligence",
      content:
        "Medi2AI transforms chaotic data into clinical insights right where decisions are made – at the point of care. Every HCC diagnosis suggestion is backed by clinical evidence, boosting trust in the data and empowering clinicians to stay actively engaged in value-based workflows.",
      layout: "image-right",
      number: "02",
    },
    {
      image: "/Risk-img-3.jpg",
      title: "Augment point-of-care workflows",
      content:
        "Medi2AI's risk adjustment solution lives natively in the EHR where clinicians are already working. It integrates bidirectionally with patient records, enabling one-click documentation. This seamless workflow significantly reduces the administrative burden for both clinical and back-office teams.",
      layout: "image-left",
      number: "03",
    },
    {
      image: "/Risk-img-4.jpg",
      title: "Monitor value-based performance in real time",
      content:
        "Identify gaps, friction, and opportunities for education and training with Medi2AI's robust analytics dashboards. Understand how your organization is performing and track value-based metrics. With full visibility across the organization, you'll know exactly where to optimize for success.",
      layout: "image-right",
      number: "04",
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

  const slideInLeft = {
    hidden: { x: -100, opacity: 0, rotateY: 15 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0, rotateY: -15 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardHover = {
    y: -5,
    rotateY: 2,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-7 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-black mt-20"
    >
      <div className="w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={slideInLeft}
          className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6 mx-auto"
        >
          <BsStars />
          <p>Risk Adjustment Solutions</p>
        </motion.div>

        {/* Charts Sections */}
        <div className="space-y-12">
          {charts.map((chart, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row gap-6 items-center ${
                chart.layout === "image-right" ? "lg:flex-row-reverse" : ""
              }`}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image Section */}
              <motion.div
                className="lg:w-1/2"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="bg-white p-4 rounded-3xl shadow-xl shadow-gray-400 overflow-hidden"
                  whileHover={{
                    boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.3)",
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  <img
                    src={chart.image}
                    alt={chart.title}
                    className="w-full h-80 object-cover rounded-2xl"
                    
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="lg:w-1/2"
                whileHover={cardHover}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-white p-6 rounded-3xl relative overflow-hidden"
                  style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  whileHover="hover"
                  initial="rest"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#30C1A0]/5 to-transparent"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Header with number */}
                  <motion.div
                    className="flex items-center justify-between mb-4 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-[#F3F3F3] flex items-center gap-2 px-3 py-1 rounded-full shadow-lg shadow-gray-400">
                      <BsStars size={14} />
                      <span className="text-sm">Feature {chart.number}</span>
                    </div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {charts.map((_, dotIndex) => (
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
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    className="text-2xl md:text-[28px] font-semibold text-gray-800 mb-4 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    {chart.title}
                  </motion.h2>

                  {/* Animated Divider */}
                  <motion.div
                    className="bg-gray-300 w-full h-[1px] my-4 relative z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  />

                  {/* Content */}
                  <motion.p
                    className="text-sm text-gray-600 leading-relaxed relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 3 }}
                  >
                    {chart.content}
                  </motion.p>

                  {/* Bottom Number */}
                  <motion.div
                    className="mt-4 flex justify-between items-center relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl font-semibold text-[#30C1A0]">
                      {chart.number}
                    </span>
                    <span className="text-sm text-gray-500">Solution</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Charts;
