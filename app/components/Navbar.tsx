"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#tech" },
  { name: "Projects", href: "#projects" }, 
  { name: "Journal", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-gray-100 bg-white backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo / Name */}
          <Link href="/" className="group flex items-center gap-0.5">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90">
              <span className="text-white text-xs font-mono">S</span>
            </div>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-black">
              thuthi<span className="text-gray-400 font-light">.Dev</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-mono uppercase tracking-[0.2em] text-black text-5xl hover:text-pink-300 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
              </Link>
            ))}
            
            {/* High-Contrast Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-5 py-2 text-[10px] font-mono uppercase tracking-widest text-white bg-black border border-black hover:bg-pink-300 hover:text-black transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-[1px] bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-[1px] bg-black transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-[1px] bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-8 md:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono uppercase tracking-[0.3em] text-black"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;