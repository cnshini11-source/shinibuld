
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Zap } from 'lucide-react';

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

export const PortfolioCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle Rotation
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  // Auto-rotation with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  const getCardStyle = (index: number) => {
    const total = projects.length;
    // Calculate relative index (0 = active, 1 = next, -1/2 = prev)
    let relativeIndex = (index - currentIndex + total) % total;
    if (relativeIndex > total / 2) relativeIndex -= total;

    const isActive = relativeIndex === 0;
    
    return {
      zIndex: isActive ? 50 : 10,
      x: relativeIndex * 110 + '%', // Spacing
      scale: isActive ? 1 : 0.8,
      rotateY: isActive ? 0 : relativeIndex > 0 ? -45 : 45, // Inverted rotation for correct perspective
      opacity: isActive ? 1 : 0.4,
      filter: isActive ? 'blur(0px) brightness(1.1)' : 'blur(4px) brightness(0.5)',
      display: Math.abs(relativeIndex) > 1 ? 'none' : 'block' // Hide distant cards if we had more than 3
    };
  };

  return (
    <section 
      className="py-12 relative overflow-hidden" 
      style={{ background: 'linear-gradient(to bottom, #05080D, #080E16)' }}
    >
      {/* Background Ambience - Updated to very subtle blue depth instead of turquoise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(50,80,180,0.03),transparent_80%)] pointer-events-none" />
      
      {/* Localized Cyber Grid overlay for consistency */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header - Reduced margin significantly for mobile */}
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

        {/* Carousel Container - Reduced Height */}
        <div 
            className="relative w-full h-[380px] flex justify-center items-center perspective-[1200px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Ambient Glow behind Active Card - Subtler and more neutral blue */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full z-0" />

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
                         {/* Card Wrapper as Link - Handles both Navigation and Rotation */}
                         <a
                            href={project.link !== "#" ? project.link : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                if (!isActive) {
                                    e.preventDefault(); // Prevent link if not active
                                    setCurrentIndex(index); // Rotate instead
                                }
                            }}
                            className="block w-full h-full focus:outline-none"
                            draggable="false"
                         >
                            {/* THE CARD */}
                            <div className={`relative w-full h-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group ${isActive ? 'ring-1 ring-white/20 shadow-cyan-500/10' : ''}`}>
                                
                                {/* Gradient Overlay on Active */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 ${isActive ? 'opacity-10' : ''} transition-opacity duration-500`} />
                                
                                {/* Image */}
                                {project.image ? (
                                    <img 
                                      src={project.image} 
                                      alt={project.title} 
                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      draggable="false"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                        <span className="text-slate-600 font-mono text-xs">Image Placeholder</span>
                                    </div>
                                )}

                                {/* Dark Overlay for Text Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 mb-2 block bg-black/50 backdrop-blur-md w-fit px-2 py-1 rounded">
                                                {project.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                            <p className="text-sm text-slate-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {project.description}
                                            </p>
                                        </div>
                                        
                                        {/* Action Icon - Just Visual now */}
                                        <span 
                                          className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 ${isActive ? 'bg-cyan-500 text-black border-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                        >
                                            <ArrowUpRight size={16} strokeWidth={2.5} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* REFLECTION EFFECT */}
                        {isActive && (
                            <div className="absolute top-[105%] left-0 right-0 h-full opacity-40 pointer-events-none transform scale-y-[-1] mask-image-linear-gradient">
                                <div className="w-full h-full bg-gradient-to-t from-transparent via-slate-900/50 to-slate-900 rounded-2xl overflow-hidden blur-sm">
                                     {project.image && <img src={project.image} className="w-full h-full object-cover opacity-30" alt="" draggable="false" />}
                                </div>
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </div>

        {/* Controls - Dots Only */}
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
      
      <style>{`
        .mask-image-linear-gradient {
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%);
            mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%);
        }
      `}</style>
    </section>
  );
};
