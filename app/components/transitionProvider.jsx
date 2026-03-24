"use client";
import React from "react";
import NavBar from "./NavBar";

const TransitionProvider = ({ children }) => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-charcoal">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default TransitionProvider;
