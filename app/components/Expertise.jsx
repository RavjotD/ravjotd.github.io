"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Expertise = () => {
  const areas = [
    {
      title: "API Diagnostics & Integration",
      description:
        "This is my day job. At Kaseya, I support ConnectBooster, an accounts receivable platform that lives entirely on API integrations, given failures in API calls and reconciliation issues across PSA platforms (ConnectWise, Autotask), payment gateways (Bambora, BlueSnap, BNG), and accounting systems (QuickBooks, Xero, Sage, Microsoft Business Central). The work is part forensics, part translation between systems that were never designed to talk to each other.",
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "This is the next chapter. I'm working through AWS Solutions Architect Associate, with hands-on experience across S3, EC2, IAM, and VPC, plus Active Directory and M365 administration on the Azure side. The goal is to move from supporting cloud-backed systems to designing them.",
    },
    {
      title: "Full-Stack Development",
      description:
        "My freelance lane. I build commercial websites for local businesses, mostly in Next.js and TypeScript, with the same checklist every time: it has to perform, stay secure, and rank. The flashy stuff is fine, but if those three boxes aren't ticked, the site isn't shipping.",
    },
    {
      title: "Automation & DevOps",
      description:
        "The stuff that turns repetition into a script. CI/CD, infrastructure as code with Terraform and CloudFormation, and PowerShell, Bash, and Python for whatever needs to stop being done by hand. If I've done it twice, I'm trying to automate the third.",
    },
    {
      title: "Agentic Engineering",
      description:
        "My open eye on AI. I'm building AI-driven workflows that run end-to-end without me sitting in the loop, from lead generation to client onboarding. The bet is that agentic systems are where most of the leverage will sit in the next few years, and I'd rather be early than catch up.",
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end mt-10"
          >
            <Link
              href="/blog"
              className="group font-sans text-sm text-cream bg-accent px-6 py-3 hover:bg-accent-deep transition-all duration-300 inline-flex items-center gap-3"
            >
              Read the field guide
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
