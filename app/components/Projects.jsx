"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const items = [
    {
      id: 1,
      title: "Commercial Website",
      desc: "A user-intuitive commerical website for a company providing security services.",
      img: "projects/Stallion.png",
      link: "https://stalliongroupsecurity.ca/",
      glink: "https://github.com/RavjotD/StallionWebsite",
      skills: ["ReactJS", "TypeScript", "TailwindCSS", "Express.js"],
      txtcolor: "text-yellow-400",
    },
    {
      id: 2,
      title: "Epoxy Business Website",
      desc: "Full-Stack webapp features complete quote submission form",
      img: "projects/labcoat_SS.png",
      link: "https://labcoatings.ca/",
      glink: "",
      skills: ["ReactJS", "TailWind CSS"],
      txtcolor: "text-green-400",
    },
    {
      id: 3,
      title: "TicketHub",
      desc: "Full-Stack webapp serving as a TicketMaster Alternative using their OpenAPI.",
      img: "projects/THSS.png",
      link: "https://ticket-hub-pink.vercel.app/",
      glink: "https://github.com/RavjotD/Ticket-Hub",
      skills: ["Next.js", "Tailwind CSS", "PocketBase", "DiscoveryAPI"],
      txtcolor: "text-cyan-400",
    },
    
    {
      id: 4,
      title: "Cleaning Business Website",
      desc: "Full-Stack website with front-end and back-end communication.",
      img: "projects/WVC_SS.png",
      link: "https://westviewcleaningservices.ca/",
      glink: "",
      skills: ["ReactJS", "Tailwind CSS",],
      txtcolor: "text-green-600",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <h1 className="text-center py-6 text-5xl md:text-7xl font-bold bg-gradient-to-b from-blue-400 via-white to-blue-300 text-transparent bg-clip-text mb-8">
        Projects
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="relative h-[400px] rounded-lg overflow-hidden group border-4 border-white/10 bg-gradient-to-b from-transparent to-black/5 backdrop-blur-sm"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
              borderColor: "rgba(56, 189, 248, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/90 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded ${item.txtcolor} bg-gray-700`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between gap-4">
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative px-4 py-2 text-sm text-white rounded-lg overflow-hidden group/btn bg-gray-700 hover:bg-cyan-500 transition-all duration-300 transform hover:-translate-x-1"
  >
    <span className="relative z-10">Project Demo</span>
  </a>
</div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
