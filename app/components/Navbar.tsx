"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#tech" },
  { name: "Projects", href: "#projects" },
  { name: "Journal", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
      scrolled
        ? "bg-[#0A0E1A]/90 backdrop-blur-xl border-b border-[rgba(56,189,248,0.1)]"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">

          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 border border-[#38BDF8]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#38BDF8] group-hover:bg-[rgba(56,189,248,0.08)]">
              <span className="text-[#38BDF8] text-xs font-mono font-bold">S</span>
            </div>
            <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#E2E8F0]">
              thuthi<span className="text-[#38BDF8]/60 font-light">.dev</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#64748B] hover:text-[#38BDF8] transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38BDF8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <a
              href="/Sthuthi_Poojary.pdf"
              target="_blank"
              className="px-5 py-2 text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] border border-[#38BDF8]/40 hover:border-[#38BDF8] hover:bg-[rgba(56,189,248,0.08)] transition-all duration-300"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#E2E8F0] p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[1px] bg-[#38BDF8] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-[1px] bg-[#38BDF8] transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-[1px] bg-[#38BDF8] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 w-full bg-[#0A0E1A]/95 backdrop-blur-xl border-b border-[rgba(56,189,248,0.1)] p-8 md:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono uppercase tracking-[0.3em] text-[#64748B] hover:text-[#38BDF8] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}