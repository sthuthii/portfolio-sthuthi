"use client";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { Post } from "@/app/lib/blogs";

export default function BlogSection({ allPosts }: { allPosts: Post[] }) {
  return (
    <section id="blogs" className="py-32 px-6 bg-black text-white w-full overflow-hidden relative border-t border-white/5">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.2, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-4 h-4 text-neutral-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500">
                The Journal
              </span>
            </div>
            <h2 className="text-7xl md:text-8xl font-bold tracking-tighter leading-[0.8]">
              Latest <br />
              <span className="font-serif italic font-light text-neutral-400">Writings.</span>
            </h2>
          </motion.div>
          
          <Link 
            href="/blogs" 
            className="group relative flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] bg-white text-black px-10 py-5 rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">View All Stories</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </header>

        {/* Horizontal Cards */}
        <div className="flex gap-10 overflow-x-auto pb-20 pt-10 no-scrollbar snap-x" >
          {allPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, index }: { post: Post; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 2, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-w-[350px] md:min-w-[500px] snap-center group"
      onMouseMove={handleMouseMove}
    >
      <Link href={`/blogs/${post.slug}`} className="block relative">
        <div className="relative h-[550px] p-10 bg-white border text-black border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 group-hover:border-white/20 group-hover:bg-orange-100/40 backdrop-blur-xl">
          
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 255, 255, 0.1),
                  transparent 80%
                )
              `,
            }}
          />

          <span className="absolute -bottom-10 -right-10 text-[15rem] font-bold text-white/[0.01] group-hover:text-white/[0.03] transition-all duration-1000 group-hover:-translate-y-10 select-none">
            0{index + 1}
          </span>

          <div className="relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-mono text-neutral-400 border border-white/10 px-4 py-1.5 rounded-full">
                {post.metadata.date}
              </span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-6 group-hover:tracking-tight transition-all duration-500">
                {post.metadata.title}
              </h3>
              <p className="text-neutral-500 font-light leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors duration-500 mb-8">
                {post.metadata.excerpt}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}