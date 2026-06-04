"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

const accessKey = process.env.NEXT_PUBLIC_YOUR_ACCESS_KEY as string;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative z-20 py-32 px-6 bg-[#0F1629] text-[#E2E8F0] w-full overflow-hidden border-t border-[rgba(56,189,248,0.08)]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-96 bg-[#38BDF8]/3 blur-[150px] pointer-events-none" />

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-bold text-[#38BDF8]/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-widest">
        Connect
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#38BDF8]/50" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#38BDF8]/70">
                Contact
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8 text-[#E2E8F0]">
              Let&apos;s build{" "}
              <br />
              <span className="font-serif italic text-[#38BDF8] font-light electric-text-glow">
                something new.
              </span>
            </h2>

            <p className="text-[#475569] text-base leading-relaxed mb-12 max-w-sm">
              Have an idea, a role, or just want to say hi? My inbox is always open.
            </p>

            <div className="space-y-3">
              {[
                { label: "Email", value: "sthuthim870@gmail.com", href: "mailto:sthuthim870@gmail.com", icon: <Mail size={15} /> },
                { label: "GitHub", value: "github.com/sthuthii", href: "https://github.com/sthuthii", icon: <Github size={15} /> },
                { label: "LinkedIn", value: "linkedin.com/in/sthuthi", href: "https://www.linkedin.com/in/sthuthi-poojary-11a154293/", icon: <Linkedin size={15} /> },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="group flex items-center justify-between p-4 border border-[rgba(56,189,248,0.08)] hover:border-[rgba(56,189,248,0.35)] hover:bg-[rgba(56,189,248,0.04)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#38BDF8]/40 group-hover:text-[#38BDF8] transition-colors">{link.icon}</span>
                    <span className="text-sm font-mono text-[#64748B] group-hover:text-[#CBD5E1] transition-colors">{link.value}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:text-[#38BDF8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="border border-[rgba(56,189,248,0.2)] bg-[#0A0E1A] p-16 flex flex-col items-center justify-center text-center space-y-4 min-h-[450px]">
                <CheckCircle2 className="w-14 h-14 text-[#38BDF8]" />
                <h3 className="text-3xl font-bold tracking-tighter text-[#E2E8F0]">Message Sent.</h3>
                <p className="text-[#475569] font-light">Thanks for reaching out! I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form
                className="space-y-8 bg-[#0A0E1A] p-10 border border-[rgba(56,189,248,0.1)]"
                onSubmit={handleSubmit}
              >
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "email@example.com" },
                ].map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8]/50">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      required
                      type={field.type}
                      className="w-full bg-transparent border-b border-[rgba(56,189,248,0.15)] py-3 focus:border-[#38BDF8] outline-none transition-colors font-light text-lg text-[#E2E8F0] placeholder:text-[#1E3A5F]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8]/50">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-[rgba(56,189,248,0.15)] py-3 focus:border-[#38BDF8] outline-none transition-colors font-light text-lg text-[#E2E8F0] resize-none placeholder:text-[#1E3A5F]"
                    placeholder="What&apos;s on your mind?"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="group w-full py-5 bg-[#38BDF8] text-[#0A0E1A] font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#7DD3FC] disabled:bg-[#1E3A5F] disabled:text-[#475569] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
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