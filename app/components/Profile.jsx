import React from 'react'

import { motion, reverseEasing, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
const Profile = () => {
  return (

    // Component for tech stack
    <div className="flex  flex-col  my-10 justify-center px-2 items-center">
               {/* Title */}
              <div>
                <h1 className=" text-4xl lg:text-8xl  text-white font-extrabold ">Tech Stack<span className="text-blue-300 ">.</span> </h1>
                <hr className="w-full my-2 rounded-xl border-gray-700 border-2"></hr>
               </div>
                {/* Elements */}
                <div className=" grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-2 gap-6 text-center my-4  items-center justify-center">           
                    
                        <div className=" relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-yellow-500 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center text-white font-medium text-center "> 
                          <img src="/python.png"  className="max-w-[50px]  h-auto py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div> 
                        <div className=" relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-yellow-500 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center "> 
                          <img src="logo-javascript.svg"  className="max-w-[50px]  h-auto py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className="relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-cyan-500 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center text-white font-medium text-center">
                          <img src="/react-2.svg" className="max-w-[50px]  h-auto py-3 "/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div>
                        <div className="relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-blue-500 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center text-white font-medium text-center">
                          <img src="/mysql.png" className="max-w-[50px] h-auto py-3 "/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className="relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-orange-600 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center"> 
                          <img src="/java-4.svg"  className="max-w-[36px]  h-auto py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className=" relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-cyan-500 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center text-white font-medium text-center">
                          <img src="/tailwind-css-2.svg"  className="max-w-[50px]  h-auto py-3"/>
                          <div className='inset-0 flex items-center justify-center text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div>
                        <div className=" relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-blue-900 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center" >
                           <img src="/c.svg"  className="max-w-[50px]  h-auto py-3"/>
                           <div className='inset-0 flex items-center ju3stify-center text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                           </div>       
                        <div className="relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-blue-500 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center"> 
                          <img src="/css-3.svg"  className="max-w-[50px]  h-auto py-3"/>
                          <div className='inset-0 flex items-center justify-center text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className="relative group w-full max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-orange-500 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center"> 
                          <img src="html-1.svg"  className="max-w-[50px] h-auto py-3" />
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>
                        <div className="relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-green-500 rounded-lg bg-gray-700 p-4 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center text-white font-medium text-center py-1 ">
                          <img src="/nodejs.png"  className="max-w-[50px] lg:w-20 h-auto py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>2 years</div>
                          </div>                  
                        <div className="relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-green-300 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300  flex flex-col justify-center items-center text-white font-medium text-center py-1 ">
                          <img src="/android-6.svg"  className="max-w-[50px]  h-auto py-3"/>
                          <div className='inset-0 flex items-center justify-center  text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div> 
                        <div className=" relative group w-full  max-w-[150px] min-w-[120px] min-h-[150px] border-4 border-slate-800 hover:border-gray-500 rounded-lg bg-gray-700 p-2 hover:-translate-y-4 duration-300 flex flex-col justify-center items-center   text-white font-medium ">
                          <img src="/next-js.svg" className="max-w-[50px] h-auto py-3 "/>
                          <div className='inset-0 flex items-center justify-center text-white text-lg font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300'>1 year</div>
                          </div>
                </div>
            
              
    </div>

        

  )
}

export default Profile
