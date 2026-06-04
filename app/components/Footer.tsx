"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-[rgba(56,189,248,0.06)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-[#38BDF8]/30 flex items-center justify-center">
            <span className="text-[#38BDF8] text-[10px] font-mono font-bold">S</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#1E3A5F]">
            Sthuthi Poojary
          </span>
        </div>
        <p className="text-[10px] font-mono text-[#1E3A5F] uppercase tracking-widest">
          © {new Date().getFullYear()} — Built with Next.js
        </p>
        <div className="flex gap-6">
          {["#about", "#tech", "#projects", "#blogs", "#contact"].map((href) => (
            <Link
              key={href}
              href={href}
              className="text-[10px] font-mono uppercase tracking-widest text-[#1E3A5F] hover:text-[#38BDF8] transition-colors"
            >
              {href.replace("#", "")}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}