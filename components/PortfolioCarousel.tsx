
import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

const projects = [
  {
    title: "Elegant Jewelry",
    category: "Premium E-Commerce",
    description: "אתר תדמית ומכירות יוקרתי לתכשיטים.",
    gradient: "from-blue-600 to-cyan-500",
    link: "https://cnshini11-source.github.io/LEVI-ITZHAK-SHINI/",
    image: "https://i.imgur.com/iNQ0K2j.png"
  },
  {
    title: "DEEP SLEEP",
    category: "Health & AI",
    description: "אתר למכשיר שמחסל נחירות מבוסס AI",
    gradient: "from-purple-600 to-pink-500",
    link: "https://cnshini11-source.github.io/shini/",
    image: "https://i.imgur.com/ozMneOp.png"
  },
  {
    title: "IDAN FITNESS",
    category: "Health & Sport",
    description: "דף נחיתה הממיר בטירוף למותג כושר.",
    gradient: "from-emerald-600 to-teal-500",
    link: "#",
    image: "https://i.imgur.com/eQ6sscB.png"
  }
];

export const PortfolioCarousel: React.FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  const getCardStyle = (index: number) => {
    const total = projects.length;
    let relativeIndex = (index - currentIndex + total) % total;
    if (relativeIndex > total / 2) relativeIndex -= total;

    const isActive = relativeIndex === 0;
    
    return {
      zIndex: isActive ? 50 : 10,
      x: relativeIndex * 110 + '%',
      scale: isActive ? 1 : 0.8,
      rotateY: isActive ? 0 : relativeIndex > 0 ? -45 : 45,
      opacity: isActive ? 1 : 0.3, // Darker inactive cards
      filter: isActive ? 'none' : 'brightness(0.5) blur(2px)', // Focus only on active
      display: Math.abs(relativeIndex) > 1 ? 'none' : 'block'
    };
  };

  return (
    <section 
      className="py-24 relative overflow-hidden bg-[#010101]" // Almost pure black
    >
      {/* BACKGROUND LAYERS - Minimalist & Dark */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Pure Dark Base */}
          <div className="absolute inset-0 bg-[#010101]" />
          
          {/* Very Subtle Grid - Barely Visible */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-6 md:mb-16 max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-3 text-cyan-500 font-bold tracking-[0.2em] text-[10px] uppercase font-mono"
            >
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span>Selected_Projects_v2.0</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white leading-tight"
            >
               האחרונים <span className="text-white relative inline-block">
                 שלי
                 <span className="absolute bottom-1 right-0 w-full h-1 bg-cyan-600 rounded-full" />
               </span>
            </motion.h2>
        </div>

        <div 
            className="relative w-full h-[400px] flex justify-center items-center perspective-[1200px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {projects.map((project, index) => {
                const style = getCardStyle(index);
                const isActive = index === currentIndex;

                return (
                    <motion.div
                        key={index}
                        initial={false}
                        animate={style}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                        }}
                        className="absolute w-[300px] md:w-[450px] aspect-[4/3] rounded-xl cursor-pointer will-change-transform transform-gpu"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                         <a
                            href={project.link !== "#" ? project.link : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                if (!isActive) {
                                    e.preventDefault();
                                    setCurrentIndex(index);
                                }
                            }}
                            className="block w-full h-full focus:outline-none"
                            draggable="false"
                         >
                            {/* THE CUBE/CARD ITSELF */}
                            <div className={`relative w-full h-full bg-[#050505] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 group 
                                ${isActive 
                                    ? 'shadow-[0_0_50px_-10px_rgba(6,182,212,0.4)] border-cyan-500/40 ring-1 ring-cyan-500/20' 
                                    : 'shadow-none opacity-50'}`
                            }>
                                
                                {/* Image Layer */}
                                {project.image && (
                                    <img 
                                      src={project.image} 
                                      alt={project.title} 
                                      loading="lazy"
                                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'group-hover:scale-105' : ''}`}
                                      draggable="false"
                                    />
                                )}

                                {/* Overlay Gradient - Stronger at bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                                {/* Glowing Border Animation (Active Only) */}
                                {isActive && (
                                    <div className="absolute inset-0 border-[1px] border-cyan-500/0 group-hover:border-cyan-500/50 transition-colors duration-500 rounded-xl pointer-events-none" />
                                )}

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <div className="flex justify-between items-end">
                                        <div className="text-right">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_cyan]" />
                                                <span className="text-[10px] font-bold tracking-wider uppercase text-cyan-200 font-mono">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-2">{project.title}</h3>
                                            <p className={`text-sm text-slate-300 font-light transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                                {project.description}
                                            </p>
                                        </div>
                                        
                                        {/* Action Button */}
                                        <span 
                                          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300
                                            ${isActive 
                                                ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)] hover:scale-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]' 
                                                : 'bg-white/5 border-white/10 text-slate-500'}`
                                          }
                                        >
                                            <ArrowUpRight size={20} strokeWidth={2.5} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                );
            })}
        </div>

        {/* Indicators */}
        <div className="mt-12 flex items-center gap-3 relative z-20">
            {projects.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-10 bg-cyan-500 shadow-[0_0_8px_cyan]' : 'w-2 bg-slate-800'}`}
                    aria-label={`Go to project ${i + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
});
