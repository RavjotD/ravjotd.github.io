import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
    animate: {
      transition: {
        delayChildren: 1.4,
        staggerChildren: 1.1,
      },
    },

    hover: {
      transition: {
        delayChildren: 1.4,
        staggerChildren: 1.1,
      },
    },
  };
  
  const wordAnimations = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  
  
  
  const Banner = ({ titles }) => {
    return (
      <div className="flex flex-col justify-start items-start text-4xl md:text-xl lg:text-9xl md:pt-20 lg:pt-24  ">
        {titles.map((title, index) => (
          <motion.div
            key={index}
            className="py-3 font-bold  text-white text-opacity-40"
            variants={banner}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ delay: index * 1.2 }}
          >
            {title.split(" ").map((word, wordIndex, wordsArray) => (
              <motion.span key={wordIndex} variants={wordAnimations}>
                {word}
                
                {wordIndex !== wordsArray.length - 1 && <>&nbsp;</>}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default Banner;