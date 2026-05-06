"use client";
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
        experience: 3,
        certifications: 15,
        contributions: 275,
        technologies: 19,
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
    { label: "Years Delivering Solutions", value: `${counts.experience}+` },
    { label: "Certifications", value: `${counts.certifications}+` },
    { label: "GitHub Contributions", value: `${counts.contributions}+` },
    { label: "Technologies", value: `${counts.technologies}+` },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4"
      >
        The Story So Far
      </motion.p>
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
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-text-secondary text-base md:text-lg leading-[1.8] mb-8"
          >
            I'm a technical engineer. I strive for value, and value, to me, is growth. The kind I chase first is my own.

          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-text-secondary text-base md:text-lg leading-[1.8] mb-8"
          >
            I think about my career the way I think about systems: it scales
            two ways. Vertically through depth, horizontally through reach.
            Selling gym memberships at Club16. Running help desk tickets at
            Microserve. Doing AI evaluation work at Braintrust. Building
            full-stack apps on the side. Now supporting an enterprise platform
            at Kaseya that lives entirely on API integrations, while pushing
            into Cloud and keeping an open eye on where AI is heading. None of
            it was a pivot. Same move, different axis.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-text-secondary text-base md:text-lg leading-[1.8] mb-8"
          >
            I am driven by curiosity and am always looking to grow. Whether it's learning how new technologies work, building new things, or simply expanding my knowledge, I am always pushing myself to be better.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-text-muted text-sm leading-[1.8] mb-12 border-l-2 border-accent/30 pl-4"
          >
            Working toward AWS Solutions Architect Associate. I hold three AWS
            credentials and 15+ certifications across cloud security, backend
            development, and database administration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-sans text-sm text-cream bg-accent px-6 py-2 hover:bg-accent-deep transition-all duration-300"
            >
              Contact me
            </a>
          </motion.div>
        </div>

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
