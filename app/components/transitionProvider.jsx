"use client";
import React from "react";
import NavBar from "./NavBar";

const TransitionProvider = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-b from-[#010611] via-[#050c24] to-[#010611]">
      <NavBar />

      <div className="h-[calc(100vh-6rem)]">{children}</div>
    </div>
  );
};

export default TransitionProvider;
