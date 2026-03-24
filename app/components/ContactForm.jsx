"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [copied, setCopied] = useState(false);
  const email = "duhraravjot@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-gradient-to-b from-charcoal via-gray-950/30 to-charcoal">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-display-md md:text-display-lg text-cream mb-4"
        >
          Let's build something
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-display-md md:text-display-lg text-accent mb-16"
        >
          together.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="editorial-rule w-32 mx-auto mb-8" />

          <p className="font-sans text-sm text-text-muted tracking-wider uppercase mb-6">
            Get in touch
          </p>

          <button
            onClick={copyToClipboard}
            className="group inline-flex items-center gap-3 font-sans text-lg md:text-xl text-cream hover:text-accent transition-colors duration-300"
          >
            <span className="border-b border-rule group-hover:border-accent transition-colors duration-300 pb-1">
              {email}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-text-muted group-hover:text-accent transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </button>

          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-sans text-sm text-accent"
            >
              Copied to clipboard
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
