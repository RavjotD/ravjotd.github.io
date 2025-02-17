"use client";
import React from "react";
import { motion } from "framer-motion";
import ShowRoom from "./components/ShowRoom";
import Expertise from "./components/Expertise";
import ContactForm from "./components/ContactForm";
import Bio from "./components/Bio";
import CollaborationProcess from "./components/CollaborationProcess";
import emailjs from "@emailjs/browser";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const form = React.useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const formData = new FormData(form.current);
    const email = formData.get("user_email");
    const name = formData.get("user_name");
    const message = formData.get("user_message");

    if (!email || !name || !message) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const templateParams = {
        to_email: "duhraravjot@gmail.com",
        from_name: name,
        from_email: email,
        message: message,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      );

      if (result.text === "OK") {
        setSuccess(true);
        form.current.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email error:", error);
      setError("Failed to send message. Please try again later.");
    }
  };

  const items = [
    {
      id: 1,
      color: "from-stones-700 via-neutral-800 to-green-900",
      title: "Restaurant App",
      desc: "Full-Stack webapp features reservation system with RESTFul API endpoints.",
      img: "/LittleLemon.png",
      link: "https://github.com/RavjotD/LittleLemonCapstone",
      bcolor: "border-green-600",
      bgcolor: "bg-gradient-to-b from-slate-800 to-gray-900",
      imgcolor: "border-cyan-400",
      skills: ["Python", "Django", "DRF", "RESTFul", "MySQL"],
      txtcolor: "text-cyan-400",
    },
    {
      id: 2,
      color: "from-gray-500 via-sky-900 to-blue-900",
      title: "TicketHub",
      desc: "Full-Stack webapp serving as a TicketMaster Alternative.",
      img: "/THSS.png",
      link: "https://ticket-hub-pink.vercel.app/",
      bcolor: "border-cyan-500",
      bgcolor: "bg-gradient-to-b from-gray-700 to-slate-800",
      imgcolor: "border-white",
      skills: ["Next.js", "Tailwind CSS", "PocketBase", "DiscoveryAPI"],
      txtcolor: "text-cyan-400",
    },
    {
      id: 3,
      color: "from-zinc-900 via-zinc-800 to-yellow-600",
      title: "Business Site",
      desc: "A business website built with a CMS, providing security services.",
      img: "/Screenshot.png",
      link: "https://stalliongroupsecurity.ca/",
      bcolor: "border-amber-300",
      bgcolor: "bg-gradient-to-b from-zinc-800 to-zinc-900",
      imgcolor: "border-yellow-400",
      skills: ["CMS", "SEO", "10web"],
      txtcolor: "text-yellow-400",
    },
  ];
  // bg-gradient-radial from-gray-900 via-slate-800 to-black
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-radial from-gray-900 via-slate-900 to-black">
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
      <section id="about" className="min-h-screen py-12  flex flex-col">
        <div className="w-full  ">
          <div className="grid grid-cols-1 gap-8">
            <Bio />
            <ShowRoom />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gradient-radial from-gray-900 via-slate-900 to-black"
      >
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-h-screen py-12 sm:py-16">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
