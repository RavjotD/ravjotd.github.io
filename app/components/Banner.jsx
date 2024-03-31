import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


const Banner = ({}) => {
  return (
    <div className="w-full h-full flex flex-col font-bold justify-start items-start ">
      <div className="text-white text-6xl md:text-6xl lg:text-9xl mb-12">    
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

                <div className="text-white text-opacity-30 text-4xl md:text-6xl lg:text-8xl mb-12">    
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

            <div className=" text-white text-opacity-30 text-4xl md:text-6xl lg:text-8xl mb-12">   
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
                <div className=" text-white text-opacity-30 text-4xl md:text-6xl lg:text-8xl mb-12">    
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
            <div className=" text-white text-opacity-30 text-4xl md:text-6xl lg:text-8xl mb-12">    
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