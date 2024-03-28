"use client";
import React, { useRef } from 'react'
import { motion, useTransform,useScroll } from "framer-motion";
import Link from "next/link"

const items = [


{ id: 1, 
  color: "from-gray-500 to-blue-200",
  title: "Business Website",
  desc: "Being a student that practices in Web Development, I utilized the latest technologies to help out a client's business by establishing an online presence.",
  img: "/Stallion.png",
  link: "https://stalliongroupsecurity.ca/"
}, 

{ id: 2, 
  color: "from-blue-200 to-teal-100",
  title: "To-Do List",
  desc: " In order to become a creative developer I needed to lay out the fundamentals within React. A simple to-do list application for users to keep track of their daily schedule. ",
  img: "/project.png",
  link: "https://dolist-eta.vercel.app/"
}, 


{ id: 3, 
  color: "from-teal-100 to-slate-300",
  title: "Digital Clock",
  desc: " My first small React app to familiarize myself with it's concepts, I displayed an exquisite view to keep track of time.",
  img: "/Clock.png",
  link: "https://clock-pi-ten.vercel.app/"
}, 

];





const projectPage = () => {



      const ref = useRef();


      const {scrollYProgress} = useScroll ({target:ref})


      const x = useTransform(scrollYProgress, [0,1], ["0%", "-75%"]);






  return (
    <motion.div className="h-full" 
        initial={{y:"-200vh"}}
         animate={{y:"0%"}} 
         transition={{duration:1}}> 
          
    
     <div className="h-[600vh] relative" ref={ref}>
      
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-black text-opacity-70 font-sans font-bold ">My Work</div>      
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden ">

            <motion.div style={{x}} className="flex">
      <div className= "h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-500 "/>
          {items.map((item) => (
          // Project Div// 
          <div className={`h-screen w-screen  flex items-center justify-center lg:px-8 bg-gradient-to-r ${item.color}`} key={item.id}>
            
            
            <div className="flex flex-col gap-8 text-slate-950">
                <h1 className=" font-bold text-xl md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                  <div className=" relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                   <img src={item.img} className=" rounded-2xl"/>
                    </div> 
                    <p className="w-80 lg:w-[500px] lg:text-lg xl:w-[600px] font-bold font-sans  flex text-lg">{item.desc}</p>
                      <Link href ={item.link} className="flex justify-end">
                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg  bg-slate-800 hover:bg-gray-700 text-white font-semibold m-4 rounded"> 
                        See Demo
                        </button></Link>
              </div>
            </div>


          
          ))}
         
           </motion.div>

           </div>
       </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-slate-300 to-slate-600">
                <h1 className="font-bold text-8xl">Let's Get In Touch!</h1>
                    {/* SVG Container */}
                    <div className="relative">

                      <motion.svg animate={{rotate:360}} transition={{duration: 8, ease:"linear", repeat: Infinity}} viewBox=" 0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">

                          <defs>
                          <path
                          id ="circlePath"
                          d = "M 150, 150 m -60, 0 a 60,60 0 0, 1 120, 0 a 60,60 0 0,1 -120,0"
                            />
                            
                          </defs>

                          <text fill="#000">

                            <textPath  xlinkHref="#circlePath" className="text-xl font-semibold"> Full-Stack Developer and UI Designer</textPath>

                          </text>
                      </motion.svg>
                      <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28  absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700  hover:text-black">Hire Me</Link>
                    </div>
            </div>
    </motion.div>
  )
}

export default projectPage
