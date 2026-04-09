"use client";
import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const categories = [
    {
      label: "Languages",
      items: [
        { img: "tech/python.png", years: "1 year", text: "Python" },
        { img: "tech/logo-javascript.svg", years: "2 years", text: "JavaScript" },
        { img: "tech/tS.png", years: "1 year", text: "TypeScript" },
        { img: "tech/java-4.svg", years: "2 years", text: "Java" },
        { img: "tech/html-1.svg", years: "3 years", text: "HTML5" },
        { img: "tech/css-3.svg", years: "3 years", text: "CSS3" },
      ],
    },
    {
      label: "Frameworks & Libraries",
      items: [
        { img: "tech/react-2.svg", years: "2 years", text: "ReactJS" },
        { img: "tech/next-js.svg", years: "1 year", text: "Next.js" },
        { img: "tech/tailwind-css-2.svg", years: "1 year", text: "Tailwind CSS" },
        { img: "tech/nodejs.png", years: "2 years", text: "Node.js" },
        { img: "tech/spb.png", years: "1 year", text: "Spring Boot" },
        { img: "tech/dj.png", years: "1 year", text: "Django" },
      ],
    },
    {
      label: "Databases",
      items: [
        { img: "tech/mysql.png", years: "2 years", text: "MySQL" },
        { img: "tech/mg.png", years: "1 year", text: "MongoDB" },
      ],
    },
    {
      label: "Cloud & DevOps",
      items: [
        { img: "tech/aws.png", years: "1 year", text: "AWS" },
        { img: "tech/git.png", years: "2 years", text: "Git" },
        { img: "tech/gh.png", years: "3 years", text: "GitHub" },
        { img: "tech/linux.png", years: "2 years", text: "Linux" },
      ],
    },
    {
      label: "AI Tools",
      items: [
        { img: "tech/claude.png", years: "1 year", text: "Claude" },
        { img: "tech/gemini.png", years: "1 year", text: "Gemini" },
      ],
    },
  ];

  let globalIndex = 0;

  return (
    <div className="py-8 space-y-12">
      {categories.map((category, catIndex) => (
        <div key={catIndex}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6"
          >
            {category.label}
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {category.items.map((tech) => {
              const idx = globalIndex++;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.03 }}
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
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
