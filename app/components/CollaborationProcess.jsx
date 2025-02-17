"use client";
import React from "react";
import { motion } from "framer-motion";

const CollaborationProcess = () => {
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[2px] bg-gradient-to-r from-teal-500 via-gray-600 to-cyan-500 mb-10" />
        <h2 className="text-xl text-gray-300 italic text-center mb-12">
          Collaboration Process Begins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-4 text-4xl flex items-center justify-center bg-blue-500/20 rounded-full">
              💬
            </div>
            <h3 className="text-xl text-white font-bold mb-2">Communication</h3>
            <p className="text-gray-300 text-center text-sm">
              Clear and consistent communication throughout the project
              lifecycle
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-4 text-4xl flex items-center justify-center bg-blue-500/20 rounded-full">
              ⚙️
            </div>
            <h3 className="text-xl text-white font-bold mb-2">
              Design & Development
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Iterative development process with regular updates and feedback
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-4 text-4xl flex items-center justify-center bg-blue-500/20 rounded-full">
              ✅
            </div>
            <h3 className="text-xl text-white font-bold mb-2">
              Review & Finalize
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Thorough testing and refinement before project completion
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationProcess;
