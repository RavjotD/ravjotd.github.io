"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ExperienceItem = ({ job }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="border-t border-rule py-8 md:py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12">
        <span className="font-mono text-xs text-text-muted tracking-wide">
          {job.date}
        </span>

        <div>
          <h3 className="font-serif text-xl md:text-2xl text-cream mb-1">
            {job.title}
          </h3>
          <a
            href={job.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-accent hover:text-accent-deep transition-colors"
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
};

const Experience = () => {
  const jobs = [
    {
      title: "Technical Support Expert",
      company: "Kaseya",
      companyUrl: "https://www.kaseya.com/",
      date: "May 2025 — Present",
      duties: [
        "Delivering expert-level technical support on ConnectBooster, an accounts receivable automation platform, ensuring seamless operations and training for MSP and MME clients.",
        "Resolve 30+ weekly Zendesk cases involving API integrations across PSA platforms (ConnectWise, Autotask), payment gateways (Bambora, BlueSnap, BNG), and accounting packages (QuickBooks, Microsoft Business Central, Sage, Xero).",
        "Maintain 60%+ First-Day Resolution (FDR), consistently outperforming team baseline. Contribute to improved team-wide FDR performance exceeding 50%.",
        "Diagnose REST API authentication failures, webhook delivery errors, and transaction reconciliation discrepancies across PSA, payment, and accounting platform integrations.",
        "Leverage MongoDB read access to query production databases, trace data inconsistencies, and resolve client-reported issues at the source.",
      ],
      skills: ["REST APIs", "Zendesk", "PSA Integrations", "Payment Gateways", "QuickBooks", "Xero", "Business Central", "Sage", "MongoDB"],
    },
    {
      title: "Web Application Engineer",
      company: "Freelance",
      companyUrl: "https://stalliongroupsecurity.ca/",
      date: "Jan 2024 — Present",
      duties: [
        "Design and deploy full-stack commercial websites for local businesses, focusing on performance, security, and SEO.",
        "Develop full-stack Next.js + TypeScript applications with server-side rendering, API routes, and optimized performance.",
        "Integrate automated client communication workflows and analytics tracking to optimize conversion performance.",
        "Configure DNS records, hosting environments, and production deployment settings.",
      ],
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
    },
    {
      title: "AI Software Engineer",
      company: "Braintrust Outliers",
      companyUrl: "https://www.usebraintrust.com/",
      date: "Oct 2024 — May 2025",
      duties: [
        "Improved AI model output quality through Reinforcement Learning from Human Feedback (RLHF), evaluating and refining responses to better align with real-world usage patterns.",
        "Engineered prompts and validated LLM outputs via API testing, optimising JSON schema formatting for seamless downstream system integrations.",
      ],
      skills: ["RLHF", "Prompt Engineering", "LLMs", "API Testing"],
    },
    {
      title: "Service Desk Analyst Co-op",
      company: "Microserve",
      companyUrl: "https://www.microserve.ca/",
      date: "Dec 2022 — Sep 2023",
      duties: [
        "Delivered Tier 1 support across enterprise environments including Active Directory, Microsoft 365, and Azure.",
        "Automated user provisioning workflows using PowerShell and batch scripting, reducing manual onboarding time by 40%.",
        "Maintained SLA compliance and supported high-availability systems with 99% uptime.",
        "Collaborated with infrastructure teams to translate business requirements into technical system configurations.",
      ],
      skills: [
        "Active Directory",
        "Azure",
        "PowerShell",
        "M365",
        "IT Service Management",
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
      {jobs.map((job, index) => (
        <ExperienceItem key={index} job={job} />
      ))}
      <div className="border-t border-rule" />
    </div>
  );
};

export default Experience;
