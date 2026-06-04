"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Post } from "@/app/lib/blogs";

export default function BlogSection({ allPosts }: { allPosts: Post[] }) {
  return (
    <section id="blogs" className="py-32 px-6 bg-[#0A0E1A] w-full overflow-hidden relative border-t border-[rgba(56,189,248,0.08)]">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#38BDF8]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#38BDF8]/50" />
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#38BDF8]/70">
                The Journal
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E2E8F0]">
              Latest{" "}
              <br />
              <span className="font-serif italic font-light text-[#38BDF8] electric-text-glow">
                Writings.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blogs"
              className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#38BDF8] border border-[rgba(56,189,248,0.3)] px-6 py-3 hover:bg-[rgba(56,189,248,0.08)] hover:border-[#38BDF8] transition-all duration-300"
            >
              All Posts
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-[rgba(56,189,248,0.08)]">
          {allPosts.length === 0 ? (
            <p className="py-16 text-center text-[#475569] font-mono text-sm">No posts yet.</p>
          ) : (
            allPosts.map((post, index) => (
              <BlogRow key={post.slug} post={post} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function BlogRow({ post, index }: { post: Post; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/blogs/${post.slug}`}
        className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-[rgba(56,189,248,0.06)] hover:border-[rgba(56,189,248,0.25)] transition-all duration-300"
      >
        <div className="flex items-start md:items-center gap-6 flex-1 min-w-0">
          <span className="text-[10px] font-mono text-[#1E3A5F] shrink-0 mt-1 md:mt-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#CBD5E1] group-hover:text-[#38BDF8] group-hover:translate-x-1 transition-all duration-300 leading-tight">
              {post.metadata.title}
            </h3>
            {post.metadata.excerpt && (
              <p className="text-sm text-[#475569] mt-1 line-clamp-1 font-light">
                {post.metadata.excerpt}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6 shrink-0 pl-12 md:pl-0">
          <span className="text-[10px] font-mono text-[#475569] uppercase tracking-widest">
            {post.metadata.date}
          </span>
          <div className="w-8 h-8 border border-[rgba(56,189,248,0.15)] flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[rgba(56,189,248,0.08)] transition-all duration-300">
            <ArrowUpRight className="w-3.5 h-3.5 text-[#475569] group-hover:text-[#38BDF8] transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}