
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
      opacity: isActive ? 1 : 0.4,
      filter: 'none', 
      display: Math.abs(relativeIndex) > 1 ? 'none' : 'block'
    };
  };

  return (
    <section 
      className="py-12 relative overflow-hidden" 
      style={{ backgroundColor: '#010206' }}
    >
      {/* SOLID BACKGROUND ONLY */}

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-2 md:mb-12 max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-2 text-cyan-400 font-bold tracking-widest text-xs uppercase"
            >
                <Zap size={14} className="fill-cyan-400" />
                <span>Selected Work</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-white leading-tight"
            >
               האחרונים <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-600">שלי</span>
            </motion.h2>
        </div>

        <div 
            className="relative w-full h-[380px] flex justify-center items-center perspective-[1200px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Removed the colored background circle for sharp look */}

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
                            stiffness: 300,
                            damping: 30,
                            mass: 1
                        }}
                        className="absolute w-[300px] md:w-[420px] aspect-[4/3] rounded-2xl cursor-pointer will-change-transform transform-gpu"
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
                            <div className={`relative w-full h-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group ${isActive ? 'ring-1 ring-white/20 shadow-cyan-500/10' : ''}`}>
                                
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 ${isActive ? 'opacity-10' : ''} transition-opacity duration-500`} />
                                
                                {project.image && (
                                    <img 
                                      src={project.image} 
                                      alt={project.title} 
                                      loading="lazy"
                                      decoding="async"
                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      draggable="false"
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 mb-2 block bg-black/80 w-fit px-2 py-1 rounded">
                                                {project.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                            <p className="text-sm text-slate-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {project.description}
                                            </p>
                                        </div>
                                        <span 
                                          className={`w-9 h-9 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 hover:scale-110 ${isActive ? 'bg-cyan-500 text-black border-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                        >
                                            <ArrowUpRight size={16} strokeWidth={2.5} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                );
            })}
        </div>

        <div className="mt-6 flex items-center gap-6 relative z-20">
            <div className="flex gap-3">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'w-2 bg-slate-700 hover:bg-slate-600'}`}
                        aria-label={`Go to project ${i + 1}`}
                    />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
});
