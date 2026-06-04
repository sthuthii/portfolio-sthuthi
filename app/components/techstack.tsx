"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "C++", "SQL", "Java", "C", "Astro"],
  },
  {
    category: "Frontend & Mobile",
    items: ["Next.js", "React Native", "Tailwind CSS", "Framer Motion", "React.js", "Expo"],
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Express", "Firebase", "PostgreSQL", "JWT/OAuth2", "FastAPI", "Flask", "Supabase"],
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "Scikit-learn", "Deep Learning", "Gradio", "Hugging Face", "LangChain", "Streamlit"],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-32 px-6 bg-[#0A0E1A] w-full overflow-hidden border-t border-[rgba(56,189,248,0.08)]">
      <div className="max-w-6xl w-full mx-auto">

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#38BDF8]/50" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#38BDF8]/70">
              Technical Stack
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-[#E2E8F0]"
          >
            The{" "}
            <span className="text-[#38BDF8] electric-text-glow italic font-serif font-light">
              Engine.
            </span>
          </motion.h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#475569] mt-4">
            2026 Edition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[rgba(56,189,248,0.08)]">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border-r border-b border-[rgba(56,189,248,0.08)] group relative overflow-hidden"
            >
              {/* Top scan line on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#475569] mb-10 group-hover:text-[#38BDF8] transition-colors duration-300">
                {skillGroup.category}
              </h3>

              <ul className="space-y-4">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="text-lg font-light tracking-tight text-[#475569] group-hover:text-[#CBD5E1] group-hover:translate-x-2 transition-all duration-300 flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;