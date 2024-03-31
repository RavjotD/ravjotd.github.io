"use client";
import React,{useEffect, useState} from "react";
import { animate, motion, useTransform, useMotionValue, AnimatePresence  } from "framer-motion";
import CubeBg from "./components/CubeBg";
import Banner from "./components/Banner";


export default function Home() {
 

  // Use useEffect to detect when banner animation is completed
 
  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration:1}}> 


    <div className=" flex flex-row justify-between  ">
      <div className="w-full inset-0  mt-64  ">
        <Banner  />
      </div>
      
        
          <motion.div
          className=" w-full  px-3  justify-center mt-64 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CubeBg />
          </motion.div>
       
      
    </div>
    </motion.div>
  );
}