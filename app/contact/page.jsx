"use client";
import React, { useRef, useState } from 'react'
import { animate, motion } from "framer-motion";
import emailjs from '@emailjs/browser';


const contactPage = () => {



const [success,setSuccess] = useState(false)
const [error,setError] = useState(false)

const text = "Say Hello!"

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (result) => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
        },
      );
  };


  return (
    < motion.div className="h-full" 
        initial={{y:"-200vh"}}
         animate={{y:"0%"}} 
         transition={{duration:1}}> 
          

    
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">

          {/* Text Container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl"> 
      <div className="font-bold">

      {text.split("").map ((letter,index) => (

          <motion.span 
          
          key={index}
          initial={{opacity: 1}}
          animate={{ opacity: 0}}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.1,
          }}
          
          >
           {letter} 
           </motion.span>
      ))}
      </div>          
      </div>
      {/* FORM Container */}
      <form 
      onSubmit={sendEmail} 
      ref={form} 
      className="h-2/3 lg:h-full lg:w-1/2 bg-slate-700 rounded-xl text-md lg:text-4xl font-sans font-medium flex flex-col gap-8 justify-center p-24">

            <span> Dear Ravjot Duhra,</span>
            
            <input rows={6} 
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
             name="user_message"/>

            <span> My email address is:</span>
            <input type="text" 
            name="user_email" 
            className="bg-transparent border-b-2 border-b-black outline-none"/>

            <span>Regards,</span>
            <button className=" bg-slate-400 rounded text-sm text-gray-600 p-.5 md:p-4">Send</button>
            {success && <span className="text-green-500 text-sm">Your message has been sent successfully!</span>}
            {error && <span className="text-red-500 text-sm">Something went wrong! Please try again</span>}
      </form>

      </div>
    
    </motion.div>
  )
}

export default contactPage
