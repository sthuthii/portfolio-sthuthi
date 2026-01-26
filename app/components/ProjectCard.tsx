"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const projects = [
  { id: 1, title: "CollabBoard", category: "Full-Stack", description: "Real-time collaborative whiteboard.", link: "https://github.com/sthuthii/collabboard" },
  { id: 2, title: "KleanKaravali", category: "Smart City", description: "Smart waste management system.", link: "https://github.com/sthuthii/kleankaravali" },
  { id: 3, title: "PCOS Detection", category: "ML / Health", description: "Deep learning clinical model.", link: "https://github.com/sthuthii/pcos-detection" },
  { id: 4, title: "Bio-Vault", category: "Web3 / Health", description: "Decentralized medical data twin.", link: "https://github.com/sthuthii" },
];

const ProjectSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-32 bg-white w-full border-t border-gray-100">
      <div className="max-w-6xl w-full mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-black" />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400">Selected Work</span>
        </div>
        <h2 className="text-6xl font-bold text-black tracking-tighter leading-none">
          Featured <br />
          <span className="font-serif italic text-gray-400 font-light underline decoration-gray-100 underline-offset-[12px]">Creations.</span>
        </h2>
      </div>

      {/* Manual Scroll Container: 
          Uses 'overflow-x-auto' for manual scrolling 
          and 'cursor-grab' for a tactile feel.
      */}
      <div 
        className="flex overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing no-scrollbar py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          className="flex gap-8 px-6"
          animate={isPaused ? {} : { x: [0, -1500] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`}
              className="min-w-[350px] md:min-w-[500px] group/card snap-center"
            >
              <Link href={project.link} target="_blank">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="absolute inset-0 grayscale group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700 flex items-center justify-center text-gray-200 font-serif italic text-6xl select-none">
                    {project.title.charAt(0)}
                  </div>

                  {/* High-Contrast Hover Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                      <Github className="text-black w-6 h-6" />
                    </div>
                    <p className="text-white font-mono text-[10px] uppercase tracking-[0.4em] translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-75">
                      Explore Repository
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-gray-400 tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-bold text-black tracking-tight group-hover/card:text-gray-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light max-w-xs line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover/card:bg-black group-hover/card:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Visual Instruction */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <p className="text-[9px] font-mono text-gray-300 uppercase tracking-[0.5em]">
          Scroll or drag to explore
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;