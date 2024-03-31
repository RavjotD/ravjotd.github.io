"use client";
import React from 'react'
import { AnimatePresence } from "framer-motion";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const TransitionProvider = ({children}) => {


    const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
    {/* first motion div drop down */}
    <div key={pathName} 
    className="w-screen h-screen bg-gradient-to-b from-slate-700 to-gray-600">
        <motion.div 
        className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        animate={{height: "0vh"}}
        exit={{height: "140vh"}}
        transition={{duration: 0.5, ease:"easeOut"}}
      />
      {/* Text of motion div */}
      <motion.div 
        className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl lg:text-8xl cursor-default z-50 w-fit h-fit "
        initial={{opacity: 1}}
        animate={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.8, ease:"easeOut"}} >

            {pathName.substring(1).toUpperCase()}
        </motion.div>
     
     
      <motion.div 
        className="h-screen w-screen fixed bg-gray-900 rounded-t-[100px] bottom-0 z-30"
        initial={{height: "140vh"}}
        animate={{height: "0vh", transition: {delay: 0.5} }}
        
      />
      <div className="h-24">
        <NavBar/>
      </div>

      <div className="h-[calc(100vh-6rem)]">{children}</div>
    </div>
    </AnimatePresence>
    
  );
};

export default TransitionProvider
