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
            targets.experience
          ),
          certifications: Math.min(
            Math.ceil(targets.certifications * progress),
            targets.certifications
          ),
          contributions: Math.min(
            Math.ceil(targets.contributions * progress),
            targets.contributions
          ),
          technologies: Math.min(
            Math.ceil(targets.technologies * progress),
            targets.technologies
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
    { label: "Years Experience", value: `${counts.experience}` },
    { label: "Certifications", value: `${counts.certifications}+` },
    { label: "GitHub Contributions", value: `${counts.contributions}+` },
    { label: "Technologies", value: `${counts.technologies}+` },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-gradient-to-b from-gray-950/40 via-charcoal to-charcoal">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-display-lg text-cream mb-16 md:mb-24"
      >
        About
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
        {/* Left: Bio text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-text-secondary text-base md:text-lg leading-[1.8] mb-8"
          >
            Full Stack Developer and IT Specialist with a well-rounded background
            in software development, technical support, and systems
            troubleshooting. I'm passionate about building efficient,
            user-centric web applications — from concept to deployment — while
            ensuring reliability across both front-end and back-end environments.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-text-secondary text-base md:text-lg leading-[1.8] mb-12"
          >
            With a foundation in IT support and customer-facing roles, I bring
            strong communication skills and a solution-driven mindset to every
            project. I actively integrate AI tools to accelerate workflows,
            improve efficiency, and enhance functionality. Currently expanding my
            expertise into cloud and network engineering.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="/Portfolio-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-cream border-b border-accent pb-1 hover:text-accent transition-colors duration-300"
            >
              Download CV
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-sans text-sm text-accent border border-accent px-6 py-2 hover:bg-accent hover:text-charcoal transition-all duration-300"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        {/* Right: Stats */}
        <div ref={statsRef} className="space-y-0">
          {githubStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-6 border-t border-rule last:border-b"
            >
              <span className="font-serif text-4xl md:text-5xl text-accent block mb-2">
                {stat.value}
              </span>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
