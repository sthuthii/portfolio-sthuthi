"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/projects";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-32 bg-[#0F1629] w-full border-t border-[rgba(56,189,248,0.08)] overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-[#38BDF8]/50" />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#38BDF8]/70">
            Selected Work
          </span>
        </div>
        <h2 className="text-6xl font-bold text-[#E2E8F0] tracking-tighter leading-none">
          Featured{" "}
          <br />
          <span className="font-serif italic text-[#38BDF8] font-light electric-text-glow">
            Creations.
          </span>
        </h2>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={project.link} target="_blank" className="group block">
              {/* Image area */}
              <div className="relative h-56 overflow-hidden bg-[#0A0E1A] border border-[rgba(56,189,248,0.1)] group-hover:border-[rgba(56,189,248,0.4)] transition-all duration-500">
                {/* Grid bg inside card */}
                <div className="absolute inset-0 grid-bg opacity-60" />

                {/* Large letter */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[7rem] font-bold text-[#38BDF8]/5 group-hover:text-[#38BDF8]/10 transition-all duration-700 select-none font-mono">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0A0E1A]/80 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="w-12 h-12 border border-[#38BDF8]/50 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <Github className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <span className="text-[#38BDF8] font-mono text-[10px] uppercase tracking-[0.4em] translate-y-4 group-hover:translate-y-0 transition-transform duration-400 delay-75">
                    View Repository
                  </span>
                </div>

                {/* Electric scan line on hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-75 origin-right" />
              </div>

              {/* Info */}
              <div className="mt-5 flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#38BDF8]/60 tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#E2E8F0] tracking-tight group-hover:text-[#38BDF8] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#475569] font-light max-w-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="w-10 h-10 border border-[rgba(56,189,248,0.15)] flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[rgba(56,189,248,0.08)] transition-all duration-300 flex-shrink-0 mt-1">
                  <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-[#38BDF8] transition-colors" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;