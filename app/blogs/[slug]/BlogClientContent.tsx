"use client";
import React, { ComponentPropsWithoutRef } from "react";
import ReactMarkdown, { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Post {
  metadata: { title: string; date?: string; excerpt?: string };
  content: string;
}

export default function BlogClientContent({ post, slug }: { post: Post; slug: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="min-h-screen bg-[#0A0E1A] text-[#E2E8F0] selection:bg-[#38BDF8] selection:text-[#0A0E1A] antialiased">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#38BDF8] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Top nav */}
      <div className="fixed top-0 left-0 right-0 z-40 h-14 bg-[#0A0E1A]/90 backdrop-blur-md border-b border-[rgba(56,189,248,0.1)] flex items-center px-6">
        <div className="max-w-3xl w-full mx-auto flex items-center justify-between">
          <Link
            href="/#blogs"
            className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#475569] hover:text-[#38BDF8] transition-colors"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            Journal
          </Link>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#1E3A5F] hidden md:block truncate max-w-xs">
            {post.metadata.title}
          </span>
          <div className="w-16" />
        </div>
      </div>

      <article className="max-w-3xl mx-auto pt-28 pb-32 px-6">
        <header className="mb-16 pb-12 border-b border-[rgba(56,189,248,0.08)]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-[#38BDF8]/30" />
            <span className="text-[10px] font-mono text-[#38BDF8]/60 uppercase tracking-widest">
              {post.metadata.date || "Archive"}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8 text-[#E2E8F0]"
          >
            {post.metadata.title}
          </motion.h1>

          {post.metadata.excerpt && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#475569] font-serif italic leading-relaxed max-w-2xl border-l-2 border-[#38BDF8]/20 pl-5"
            >
              {post.metadata.excerpt}
            </motion.p>
          )}
        </header>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="
            prose prose-invert max-w-none
            prose-p:text-[#94A3B8] prose-p:text-lg prose-p:leading-[1.9] prose-p:mb-7
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#E2E8F0]
            prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pt-8 prose-h2:border-t prose-h2:border-[rgba(56,189,248,0.08)]
            prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-[#CBD5E1]
            prose-strong:text-[#E2E8F0] prose-strong:font-semibold
            prose-blockquote:border-l-2 prose-blockquote:border-[#38BDF8]/30 prose-blockquote:pl-5 prose-blockquote:text-[#475569] prose-blockquote:italic
            prose-ul:text-[#94A3B8] prose-ol:text-[#94A3B8]
            prose-li:text-lg prose-li:leading-relaxed prose-li:mb-2
            prose-a:text-[#38BDF8] prose-a:no-underline hover:prose-a:underline
            prose-hr:border-[rgba(56,189,248,0.08)] prose-hr:my-12
          "
        >
          <ReactMarkdown
            components={{
              code({ className, children, ...props }: ComponentPropsWithoutRef<"code"> & ExtraProps) {
                const match = /language-(\w+)/.exec(className || "");
                const codeString = String(children).replace(/\n$/, "");
                if (match) {
                  return (
                    <div className="relative my-10 overflow-hidden border border-[rgba(56,189,248,0.15)] bg-[#05080f] not-prose">
                      <div className="flex items-center justify-between px-5 py-3 bg-[#0F1629] border-b border-[rgba(56,189,248,0.08)]">
                        <span className="text-[10px] font-mono text-[#38BDF8]/50 uppercase tracking-widest">{match[1]}</span>
                        <div className="flex gap-1.5">
                          {[1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-[rgba(56,189,248,0.1)]" />)}
                        </div>
                      </div>
                      <SyntaxHighlighter
                        style={vscDarkPlus as { [key: string]: React.CSSProperties }}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{ margin: 0, padding: "1.5rem", fontSize: "0.875rem", lineHeight: "1.7", background: "transparent" }}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  );
                }
                return (
                  <code className="bg-[#0F1629] text-[#38BDF8] px-1.5 py-0.5 font-mono text-[0.85em] border border-[rgba(56,189,248,0.15)]" {...props}>
                    {children}
                  </code>
                );
              },
              img: ({ ...props }) => (
                <span className="block my-12 not-prose">
                  <img {...props} className="w-full border border-[rgba(56,189,248,0.12)]" />
                  {props.alt && (
                    <span className="block text-center text-[10px] font-mono text-[#38BDF8]/40 mt-3 uppercase tracking-widest">
                      {props.alt}
                    </span>
                  )}
                </span>
              ),
              hr: () => <hr className="border-none border-t border-[rgba(56,189,248,0.08)] my-12" />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        <footer className="mt-20 pt-10 border-t border-[rgba(56,189,248,0.08)]">
          <Link
            href="/#blogs"
            className="group inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#475569] hover:text-[#38BDF8] transition-colors"
          >
            <div className="w-8 h-8 border border-[rgba(56,189,248,0.15)] flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[rgba(56,189,248,0.08)] transition-all duration-300">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:text-[#38BDF8] transition-colors" />
            </div>
            Back to Journal
          </Link>
        </footer>
      </article>
    </main>
  );
}