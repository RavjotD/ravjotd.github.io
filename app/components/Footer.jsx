"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="editorial-rule" />
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-serif text-lg text-cream">
            Ravjot Duhra
          </span>

          <div className="flex gap-8">
            <Link
              href="https://github.com/RavjotD"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-text-muted hover:text-accent transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/ravjot-duhra/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-text-muted hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </Link>
          </div>

          <p className="font-sans text-xs text-text-muted">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
