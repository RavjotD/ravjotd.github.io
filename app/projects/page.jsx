"use client";
import React, { useRef } from 'react'
import { motion, useTransform,useScroll } from "framer-motion";
import Link from "next/link"

// Constant for items to display each project.
const items = [
  { id: 1, 
    color: "from-stones-700 via-neutral-800 to-green-900",
    title: "Restaurant App",
    desc: "Full-Stack web app features reservation system with REST API endpoints and an admin panel for management operations.",
    img: "/LittleLemon.png",
    link: "https://github.com/RavjotD/LittleLemonCapstone",
    bcolor: 'border-green-600',
    bgcolor: 'bg-gradient-to-b from-neutral-800 to-lime-950',
    imgcolor: 'border-green-400',
    skills: ['Python', 'Django','DRF','RESTFul','MySQL',],
    txtcolor:'text-lime-500'
  
  }, 


  { id: 2, 
    color: "from-gray-500 via-sky-900 to-blue-900",
    title: "TicketHub ",
    desc: "Full-Stack project offering discovery of events & festivals globally, serving as a TicketMaster Alternative making even.",
    img: "/THSS.png",
    link: "https://ticket-hub-pink.vercel.app/",
    bcolor: 'border-cyan-500',
    bgcolor: 'bg-gradient-to-b from-gray-700 to-slate-800',
    imgcolor: 'border-white',
    skills: ['Next.js','Tailwind CSS','PocketBase','DiscoveryAPI'],
    txtcolor:'text-cyan-400'

  }, 
{ id: 3, 
  color: "from-zinc-900 via-zinc-800 to-yellow-600",
  title: "Business Site",
  desc: "A business website built with a CMS, providing security services to enhance it's online presence to increase a clientbase.",
  img: "/Screenshot.png",
  link: "https://stalliongroupsecurity.ca/",
  bcolor: 'border-amber-300',
  bgcolor: 'bg-gradient-to-b from-zinc-800 to-zinc-900',
  imgcolor: 'border-yellow-400',
  skills: ['CMS', 'SEO', '10web'],
  txtcolor:'text-yellow-400'



}, 

{ id: 4, 
  color: "from-zinc-700 via-zinc-800 to-orange-700",
  title: "Weather App",
  desc: "Weather app providing real-time data metrics of wind, humidity and temperature for all cities across the world.",
  img: "/weather.png",
  link: "https://weather-app-chi-sandy.vercel.app/",
  bcolor: 'border-orange-500',
  bgcolor: 'bg-gradient-to-b from-orange-900 to-zinc-900',
  imgcolor: 'border-orange-400',
  skills: ['JavaScript', 'HTML/CSS', 'OpenWeather API'],
  txtcolor:'text-orange-400'

}, 

 
{ id: 5, 
  color: "from-purple-900 via-teal-500 to-emerald-700",
  title: "Object Detection",
  desc: "Raspberry Pi project utlilizing detection methods of human-face and object avoidance and red ball tracking.",
  img: "/face.png",
  link: "https://github.com/RavjotD/Object-Detection/",
  bcolor: 'border-green-400',
  bgcolor: 'bg-gradient-to-b from-emerald-900 to-green-900',
  imgcolor: 'border-green-400',
  skills: ['Python', 'Raspberry Pi', 'RealNVC'],
  txtcolor:'text-green-400'

  
}, 

];




//Project page to display unique scrolling features and content.
const projectPage = () => {

      const ref = useRef();


      const {scrollYProgress} = useScroll ({target:ref})


      const x = useTransform(scrollYProgress, [0,1], ["0%", "-83%"]);

  return (
    <motion.div className="h-full" 
        initial={{y:"-200vh"}}
         animate={{y:"0%"}} 
         transition={{duration:1}}> 
          
    {/* Parent Div */}
     <div className="h-[600vh] relative p-0" ref={ref}>
      
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl lg:text-8xl text-center p-2 text-black text-opacity-70 font-sans font-bold ">My Work</div>      
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden p-4">

            {/* Horizontal Scroll */}
            <motion.div style={{x}} className="flex">
      <div className= "h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-500 "/>
          {items.map((item) => (

          // Project Div to display cards// 
          <div className={`h-screen w-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden bg-gradient-to-tr ${item.color}`} key={item.id}>
            <div className={`flex flex-col  gap-2 border-4 ${item.bgcolor} ${item.bcolor} rounded-lg text-white `}>
                <h1 className=" font-bold text-xl md:text-4xl lg:text-6xl my-4 p-2">{item.title}</h1>
                  <div className=" relative w-80  md:w-96  lg:w-[500px] xl:w-[600px] xl:h-[320px]">
                   <img src={item.img} loading="lazy" className={`border-t-2 border-b-2 ${item.imgcolor}`}/>
                    </div> 
                    <p className="w-80 lg:w-[500px] lg:text-lg xl:w-[600px] font-bold font-sans  flex text-sm  text-start p-2 mx-auto ">{item.desc}</p>
                    <div className='flex flex-nowrap px-1 gap-1 justify-center'>
                      {item.skills.map((skill, index) => (
                        <div key={index} className={`inline-block rounded text-xs md:text-sm p-2 bg-zinc-900 ${item.txtcolor}`}>
                          {skill}
                    </div>
                      ))}
                    </div>

                      <Link href ={item.link} className="flex justify-end p-4">
                        <button className=" p-2 rounded-2xl border-2 border-double border-black bg-slate-500 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none "> 
                        See Demo
                        </button></Link>
              </div>
            </div>


          
          ))}
         
           </motion.div>

           </div>
       </div>
          {/* Contact button section */}
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-emerald-300 via-cyan-700 to-slate-600">
                <h1 className="font-bold  text-2xl lg:text-8xl">Let's Connect!</h1>
                    {/* SVG Container */}
                    <div className="relative">

                      <motion.svg animate={{rotate:360}} transition={{duration: 8, ease:"linear", repeat: Infinity}} viewBox=" 0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px] ">

                          <defs>
                          <path
                          id ="circlePath"
                          d = "M 150, 150 m -60, 0 a 60,60 0 0, 1 120, 0 a 60,60 0 0,1 -120,0"
                            />
                            
                          </defs>

                          <text fill="#000">

                            <textPath  xlinkHref="#circlePath" className="text-lg  font-semibold">Full-Stack Developer</textPath>

                          </text>
                      </motion.svg>
                      <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28  absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:border-4 hover:border-cyan-600 text-md   hover:text-cyan-300">Hire Me</Link>
                    </div>
            </div>
    </motion.div>
  )
}

export default projectPage
