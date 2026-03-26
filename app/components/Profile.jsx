"use client";
import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const techStack = [
    { img: "tech/python.png", years: "1 year", text: "Python" },
    { img: "tech/logo-javascript.svg", years: "2 years", text: "JavaScript" },
    { img: "tech/react-2.svg", years: "2 years", text: "ReactJS" },
    { img: "tech/mysql.png", years: "2 years", text: "MySQL" },
    { img: "tech/java-4.svg", years: "2 years", text: "Java" },
    { img: "tech/tailwind-css-2.svg", years: "1 year", text: "Tailwind CSS" },
    { img: "tech/aws.png", years: "1 year", text: "AWS" },
    { img: "tech/css-3.svg", years: "3 years", text: "CSS3" },
    { img: "tech/html-1.svg", years: "3 years", text: "HTML5" },
    { img: "tech/nodejs.png", years: "2 years", text: "NodeJS" },
    { img: "tech/mg.png", years: "1 year", text: "MongoDB" },
    { img: "tech/next-js.svg", years: "1 year", text: "Next.js" },
    { img: "tech/tS.png", years: "1 year", text: "TypeScript" },
    { img: "tech/dj.png", years: "1 year", text: "Django" },
    { img: "tech/spb.png", years: "1 year", text: "SpringBoot" },
    { img: "tech/git.png", years: "2 years", text: "Git" },
    { img: "tech/gh.png", years: "3 years", text: "GitHub" },
    { img: "tech/linux.png", years: "2 years", text: "Linux" },
    { img: "tech/windows.png", years: "5 years", text: "Windows" },
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="group flex flex-col items-center gap-3 py-6 px-4 border border-transparent hover:border-rule transition-all duration-300"
          >
            <img
              src={tech.img}
              className="w-10 h-10 object-contain group-hover:scale-110 transition-all duration-500"
              alt={tech.text}
            />
            <span className="font-sans text-sm text-cream group-hover:text-accent transition-colors duration-300">
              {tech.text}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {tech.years}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
