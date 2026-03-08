"use client";
import { motion } from "framer-motion";
import { Users, Code, Lightbulb, GraduationCap } from "lucide-react";

const roles = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Full-Stack Developer",
    description: "Building production-ready apps like CollabBoard and smart waste systems.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Club Member & Leader",
    description: "Active contributor to technical communities, organizing workshops and hackathons.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "ML Researcher",
    description: "Applying Deep Learning to specialized fields like PCOS detection and health tech.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Continuous Learner",
    description: "Mastering DSA and Backend Architecture to build high-performance systems.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white w-full border-t border-gray-100 relative overflow-hidden">
      {/* Background Text Decor - Subtle Watermark */}
      <div className="absolute -bottom-10 -left-10 text-[15rem] font-bold text-gray-50 select-none pointer-events-none z-0">
        BIO
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Content Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[1px] bg-black" 
              />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400">
                The Story
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tighter leading-[0.9] mb-10">
              Engineering solutions <br />
              <span className="font-serif italic text-gray-400 font-light underline decoration-gray-200 underline-offset-8">
                with precision.
              </span>
            </h2>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-2xl text-gray-800 font-medium leading-tight tracking-tight">
                I am a developer driven by the challenge of creating tools that bridge 
                the gap between complex data and user-friendly interfaces.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-normal border-l-2 border-gray-100 pl-6">
                My journey spans from developing real-time collaborative whiteboards to 
                implementing machine learning models for healthcare. I focus on clean code, 
                scalable architecture, and meaningful impact.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Interactive Role Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl bg-gray border border-gray-300 hover:bg-white hover:border-black hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-300 overflow-hidden">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {role.icon}
                  </motion.div>
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-4">
                  {role.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
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