"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Profile from "./Profile";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = React.useState(null);

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

  return (
    <>
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative aspect-[4/3] w-full group cursor-pointer overflow-hidden"
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-sans text-sm text-accent tracking-wider uppercase">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative w-full max-w-4xl">
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-cream bg-charcoal/50 w-10 h-10 flex items-center justify-center hover:bg-accent transition-colors"
            >
              <span className="text-lg">&times;</span>
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
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "techstack", label: "Tech Stack" },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-charcoal via-gray-900/20 to-charcoal">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-display-lg text-cream mb-16"
      >
        Showroom
      </motion.h2>

      {/* Tab bar */}
      <div className="flex gap-8 md:gap-12 mb-12 border-b border-rule">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-4 font-sans text-sm md:text-base tracking-wide transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-cream"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="w-full">
        {activeTab === "experience" && <Experience />}
        {activeTab === "certificates" && <Certificates />}
        {activeTab === "techstack" && <Profile />}
      </div>
    </div>
  );
};

export default ShowRoom;
