import React from "react";
import { motion } from "framer-motion";

const Bio = () => {
  const githubStats = [
    { label: "Years of Professional Experience", value: "6" },
    { label: "Certifications Completed", value: "10+" },
    { label: "Contributions on GitHub", value: "275+" },
    { label: "Technologies Used", value: "15+" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 py-8 relative">
      <h2 className="text-6xl lg:text-8xl font-bold absolute top-12 left-12 bg-gradient-to-tl from-blue-400 via-white to-blue-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-between pt-48 px-4 md:px-12 lg:px-24 gap-12">
        <div className="lg:w-2/3">
          <div className="max-w-3xl mb-16">
            <p className="text-gray-300 mb-6">
              Full Stack Software Engineer with a seamless passion for
              developing web applications from inception to deployment. My
              dedication to both front-end and back-end development fuels my
              drive to create intuitive and efficient user experiences.
            </p>

            <p className="text-gray-300 mb-6">
              I have honed my expertise in full-stack development, enabling me
              to integrate diverse technologies into cohesive solutions. My
              credentials reflect my proficiency and ongoing commitment to
              evolving within this dynamic field.
            </p>

            <p className="text-gray-300">
              My passion extends to the integration of AI technologies, which I
              leverage to optimize workflows and enhance functionality. Outside
              of coding, I stay engaged with the latest advancements in AI and
              continually seek innovative ways to push the boundaries of
              technology.
            </p>

            <motion.div className="relative mt-8 group">
              <motion.a
                href="/Portfolio-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-6 py-3 text-white border-2 border-transparent rounded-lg bg-slate-800/50 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 animate-slide" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="md:w-1/3 space-y-8 ">
          {githubStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between ">
                <span className="text-white text-lg font-semibold">
                  {stat.label}
                </span>
                <span className="text-4xl font-bold text-teal-400 px-2">
                  {stat.value}
                </span>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-l from-teal-400 to-cyan-400" />
            </motion.div>
          ))}
        </div>
      </div>

      <h2 className="hidden lg:block text-6xl lg:text-8xl font-bold absolute bottom-12 right-12 bg-gradient-to-br from-white via-gray-700 to-blue-500 bg-clip-text text-transparent">
        Passionate to Innovate
      </h2>
    </div>
  );
};

export default Bio;
