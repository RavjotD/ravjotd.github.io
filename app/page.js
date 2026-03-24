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

      {/* Expertise Section */}
      <section id="expertise" className="w-full">
        <Expertise />
      </section>

      {/* Collaboration Process Section */}
      <CollaborationProcess />

      {/* About Section */}
      <section id="about" className="w-full">
        <Bio />
        <ShowRoom />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
