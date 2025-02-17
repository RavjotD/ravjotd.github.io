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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img
            src="/hero-bg.png"
            alt="Background Logo"
            className="w-[700px] h-[700px] object-contain blur-sm mb-20"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-white to-cyan-900 bg-clip-text text-transparent">
              Turning Concepts <span className="font-normal">into </span>
              Code:
              <br></br>
              <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-600 bg-clip-text text-transparent">
                Crafting <span className="font-normal">your</span> Digital
                Dreams
              </span>
            </span>
          </h2>
          <h3 className="text-xl md:text-4xl font-bold mb-12">
            <span className="text-gray-400">
              Innovative in designing and deploying reliable web applications
              and{" "}
            </span>
            <span className="text-cyan-400">Software Solutions!</span>
          </h3>

          <div className="w-full h-[2px] bg-gradient-to-r from-teal-500 via-gray-600 to-cyan-500 mb-10" />

          <p className="text-lg text-gray-400 mb-4"> Let's get in touch!</p>
          <div
            className="inline-flex items-center space-x-2 bg-gray-800/50 px-6 py-3 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-all cursor-pointer"
            onClick={copyToClipboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
            <span className="text-gray-300 text-lg">{email}</span>
          </div>

          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-cyan-400"
            >
              Email copied to clipboard!
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
