"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex items-center justify-center min-h-screen overflow-hidden bg-[#0A0E1A] selection:bg-[#38BDF8] selection:text-[#0A0E1A]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial navy fade over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_30%,#0A0E1A_100%)]" />

      {/* Electric glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#38BDF8]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20 relative z-10">

        {/* Left */}
        <motion.div style={{ y: y1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-[1px] bg-[#38BDF8]/60" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#38BDF8]/70">
              Based in India
            </span>
          </motion.div>

          <motion.div className="mb-10 cursor-default">
            <h1 className="font-bold tracking-tighter leading-[1.0]">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-7xl md:text-8xl lg:text-8xl text-[#E2E8F0]"
                >
                  Sthuthi
                </motion.span>
              </div>
              <div className="overflow-hidden">
  <motion.span
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="block w-full max-w-4xl mx-auto py-4 text-4xl md:text-5xl lg:text-9xl text-[#38BDF8] electric-text-glow font-light italic font-serif"
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
            className="max-w-md text-lg text-[#64748B] font-light leading-relaxed mb-12"
          >
            I architect{" "}
            <span className="text-[#E2E8F0] font-medium">scalable systems</span> and{" "}
            <span className="text-[#38BDF8] font-medium">machine learning models</span>,
            blending backend logic with intelligent design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href="/#projects"
              className="group relative px-8 py-4 bg-[#38BDF8] text-[#0A0E1A] font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#7DD3FC] overflow-hidden"
            >
              <span className="relative z-10">View Work</span>
            </Link>
            <Link
              href="/contacts"
              className="text-sm font-mono uppercase tracking-widest text-[#38BDF8]/70 border-b border-[#38BDF8]/20 hover:text-[#38BDF8] hover:border-[#38BDF8] transition-all pb-1"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-2 mt-12"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]" />
            </span>
            <span className="text-[10px] font-mono text-[#475569] uppercase tracking-widest">
              Open to opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Right — photo */}
        <motion.div style={{ y: y2 }} className="relative flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-[380px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-[#0F1629] border border-[rgba(56,189,248,0.2)] group-hover:border-[rgba(56,189,248,0.5)] transition-all duration-700 electric-glow"
            >
              <Image
                src="/sthuthi.jpeg"
                alt="Sthuthi Poojary"
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              {/* Electric overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#38BDF8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-[#38BDF8]/40 transition-all duration-500 group-hover:border-[#38BDF8]/80 group-hover:-top-5 group-hover:-left-5" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-[#38BDF8]/40 transition-all duration-500 group-hover:border-[#38BDF8]/80 group-hover:-bottom-5 group-hover:-right-5" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#38BDF8]/60 to-transparent"
        />
        <span className="text-[9px] font-mono text-[#38BDF8]/40 uppercase tracking-[0.4em]">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;