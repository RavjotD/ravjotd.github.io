"use client";
import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  const areas = [
    {
      title: "API Diagnostics & Integration",
      description:
        "Diagnosing REST API authentication failures, webhook delivery errors, and transaction reconciliation discrepancies across enterprise client environments. Experienced with payment gateways, PSA/CRM platforms, and accounting system connectivity.",
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Managing and optimizing cloud infrastructure across AWS (S3, EC2, IAM, VPC) and Azure. Active Directory administration, M365 management, and actively pursuing AWS Solutions Architect Associate certification.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Designing and shipping production web applications from frontend to backend. Specializing in Next.js for commercial and business websites, with broader experience across React, TypeScript, Node.js, and Python. Every build ships with performance, security, and SEO as first-class priorities.",
    },
    {
      title: "Automation & DevOps",
      description:
        "Building reliable delivery pipelines with CI/CD, infrastructure as code (Terraform, CloudFormation), and container orchestration. Automating repetitive operations through scripting (PowerShell, Bash, Python) so teams ship faster with fewer manual touchpoints.",
    },
    {
      title: "Agentic Engineering",
      description:
        "Building AI-driven agentic workflows that automate systems and operations end-to-end. From lead generation pipelines to client onboarding sequences, leveraging autonomous agents to eliminate manual processes and stay ahead of the AI evolution.",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4"
          >
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-lg text-cream sticky top-32"
          >
            Services
          </motion.h2>
        </div>

        <div>
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group py-8 border-t border-rule last:border-b hover:border-text-muted transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-text-muted mt-1.5">
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
        </div>
      </div>
    </div>
  );
};

export default Expertise;
