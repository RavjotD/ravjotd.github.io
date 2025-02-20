import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Profile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      },
    }),
  };

  const techStack = [
    {
      img: "tech/python.png",
      years: "1 year",
      color: "blue-400",
      text: "Python",
    },
    {
      img: "tech/logo-javascript.svg",
      years: "2 years",
      color: "yellow-400",
      text: "JavaScript",
    },
    {
      img: "tech/react-2.svg",
      years: "2 years",
      color: "cyan-400",
      text: "ReactJS",
    },
    {
      img: "tech/mysql.png",
      years: "2 years",
      color: "orange-500",
      text: "MySQL",
    },
    {
      img: "tech/java-4.svg",
      years: "2 years",
      color: "red-500",
      text: "Java",
    },
    {
      img: "tech/tailwind-css-2.svg",
      years: "1 year",
      color: "teal-400",
      text: "Tailwind CSS",
    },
    {
      img: "tech/aws.png",
      years: "1 year",
      color: "orange-500",
      text: "AWS",
    },
    {
      img: "tech/css-3.svg",
      years: "3 years",
      color: "blue-500",
      text: "CSS3",
    },
    {
      img: "tech/html-1.svg",
      years: "3 years",
      color: "orange-600",
      text: "HTML5",
    },
    {
      img: "tech/nodejs.png",
      years: "2 years",
      color: "green-500",
      text: "NodeJS",
    },
    {
      img: "tech/mg.png",
      years: "1 year",
      color: "green-500",
      text: "MongoDB",
    },
    {
      img: "tech/next-js.svg",
      years: "1 year",
      color: "gray-400",
      text: "Next.js",
    },
    {
      img: "tech/tS.png",
      years: "1 years",
      color: "blue-500",
      text: "TypeScript",
    },
    {
      img: "tech/dj.png",
      years: "1 year",
      color: "green-400",
      text: "Django",
    },
    {
      img: "tech/spb.png",
      years: "1 year",
      color: "green-400",
      text: "SpringBoot",
    },
    {
      img: "tech/git.png",
      years: "2 years",
      color: "orange-500",
      text: "Git",
    },
    {
      img: "tech/gh.png",
      years: "3 years",
      color: "gray-400",
      text: "GitHub",
    },
    {
      img: "tech/linux.png",
      years: "2 years",
      color: "yellow-400",
      text: "Linux",
    },
    {
      img: "tech/windows.png",
      years: "5 years",
      color: "blue-400",
      text: "Windows",
    },
  ];

  return (
    <div className="flex flex-col my-10 justify-center px-2 items-center">
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 px-2 gap-8 text-center my-10 items-center justify-center"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            custom={index}
            className={`relative group w-full max-w-[150px] min-w-[120px] min-h-[150px] rounded-lg bg-gray-800/30 backdrop-blur-sm p-2 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center overflow-hidden shadow-[0_0_10px_var(--tw-glow-color)] hover:shadow-[0_0_20px_var(--tw-glow-color)] transition-all border-4 border-transparent hover:border-[var(--tw-glow-color)]`}
            style={{
              "--tw-glow-color": `rgb(var(--${tech.color}-rgb))`,
              background: `linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
              boxShadow: `inset 0 0 15px rgba(var(--${tech.color}-rgb), 0.3)`,
            }}
          >
            <img
              src={tech.img}
              className="max-w-[50px] h-auto py-3 group-hover:blur-lg transition-all duration-300"
              alt="tech icon"
            />
            <h3 className="text-white text-sm font-semibolda group-hover:blur-lg">
              {tech.text}
            </h3>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
              <span className="text-lg">{tech.years}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
