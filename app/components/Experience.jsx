
import { motion, reverseEasing, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

import React,{useRef} from 'react'




const Experience = () => {




  return (
    <div className="">

       {/* EXPERIENCE CONTAINER */}
       <div className="flex flex-col gap-12 justify-center pb-24 w-full  my-2  items-center">      
          
            {/* EXPERIENCE TITLE */}
            <div>
                <h1 className=" text-6xl  lg:text-8xl  text-white font-extrabold ">Experience<span className="text-blue-300 ">.</span> </h1>
                <hr className="w-full my-2 rounded-xl border-gray-700 border-2"></hr>
               </div>
              {/* EXP Content */}
               <div className=" w-screen md:w-full mr-6 px-8">
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
                <div className=" px-2 py-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800  ">
                     <div className="w-full">
                     <h2  className=" pb-4 float-right text-xs md:text-xl font-sans italic font-normal">Stallion Group Security</h2>
                        <h3 className=" inline-block px-2 p-1 pt-3 font-bold text-sm md:text-2xl">Front-End Engineer </h3>
                                <ul className=" pt-2 px-6 text-xs md:text-sm list-disc leading-snug tracking-wide ">   
                                    <li className="my-3 font-sans">
                                    Built a fully functional website using 10web CMS platform to enhance company’s online presence and increase credibility.                                    </li>
                                    <li className="my-3 font-sans ">
                                    Collaborated with the client to promote its business services to transform a user-friendly interface optimized for mobile and desktop.                                    </li>
                                    <li className="my-3 font-sans">
                                    SEO implementation using keyword optimization to increase search rankings to drive organic traffic.                                      </li>
                                  </ul>

                                  <div className="my-4 flex flex-wrap gap-2 justify-start ">  
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ml-2 ">CMS</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">SEO</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">10web</span>
                                  </div>
                              <p className="my-2 py-3 px-2 text-xs md:text-sm font-medium"> January 2024 - Present</p>                                                 
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
                <div className=" px-2 py-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800 ">
                           <div>
                           <h2  className=" pb-4 float-right text-xs md:text-xl font-sans italic font-normal">Microserve</h2>
                            <h1 className=" inline-block px-2 p-1 pt-3 font-bold text-sm md:text-2xl">Service Desk Analyst Co-op </h1>
                              <ul className=" pt-3 px-6 text-xs md:text-sm list-disc leading-snug tracking-wide font-sans ">   
                                  <li className="my-3">
                                  Provided Tier-1 technical support services for multiple clienteles resolving user request via ConnectWise, while escalating issues as needed.</li>
                                  <li className="my-3">
                                  Managed IT infrastructure (Active directory, Licensing, GPO, Permissions) to ensure smooth client operations.</li>
                                  <li className="my-3 ">
                                  Administrative Windows Server: Backend system management and maintenance (Domain Controller, File Server, DHCP).</li>
                                  <li className="my-3 ">
                                  One-Drive: Sync’d One-Drive, troubleshooted syncing issues via remote tools (Windows RDP, TeamViewer).</li>
                                  <li className="my-3 ">
                                  Email Migrations:  Converted existing OST files to PST format to ensure compatibility and data accessibility.</li>
                                  <li className="my-3 ">
                                  Supported specialized software applications and contributed to internal tools by automating reporting and processing tasks (PowerShell & Batch scripts).</li>
                                  <li className="my-3 ">
                                  Managed laptop and user provisioning for onboarding processes.</li>
                                </ul>

                                <div className="my-4 px-2 flex flex-wrap gap-2 justify-start ">   
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Microsoft 365 Admin</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Microsoft AD</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Microsoft Azure</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Troubleshooting</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Networking Services</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Communication</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">IT Service-Management</span>
                                  </div>
                            <p className="my-2 py-3 px-2 text-xs md:text-sm font-medium"> December 2022 - September 2023</p>
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
                              <div className="px-2 py-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800">
                                  <div>
                                  <h2  className=" pb-4 float-right text-xs md:text-xl font-sans italic font-normal">Club16 Trevor Linden Fitness</h2>
                                  <h1 className=" inline-block px-2 p-1 pt-3 font-bold text-sm md:text-2xl">Sales Representative </h1>
                                      <ul className=" pt-3 px-6 text-xs md:text-sm list-disc leading-snug tracking-wide font-sans ">   
                                         <li className="my-3 ">Managed the client experience and delivered excellence in customer service by consistently selling memberships and meeting monthly quotes.</li>
                                          <li className="my-3">Identified prospective customers by using business directories, following leads, and creating personal leads by connecting with the community.</li> 
                                          <li className="my-3">Completed daily outbound calls, researched and learned sales and health knowledge of the fitness industry to enable market targeting better.</li> 
                                      </ul>
                                        <div className="my-4 px-2 flex flex-wrap gap-2 justify-start ">
                                          <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Sales</span>
                                          <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Communication</span>
                                          <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Problem-solving</span>
                                          <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Leadership</span>
                                          <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Customer Service</span>
                                        </div>
                                    <p className="my-2 py-3 px-2 text-xs md:text-sm font-medium">August 2018 - December 2022</p>
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
                    <div className="px-2 py-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800">
                         <div>
                         <h2  className=" pb-4 float-right text-xs md:text-xl font-sans italic font-normal">Kwantlen Polytechnic University</h2>
                            <h3 className=" px-2  pt-3 font-bold text-sm md:text-2xl">BTech </h3>
                            <ul className=" pt-3 px-6 text-xs md:text-sm list-disc leading-snug tracking-wide font-sans ">   
                              <li className="my-3 ">Year 4 of Bachelors of Technology in Information Technology.</li>
                            </ul>
                            <div className="my-4 px-2 flex flex-wrap gap-2 justify-start">  
                                    
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Full-Stack Development</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Web Development</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Software QA</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Data Structure/Algorithm</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Software-Engineering</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Database Management Systems</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Problem-Solving</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Computer-Networking</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Java</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Python</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">JavaScript</span>

                                    

                                  </div>
                                     <p className="my-2 py-3 px-2 text-xs md:text-sm font-medium">Graduating 2025</p>
                                  </div> 
                                 </div>
                                </div>
                             </div>
                          </div>
                         </li>
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
                    <div className="px-2 py-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800">
                         <div>
                         <h2  className=" pb-4 float-right text-xs md:text-xl font-sans italic font-normal">Coursera</h2>
                            <h3 className=" px-2 p-1 pt-6 font-bold text-sm md:text-2xl">Meta Back-End Professional</h3>
                            <ul className=" pt-3 px-6 text-xs md:text-sm list-disc leading-snug tracking-wide font-sans ">   
                                   <li><a className=" px-2 pt-1 italic underline font-sans font-normal text-sm" href="/combine.pdf" target="_blank" alt="Certification" rel="noopener noreferrer">Certification</a></li> 
                                   </ul>
                                      <div className="my-4 flex flex-wrap gap-2 justify-start ">  
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Python</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Django Web Framework</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Back-End Development</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Databases</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Version Control</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Data Structure/Algorithm</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">SDLC</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Full Stack</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Object-Oriented-Programming</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">API's</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Interview Prep</span>

                                    

                                  </div>
                                     <p className="my-2 py-3 px-2 text-xs md:text-sm font-medium">August 2024 - September 2024</p>
                                  </div> 
                                 </div>
                                </div>
                             </div>
                          </div>
                         </li>
                      </ul>
                     </div>
                   </div>  
                
              
                 </div>
                 
                </div>         
                
              )
}

export default Experience
