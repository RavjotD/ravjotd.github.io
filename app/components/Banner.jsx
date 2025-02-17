
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex flex-col justify-center items-start p-4 text-white"
    >
      <h1 className="font-bold text-5xl md:text-7xl mb-4">
        Hi, I'm <span className="text-cyan-400">Ravjot!</span>
      </h1>
      
      <h2 className="font-bold text-2xl md:text-4xl mb-4">
        Software Engineer.
      </h2>
      
      <div className="w-full max-w-md mb-6">
        <div className="h-1 w-full bg-gradient-to-r from-slate-700 via-cyan-700 to-slate-700 rounded-full"/>
      </div>
      
      <p className="text-lg text-slate-300 mb-8">
        I specialize in full-stack development.
      </p>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-cyan-600 rounded-lg bg-gradient-to-bl from-slate-800 to-cyan-900 px-6 py-3 hover:bg-cyan-700 transition-all duration-300"
      >
        <a 
          href="/RavjotD-Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white font-bold"
        >
          Download CV
        </a>
      </motion.button>
    </motion.div>
  );
};

export default Banner;
