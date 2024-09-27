
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
                <div className=" px-2 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800  ">
                     <div className="">
                        <span><h2 className=" inline-block mb-2 py-4 font-bold text-xs md:text-2xl">Front-End Engineer </h2>
                          <h5  className=" py-4 inline-block float-right text-xs md:text-xl font-sans italic font-normal">Stallion Group Security</h5>
                          </span>


                                <ul className=" px-4 text-xs md:text-sm list-disc leading-snug tracking-wide ">   
                                  <p className=" font-sans font-normal text-xs md:text-sm">Created an online presence for the company by establishing a website to better market the company’s business using a CMS platform of 10web:</p>                          
                                    <li className="my-3 font-sans">
                                    Gained an understanding of the client’s business to promote its services and company background throughout the website. 
                                    </li>
                                    <li className="my-3 font-sans ">
                                    Developed a user-friendly and responsive interface that highlights appealing visuals with credible content. 
                                    </li>
                                    <li className="my-3 font-sans">SEO implementation using keyword implementation to increase search rankings.</li>
                                  </ul>

                                  <div className="my-4 flex flex-wrap gap-2 justify-start ">  
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ml-2 ">CMS</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">SEO</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">10web</span>
                                  </div>
                              <p className="my-2 py-3 text-xs md:text-sm font-medium"> January 2024 - Present</p>                                                 
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
                <div className=" px-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800 ">
                           <div>
                           <span><h2 className=" inline-block mb-2 py-4 font-bold text-xs md:text-2xl ">Service Desk Analyst Co-op </h2>
                          <h5  className=" py-4 inline-block float-right text-xs md:text-xl font-sans italic font-normal">Microserve</h5>
                          </span>
                              <ul className=" px-4 text-xs md:text-sm list-disc leading-snug tracking-wide font-sans ">   
                                <p className="font-normal text-xs md:text-sm "> Worked as a Tier-1 service agent for multiple clienteles to provide technical support:</p>  
                                  <li className="my-3">Supporting user service request through ConnectWise, escalating appropriately.
                                  </li>
                                  <li className="my-3">
                                  Managed Client operations (Active directory, Licensing, GPO, Permissions).</li>
                                  <li className="my-3 font-sans">Server Management: Windows Server (Domain Controller, File Server, DHCP), </li>
                                  <li className="my-3 font-sans">One-Drive: Sync’d One-Drive, troubleshooted syncing issues</li>
                                  <li className="my-3 font-sans">Remote Management: Utilizing Remote Tools, Windows RDP, TeamViewer</li>
                                  <li className="my-3 font-sans">Email Migrations:  Converted existing OST files to PST format to ensure compatibility and accessibility.</li>
                                  <li className="my-3 font-sans">Supported specialized applications while maintaining and developing internal software tools through reporting and processing automation.</li>
                                  <li className="my-3 font-sans">Laptop and User provisioning for onboarding processes.</li>
                            
                                </ul>

                                <div className="my-4 flex flex-wrap gap-2 justify-start ">   
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Microsoft 365 Admin</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Microsoft AD</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Microsoft Azure</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Troubleshooting</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Networking Services</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Communication</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">IT Service-Management</span>
                                  </div>
                            <p className="my-2 py-3 text-xs md:text-sm font-medium"> December 2022 - September 2023</p>
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
                              <div className="px-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800">
                                  <div>
                                  <span><h2 className=" inline-block mb-2 py-4 font-bold text-sm md:text-2xl ">Sales Rep </h2>
                                      <h5  className=" py-4 inline-block float-right text-xs md:text-xl font-sans italic font-normal">Club16 Trevor Linden Fitness</h5>
                                    </span>                                     
                                     <ul className=" px-2 text-xs md:text-sm list-disc leading-snug tracking-wide ">   
                                        <p className="font-sans font-normal text-xs md:text-sm">Managed the client experience, delivered excellence in customer service by selling memberships and meeting monthly quotes:</p>                                  
                                         <li className="my-3 font-sans">Identified prospective customers by using business directories, following leads from existing clients, and creating personal leads by connecting with the community.  
                                          </li>
                                          <li className="my-3 font-sans ">
                                          Completed daily outbound calls, researched and learned sales and health knowledge of the fitness industry to understand the market better.                                          </li>
                                        </ul>

                                        <div className="my-4 flex flex-wrap gap-2 justify-start ">
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Sales</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Communication</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Problem-solving</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Leadership</span>
                                    <span className="inline-block bg-gray-900 hover:-translate-y-2 transition-transform duration-300 rounded-lg p-1.5 md:p-2 text-xs md:text-sm font-normal md:font-semibold text-cyan-500 ">Customer Service</span>
                                  </div>
                                    <p className="my-2 py-3 text-xs md:text-sm font-medium">  August 2018 - December 2022</p>
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
                    <div className="px-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800">
                         <div>
                         <span><h2 className=" inline-block mb-2 py-4 font-bold text-sm md:text-2xl ">BTech </h2>
                          <h5  className=" py-4 inline-block float-right text-xs md:text-xl font-sans italic font-normal">Kwantlen Polytechnic University</h5>
                          </span>                                                 
                                        < p className="my-3 font-sans text-sm md:text-lg font-normal">Year 4 of BTech.</p>
                                      <div className="my-4 flex flex-wrap gap-2 justify-start">  
                                    
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
                                     <p className="my-2 py-3 text-xs md:text-sm font-medium">Graduating 2025</p>
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
                    <div className="px-4 text-white bg-gradient-to-b from-slate-700 to-gray-900 rounded border-2 border-slate-800">
                         <div>
                         <span><h2 className=" inline-block mb-2 py-4 font-bold text-xs md:text-2xl ">Meta Back-End Professional</h2>
                          <h5  className=" py-4 inline-block float-right text-xs md:text-xl font-sans italic font-normal">Coursera</h5>
                          </span>

                                   <p><a className=" italic underline font-sans font-normal" href="/combine.pdf" target="_blank" alt="Certification" rel="noopener noreferrer">Certification</a></p> 
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
                                     <p className="my-2 py-3 text-xs md:text-sm font-medium">August 2024 - September 2024</p>
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
