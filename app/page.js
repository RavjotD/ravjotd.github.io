"use client";
import React,{useEffect, useState} from "react";
import { animate, motion, useTransform, useMotionValue, AnimatePresence  } from "framer-motion";
import CubeBg from "./components/CubeBg";
import Banner from "./components/Banner";


const titles = [
  "Hi I'm Ravjot!",
  "UX Designer. ",
  "Programmer. ",
  "Gamer.",
  "Software Engineer. ",
  "Full-Stack Developer.",
  
];

export default function Home() {
  const [bannerCompleted, setBannerCompleted] = useState(false);

  // Use useEffect to detect when banner animation is completed
  useEffect(() => {
    setTimeout(() => {
      setBannerCompleted(true);
    }, titles.length * .7 * 1000); // Adjust timing accordingly
  }, []);

  return (
    <div className=" flex  flex-row justify-between   ">
      <div className="w-1/2  inset-0 ">
        <Banner titles={titles} />
      </div>
      <AnimatePresence>
        {bannerCompleted && (
          <motion.div
          className=" w-1/2  px-3  justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CubeBg />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}