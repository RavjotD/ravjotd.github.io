import React from 'react'

import { motion, reverseEasing, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
const Profile = () => {
  return (

    // Component parent div
    <div className="flex  flex-col  my-10 justify-center px-12   items-center">
                {/* Skills */}
              <div>
                <h1 className=" text-6xl lg:text-8xl  text-white font-extrabold "> Skills<span className="text-blue-300 ">.</span> </h1>
                <hr className="w-full my-2 rounded-xl border-gray-700 border-2"></hr>
               </div>

                <div className="flex   hover:bg-gradient-to-b  hover:shadow-xl hover:shadow-black  hover:from-gray-700 hover:to-gray-800 rounded-xl  my-4  flex-col items-center justify-center">           
                    <div className=" flex flex-wrap items-center justify-center   my-3 gap-6"> 
                        <div className=" p-3 flex flex-col justify-center text-white font-medium text-center"><img src="/next-js.svg" className="w-16 h-1/6 py-3"/>Next.js</div>
                        <div className=" p-3  flex flex-col justify-center items-center"> <img src="logo-javascript.svg"  className="w-16 h-1/6"/></div>
                        <div className=" p-3  flex flex-col justify-center text-white font-medium text-center"><img src="/react-2.svg" className="w-16 h-1/6 py-2 "/>React</div>
                        <div className=" p-3  flex flex-col justify-center items-center text-white font-medium text-center"><img src="/framer-motion.svg" className="w-16 h-1/6  py-3 "/>Framer Motion</div>
                        <div className=" p-3  flex flex-col justify-center"> <img src="/java-4.svg"  className="w-16 h-1/6"/></div>
                        <div className=" p-3 flex flex-col justify-center items-center text-white font-medium text-center"><img src="/tailwind-css-2.svg"  className="w-16 h-1/6 py-6"/>TailWind CSS</div>
                        <div className=" p-3 flex flex-col justify-center items-center" > <img src="/c.svg"  className="w-16 h-1/6"/></div>       
                        <div className=" p-3  flex flex-col justify-center"> <img src="/css-3.svg"  className="w-16 h-1/6"/></div>
                        <div className=" p-3  flex flex-col justify-center"> <img src="html-1.svg"  className="w-16 h-1/6" /></div>                  
                        <div className=" p-3  flex flex-col justify-center items-center text-white font-medium text-center py-0 "> <img src="/android-6.svg"  className="w-16 h-1/6 py-3"/>Mobile Programming</div> 
                    </div>
            </div>
            
              
              </div>

        

  )
}

export default Profile
