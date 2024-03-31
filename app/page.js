"use client";
import React,{useEffect, useState} from "react";
import { animate, motion, useTransform, useMotionValue, AnimatePresence  } from "framer-motion";
import CubeBg from "./components/CubeBg";
import Banner from "./components/Banner";


export default function Home() {
 

  // Use useEffect to detect when banner animation is completed
 
  return (
  

    <div className=" flex flex-col lg:flex-row px-4 mt-12 lg:mt-64">
      <div className="w-full inset-0   ">
        <Banner  />
      </div>
      
        
          <motion.div
          className=" w-full  px-3  justify-center  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CubeBg />
          </motion.div>
       
      
    </div>
    
  );
}