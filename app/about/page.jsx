"use client";

import React, { useRef } from 'react'
import { motion, reverseEasing, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Typing from "../components/Animation";


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
        <div  className="h-full w-full flex flex-col   px-16 sm:px-24 md:px-12 lg:px-20 xl:px-48 overflow-y-auto " >
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
                    <div>
                    <h2 className="text-6xl lg:text-8xl px-0 sm:px-24 text-white font-extrabold">About<span className="text-blue-300 ">.</span> </h2>
                    <hr className="w-full my-8 rounded-xl border-gray-700 border-2"></hr>
              </div>
              <div className=" w-full lg:w-2/3 hover:shadow-2xl justify-evenly items-center hover:shadow-black   cursor-grab hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800  flex flex-col  rounded-xl my-6 ">
                    <p className=" text-medium lg:text-2xl p-6  font-serif font-medium text-slate-100">

                  " Hi I'm Ravjot! A full-stack developer that holds a great passion to continuously grow in the IT realm.     
                    Within my final  year of schooling, I am extending my expertise by utilizing the latest technologies to gain more experience in bettering my Software Engineering practices.</p>
                    <p className=" text-medium lg:text-2xl p-6  font-serif font-medium text-slate-100">
                    While technology continues to evolve everyday, I have grasped 4 years of experience in my academical pursuit
                    by showcasing my knowledge of growth throughout my projects, from business to personal applications.</p>
                    <p className="text-medium lg:text-2xl p-6  font-serif font-medium text-slate-100"> Just as the tech world stays in the pursuit of evolution, I hold myself to the same standard. I look forward in presenting more innovative projects, feel free to check out of my work and let's connect! "

                     </p>
              </div>
                      {/*Slide animation for profile section*/}
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
        {/* SVG animation*/}            
        <div ref={typRef} className=""> 
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
                            <Typing/>
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
             <div ref={experienceRef} >
                      {/* Experience section */}     
                        
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
        </motion.div>

  )
  }

export default AboutPage
