"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
    { url: "#home", title: "Home" },
    { url: "#about", title: "About" },
    { url: "#projects", title: "Projects" },
    { url: "#contact", title: "Contact" },
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let visibleSections = [];
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSections.push({
                            id: "#" + entry.target.id,
                            ratio: entry.intersectionRatio,
                            top: entry.boundingClientRect.top
                        });
                    }
                });

                if (visibleSections.length > 0) {
                    // Sort by intersection ratio and position
                    visibleSections.sort((a, b) => {
                        if (Math.abs(b.ratio - a.ratio) < 0.1) {
                            return a.top - b.top;
                        }
                        return b.ratio - a.ratio;
                    });
                    
                    setActiveSection(visibleSections[0].id);
                } else if (window.scrollY < 100) {
                    setActiveSection("#home");
                }
            },
            { 
                threshold: [0, 0.25, 0.5, 0.75, 1],
                rootMargin: "-20% 0px -20% 0px"
            }
        );

        document.querySelectorAll("section[id]").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, [activeSection]);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
        },
        opened: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="fixed w-full top-0 z-50">
            <div className="h-24  backdrop-blur-sm">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-3xl font-bold text-cyan-400"
                        >
                            <img
                                src="/icon.png"
                                alt="Logo"
                                className="w-24 h-16 object-contain"
                            />
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-4 bg-gray-600/50 px-6 py-4 b-2 border-white rounded-xl">
                            {links.map((link) => (
                                <motion.div
                                    key={link.title}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={link.url}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.querySelector(link.url);
                                            element?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className={`text-gray-300 hover:text-cyan-400 px-6 py-3 transition-colors relative group`}
                                    >
                                        {link.title}
                                        <div
                                            className={`absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full ${activeSection === link.url ? "w-full" : ""}`}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden text-white p-2 group"
                            onClick={() => setOpen(!open)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div
                                className={`w-6 h-0.5 bg-cyan-400 mb-1.5 transition-all duration-300 transform ${
                                    open
                                        ? "rotate-45 translate-y-2"
                                        : "group-hover:w-8"
                                }`}
                            />
                            <div
                                className={`w-6 h-0.5 bg-cyan-400 mb-1.5 transition-all duration-300 ${
                                    open ? "opacity-0 translate-x-3" : ""
                                }`}
                            />
                            <div
                                className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 transform ${
                                    open ? "-rotate-45 -translate-y-2" : ""
                                }`}
                            />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="md:hidden fixed inset-0 bg-[#020921] bg-opacity-95"
                initial="closed"
                animate={open ? "opened" : "closed"}
                variants={menuVariants}
            >
                <button
                    className="absolute top-6 right-6 text-cyan-400 p-2"
                    onClick={() => setOpen(false)}
                >
                    <div className="w-6 h-0.5 bg-cyan-400 rotate-45 absolute" />
                    <div className="w-6 h-0.5 bg-cyan-400 -rotate-45 absolute" />
                </button>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {links.map((link) => (
                        <Link
                            key={link.title}
                            href={link.url}
                            className={`text-2xl ${activeSection === link.url ? 'text-cyan-400' : 'text-gray-300'} hover:text-cyan-400 transition-colors relative group`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector(link.url);
                                element?.scrollIntoView({ behavior: "smooth" });
                                setOpen(false);
                            }}
                        >
                            {link.title}
                            <div
                                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${activeSection === link.url ? 'w-full' : 'w-0'}`}
                            />
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default NavBar;
