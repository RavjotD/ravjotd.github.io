"use client";
import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  const areas = [
    {
      title: "Technical Expertise",
      description:
        "Strong technical background with hands-on experience in troubleshooting, system maintenance, and implementing IT solutions to improve efficiency and reliability.",
    },
    {
      title: "Customer Service & Support",
      description:
        "Skilled in resolving complex customer concerns efficiently while ensuring a positive, solution-focused experience.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Building end-to-end web applications using modern technologies like React, Node.js, SpringBoot and Python.",
    },
    {
      title: "Infrastructure Management",
      description:
        "Managing and optimizing systems for both cloud and on-premise infrastructure, leveraging extensive experience with Azure and AWS.",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-gradient-to-br from-charcoal via-gray-950/50 to-charcoal">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20">
        {/* Left: Section title */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-lg text-cream sticky top-32"
          >
            Expertise
          </motion.h2>
        </div>

        {/* Right: Expertise blocks */}
        <div>
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group py-8 border-t border-rule hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-text-muted mt-1">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-sans text-lg md:text-xl font-medium text-cream mb-3 group-hover:text-accent transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-lg">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom rule */}
          <div className="border-t border-rule" />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
