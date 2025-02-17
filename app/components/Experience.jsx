"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div ref={containerRef} className="relative py-12">
        <div className="space-y-8 md:space-y-16 flex flex-col items-center">
          {[
            {
              title: "AI Software Engineer",
              company: "Braintrust Outliers",
              companyUrl: "https://www.usebraintrust.com/",
              date: "October 2024 - Present",
              duties: [
                "Developed API-aligned prompts and conducted validation testing to ensure robustness for the practiced large language models.",
                "Reviewed and summarized AI-generated code to achieve a high standard of data accuracy and completeness",
              ],
              skills: [
                "Prompt Engineering",
                "Large Language Models",
                "API Testing",
              ],
            },
            {
              title: "Freelance Software Developer",
              company: "Stallion Group Security",
              companyUrl: "https://stalliongroupsecurity.ca/",
              date: "January 2024 - Present",
              duties: [
                "Engineered and launched a commercial website for a Security services company.",
                "Implemented successful auto-replies to valid form submissions and Calendly integration to increase client conversion rates.",
                "Executed a targeted digital marketing strategy via TikTok ads integration.",
              ],
              skills: ["TypeScript", "ReactJS", "TailwindCSS"],
            },
            {
              title: "Service Desk Analyst Co-op",
              company: "Microserve",
              companyUrl: "https://www.microserve.ca/",
              date: "December 2022 - September 2023",
              duties: [
                "Provided Tier-1 technical support via ConnectWise.",
                "Managed enterprise IT infrastructure: Active directory, GPO, Windows Server Administration to ensure smooth client operations.",
                "Supported specialized software applications by automating scripts to streamline onboarding processing via PowerShell & Batch.",
                "Orchestrated Email Migrations.",
              ],
              skills: [
                "Microsoft 365 Administration",
                "Azure",
                "IT Service-Management",
                "Troubleshooting",
                "Customer Service",
              ],
            },
            {
              title: "Sales Representative",
              company: "Club16 Trevor Linden Fitness",
              companyUrl: "https://www.trevorlindenfitness.com/",
              date: "August 2018 - December 2022",
              duties: [
                "Delivered exceptional customer service by consistently selling 20+ memberships monthly, meeting monthly quotas.",
                "Identified prospective customers by using business directories and developing leads by networking within the community.",
              ],
              skills: [
                "Sales",
                "Problem-solving",
                "Leadership",
                "Customer Service",
              ],
            },
          ].map((job, index) => {
            const ref = useRef(null);
            const isVisible = useInView(ref, { once: true, margin: "-100px" });

            return (
              <div key={index} ref={ref} className="w-full">
                <motion.div
                  className="relative flex justify-center"
                  variants={cardVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Timeline dot for md and larger screens */}
                  <motion.div
                    className="hidden md:block absolute left-[-4rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-800"
                    initial={{ scale: 0, borderColor: "white" }}
                    animate={
                      isVisible
                        ? {
                            scale: 1,
                            borderColor: ["white", "#06B6D4"],
                          }
                        : { scale: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      borderColor: { duration: 0.8, ease: "easeOut" },
                    }}
                    style={{ borderWidth: "2px" }}
                  />

                  <motion.div
                    className="w-full max-w-3xl bg-gradient-to-br from-black/80 to-slate-700/40 rounded-lg shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="p-4">
                      <h2 className="text-lg md:text-2xl font-bold text-white mb-2">
                        {job.title}
                      </h2>
                      <a
                        href={job.companyUrl}
                        className="text-sm md:text-lg md:text-base italic text-cyan-500 hover:text-cyan-400"
                      >
                        {job.company}
                      </a>
                      <ul className="mt-6 space-y-2 text-gray-300 text-xs md:text-lg md:text-base list-disc pl-5">
                        {job.duties.map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-900 rounded-lg text-cyan-500 text-xs md:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <p className="mt-6 text-xs md:text-md text-gray-400">
                        {job.date}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
