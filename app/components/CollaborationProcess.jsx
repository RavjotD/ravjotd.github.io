"use client";
import React from "react";
import { motion } from "framer-motion";

const CollaborationProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Communication",
      description:
        "Clear and consistent communication throughout the project lifecycle",
    },
    {
      num: "02",
      title: "Design & Development",
      description:
        "Iterative development process with regular updates and feedback",
    },
    {
      num: "03",
      title: "Review & Finalize",
      description:
        "Thorough testing and refinement before project completion",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="editorial-rule mb-12" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-text-muted mb-16 text-center"
        >
          Collaboration Process
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`py-8 md:py-0 md:px-10 ${
                index < steps.length - 1
                  ? "border-b md:border-b-0 md:border-r border-rule"
                  : ""
              }`}
            >
              <span className="font-serif text-5xl md:text-6xl text-accent block mb-6">
                {step.num}
              </span>
              <h3 className="font-sans text-lg font-medium text-cream mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
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
