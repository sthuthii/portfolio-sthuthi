"use client";
import { motion } from "framer-motion";
import { Users, Code, Lightbulb, GraduationCap } from "lucide-react";

const roles = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Full-Stack Developer",
    description: "Building production-ready apps like CollabBoard and smart city systems.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Open Source Contributor",
    description: "Active member at Sahyadri OSC — workshops, hackathons, real projects.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "ML Researcher",
    description: "Applying Deep Learning to specialized domains like health tech and IoT.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "DSA & Backend Enthusiast",
    description: "Mastering algorithms and architecture to build high-performance systems.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0F1629] w-full border-t border-[rgba(56,189,248,0.08)] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#38BDF8]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#38BDF8]/50" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#38BDF8]/70">
                The Story
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#E2E8F0] tracking-tighter leading-[0.9] mb-10">
              Engineering solutions{" "}
              <br />
              <span className="font-serif italic font-light text-[#38BDF8]">
                with precision.
              </span>
            </h2>

            <div className="space-y-6 max-w-xl">
              <p className="text-xl text-[#CBD5E1] font-medium leading-tight tracking-tight">
                A student who loves building too many things at a time. With a passion for backend and machine learning, I work on problems that genuinely need solving.
              </p>
              <p className="text-base text-[#475569] leading-relaxed border-l-2 border-[#38BDF8]/20 pl-5">
                My journey spans from developing real-time collaborative whiteboards to
                implementing machine learning models for healthcare. Clean code,
                scalable architecture, meaningful impact.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-[rgba(56,189,248,0.08)]">
              {[
                { num: "10+", label: "Projects built" },
                { num: "4+", label: "ML models deployed" },
                { num: "2+", label: "Years of coding" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-[#38BDF8] tracking-tight">{s.num}</div>
                  <div className="text-[10px] font-mono text-[#475569] uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-7 bg-[#0A0E1A] border border-[rgba(56,189,248,0.08)] hover:border-[rgba(56,189,248,0.3)] transition-all duration-300 group relative overflow-hidden"
              >
                {/* hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-10 h-10 border border-[rgba(56,189,248,0.2)] flex items-center justify-center mb-6 group-hover:border-[#38BDF8]/60 group-hover:bg-[rgba(56,189,248,0.08)] transition-all duration-300 text-[#38BDF8]/60 group-hover:text-[#38BDF8]">
                  {role.icon}
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#94A3B8] mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {role.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;