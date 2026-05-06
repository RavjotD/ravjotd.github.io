"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { url: "/#home", title: "Home" },
  { url: "/#about", title: "About" },
  { url: "/#services", title: "Services" },
  { url: "/#projects", title: "Projects" },
  { url: "/#contact", title: "Contact" },
  { url: "/blog", title: "Blog" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const navHashes = new Set(
      links
        .map((l) => l.url)
        .filter((u) => u.startsWith("/#"))
        .map((u) => u.slice(1))
    );
    const sectionEls = Array.from(
      document.querySelectorAll("section[id]")
    ).filter((el) => navHashes.has("#" + el.id));
    const sectionIds = sectionEls.map((el) => "#" + el.id);
    const intersecting = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = "#" + entry.target.id;
          if (entry.isIntersecting) {
            intersecting.add(id);
          } else {
            intersecting.delete(id);
          }
        });

        let active = null;
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          if (intersecting.has(sectionIds[i])) {
            active = sectionIds[i];
            break;
          }
        }

        if (active) {
          setActiveSection(active);
        } else if (window.scrollY < 100) {
          setActiveSection("#home");
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sectionEls.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (link) => {
    if (pathname === "/blog") return link.url === "/blog";
    if (pathname === "/") {
      if (link.url === "/blog") return false;
      const linkHash = "#" + link.url.split("#")[1];
      return linkHash === activeSection;
    }
    return false;
  };

  const handleNavClick = (e, link) => {
    const [path, hash] = link.url.split("#");
    if (pathname === path && hash) {
      e.preventDefault();
      const element = document.querySelector("#" + hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full top-0 z-50">
      <div
        className={`h-20 transition-all duration-500 ${scrolled
            ? "backdrop-blur-md bg-charcoal/80 border-b border-rule"
            : ""
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="font-serif text-2xl text-cream tracking-tight">
              Ravjot
              <span className="text-accent">.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  onClick={(e) => handleNavClick(e, link)}
                  className="relative py-2 font-sans text-sm tracking-wide uppercase"
                >
                  <span
                    className={`transition-colors duration-300 ${isActive(link)
                        ? "text-cream"
                        : "text-text-muted hover:text-cream"
                      }`}
                  >
                    {link.title}
                  </span>
                  {isActive(link) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden p-2 relative w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${open ? "rotate-45 translate-y-[1.5px]" : "-translate-y-1"
                  }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${open ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${open ? "-rotate-45 -translate-y-[1.5px]" : "translate-y-1"
                  }`}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 bg-charcoal z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setOpen(false)}
            >
              <span className="block w-6 h-[1.5px] bg-cream rotate-45 translate-y-[1px]" />
              <span className="block w-6 h-[1.5px] bg-cream -rotate-45 -translate-y-[0.5px]" />
            </button>

            <div className="flex flex-col items-center gap-12">
              {links.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.url}
                    className={`font-serif text-4xl transition-colors duration-300 ${isActive(link)
                        ? "text-accent"
                        : "text-cream hover:text-accent"
                      }`}
                    onClick={(e) => {
                      handleNavClick(e, link);
                      setOpen(false);
                    }}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
