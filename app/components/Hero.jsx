"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-bl from-gray-900 via-black to-gray-800">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img
          src="/hero-bg.png"
          alt="Background Logo"
          className="w-[900px] h-[850px] object-contain blur-sm"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-normal text-white mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent font-bold">
            Ravjot!
          </span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-blue-300 to-gray-900 bg-clip-text text-transparent"
        >
          Fullstack Developer
        </motion.h2>

        <motion.div variants={item} className="text-2xl text-cyan-400 h-8 mt-4">
          <TypeAnimation
            sequence={["& Freelancer", 1000, "", 500]}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        <motion.p variants={item} className="text-lg text-gray-400 mt-4">
          Helping build reliable web applications
        </motion.p>

        <motion.div variants={item} className="flex gap-6 mt-8">
          <Link
            href="https://github.com/RavjotD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 hover:shadow-[0_0_15px_cyan] transition-all duration-300">
              <img src="/github.png" alt="GitHub" className="w-6 h-6" />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ravjot-duhra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 hover:shadow-[0_0_15px_cyan] transition-all duration-300">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
