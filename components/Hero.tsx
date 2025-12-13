import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { ChevronDown, ArrowLeft, Rocket, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yRange = useTransform(scrollY, [0, 500], [0, 200]);

  // Generate stars once to avoid re-calculation on render (Performance Optimization)
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      size: Math.random() > 0.8 ? 2 : 1, // Mostly small dots, occasional larger stars
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-cyan-500/30">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0">
        
        {/* 1. Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* 2. Twinkling Stars (Lightweight CSS Animation) */}
        {stars.map((star) => (
            <div
                key={star.id}
                className="absolute bg-white rounded-full animate-[twinkle_ease-in-out_infinite]"
                style={{
                    top: star.top,
                    left: star.left,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: 0, // Start invisible, animation handles opacity
                    animationDelay: `${star.delay}s`,
                    animationDuration: `${star.duration}s`
                }}
            />
        ))}

        {/* 3. Ambient Color Glows (Static/CSS Pulse) */}
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4s]" />

        {/* 4. Scanner Line (CSS Animation) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent w-full animate-[scan_8s_ease-in-out_infinite] opacity-50 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

        {/* 5. Floating Particles (Lightweight DOM elements) */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                initial={{ 
                    x: Math.random() * 100 + "vw", 
                    y: Math.random() * 100 + "vh", 
                    opacity: Math.random() 
                }}
                animate={{ 
                    y: [null, Math.random() * -50],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 5
                }}
            />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge - Tech Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/50 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] relative group overflow-hidden"
        >
          {/* Shine effect passing through badge */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-cyan-100 text-sm font-bold tracking-wide uppercase">העתיד של האינטרנט כאן</span>
        </motion.div>

        {/* Main Title with Animated Gradient */}
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
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed relative z-10 font-light"
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

      {/* Simplified Rocket Element - Floating Animation */}
      <motion.div 
            style={{ y: yRange }}
            className="absolute right-4 bottom-24 md:right-10 md:bottom-10 pointer-events-none select-none z-20 opacity-90"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="relative">
                    {/* Rocket Glow */}
                    <div className="absolute inset-0 bg-cyan-500/30 blur-2xl rounded-full" />
                    <div className="transform -rotate-45 relative z-10">
                        <Rocket className="w-24 h-24 md:w-48 md:h-48 text-white stroke-[1.5] drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]" />
                    </div>
                </div>
            </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Inline Styles for Custom Keyframe Animations */}
      <style>{`
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        @keyframes textShine {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.8; transform: scale(1.2); box-shadow: 0 0 4px rgba(255, 255, 255, 0.4); }
            100% { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </div>
  );
};