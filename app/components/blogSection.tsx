import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/app/lib/blogs";

const BlogSection = async () => {
  // Fetch all post metadata (slug, title, date, excerpt) from your .md files
  const allPosts = await getAllPosts();

  return (
    <section id="blogs" className="py-32 px-6 bg-black text-white w-full overflow-hidden relative border-t border-white/5">
      {/* Subtle Background Grid */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-white" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500">
                The Journal
              </span>
            </div>
            <h2 className="text-6xl font-bold tracking-tighter leading-[0.9]">
              Latest <br />
              <span className="font-serif italic text-neutral-600 font-light">Writings.</span>
            </h2>
          </div>
          
          <Link 
            href="/blogs" 
            className="group flex items-center gap-4 text-xs font-mono uppercase tracking-widest border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar cursor-grab active:cursor-grabbing">
          {allPosts.map((post, index) => (
            <div
              key={post.slug}
              className="min-w-[320px] md:min-w-[450px] snap-start group"
            >
              <Link href={`/blogs/${post.slug}`}>
                <div className="relative h-[450px] p-12 bg-neutral-900/40 border border-white/5 flex flex-col justify-between hover:border-white/20 hover:bg-neutral-900/60 transition-all duration-500 rounded-3xl overflow-hidden backdrop-blur-sm">
                  
                  {/* Watermark Number */}
                  <span className="absolute -top-4 -right-4 text-[12rem] font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none z-0">
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                       <span className="text-[10px] font-mono text-neutral-400 border border-white/10 px-3 py-1 rounded-full">
                        {post.metadata.date}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold tracking-tight leading-tight mb-6 group-hover:text-white transition-colors">
                      {post.metadata.title}
                    </h3>
                    
                    <p className="text-neutral-500 font-light leading-relaxed line-clamp-4 group-hover:text-neutral-400 transition-colors">
                      {post.metadata.excerpt}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-3 text-xs font-mono uppercase tracking-widest font-bold text-neutral-400 group-hover:text-white transition-colors">
                    <span className="w-0 group-hover:w-8 h-[1px] bg-white transition-all duration-500" />
                    Read Story
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;