import dynamic from "next/dynamic";
import Expertise from "./components/Expertise";
import ContactForm from "./components/ContactForm";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ShowRoom from "./components/ShowRoom";

const Hero = dynamic(() => import("./components/Hero"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero */}
      <section id="home" className="w-full min-h-screen">
        <Hero />
      </section>

      {/* About */}
      <section
        id="about"
        className="w-full"
        style={{
          background: "linear-gradient(180deg, #101012 0%, #161618 30%, #1c1c1f 50%, #161618 70%, #101012 100%)",
        }}
      >
        <Bio />
      </section>

      {/* Services */}
      <section id="expertise" className="w-full bg-charcoal">
        <Expertise />
      </section>

      {/* Showroom */}
      <section
        id="showroom"
        className="w-full"
        style={{
          background: "linear-gradient(180deg, #101012 0%, #161618 30%, #1c1c1f 50%, #161618 70%, #101012 100%)",
        }}
      >
        <ShowRoom />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="w-full"
        style={{
          background: "linear-gradient(180deg, #101012 0%, #161618 40%, #161618 60%, #101012 100%)",
        }}
      >
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="w-full">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
