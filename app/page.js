"use client";
import React,{useEffect, useState} from "react";
import { animate, motion, useTransform, useMotionValue, AnimatePresence  } from "framer-motion";
import CubeBg from "./components/CubeBg";
import Banner from "./components/Banner";

// Home page that displays Banner and cube component.
export default function Home() {
 
  return (
  

    <motion.div
     
      className=" min-h-full inset-0  flex flex-col  lg:flex-row justify-center items-center "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>   

    
    
    <div className=" flex flex-col lg:flex-row justify-center items center w-full h-full xl:w-2/3  p-3">
      <div className="flex-1 flex justify-center items-center">    
      <Banner/>

      </div>
      <div className="flex-1 flex justify-center items-center "> 
    <CubeBg/>
    </div>
    </div>
    
    
    </motion.div>
  );
}