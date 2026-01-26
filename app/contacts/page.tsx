"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black w-full relative overflow-hidden border-t border-gray-100">
      {/* Background Decor: High-contrast large outline text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold text-gray-50 whitespace-nowrap pointer-events-none select-none z-0">
        GET IN TOUCH
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-black" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400">
                Contact
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
              Let’s build <br />
              <span className="font-serif italic text-gray-400 font-light underline decoration-gray-100 underline-offset-8">something new.</span>
            </h2>

            <p className="max-w-md text-xl text-gray-600 font-light leading-relaxed mb-12">
              Currently looking for new opportunities and collaborations. 
              My inbox is always open.
            </p>

            <div className="space-y-4">
              {[
                { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com", icon: <Mail size={16}/> },
                { label: "Github", value: "github.com/sthuthii", href: "https://github.com/sthuthii", icon: <Github size={16}/> },
                { label: "LinkedIn", value: "linkedin.com/in/sthuthi", href: "https://linkedin.com/in/sthuthi", icon: <Linkedin size={16}/> },
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="group flex items-center justify-between p-6 border border-gray-100 rounded-2xl hover:border-black transition-all duration-500 bg-white"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 group-hover:text-black transition-colors">{link.icon}</span>
                    <span className="text-sm font-medium tracking-tight text-gray-900">{link.value}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <form className="space-y-8 bg-gray-50/50 p-10 rounded-3xl border border-gray-100 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black outline-none transition-colors font-light text-lg placeholder:text-gray-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black outline-none transition-colors font-light text-lg placeholder:text-gray-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black outline-none transition-colors font-light text-lg resize-none placeholder:text-gray-300"
                  placeholder="What's on your mind?"
                />
              </div>

              <button className="group w-full py-6 bg-black text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-neutral-800 transition-all flex items-center justify-center gap-3">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-32 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            © 2026 Sthuthi. All Rights Reserved.
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest cursor-pointer hover:text-black transition-colors">Twitter</span>
             <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest cursor-pointer hover:text-black transition-colors">Instagram</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;