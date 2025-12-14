import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Cyber Finance",
    category: "Fintech Platform",
    gradient: "from-blue-600 to-cyan-500",
    link: "#"
  },
  {
    title: "Neon Estate",
    category: "Real Estate",
    gradient: "from-purple-600 to-pink-500",
    link: "https://ai.studio/apps/drive/1Cn3hlhWMbrSUWayswo47JR921X2PgyIX"
  },
  {
    title: "Quantum Fitness",
    category: "Health & Sport",
    gradient: "from-emerald-500 to-teal-400",
    link: "#"
  },
  {
    title: "Astro Law",
    category: "Legal Firm",
    gradient: "from-orange-500 to-red-500",
    link: "#"
  },
  {
    title: "Eco Tech",
    category: "Green Energy",
    gradient: "from-green-600 to-lime-400",
    link: "#"
  },
];

export const PortfolioCarousel: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor - Optimized */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.05),transparent)] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white"
        >
          הפרויקטים ה<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">אחרונים</span>
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track - Optimized with will-change-transform */}
        <motion.div
          className="flex gap-8 px-8 will-change-transform transform-gpu"
          animate={{ x: ["0%", "50%"] }} // Moving Right because RTL
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}
        >
          {/* Double list for seamless loop */}
          {[...projects, ...projects, ...projects].map((project, index) => {
            const CardContent = (
              <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] group-hover:border-cyan-500/30 h-full transform-gpu">
                
                {/* Browser Top Bar */}
                <div className="h-8 bg-slate-800 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <div className="ml-auto w-2/3 h-2 bg-white/5 rounded-full" />
                </div>

                {/* Content Body */}
                <div className={`h-48 md:h-56 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
                   {/* Abstract Pattern overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[size:20px_20px] opacity-20" />
                   
                   {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="border border-white/20 rounded-full p-3 bg-white/10 text-white">
                        <ExternalLink size={24} />
                      </div>
                   </div>

                   <h3 className="text-3xl font-black text-white/20 uppercase tracking-widest transform -rotate-12 group-hover:scale-110 transition-transform duration-500 will-change-transform">
                     {project.title}
                   </h3>
                </div>

                {/* Info Footer */}
                <div className="p-4 bg-slate-900">
                  <h4 className="text-lg font-bold text-white">{project.title}</h4>
                  <p className="text-sm text-slate-400">{project.category}</p>
                </div>

              </div>
            );

            return (
              <div
                key={index}
                className="relative group w-[300px] md:w-[400px] flex-shrink-0 cursor-pointer transform-gpu"
              >
                {project.link !== "#" ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {CardContent}
                    </a>
                ) : (
                    <div className="block h-full">
                        {CardContent}
                    </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};