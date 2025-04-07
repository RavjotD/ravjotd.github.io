"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Profile from "./Profile";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = React.useState(null);

  const handleCertificateClick = (cert) => {
    setSelectedCert(cert);
  };

  const certificates = [
    "/certificates/Hacksplaining.png",
    "/certificates/AWSSecurity.png",
    "/certificates/AWSGI.png",
    "/certificates/ACP.png",
    "/certificates/AGD.png",
    "/certificates/ASF.png",
    "/certificates/MAPI.png",
    "/certificates/MBE.png",
    "/certificates/MDB.png",
    "/certificates/MFS.png",
    "/certificates/MDJ.png",
    "/certificates/MP.png",
    "/certificates/MVC.png",
    "/certificates/MIP.png",
    "/certificates/NAI.png",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            className="relative aspect-[4/3] w-full group cursor-pointer"
            onClick={() => handleCertificateClick(cert)}
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative w-full max-w-4xl">
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const ShowRoom = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "certificates", label: "Certificates", icon: "🎓" },
    { id: "techstack", label: "Tech Stack", icon: "⚡" },
  ];

  return (
    <div className="w-full py-12">
      <h1 className=" text-center text-5xl md:text-7xl font-bold bg-gradient-to-br from-white to-blue-300 text-transparent bg-clip-text mb-4">
        Show Room
      </h1>
      <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        My journey of projects, certifications, and technical expertise.
      </p>

      <div className="flex justify-center gap-2 md:gap-6 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center md:gap-2 px-2 py-3 md:px-8 md:py-6 text-xs md:text-lg rounded-lg transition-all duration-300 overflow-hidden
              ${
                activeTab === tab.id
                  ? "text-white scale-110"
                  : "bg-slate-800/50 text-gray-200 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              } border-2 border-transparent`}
          >
            <span className="relative z-10 text-xl">{tab.icon}</span>
            <span className="relative z-10">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 animate-slide" />
            )}
          </button>
        ))}
      </div>

      <div className="w-full max-w-6xl  mx-auto">
        {activeTab === "experience" && <Experience />}
        {activeTab === "certificates" && <Certificates />}
        {activeTab === "techstack" && <Profile />}
      </div>
    </div>
  );
};

export default ShowRoom;
