import React from 'react'

import { motion, reverseEasing, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
const Profile = () => {
  return (

    // Component for tech stack
    <div className="flex  flex-col  my-10 justify-center px-2 items-center">
               {/* Title */}
              <div>
                <h1 className=" text-6xl lg:text-8xl  text-white font-extrabold ">Tech<span className="text-blue-300 ">.</span> </h1>
                <hr className="w-full my-2 rounded-xl border-gray-700 border-2"></hr>
               </div>
                {/* Elements */}
                <div className=" grid grid-cols-2 lg:flex lg:flex-wrap gap-6 text-center    my-4  items-center justify-center">           
                    
                        <div className=" relative group p-3 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center text-white font-medium text-center py-1 "> 
                          <img src="/python.png"  className="w-1/2 md:w-1/3 lg:w-20 h-1/6 py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div> 
                        <div className=" relative group p-3 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center "> 
                          <img src="logo-javascript.svg"  className="w-1/2 md:w-1/3 lg:w-20 h-1/6 py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className="relative group p-3 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center text-white font-medium text-center">
                          <img src="/react-2.svg" className="w-1/2 md:w-1/3 lg:w-20 h-1/6 py-3 "/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div>
                        <div className="relative group p-3 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center text-white font-medium text-center">
                          <img src="/mysql.png" className="w-1/2 md:w-1/3 lg:w-20 h-1/6  py-3 "/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className="relative group p-3 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center"> 
                          <img src="/java-4.svg"  className="w-1/3 md:w-1/3 lg:w-20 h-1/6 py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className=" relative group p-3 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center text-white font-medium text-center">
                          <img src="/tailwind-css-2.svg"  className="w-1/2 md:w-1/3 lg:w-20 h-1/6 py-3"/>
                          <div className='inset-0 flex items-center justify-center text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div>
                        <div className=" relative group p-3 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center" >
                           <img src="/c.svg"  className="w-1/2 md:w-1/3 lg:w-20 h-1/6"/>
                           <div className='inset-0 flex items-center justify-center text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                           </div>       
                        <div className="relative group p-3 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center"> 
                          <img src="/css-3.svg"  className="w-1/2 md:w-1/3 lg:w-20 h-1/6"/>
                          <div className='inset-0 flex items-center justify-center text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className="relative group p-3 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center"> 
                          <img src="html-1.svg"  className="w-1/2 md:w-1/3 lg:w-20 h-1/6" />
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className="relative group p-3 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center text-white font-medium text-center py-1 ">
                          <img src="/nodejs.png"  className="w-1/2 md:w-1/3 lg:w-20 h-1/6 py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 year</div>
                          </div>                  
                        <div className="relative group p-3 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center text-white font-medium text-center py-1 ">
                          <img src="/android-6.svg"  className="w-1/2 md:w-1/3 lg:w-20 h-1/6 py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div> 
                        <div className=" relative group p-3 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center   text-white font-medium ">
                          <img src="/next-js.svg" className="w-1/2 md:w-1/3 lg:w-20 h-1/6 py-3 "/>
                          <div className='inset-0 flex items-center justify-center text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div>
                </div>
            
              
    </div>

        

  )
}

export default Profile
