"use client";
import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  const areas = [
    {
      title: "UX Design",
      description:
        "Creating intuitive and engaging user experiences through modern design principles and user-centered approaches.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Building end-to-end web applications using modern technologies like React, Node.js, SpringBoot and Python.",
    },
    {
      title: "Infrastructure Management",
      description:
        "Managing and optimizing systems for both cloud and on-premise infrastructure, leveraging my extensive experience with Azure and AWS.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-gray-400 to-blue-300 text-transparent bg-clip-text mb-4">
          Areas of Expertise
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Specializing in creating seamless full-stack applications with modern
          technologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-8 rounded-xl backdrop-blur-lg bg-white/5 border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              {area.title}
            </h3>
            <p className="text-gray-400">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
