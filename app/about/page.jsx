"use client";

import React, { useRef } from 'react'
import { motion, reverseEasing, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import Profile from "../components/Profile";
import Experience from "../components/Experience";


// About page that uses react hooks for transition and animation features to showcase content uniquely.
const AboutPage = () => {

    const profileRef = useRef(null);    
    const experienceRef = useRef(null);    
    const typRef = useRef(null);    

    const proInView = useInView(profileRef, {once:true});
    const expInView = useInView(experienceRef, {once:true});
    const typInView = useInView(typRef, {once:true});
  
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {

        if(proInView){
          mainControls.start("visible");
          slideControls.start("visible");
        }

    }, [proInView]);

    useEffect(() => {

      if(expInView){
        mainControls.start("visible");
        slideControls.start("visible");
      }

  }, [expInView]);
  useEffect(() => {

    if(typInView){
      mainControls.start("visible");
      slideControls.start("visible");
    }

}, [typInView]);
 

    return (

      <motion.div
     
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
        {/* Page container */}
        <div  className="h-full w-full flex flex-col p-4  px-8 sm:px-24 md:px-12 lg:px-20 xl:px-48 overflow-y-auto overflow-x-hidden " >
          
          <div ref={profileRef} >
               {/* Profile  */}
                 <motion.div 
                 className="flex  flex-col  my-10 justify-center   items-center"
                 variants={{
                  visible: {opacity: 1,y:0},
                  hidden: {opacity:0,y:75}
                 }} 
                
                 initial= "hidden"
                 animate ={mainControls}
                 transition={{
                  duration: 1,
                  delay: .5
                 }}>
                  {/* About Me section */}
                    <div>
                    <h2 className="text-center text-4xl  lg:text-8xl px-0 sm:px-24 text-white font-extrabold">About Me<span className="text-blue-300 ">.</span> </h2>
                    <hr  className=' w-screen my-2 rounded-xl border-slate-600 border-2'/>

              </div>
              <div className=" text-white text-xs md:text-sm lg:text-2xl font-sans font-medium md:w-full lg:w-2/3  hover:shadow-2xl text-justify items-center hover:shadow-black  p-2 hover:p-3  cursor-grab hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 transition duration-1000 flex flex-col  rounded-xl my-8 ">
                  <p className=" pb-4 ">
                  <span className='text-2xl lg:text-4xl'>"Hi I'm</span> <span className=' text-2xl lg:text-4xl text-cyan-400'>Ravjot!</span> A passionate <span className=' lg:text-2xl bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400  text-transparent bg-clip-text'>full-stack developer</span> dedicated to continuously growing in the IT realm.     
                  With over 2 years of experience in programming, I have acquired a versatile skillset in both frontend and backend specialties. My expertise includes technologies in web applications of such as React, Django, and Next.js. Driven by a desire to stay at the forefront of the industry, I earned a Meta Backend Professional Certification, which ensures extensive practices in backend development.</p> 
                    <p className="  pb-4  ">
                    Outside of programming, I find joy in various activities that enhance who I am today. I love socializing and networking with friends, savoring new food experiences, and keeping my mind active through sports and video games. My goal is to always embrace new opportunities, whether it's networking with new people or being part of innovative software solutions. "</p>
                    
              </div>

                 {/* What I do section */}
              <div className='mt-6'>
              <h2 className=" text-center text-4xl lg:text-8xl px-0 sm:px-24 text-white font-extrabold">What I do<span className="text-blue-300 ">.</span> </h2>
                  <hr  className=' w-screen my-2 rounded-xl border-slate-600 border-2'/>
              </div>
              <div className=" mt-8 flex w-full h-full gap-3 flex-col lg:grid lg:grid-cols-3 text-white py-5">
                
                <div className=" border-4 border-slate-800 hover:border-cyan-800 bg-gradient-to-br  from-slate-900 to-gray-700 hover:bg-gradient-to-tl hover:from-slate-900 hover:to-cyan-700  flex flex-col justify-center items-center text-center p-6 rounded-t-md rounded-b-md ">
                  <img  className ="w-1/6 rounded-xl pb-2" src="/stack.png" />
                    <h1 className="font-bold font-sans pb-2 lg:text-lg xl:text-xl">Full-Stack Development</h1>
                    <p className="font-sans text-xs md:text-sm xl:text-lg"> Accountable in developing and maintaining all aspects of a software application, from front-end to back-end. </p> 
                   </div>

                   <div className=" border-4 border-slate-800 hover:border-cyan-800 bg-gradient-to-br  from-slate-900 to-gray-700 hover:bg-gradient-to-tl hover:from-slate-900 hover:to-cyan-700  flex flex-col justify-center items-center text-center p-6 rounded-t-md rounded-b-md ">
                    <img  className ="w-1/6 rounded-xl pb-2" src="/UX.png" />
                      <h1 className="font-bold font-sans pb-2 lg:text-lg  xl:text-xl">UX/UI Design</h1>
                      <p className="font-sans text-xs md:text-sm xl:text-lg"> Experienced in intuitive interfaces that ensures positive user experience and increased user retention.</p> 
                    </div>

                   <div className=" border-4 border-slate-800 hover:border-cyan-800 bg-gradient-to-br  from-slate-900 to-gray-700 hover:bg-gradient-to-tl hover:from-slate-900 hover:to-cyan-700  flex flex-col justify-center items-center text-center p-4 rounded-t-md rounded-b-md">
                      <img  className ="w-1/6 rounded-xl pb-2 " src="/debugging.png" />
                       <h1 className="font-bold font-sans pb-2 lg:text-lg  xl:text-xl">Testing & Debugging</h1>
                        <p className="font-sans text-xs md:text-sm xl:text-lg">Analyzing requirements and defining system functionality from designing, developing, testing and maintaining software applications. </p> 
                       </div>
                
                 </div>

                      {/*Slide animations*/}
                    <motion.div
                    className="bg-slate-700"
                        variants={{
                          hidden: {left: 0},
                          visible: {left:"100%"},
                        }}
                        initial= "hidden"
                        animate = {slideControls}
                        transition={{ duration: 1, ease: "easeIn"}}
                        style={{
                          position: "absolute",
                          top: 4,
                          bottom: 4, 
                          left: 0,
                          right: 0,
                          background: "",
                          zIndex:20,
                        }}               
                    />
                 </motion.div>
       
                              {/* Experience container */} 
             <div ref={experienceRef} >
                         <motion.div
                          variants={{
                            visible: {opacity: 1,y:0},
                            hidden: {opacity:0,y:75}
                           }}                        
                           initial= "hidden"
                           animate ={mainControls}
                           transition={{
                            duration: 1,
                            delay: .5
                           }}>
                              
                             <Experience/>
                            <Profile/>
                             {/* Slide animation of div */}
                             <motion.div
                   
                            className="bg-slate-700"
                               variants={{
                          hidden: {left: 0},
                          visible: {left:"100%"},
                        }}
                                initial= "hidden"
                                animate = {slideControls}
                                transition={{ duration: 1, ease: "easeIn"}}
                                style={{
                                  position: "absolute",
                                  top: 4,
                                  bottom: 4, 
                                  left: 0,
                                  right: 0,
                                  background: "",
                                  zIndex:20,
                        }}               
                    />
                        </motion.div>             
                 </div> 
                 </div>
                        </div>
        </motion.div>

  )
  }

export default AboutPage
