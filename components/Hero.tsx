
import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { ChevronDown, Rocket, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      size: Math.random() > 0.8 ? 2 : 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#010206] selection:bg-cyan-500/30">
      
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {stars.map((star) => (
            <div
                key={star.id}
                className="absolute bg-white rounded-full will-change-[opacity,transform]"
                style={{
                    top: star.top,
                    left: star.left,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: 0,
                    animation: `twinkle ${star.duration}s ease-in-out infinite`,
                    animationDelay: `${star.delay}s`
                }}
            />
        ))}

        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[80px] mix-blend-screen transform-gpu" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-900/10 rounded-full blur-[80px] mix-blend-screen transform-gpu" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-center">
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex relative w-full h-[100px] lg:h-[700px] order-first lg:order-last items-center justify-center will-change-transform mt-0 lg:mt-0"
            >
                <div className="relative flex flex-col items-center justify-center lg:justify-end h-full w-full">
                    <motion.div
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-0 lg:z-20 w-14 lg:w-48 mt-44 lg:mt-0 mb-0 lg:mb-32 will-change-transform transform-gpu opacity-40 lg:opacity-100" 
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
                         <div className="absolute top-[98%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                             <motion.div animate={{ height: [30, 50, 20, 60, 30], opacity: [0.9, 1, 0.8] }} transition={{ duration: 0.15, repeat: Infinity }} className="w-4 lg:w-12 bg-white blur-[2px] lg:blur-[4px] rounded-full will-change-[height,opacity]" />
                             <motion.div animate={{ height: [60, 90, 50], opacity: [0.7, 0.9, 0.7] }} transition={{ duration: 0.2, repeat: Infinity }} className="absolute top-1 lg:top-2 w-5 lg:w-16 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent blur-[4px] lg:blur-[8px] rounded-full will-change-[height,opacity]" />
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
                <motion.div variants={itemVariants} className="mb-4 lg:mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/80 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
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

                <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-3xl mb-8 lg:mb-12 leading-relaxed relative z-10 font-light px-4 lg:px-0 bg-slate-950/30 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-xl">
                    דפי נחיתה ואתרי תדמית חכמים עם אנימציות מתקדמות, <span className="font-bold text-white">AI מובנה</span> ומשפך שיווקי מדויק שמייצר לידים ולקוחות באופן אוטומטי – 24/7.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 relative z-10">
                    <a href="https://wa.me/972538227778" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" className="text-xl md:text-2xl px-12 py-6 rounded-full h-auto shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] border border-cyan-400/20 group overflow-hidden">
                            <span className="flex items-center gap-4 relative z-10">
                                בוא נדבר
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
        @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.8; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </div>
  );
};
