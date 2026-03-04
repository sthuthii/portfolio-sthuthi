"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json
    });
    
    const result = await response.json();
    if (result.success) {
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  }

  return (
    // 1. Changed to bg-white and text-black
    <section id="contact" className="relative z-20 py-32 px-6 bg-white text-black w-full overflow-hidden border-t border-neutral-100">
      
      {/* Background Decor: Subdued outline text in light gray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold text-neutral-50 whitespace-nowrap pointer-events-none select-none z-0 uppercase">
        Get In Touch
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-black/20" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-400">
                Contact
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8 text-black">
              Let’s build <br />
              <span className="font-serif italic text-neutral-400 font-light underline decoration-neutral-200 underline-offset-8">something new.</span>
            </h2>

            <div className="space-y-4 mt-12">
              {[
                { label: "Email", value: "sthuthim870@gmail.com", href: "mailto:sthuthim870@gmail.com", icon: <Mail size={16}/> },
                { label: "Github", value: "github.com/sthuthii", href: "https://github.com/sthuthii", icon: <Github size={16}/> },
                { label: "LinkedIn", value: "linkedin.com/in/sthuthi", href: "https://www.linkedin.com/in/sthuthi-poojary-11a154293/", icon: <Linkedin size={16}/> },
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="group flex items-center justify-between p-6 border border-neutral-100 rounded-2xl hover:border-black/10 transition-all duration-500 bg-neutral-50/50 hover:bg-white hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-400 group-hover:text-black transition-colors">{link.icon}</span>
                    <span className="text-sm font-medium tracking-tight text-neutral-600 group-hover:text-black transition-colors">{link.value}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 text-black" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="bg-neutral-50 border border-neutral-100 p-16 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 min-h-[450px]">
                <CheckCircle2 className="w-16 h-16 text-black" />
                <h3 className="text-3xl font-bold tracking-tighter text-black">Message Sent.</h3>
                <p className="text-neutral-500 font-light">Thanks for reaching out! I will get back to you soon.</p>
              </div>
            ) : (
              <form className="space-y-8 bg-neutral-50/50 p-10 rounded-3xl border border-neutral-100 shadow-sm" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                  <input 
                    name="name" required type="text" 
                    className="w-full bg-transparent border-b border-neutral-200 py-4 focus:border-black outline-none transition-colors font-light text-lg text-black placeholder:text-neutral-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                  <input 
                    name="email" required type="email" 
                    className="w-full bg-transparent border-b border-neutral-200 py-4 focus:border-black outline-none transition-colors font-light text-lg text-black placeholder:text-neutral-300"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 ml-1">Message</label>
                  <textarea 
                    name="message" required rows={4}
                    className="w-full bg-transparent border-b border-neutral-200 py-4 focus:border-black outline-none transition-colors font-light text-lg text-black resize-none placeholder:text-neutral-300"
                    placeholder="What's on your mind?"
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="group w-full py-6 bg-black text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-neutral-800 disabled:bg-neutral-200 transition-all flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;