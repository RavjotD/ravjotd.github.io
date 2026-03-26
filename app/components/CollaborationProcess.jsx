"use client";
import React from "react";
import { motion } from "framer-motion";

const CollaborationProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Diagnose & Discover",
      description:
        "Understand the problem space first. Whether it's a production incident, a new feature, or a system migration — methodical investigation before action.",
    },
    {
      num: "02",
      title: "Architect & Build",
      description:
        "Design with documentation-driven clarity. Iterative development with regular checkpoints, ensuring reliability across front-end and back-end.",
    },
    {
      num: "03",
      title: "Ship & Sustain",
      description:
        "Thorough testing, deployment, and knowledge transfer. Systems are only as strong as the documentation and processes that support them.",
    },
  ];

  return (
    <section className="w-full bg-charcoal py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6"
        >
          The Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-display-lg text-white mb-20"
        >
          Your project in
          <br />
          <span className="text-text-muted">3 steps</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`py-8 md:py-0 md:px-10 ${
                index < steps.length - 1
                  ? "border-b md:border-b-0 md:border-r border-rule-dark"
                  : ""
              } ${index === 0 ? "md:pl-0" : ""} ${index === steps.length - 1 ? "md:pr-0" : ""}`}
            >
              <span className="font-serif text-5xl md:text-6xl text-accent block mb-6">
                {step.num}
              </span>
              <h3 className="font-sans text-lg font-medium text-white mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationProcess;
