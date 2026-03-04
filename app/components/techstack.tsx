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
    <section id="tech" className="py-32 px-6 bg-pink-200 text-white w-full overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Animated Header */}
        <div className="mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            The <span className="font-serif italic text-black">Engine.</span>
          </motion.h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-gray-500">
            Technical Stack // 2026 Edition
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/10">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border-r border-b border-white/10 group relative overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
              
              {/* Animated Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-10 group-hover:text-white transition-colors">
                {skillGroup.category}
              </h3>

              <ul className="space-y-4">
                {skillGroup.items.map((item) => (
                  <li 
                    key={item} 
                    className="text-xl font-light tracking-tight text-gray-400 group-hover:text-white group-hover:translate-x-3 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
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