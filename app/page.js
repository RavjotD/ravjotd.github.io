"use client";
import React from "react";
import ShowRoom from "./components/ShowRoom";
import Expertise from "./components/Expertise";
import ContactForm from "./components/ContactForm";
import Bio from "./components/Bio";
import CollaborationProcess from "./components/CollaborationProcess";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Home Section */}
      <section id="home" className="w-full min-h-screen">
        <Hero />
      </section>

      {/* Expertise Section - subtle elevated background */}
      <section
        id="expertise"
        className="w-full"
        style={{
          background:
            "linear-gradient(180deg, #09090b 0%, #111114 30%, #18181b 50%, #111114 70%, #09090b 100%)",
        }}
      >
        <Expertise />
      </section>

      {/* Collaboration Process Section */}
      <CollaborationProcess />

      {/* About Section - gray gradient wash */}
      <section
        id="about"
        className="w-full"
        style={{
          background:
            "linear-gradient(180deg, #09090b 0%, #0f0f12 20%, #111114 40%, #18181b 60%, #111114 80%, #09090b 100%)",
        }}
      >
        <Bio />
        <ShowRoom />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full"
        style={{
          background:
            "linear-gradient(180deg, #09090b 0%, #111114 40%, #111114 60%, #09090b 100%)",
        }}
      >
        <Projects />
      </section>

      {/* Contact Section - subtle glow */}
      <section
        id="contact"
        className="w-full relative"
        style={{
          background:
            "linear-gradient(180deg, #09090b 0%, #0f0f12 50%, #09090b 100%)",
        }}
      >
        {/* Faint blue radial behind CTA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] rounded-full bg-accent/[0.03] blur-[100px]" />
        </div>
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
