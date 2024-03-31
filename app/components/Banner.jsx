import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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

const Banner = ({}) => {
  return (
    <div className="flex flex-col font-bold justify-start items-start ">
      <div className="text-white   text-4xl md:text-7xl lg:text-8xl mb-12">    
            <TypeAnimation
              sequence={[
                
                'Hi I am Ravjot!',
                1000,
                '',
                2000, 
             
              ]}
              wrapper="span"
              speed={20}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
                  </div>

                <div className="text-white text-opacity-30 text-2xl md:text-7xl mb-12">    
                <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'UX Designer.',
                3000,
                '',
                3000,
   
              ]}
              wrapper="span"
              speed={20}
              style={{display: 'inline-block' }}
              repeat={Infinity}
            />
            </div>

            <div className=" text-white text-opacity-30 text-2xl md:text-7xl mb-12">   
         <TypeAnimation
              
              sequence={[
             
                'Full-Stack Developer.',
                3000,
                '',
                3000,
   
              ]}
              wrapper="span"
              speed={20}
              style={{  display: 'inline-block' }}
              repeat={Infinity}
            />

</div>
                <div className=" text-white text-opacity-30 text-2xl md:text-7xl mb-12">    
                 <TypeAnimation              
                 sequence={[
                      ' Programmer.',
                      3000,
                      '',
                      3000,
    
              ]}
              wrapper="span"
              speed={20}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
            </div>   
            <div className=" text-white text-opacity-30 text-2xl md:text-7xl mb-12">    
                 <TypeAnimation              
                 sequence={[
                      ' Software Engineer.',
                      3000,
                      '',
                      3000,
    
              ]}
              wrapper="span"
              speed={20}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
            </div>   
    </div>
  );
};

export default Banner;