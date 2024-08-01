"use client"

import Link from "next/link"
import React, { useState } from 'react'
import NavLink from "./navLink";
import { motion } from "framer-motion";


// Links for Navbar
const links = [
    {url:"/", title:"Home"},
    {url:"/about", title:"About"},
    {url:"/projects", title:"Portfolio"},
    {url:"/contact", title:"Contact"}
];
// Navbar features of close and open state
const NavBar = () => {
    const [open,setOpen] = useState(false);

    const topVariants = {

        closed:{
            rotate:0,  
        },
        opened:{
            rotate:45,
            backgroundColor: "rgb(255,255,255)", 

        },
    };

    const centeredVariants = {

        closed:{
            opacity:1,  
        },
        open:{
            opacity:0,       
        },
    };

    const bottomVariants = {

        closed:{
            rotate:0,  
        },
        opened:{
            rotate:-45,
            backgroundColor: "rgb(255,255,255)",
        },
    };

    const listVariants = {
        closed:{
            x: "100vw",

        },
        opened: {
            x:0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const listItemVariants = {

        closed:{
            x: -10,
            opacity:0,

        },
        opened: {
            x:0,
            opacity:1,
        },

    }

  return (
        // NavBar being linked to constant links and css styling.
    <div className="h-full flex items-center justify-between px-8 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
              
              {/* Links on Nav*/}
              <div className="hidden md:flex  gap-2 w-1/3 ">
                {links.map((link) => (
                <NavLink  link={link}  key={link.title}/>
                ))}
              </div>
              
               {/* Logo */}
                <div className="  flex justify-center items-center w-1/3 "> 
                      <Link href="/" className=" text-2xl font-bold bg-black  text-slate-400 rounded-full p-2">RD</Link>            
                 </div>

                {/* Socials */}
                 <div className=" md:flex gap-3  w-1/3 justify-end hidden ">
                    <Link href="https://github.com/RavjotD">
                        <motion.img   src="/github.png" alt="" width={32} height={32} whileHover={{y:-4}}/>
                    </Link>

                    <Link href="https://www.linkedin.com/in/ravjot-duhra-bb5970234/">
                        <motion.img src="/linkedin.png" alt="" width={32} height={32} whileHover={{y:-4}}/>
                    </Link>

                 </div>
                 

                 {/* Reponsive Menu */}
                 <div className="md:hidden">
                     {/* Menu button */}
                        <button className=" w-10 h-8 flex flex-col justify-between z-50 relative" 
                        onClick={(()=>setOpen(!open))}
                        >
                        <motion.div
                         variants={topVariants} 
                         animate={open ? "opened" : "closed"}
                         className="w-10 h-1 bg-black rounded origin-left">  
                          </motion.div>

                        <motion.div 
                        variants={centeredVariants} 
                        animate={open ? "opened" : "closed"} 
                        className="w-10 h-1 bg-black rounded ">
                          </motion.div>
                        <motion.div 
                        variants={bottomVariants} 
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"> 
                         </motion.div>
                        
                        </button>

                        {/* Menu List */}

                        {open && (
                        <motion.div variants={listVariants}
                         initial="closed" 
                         animate="opened" 
                         className=" absolute top-0  left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 ">
                               
                                {links.map((link) => (
                                    <motion.div variants={listItemVariants} className="p-2" key={link.title}> 
                                    <Link href={link.url} key={link.title} className=" p-2 hover:underline">
                                        {link.title}
                                    </Link>
                                    
                                    
                                    </motion.div>
                                ))}

                                <motion.div 
                                initial="closed" 
                                animate="opened"
                                variants={listItemVariants}
                                className=" flex  gap-4    ">
                            <Link href="https://github.com/RavjotD">
                        <motion.img   src="/github.png" alt="" className="bg-white rounded-full " width={55} height={55} whileHover={{y:-4}}/>
                             </Link>

                            <Link href="https://www.linkedin.com/in/ravjot-duhra-bb5970234/">
                                <motion.img src="/linkedin.png" alt="" width={55} height={55} whileHover={{y:-4}}/>
                                </Link>

                 </motion.div>
                
                              </motion.div>
                        )}
             </div>
        </div>
  )
}

export default NavBar
