
import { motion, reverseEasing, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

import React,{useRef} from 'react'




const Experience = () => {




  return (
    <div className="">

       {/* EXPERIENCE CONTAINER */}
       <div className="flex flex-col gap-12 justify-center pb-48 w-full  my-2  items-center">      
          
            {/* EXPERIENCE TITLE */}
            <div>
                <h1 className=" text-6xl lg:text-8xl  text-white font-extrabold "> Experience<span className="text-blue-300 ">.</span> </h1>
                <hr className="w-full my-2 rounded-xl border-gray-700 border-2"></hr>
               </div>
              {/* EXP Content */}
               <div className="max-w-xl mx-auto p-8">
              <div className="flow-root">
          <ul className="-mb-8">
        {/* Line Item */}
        <li>
          <div className="relative pb-8 ">
            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-white" ></span>
            <div className="relative flex items-start space-x-3">
              <div>
                <div className="relative px-1">
                  <div className="h-8 w-8  rounded-full ring-8 ring-teal-300 flex items-center justify-center"><img src="/work.svg" className=" w-12  relative bg-teal-400"/>     
                  </div>
                </div>
              </div>
              {/* EXP 1 */}
              <div className="min-w-0 flex-1 py-0">
                <div className=" px-8 text-white bg-gradient-to-b from-gray-700 to-gray-800 rounded  ">
                     <div>
                        <h2 className="mb-3 py-3 font-bold text-2xl ">Web Developer</h2>
                              <h4 className="mb-3 font-semibold text-xl">Stallion Group Security</h4>
                                <ul className="text-sm list-disc leading-snug tracking-wide ">                             
                                    <li className="my-3 font-sans">Created an online presence for the company by establishing a website to better market company’s business. 
                                     Gained a understanding of the client’s business to promote its services and company background throughout the website.
                                    </li>
                                    <li className="my-3 font-sans ">
                                    Using latest technology, developed a user-friendly and responsive interface which highlights appealing visuals with credible content.
                                    In addition, included client communication by offering contact forum to allow company to engage with clients that brings professionalism to the company.
                                    </li>
                                  </ul>

                                  <div className="my-4 text-xl">Skills:   
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 ml-2 mb-2">HTML</span>
                                    <span className="inline-block bg-gray-200  hover:bg-teal-300  rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2">Full-Stack Development</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">CMS</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2">SEO</span>
                                  </div>
                              <p className="my-2 py-3  font-medium"> January 2024-Present</p>                                                 
                          </div>                
                        </div>         
                      </div>
                    </div>
                  </div>
                </li>
                {/* Line Item */}
               <li>
                <div className="relative pb-8">
                 <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" ></span>
                <div className="relative flex items-start space-x-3">
              <div>
                <div className="relative px-1">
                  <div className="h-8 w-8  rounded-full ring-8  ring-teal-300 flex items-center justify-center"><img src="/work.svg" className=" w-12  relative bg-teal-400"/>  
                  </div>
                </div>
              </div>
              {/* EXP 2 */}
              <div className="min-w-0 flex-1 py-0">
                <div className=" px-8 text-white bg-gradient-to-b from-gray-700 to-gray-800 rounded">
                           <div>
                            <h2 className="mb-3 py-3  font-bold text-2xl">Service Desk Analyst </h2>
                              <h4 className="mb-3 font-semibold  text-xl">Microserve</h4>
                              <ul className="text-sm te list-disc leading-snug tracking-wide font-sans ">     
                                  <li className="my-3">Worked as a service agent for multiple clienteles. Supported specialized applications 
                                  while maintaining and developing internal software tools by reporting and processing automation
                                  </li>
                                  <li className="my-3">
                                  Conducted application testing by engaging users for acceptance testing, then collected and summarized test data, all while multitasking by troubleshooting user issues between live calls and service ticket requests.
                                  </li>
                                </ul>

                                <div className="my-4 text-xl p-0 ">Skills:   
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 ml-2 mb-2">Microsoft AD</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 ml-2 mb-2">Microsoft Azure</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Troubleshooting</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Networking Services</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Communication</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2">Time-Management</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">ECM</span>
                                  </div>
                            <p className="my-2 py-3  font-medium"> December 2022-September 2023</p>
                        </div>  
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* List Line */}
          <li>
             <div className="relative pb-8">
            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" ></span>
            <div className="relative flex items-start space-x-3">
              <div>
                <div className="relative px-1">
                  <div className="h-8 w-8 rounded-full ring-8 ring-teal-300 flex items-center justify-center"><img src="/work.svg" className=" w-12  relative bg-teal-400"/>     
                    </div>
                      </div>
                        </div>
                        {/* EXP 3 */}
                            <div className="min-w-0 flex-1 py-0">
                              <div className="px-8 text-white bg-gradient-to-b from-gray-700 to-gray-800 rounded">
                                  <div>
                                    <h2 className="mb-3 py-3  font-bold text-2xl">Sales Representative</h2>
                                      <h4 className="mb-3 font-semibold text-xl">Club 16 Trevor Linden Fitness</h4>
                                      <ul className="text-sm list-disc leading-snug tracking-wide ">                                     
                                         <li className="my-3 font-sans">Managed the client experience, delivered excellence in customer service by selling memberships and meeting monthly quotes. 
                                          Identified prospective customers by using business directories, following leads from existing clients and creating personal leads by connecting with the community. 
                                          </li>
                                          <li className="my-3 font-sans ">
                                          Completed daily outbound calls. 
                                          Researched and learned sales and health knowledge of the fitness industry to understand the market better. 
                                          </li>
                                        </ul>

                                        <div className="my-4 text-xl">Skills:   
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 ml-2 mb-2">Negotiation</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Communication</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Problem-solving</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Leadership</span>
                                  </div>
                                    <p className="my-2 py-3 font-medium">  August 2018-December 2022</p>
                                </div> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                          {/* List line */}
                        <li>
                    <div className="relative pb-8">
                 <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" ></span>
               <div className="relative flex items-start space-x-3">
             <div>
                <div className="relative px-1">
                  <div className="h-8 w-8 rounded-full ring-8 ring-yellow-400 flex items-center justify-center"><img src="/school.svg" className=" w-12  relative bg-yellow-400"/>            
                  </div>
                </div>
              </div>
              {/* Education Item */}
               <div className="min-w-0 flex-1 py-0">
                    <div className="px-8 text-white bg-gradient-to-b from-gray-700 to-gray-800 rounded">
                         <div>
                            <h2 className="mb-3 py-3  font-bold text-2xl">Bachelors of Technology </h2>
                                    <h4 className="mb-3 font-semibold  text-xl">Kwantlen Polytechnic University</h4>
                                    <ul className="text-sm te list-disc leading-snug tracking-wide font-sans ">               
                                        <li className="my-3">	Year 4 in BTECH.</li>
                                        <li className="my-3">	Proactively grasping fundamentals within the IT field.</li>                         
                                        <li className="my-3">
                                        Enhancing knowledge in programming languages and practices in modern software/API’s.
                                        Progressively gaining experience in troubleshooting tasks from hardware to software.                           
                                        </li>
                                      </ul>
                                      <div className="my-4 text-xl">Skills:   
                                    
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 ml-2 mb-2">Full-Stack Development</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Software QA</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Data Structure/Algorithm</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2">Software-Engineering</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Programming-Languages</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Problem-Solving</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Computer-Networking</span>
                                    <span className="inline-block bg-gray-200 hover:bg-teal-300 rounded-full p-2  text-sm font-semibold text-gray-700 mr-2 mb-2">Leadership</span>

                                  </div>
                                     <p className="my-2 py-3 font-medium"> September 2019-Present</p>
                                  </div> 
                                 </div>
                                </div>
                             </div>
                          </div>
                         </li>
                      </ul>
                     </div>
                   </div>  
                   <div className="shadow-2xl w-100 h-100 rounded-xl hover:shadow-black">
              <button className=" font-bold p-4 border-teal-400 border-2  rounded-xl text-white hover:text-black hover:bg-teal-300">
               <a href="/Resume.pdf" target="_blank" alt="My Resume" rel="noopener noreferrer">Download Resume </a>
              </button>
              </div>
              
                 </div>
                 
                </div>         
                
              )
}

export default Experience
