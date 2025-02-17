
"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900/50 backdrop-blur-sm py-6 mt-auto">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link
              href="https://github.com/RavjotD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 hover:shadow-[0_0_15px_cyan] transition-all duration-300">
                <img src="/github.png" alt="GitHub" className="w-6 h-6" />
              </div>
            </Link>
            <Link
              href="https://linkedin.com/in/ravjotd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 hover:shadow-[0_0_15px_cyan] transition-all duration-300">
                <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </div>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ravjot Duhra. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
