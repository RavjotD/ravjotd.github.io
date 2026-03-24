"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Experience = () => {
  const jobs = [
    {
      title: "Technical Support Expert",
      company: "Kaseya",
      companyUrl: "https://www.kaseya.com/",
      date: "May 2025 — Present",
      duties: [
        "Delivering expert-level technical support on ConnectBooster payment solutions software, ensuring seamless operations and training for MSPs and MMEs clients.",
        "Supporting and troubleshooting software integrations with PSA/CRM platforms, accounting systems, and payment gateway APIs to maintain transaction processing and service delivery.",
        "Achieved 84% First Day Resolution (FDR) on customer issues, with a sustained weekly average of 50%+, exceeding support benchmarks.",
      ],
      skills: ["Troubleshooting", "Communication", "System Administration"],
    },
    {
      title: "AI Software Engineer",
      company: "Braintrust Outliers",
      companyUrl: "https://www.usebraintrust.com/",
      date: "Oct 2024 — May 2025",
      duties: [
        "Improved AI model accuracy by reviewing and refining outputs using Reinforcement Learning with Human Feedback (RLHF), leading to better alignment with human preferences.",
        "Enhanced API quality by prompt-engineering and validating large language models (LLMs), optimizing JSON file formatting for seamless integration.",
      ],
      skills: ["Prompt Engineering", "Large Language Models", "API Testing"],
    },
    {
      title: "Freelance Software Developer",
      company: "Stallion Group Security",
      companyUrl: "https://stalliongroupsecurity.ca/",
      date: "Jan 2024 — Sep 2024",
      duties: [
        "Built and deployed a full-stack commercial website using ReactJS and TypeScript, delivering an optimized user experience that boosted client engagement.",
        "Increased client sales by 50% by implementing TikTok ad integration and defining target audiences in British Columbia through a robust digital marketing strategy.",
      ],
      skills: ["TypeScript", "ReactJS", "TailwindCSS", "Express"],
    },
    {
      title: "Service Desk Analyst Co-op",
      company: "Microserve",
      companyUrl: "https://www.microserve.ca/",
      date: "Dec 2022 — Sep 2023",
      duties: [
        "Delivered high-quality Tier-1 technical support by resolving end-user issues efficiently via ticketing systems from a range of small to large enterprises.",
        "Streamlined onboarding processes by automating PowerShell scripts, reducing manual setup time by 40%.",
        "Maintained smooth client operations by managing enterprise IT infrastructure, including Active Directory, Group Policy Objects (GPO), M365 Administration, and Azure.",
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
      date: "Aug 2018 — Dec 2022",
      duties: [
        "Delivered exceptional customer service by consistently selling 20+ memberships monthly, meeting monthly quotas.",
        "Trained and mentored new hires, enhancing team collaboration and productivity, resulting in a 15% improvement in overall sales performance.",
      ],
      skills: ["Sales", "Problem-solving", "Leadership", "Customer Service"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {jobs.map((job, index) => {
        const ref = useRef(null);
        const isVisible = useInView(ref, { once: true, margin: "-50px" });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-t border-rule py-8 md:py-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              {/* Date */}
              <span className="font-mono text-xs text-text-muted tracking-wide">
                {job.date}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-1">
                  {job.title}
                </h3>
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  {job.company}
                </a>

                <ul className="mt-5 space-y-3">
                  {job.duties.map((duty, i) => (
                    <li
                      key={i}
                      className="font-sans text-sm text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:bg-text-muted before:rounded-full"
                    >
                      {duty}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="font-sans text-xs px-3 py-1 border border-rule text-text-muted uppercase tracking-wider hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
      {/* Bottom rule */}
      <div className="border-t border-rule" />
    </div>
  );
};

export default Experience;
