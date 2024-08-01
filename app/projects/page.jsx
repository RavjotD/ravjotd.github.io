"use client";
import React, { useRef } from 'react'
import { motion, useTransform,useScroll } from "framer-motion";
import Link from "next/link"

// Constant for items to display each project.
const items = [
  { id: 1, 
    color: "from-gray-500 to-blue-300",
    title: "TicketHub",
    desc: "A react app that acts as an a alternative to TicketMaster. Search for any events around the world that you want to attend with the integration of TicketMaster Discovery API and PocketBase. ",
    img: "/THSS.png",
    link: "https://ticket-hub-pink.vercel.app/"
  }, 
{ id: 2, 
  color: "from-blue-300 to-blue-200",
  title: "Business Site",
  desc: "By specializing in full-stack development, I utilized the latest technologies to help out a client's business by providing reliability by an developing online presence for a Security company.",
  img: "/Screenshot.png",
  link: "https://stalliongroupsecurity.ca/"
}, 

{ id: 3, 
  color: "from-blue-200 to-teal-100",
  title: "Weather App",
  desc: " Check out weather conditions for any city across the world using this Weather application. The app consists of JavaScript, HTML, CSS, as well as integrates the Weather API for real-time data.",
  img: "/weather.png",
  link: "https://weather-app-chi-sandy.vercel.app/"
}, 

{ id: 4, 
  color: "from-teal-100 to-slate-300",
  title: "To-Do List",
  desc: " I developed a simple To-Do list application so users can keep track of their daily schedule. Using the fundamentals, I applied practices of HTML, CSS and JavaScript to create this application.",
  img: "/App.png",
  link: "https://dolist-eta.vercel.app/"
}, 

{ id: 5, 
  color: "from-slate-300 to-blue-100",
  title: "Object Detection",
  desc: "I got the opportunity to work with robotics using Raspberry Pi for object detection purposes. Integrating python practices for obstacle avoidance, ball tracking and face-detection on a remote 4WD.",
  img: "/face.png",
  link: "https://github.com/RavjotD/Object-Detection/"
}, 

];




//Project page to display unique scrolling features and content.
const projectPage = () => {

      const ref = useRef();


      const {scrollYProgress} = useScroll ({target:ref})


      const x = useTransform(scrollYProgress, [0,1], ["0%", "-83.5%"]);

  return (
    <motion.div className="h-full" 
        initial={{y:"-200vh"}}
         animate={{y:"0%"}} 
         transition={{duration:1}}> 
          
    {/* Parent Div */}
     <div className="h-[600vh] relative p-0" ref={ref}>
      
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl lg:text-8xl text-center p-2 text-black text-opacity-70 font-sans font-bold ">My Work</div>      
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden p-4">

            <motion.div style={{x}} className="flex">
      <div className= "h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-500 "/>
          {items.map((item) => (
          // Project Div// 
          <div className={`h-screen w-screen  flex items-center justify-center  lg:px-8  bg-gradient-to-r ${item.color}`} key={item.id}>
            
            
            <div className="flex flex-col gap-4 text-slate-950  ">
                <h1 className=" font-bold text-xl md:text-4xl lg:text-6xl xl:text-8xl p-2">{item.title}</h1>
                  <div className=" relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                   <img src={item.img} className=" px-2 rounded-2xl"/>
                    </div> 
                    <p className="w-80 lg:w-[500px] lg:text-lg xl:w-[600px] font-bold font-sans  flex text-sm p-2">{item.desc}</p>
                      <Link href ={item.link} className="flex justify-end">
                        <button className=" p-2 rounded-2xl border-2 border-doubled border-black bg-slate-500 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none "> 
                        See Demo
                        </button></Link>
              </div>
            </div>


          
          ))}
         
           </motion.div>

           </div>
       </div>
          {/* Contact button section */}
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-slate-300 to-slate-600">
                <h1 className="font-bold  text-2xl lg:text-8xl">Let's Get In Touch!</h1>
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

                            <textPath  xlinkHref="#circlePath" className="text-lg  font-semibold">Software Engineer & Full-Stack Developer</textPath>

                          </text>
                      </motion.svg>
                      <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28  absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700  hover:text-black">Hire Me</Link>
                    </div>
            </div>
    </motion.div>
  )
}

export default projectPage
