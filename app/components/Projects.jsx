"use client";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const items = [
    {
      id: 1,
      title: "Commercial Website",
      desc: "A user-intuitive commercial website for a company providing security services.",
      img: "projects/Stallion.png",
      link: "https://stalliongroupsecurity.ca/",
      glink: "https://github.com/RavjotD/StallionWebsite",
      skills: ["ReactJS", "TypeScript", "TailwindCSS", "Express.js"],
    },
    {
      id: 2,
      title: "Epoxy Business Website",
      desc: "Full-Stack webapp features complete quote submission form.",
      img: "projects/labcoat_SS.png",
      link: "https://labcoatings.ca/",
      glink: "",
      skills: ["ReactJS", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "TicketHub",
      desc: "Full-Stack webapp serving as a TicketMaster Alternative using their OpenAPI.",
      img: "projects/THSS.png",
      link: "https://ticket-hub-pink.vercel.app/",
      glink: "https://github.com/RavjotD/Ticket-Hub",
      skills: ["Next.js", "Tailwind CSS", "PocketBase", "DiscoveryAPI"],
    },
    {
      id: 4,
      title: "Cleaning Business Website",
      desc: "Full-Stack website with front-end and back-end communication.",
      img: "projects/WVC_SS.png",
      link: "https://westviewcleaningservices.ca/",
      glink: "",
      skills: ["ReactJS", "Tailwind CSS"],
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-gradient-to-t from-gray-950/30 via-charcoal to-charcoal">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-display-lg text-cream mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {items.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative overflow-hidden group cursor-pointer block ${
              index === 0 ? "md:col-span-2 h-[400px] md:h-[500px]" : "h-[350px] md:h-[400px]"
            }`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

            {/* Project number */}
            <span className="absolute top-6 left-6 font-serif text-6xl md:text-7xl text-cream/10 leading-none">
              0{item.id}
            </span>

            {/* Content at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary mb-4 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs text-text-muted"
                  >
                    {skill}
                    {i < item.skills.length - 1 && (
                      <span className="text-rule ml-2">/</span>
                    )}
                  </span>
                ))}
              </div>
              <span className="font-sans text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2">
                View Project
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
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
