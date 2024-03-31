"use client";
import React,{useEffect, useState} from "react";
import { animate, motion, useTransform, useMotionValue, AnimatePresence  } from "framer-motion";
import CubeBg from "./components/CubeBg";
import Banner from "./components/Banner";


export default function Home() {
 

  // Use useEffect to detect when banner animation is completed
 
  return (
  


    <motion.div
     
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>   

    <div className=" flex flex-col lg:flex-row px-4 mt-12 lg:mt-64 ">
      <div className="w-full   ">
        <Banner  />
      </div>
          <div
          className=" w-full  px-3 justify-center  "
        
          >
            <CubeBg />
          </div>
       
         
    </div>
    </motion.div>
  );
}