import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Bio = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    certifications: 0,
    contributions: 0,
    technologies: 0,
  });

  const statsRef = React.useRef(null);
  const isInView = useInView(statsRef, { once: false });

  useEffect(() => {
    if (!isInView) {
      setCounts({
        experience: 0,
        certifications: 0,
        contributions: 0,
        technologies: 0,
      });
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      const targets = {
        experience: 6,
        certifications: 10,
        contributions: 275,
        technologies: 15,
      };

      const duration = 2000;
      const steps = 100;
      const interval = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounts({
          experience: Math.min(
            Math.ceil(targets.experience * progress),
            targets.experience,
          ),
          certifications: Math.min(
            Math.ceil(targets.certifications * progress),
            targets.certifications,
          ),
          contributions: Math.min(
            Math.ceil(targets.contributions * progress),
            targets.contributions,
          ),
          technologies: Math.min(
            Math.ceil(targets.technologies * progress),
            targets.technologies,
          ),
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const githubStats = [
    {
      label: "Years of Professional Experience",
      value: `${counts.experience}`,
    },
    { label: "Certifications Completed", value: `${counts.certifications}+` },
    { label: "Contributions on GitHub", value: `${counts.contributions}+` },
    { label: "Technologies Used", value: `${counts.technologies}+` },
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

            <div className="flex gap-4 mt-8">
          <a href="/Portfolio-Resume.pdf"  targets="_blank"  rel="noopener noreferrer" className="relative overflow-hidden bg-gray-800/20 border border-white/20 text-white px-6 py-3 rounded-md group hover:border-cyan-700">
  <span className="relative z-10">Download CV</span>
  <span className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-all duration-500 group-hover:left-full"></span>
</a>
                
             
              <motion.div className="relative group">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative inline-flex items-center px-6 py-3 text-cyan-400 border-2 border-cyan-400/50 rounded-lg bg-transparent hover:bg-cyan-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Contact me</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="md:w-1/3 space-y-8">
          {githubStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
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
