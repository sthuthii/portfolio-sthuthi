"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax offsets for the left and right columns
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full flex items-center justify-center min-h-screen overflow-hidden bg-black selection:bg-white selection:text-black"
    >
      {/* Background: Modern Dot Grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
        
        {/* Left Side: Text Content */}
        <motion.div style={{ y: y1 }} className="z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-10 h-[1px] bg-white" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white">
              Based in India
            </span>
          </motion.div>
          
          {/* Headline with Zoom Hover */}
          <motion.div 
            className="mb-12 cursor-default group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h1 className="text-7xl font-bold tracking-tighter text-white md:text-8xl lg:text-9xl leading-[1.1]">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Sthuthi
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-serif italic text-neutral-500 font-light"
                >
                  Poojary.
                </motion.span>
              </div>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-xl text-neutral-400 font-light leading-relaxed mb-12 relative z-20"
          >
            I architect <span className="text-white font-medium">scalable systems</span> and 
            machine learning models, blending backend logic with intelligent design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-8"
          >
            <Link
              href="/projects"
              className="group relative px-10 py-4 bg-white text-black rounded-full transition-all hover:pr-14"
            >
              <span className="text-sm font-medium tracking-tight">View Work</span>
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all">→</span>
            </Link>
            
            <Link
              href="/contact"
              className="text-sm font-bold uppercase tracking-widest text-white border-b-2 border-white/10 hover:border-white transition-all pb-1"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Photo Container */}
        <motion.div 
          style={{ y: y2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group w-full max-w-[400px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl grayscale border border-white/10 transition-all duration-700 group-hover:grayscale-0 z-20 bg-neutral-900"
            >
              {/* Fallback Label */}
              <div className="absolute inset-0 flex items-center justify-center font-serif italic text-3xl text-neutral-700 z-0">
                Photo
              </div>

              {/* Next.js Optimized Image */}
              <Image 
                src="/portfolio.jpeg" 
                alt="Sthuthi Poojary Profile" 
                fill 
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 w-full -top-20 animate-scanline pointer-events-none z-30" />
            </motion.div>

            {/* Kinetic Decorative Borders */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-white -z-0 transition-all duration-500 group-hover:-top-2 group-hover:-left-2" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-white -z-0 transition-all duration-500 group-hover:-bottom-2 group-hover:-right-2" />
          </div>
        </motion.div>
      </div>

      {/* Side Scroll Decor */}
      <div className="absolute right-10 bottom-10 hidden md:flex items-center gap-4 rotate-90 origin-right">
         <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-600 italic">Scroll for more</span>
         <div className="w-20 h-[1px] bg-neutral-800" />
      </div>
    </section>
  );
};

export default Hero;