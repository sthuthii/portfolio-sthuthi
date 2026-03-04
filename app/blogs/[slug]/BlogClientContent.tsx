"use client";
import React, { ComponentPropsWithoutRef } from "react";
import ReactMarkdown, { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

interface Post {
  metadata: {
    title: string;
    date?: string;
    excerpt?: string;
  };
  content: string;
}

export default function BlogClientContent({ post, slug }: { post: Post; slug: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Safeguard: handle undefined slug if params haven't resolved
  const displaySlug = (slug || "").replace(/-/g, ' ');

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
        style={{ scaleX }}
      />

      <article className="max-w-3xl mx-auto pt-32 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 hover:text-white transition-colors"
          >
            ← Journal / {displaySlug}
          </Link>
        </motion.div>

        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              {post.metadata.date || "Archive Entry"}
            </p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] font-serif italic text-neutral-100 mb-10"
          >
            {post.metadata.title}
          </motion.h1>
          
          {post.metadata.excerpt && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-neutral-400 font-light italic border-l-2 border-white/20 pl-8 leading-relaxed max-w-2xl"
            >
              {post.metadata.excerpt}
            </motion.p>
          )}
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="prose prose-invert prose-neutral max-w-none 
          prose-p:text-xl prose-p:leading-relaxed prose-p:text-neutral-400 prose-p:font-light
          prose-headings:text-white prose-headings:tracking-tighter prose-headings:font-bold prose-headings:mt-16
          prose-strong:text-white prose-strong:font-semibold
          prose-blockquote:border-white/10 prose-blockquote:italic prose-blockquote:text-neutral-300 prose-blockquote:bg-white/[0.02] prose-blockquote:p-8 prose-blockquote:rounded-r-2xl
          prose-img:rounded-3xl prose-img:border prose-img:border-white/5 prose-img:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
        >
          <ReactMarkdown
            components={{
              code({ className, children, ...props }: ComponentPropsWithoutRef<"code"> & ExtraProps) {
                const match = /language-(\w+)/.exec(className || "");
                const codeString = String(children).replace(/\n$/, "");

                if (match) {
                  return (
                    <div className="my-12 rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl group">
                      <div className="bg-white/[0.03] px-5 py-3 text-[10px] font-mono text-neutral-500 border-b border-white/5 flex justify-between items-center">
                        <span className="tracking-widest">{match[1].toUpperCase()}</span>
                        <div className="flex gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-red-500/40 transition-colors" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-yellow-500/40 transition-colors" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-green-500/40 transition-colors" />
                        </div>
                      </div>
                      <SyntaxHighlighter
                        style={vscDarkPlus as { [key: string]: React.CSSProperties }}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: '2rem',
                          fontSize: '0.9rem',
                          lineHeight: '1.7',
                          background: 'transparent'
                        }}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                return (
                  <code 
                    className="bg-white/10 px-2 py-0.5 rounded text-white text-sm font-mono" 
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        <footer className="mt-40 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <Link href="/" className="group flex flex-col items-start gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">Previous Project</span>
            <span className="text-xl font-serif italic text-neutral-400 group-hover:text-white transition-colors flex items-center gap-3">
              <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Journal
            </span>
          </Link>
          <div className="text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-800 select-none">
             End of Entry
          </div>
        </footer>
      </article>
    </main>
  );
}