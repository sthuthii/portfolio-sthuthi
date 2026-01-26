import { getPostBySlug } from "@/app/lib/blogs";
import ReactMarkdown, { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { notFound } from "next/navigation";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  let post;

  try {
    post = await getPostBySlug(slug);
  } catch (e) {
    post = null;
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 selection:bg-white selection:text-black">
      <article className="max-w-3xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link 
            href="/blogs" 
            className="text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 hover:text-white transition-colors"
          >
            ← Journal / {slug.replace(/-/g, ' ')}
          </Link>
        </div>

        <header className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              {post.metadata.date || "Archive Entry"}
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] font-serif italic text-neutral-100">
            {post.metadata.title}
          </h1>
          
          {post.metadata.excerpt && (
            <p className="mt-8 text-xl text-neutral-500 font-light italic border-l border-white/10 pl-6 leading-relaxed">
              {post.metadata.excerpt}
            </p>
          )}
        </header>

        {/* Content Section */}
        <div className="prose prose-invert prose-neutral max-w-none 
          prose-p:text-xl prose-p:leading-relaxed prose-p:text-neutral-400 prose-p:font-light
          prose-headings:text-white prose-headings:tracking-tighter prose-headings:font-bold
          prose-strong:text-white prose-strong:font-semibold
          prose-blockquote:border-white/20 prose-blockquote:italic prose-blockquote:text-neutral-300
          prose-img:rounded-2xl prose-img:border prose-img:border-white/5">
          
          <ReactMarkdown
            components={{
              // Fixed code block component for modern react-markdown
              code({ 
                className, 
                children, 
                ...props 
              }: ComponentPropsWithoutRef<"code"> & ExtraProps) {
                // Detecting language (e.g., language-js)
                const match = /language-(\w+)/.exec(className || "");
                const codeString = String(children).replace(/\n$/, "");

                // If it has a language match, it's a code block
                if (match) {
                  return (
                    <div className="my-10 rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                      <div className="bg-[#1a1a1a] px-4 py-2 text-[10px] font-mono text-neutral-500 border-b border-white/5 flex justify-between items-center">
                        <span>{match[1].toUpperCase()}</span>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-white/5" />
                          <div className="w-2 h-2 rounded-full bg-white/5" />
                        </div>
                      </div>
                      <SyntaxHighlighter
                        style={vscDarkPlus as { [key: string]: React.CSSProperties }}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          fontSize: '0.95rem',
                          lineHeight: '1.6',
                          background: 'transparent'
                        }}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                // Otherwise, it's inline code
                return (
                  <code 
                    className="bg-neutral-900 px-1.5 py-0.5 rounded text-neutral-200 text-sm font-mono border border-white/5" 
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              img({ ...props }) {
                return (
                  <img 
                    {...props} 
                    className="rounded-2xl border border-white/5 my-12 w-full object-cover shadow-2xl" 
                    loading="lazy"
                    alt={props.alt || "Article visual"}
                  />
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-32 pt-10 border-t border-white/5 flex justify-between items-center">
          <Link 
            href="/blogs" 
            className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-all flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> 
            Back to Journal
          </Link>
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-800 select-none">
             End of Entry
          </div>
        </footer>
      </article>
    </main>
  );
}