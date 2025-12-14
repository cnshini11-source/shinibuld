import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { ChevronDown, ArrowLeft, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Generate stars with memoization
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      size: Math.random() > 0.8 ? 2 : 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#010206] selection:bg-cyan-500/30">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Stars */}
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

        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-1000 transform-gpu" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[4s] transform-gpu" />

        {/* Scanner Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent w-full animate-[scan_8s_ease-in-out_infinite] opacity-0 shadow-[0_0_15px_rgba(6,182,212,0.3)] will-change-transform" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* TEXT CONTENT (Right Side in RTL) */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-right order-1">
                
                {/* Badge */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/50 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] relative group overflow-hidden"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-cyan-100 text-sm font-bold tracking-wide uppercase">העתיד של האינטרנט כאן</span>
                </motion.div>

                {/* Main Title */}
                <div className="relative">
                    <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight"
                    >
                    אתרים ודפי נחיתה
                    <br />
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-[textShine_4s_linear_infinite] bg-[length:200%_auto]">
                        שמייצרים תוצאות.
                    </span>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed relative z-10 font-light"
                >
                SHINI בונה מערכות חכמות עם חוויית משתמש מבוססת <span className="font-bold text-white">AI</span> ומשפך שיווקי שעובד 24/7.
                </motion.p>

                {/* CTAs */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 relative z-10"
                >
                <a href="https://wa.me/972538227778" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">
                        בוא נדבר <ArrowLeft className="w-5 h-5 mr-2" />
                    </Button>
                </a>
                <Button variant="secondary">
                    איך זה עובד?
                </Button>
                </motion.div>
            </div>

            {/* ROCKET ANIMATION (Left Side in RTL) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:flex relative w-full h-[700px] order-2 items-center justify-center"
            >
                <div className="relative flex flex-col items-center justify-end h-full w-full">
                    
                    {/* Rocket Wrapper - Floating High */}
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-20 w-48 mb-32" // Increased bottom margin for distance
                    >
                        {/* Custom Realistic Rocket SVG */}
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
                            </defs>
                            
                            {/* Left Fin */}
                            <path d="M40 300 L0 380 L60 360 Z" fill="url(#finMetal)" stroke="#1e293b" strokeWidth="1" />
                            {/* Right Fin */}
                            <path d="M160 300 L200 380 L140 360 Z" fill="url(#finMetal)" stroke="#1e293b" strokeWidth="1" />
                            
                            {/* Main Body */}
                            <path d="M100 0 Q160 80 160 250 L160 350 L40 350 L40 250 Q40 80 100 0 Z" fill="url(#bodyMetal)" />
                            
                            {/* Vertical Stripe/Detail */}
                            <path d="M100 0 L100 350" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                            
                            {/* Cockpit Window */}
                            <circle cx="100" cy="100" r="25" fill="#1e293b" stroke="#475569" strokeWidth="4" />
                            <circle cx="100" cy="100" r="20" fill="url(#windowGrad)" className="animate-pulse" />
                            <circle cx="108" cy="92" r="5" fill="white" opacity="0.6" />

                            {/* Engine Nozzle */}
                            <path d="M70 350 L60 370 L140 370 L130 350 Z" fill="#1e293b" />
                        </svg>

                         {/* ENGINE FIRE - Long Trail */}
                         <div className="absolute top-[98%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                             {/* Core White Hot */}
                             <motion.div 
                                animate={{ height: [60, 80, 50, 90, 60], opacity: [0.9, 1, 0.8] }}
                                transition={{ duration: 0.15, repeat: Infinity }}
                                className="w-12 bg-white blur-[4px] rounded-full"
                             />
                             {/* Middle Orange */}
                             <motion.div 
                                animate={{ height: [150, 180, 140], opacity: [0.7, 0.9, 0.7] }}
                                transition={{ duration: 0.2, repeat: Infinity }}
                                className="absolute top-2 w-16 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent blur-[8px] rounded-full"
                             />
                             {/* Outer Glow */}
                             <motion.div 
                                animate={{ height: [200, 240, 190], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 0.3, repeat: Infinity }}
                                className="absolute top-4 w-24 bg-gradient-to-b from-orange-600/50 to-transparent blur-[20px] rounded-full"
                             />
                        </div>
                    </motion.div>

                    {/* Launchpad / Docking Station - Pushed to Bottom */}
                    <div className="absolute bottom-[-40px] z-0 w-[500px] h-32 flex justify-center perspective-1000">
                        {/* Main Platform Ring */}
                        <div className="relative w-80 h-20">
                             <div className="absolute inset-0 bg-slate-900 border-2 border-cyan-900/50 rounded-[100%] shadow-[0_0_50px_rgba(6,182,212,0.1)] overflow-hidden">
                                  {/* Grid on Platform */}
                                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                             </div>
                             {/* Inner Ring */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-slate-950 border border-cyan-500/30 rounded-[100%] shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]" />
                        </div>
                        
                        {/* Mist/Steam on the ground */}
                        <div className="absolute bottom-10 w-full h-20 bg-gradient-to-t from-cyan-900/20 to-transparent blur-xl" />
                    </div>

                    {/* Overlapping Text */}
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative z-30 bottom-16 text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-transparent tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                    >
                        ממריאים...
                    </motion.h2>

                </div>
            </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* CSS Styles */}
      <style>{`
        @keyframes scan {
            0% { transform: translateY(0vh); opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes textShine {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.8; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.5); }
        }
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </div>
  );
};