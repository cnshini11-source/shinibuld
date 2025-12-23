
import React, { useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { ChevronDown, Rocket, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Rounded data particles
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() > 0.5 ? 4 : 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.2 : 0.1, // Slower stagger on mobile
        delayChildren: isMobile ? 0.3 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
          // Slower, calmer duration and easing for mobile
          duration: isMobile ? 1.2 : 0.6, 
          ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#010308] to-[#020617] selection:bg-cyan-500/30">
      
      {/* --- TECH BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none perspective-[1000px] overflow-hidden">
        
        {/* 1. Base Static Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* 2. 3D Moving Floor Grid - REMOVED SCANNER LINE */}
        <div 
            className="absolute bottom-[-20%] left-[-50%] right-[-50%] h-[80vh] origin-bottom bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:60px_60px]"
            style={{ 
                transform: 'rotateX(70deg)',
                maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)'
            }} 
        >
             {/* Scanner line removed */}
        </div>

        {/* 3. Floating Digital Data Particles (Rounded) */}
        {particles.map((p) => (
            <motion.div
                key={p.id}
                className="absolute bg-cyan-400/40 rounded-full will-change-[opacity]"
                style={{
                    top: p.top,
                    left: p.left,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                }}
                animate={{ opacity: [0, 1, 0], y: [0, -20] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
            />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-center">
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: isMobile ? 1.5 : 0.6, ease: "easeOut" }} // Slower main element on mobile
                className="flex relative w-full h-[100px] lg:h-[700px] order-first lg:order-last items-center justify-center will-change-transform mt-0 lg:mt-0"
            >
                <div className="relative flex flex-col items-center justify-center lg:justify-end h-full w-full">
                    {/* ROBOT / SVG CONTAINER - aria-hidden for decorative SVG */}
                    <motion.div
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-0 lg:z-20 w-14 lg:w-48 mt-44 lg:mt-0 mb-0 lg:mb-32 will-change-transform transform-gpu opacity-40 lg:opacity-100"
                        aria-hidden="true" 
                    >
                        <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                            <defs>
                                <linearGradient id="bodyMetal" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#334155" />
                                    <stop offset="50%" stopColor="#94a3b8" />
                                    <stop offset="55%" stopColor="#cbd5e1" />
                                    <stop offset="100%" stopColor="#334155" />
                                </linearGradient>
                                <linearGradient id="finMetal" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#1e293b" />
                                    <stop offset="100%" stopColor="#475569" />
                                </linearGradient>
                                <linearGradient id="windowGrad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#06b6d4" />
                                    <stop offset="100%" stopColor="#0891b2" />
                                </linearGradient>
                                <linearGradient id="textChrome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="45%" stopColor="#a5f3fc" />
                                    <stop offset="50%" stopColor="#22d3ee" />
                                    <stop offset="55%" stopColor="#a5f3fc" />
                                    <stop offset="100%" stopColor="#ffffff" />
                                </linearGradient>
                            </defs>
                            <path d="M40 300 L0 380 L60 360 Z" fill="url(#finMetal)" stroke="#1e293b" strokeWidth="1" />
                            <path d="M160 300 L200 380 L140 360 Z" fill="url(#finMetal)" stroke="#1e293b" strokeWidth="1" />
                            <path d="M100 0 Q160 80 160 250 L160 350 L40 350 L40 250 Q40 80 100 0 Z" fill="url(#bodyMetal)" />
                            <path d="M100 0 L100 130 M100 230 L100 350" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                            <circle cx="100" cy="100" r="25" fill="#1e293b" stroke="#475569" strokeWidth="4" />
                            <circle cx="100" cy="100" r="20" fill="url(#windowGrad)" className="animate-pulse" />
                            <circle cx="108" cy="92" r="5" fill="white" opacity="0.6" />
                            <text x="100" y="190" textAnchor="middle" dominantBaseline="middle" fill="url(#textChrome)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" fontSize="26" fontWeight="900" letterSpacing="0.15em" transform="rotate(-90 100 190)" style={{ textShadow: "0px 0px 10px rgba(6,182,212,0.8)", fontFamily: "Arial, sans-serif" }}>LEVI</text>
                            <path d="M70 350 L60 370 L140 370 L130 350 Z" fill="#1e293b" />
                        </svg>
                         
                         {/* FLAME CONTAINER */}
                         <div className="absolute top-[98%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                             {/* Reduced blur on rocket flame */}
                             <motion.div animate={{ height: [30, 50, 20, 60, 30], opacity: [0.9, 1, 0.8] }} transition={{ duration: 0.15, repeat: Infinity }} className="w-4 lg:w-12 bg-white blur-[1px] rounded-full will-change-[height,opacity]" />
                             <motion.div animate={{ height: [60, 90, 50], opacity: [0.7, 0.9, 0.7] }} transition={{ duration: 0.2, repeat: Infinity }} className="absolute top-1 lg:top-2 w-5 lg:w-16 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent blur-[2px] rounded-full will-change-[height,opacity]" />
                        </div>

                        {/* --- TEXT REPLACING BASE --- */}
                        <div className="absolute top-[102%] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
                             <motion.div
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="text-[3rem] lg:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter whitespace-nowrap blur-[1px]"
                             >
                                 ממריאים...
                             </motion.div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center lg:items-start text-center lg:text-right order-last lg:order-first pb-10 lg:pb-0 relative z-20 -mt-36 lg:mt-0"
            >
                <motion.div variants={itemVariants} className="mb-4 lg:mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-black/40 backdrop-blur-none relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-cyan-100 text-sm font-bold tracking-wide uppercase">העתיד של האינטרנט כאן</span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="relative z-10 text-[2.75rem] sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                    אני לא בונה אתר
                    <br />
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-[textShine_4s_linear_infinite] bg-[length:200%_auto] will-change-[background-position]">
                        אני בונה מכונת לידים משומנת.
                    </span>
                </motion.h1>

                {/* --- TIGHT CHARISMATIC TEXT LAYOUT --- */}
                <motion.div 
                    variants={itemVariants} 
                    className="flex flex-col gap-2 mb-8 lg:mb-12 relative z-10 max-w-3xl"
                >
                    <p className="text-xl md:text-2xl font-medium text-white leading-tight">
                        דפי נחיתה ואתרים שעובדים ומביאים תכל׳ס לקוחות.
                    </p>
                    
                    <div className="flex flex-col text-lg md:text-2xl text-slate-300 font-light space-y-1">
                        <p>
                            עיצוב מדויק, חוויית משתמש מבוססת <span className="font-bold text-cyan-400">AI</span>
                        </p>
                        <p>
                            ומערכת שממירה לידים לכסף — <span className="font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">24/7</span>
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 relative z-10">
                    <a href="https://wa.me/972538227778" target="_blank" rel="noopener noreferrer" aria-label="בדיקת התאמה בחינם בווצאפ">
                        <Button variant="primary" className="text-xl md:text-2xl px-12 py-6 rounded-full h-auto shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] border border-cyan-400/50 group overflow-hidden">
                            <span className="flex items-center gap-4 relative z-10">
                                בדיקת התאמה בחינם
                                <span className="relative w-8 h-8 flex items-center justify-center">
                                    <Rocket className="w-8 h-8 absolute inset-0 transform -rotate-45 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500 ease-in-out text-white fill-white/20" />
                                </span>
                            </span>
                        </Button>
                    </a>
                </motion.div>
            </motion.div>

        </div>
      </div>

      <motion.div style={{ opacity }} animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50 will-change-transform hidden lg:block">
        <ChevronDown size={32} />
      </motion.div>

      <style>{`
        @keyframes textShine {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
};
