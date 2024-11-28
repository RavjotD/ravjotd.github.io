import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

// Constant created for banner to display text on home page.
const Banner = ({}) => {
  return (
    <div className="w-full h-full flex flex-col font-bold justify-start items-start pt-4 lg:pt-48 p-4 text-white">
          <h1 className="font-bold text-4xl md:text-6xl font-sans"> Hi, I'm Ravjot!</h1>
         
          <div className=" flex flex-col items-start justify-start ">
          <h2 className="font-bold text-xl md:text-4xl font-sans"> Software Engineer.</h2>
        
          <div className="   border-2 rounded-xl border-cyan-700  border-opacity-15 h-3   w-2/3 md:w-full  mb-1 mt-1  "><div className="bg-gradient-to-r w-full h-full rounded-xl from-slate-700 to-cyan-700"></div></div>
          <p className="font-sm font-sans text-slate-800"> I specialize in full-stack development.</p>
       </div>


         <button className=" border-2 border-slate-500  border-x-cyan-600 rounded bg-slate-600 p-3 mt-4 transition ease-in-out  hover:bg-cyan-700 top-0 block transform  bg-gradient-to-bl from-transparent to-cyan-900  group-hover:animate-shine hover:border-cyan-600 " ><a href="/RavjotD-Resume.pdf" className=" p-6" target="_blank" alt="My Resume" rel="noopener noreferrer">Download CV </a>
         </button>

         
      </div>
                
             
            
  );
};

export default Banner;