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
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const displaySlug = (slug || "").replace(/-/g, ' ');

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black antialiased">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-white z-50 origin-left"
        style={{ scaleX }}
      />

      <article className="max-w-2xl mx-auto pt-32 pb-32 px-6">
        
        {/* Navigation */}
        <nav className="mb-16">
          <Link 
            href="/" 
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors"
          >
            ← Journal / {displaySlug}
          </Link>
        </nav>

        {/* Header: Scaled down for elegance */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-neutral-800" />
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              {post.metadata.date || "Archive"}
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8"
          >
            {post.metadata.title}
          </motion.h1>
          
          {post.metadata.excerpt && (
            <p className="text-lg text-neutral-400 font-serif italic leading-relaxed border-l-2 border-neutral-900 pl-6">
              {post.metadata.excerpt}
            </p>
          )}
        </header>

        {/* CONTENT SECTION
            Note: We use specific 'prose-p:font-serif' and 'prose-headings:font-sans'
            to force the font swap.
        */}
        <div 
          className="prose prose-invert max-w-none 
          prose-p:font-serif prose-p:text-neutral-300 prose-p:text-lg prose-p:md:text-xl prose-p:leading-[1.8] prose-p:mb-8
          prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-white
          prose-strong:text-white prose-strong:font-bold
          prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-neutral-400 prose-blockquote:border-neutral-800
          prose-li:font-serif prose-li:text-neutral-300
          /* Dropcap */
          first-of-type:prose-p:first-letter:text-6xl 
          first-of-type:prose-p:first-letter:font-bold 
          first-of-type:prose-p:first-letter:mr-3 
          first-of-type:prose-p:first-letter:float-left 
          first-of-type:prose-p:first-letter:leading-none"
        >
          <ReactMarkdown
            components={{
              code({ className, children, ...props }: ComponentPropsWithoutRef<"code"> & ExtraProps) {
                const match = /language-(\w+)/.exec(className || "");
                const codeString = String(children).replace(/\n$/, "");

                if (match) {
                  return (
                    <div className="relative my-12 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950">
                      <div className="flex items-center justify-between px-4 py-2 bg-neutral-900/50 border-b border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{match[1]}</span>
                      </div>
                      <SyntaxHighlighter
                        style={vscDarkPlus as { [key: string]: React.CSSProperties }}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          background: 'transparent',
                          fontFamily: 'var(--font-geist-mono), monospace'
                        }}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  );
                }
                return <code className="bg-neutral-900 text-neutral-200 px-1.5 py-0.5 rounded font-mono text-sm" {...props}>{children}</code>;
              },
              // Image styling
              img: ({ ...props }) => (
                <span className="block my-12">
                  <img {...props} className="w-full rounded-lg border border-neutral-800" />
                  {props.alt && <span className="block text-center text-[10px] font-mono text-neutral-600 mt-4 uppercase tracking-widest">{props.alt}</span>}
                </span>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className="mt-32 pt-12 border-t border-neutral-900 flex justify-center">
          <Link 
            href="/" 
            className="group flex flex-col items-center gap-4 text-neutral-500 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-white transition-all">
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest">Index</span>
          </Link>
        </footer>
      </article>
    </main>
  );
}