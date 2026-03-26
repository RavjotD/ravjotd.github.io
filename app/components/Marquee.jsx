"use client";
import React from "react";

const Marquee = () => {
  const items = [
    "Systems Engineer",
    "API Diagnostics",
    "Cloud Architecture",
    "Full-Stack Development",
    "Automation & DevOps",
    "Infrastructure",
  ];

  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 mx-8">
      <span className="font-serif text-3xl md:text-5xl text-charcoal whitespace-nowrap">
        {item}
      </span>
      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
    </span>
  ));

  return (
    <div className="w-full py-10 md:py-14 border-y border-rule bg-white overflow-hidden">
      <div className="flex animate-marquee" style={{ width: "max-content" }}>
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </div>
  );
};

export default Marquee;
