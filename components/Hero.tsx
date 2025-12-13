import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from './Button';
import { ChevronDown, ArrowLeft, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse parallax simulation
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Generate random stars for the background
  const stars = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1, // 1px to 3px
    color: Math.random() > 0.7 ? 'bg-cyan-400' : (Math.random() > 0.5 ? 'bg-purple-400' : 'bg-white'),
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
    moveRange: Math.random() * 20 - 10
  })), []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Dynamic Background Grid & Stars */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Animated Stars Layer */}
        {stars.map((star) => (
            <motion.div
                key={star.id}
                className={`absolute rounded-full ${star.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: star.size,
                    height: star.size,
                    opacity: 0.2
                }}
                animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                    y: [0, star.moveRange, 0],
                    x: [0, star.moveRange / 2, 0]
                }}
                transition={{
                    duration: star.duration,
                    repeat: Infinity,
                    delay: star.delay,
                    ease: "easeInOut"
                }}
            />
        ))}

        {/* Animated Orbs */}
        <motion.div 
          style={{ x: mouseX, y: mouseY }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" 
        />
        <motion.div 
          style={{ x: useTransform(mouseX, val => val * -1), y: useTransform(mouseY, val => val * -1) }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm relative z-20"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-bold tracking-wide uppercase">העתיד של האינטרנט כאן</span>
        </motion.div>

        {/* Main Title Wrapper */}
        <div className="relative">
            {/* Main Title Text */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 leading-tight"
            >
              אתרים ודפי נחיתה
              <br />
              <span className="text-cyan-400 inline-block relative">
                  שמייצרים תוצאות.
                  {/* Subtle underline decoration */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 right-0 h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50"
                  />
              </span>
            </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed relative z-10"
        >
          SHINI בונה דפי נחיתה ואתרי תדמית חכמים עם אנימציות מתקדמות,
          חוויית משתמש מבוססת AI ומשפך שיווקי שעובד 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 relative z-10"
        >
          <Button variant="primary">
            התחל פרויקט <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
          <Button variant="secondary">
            איך זה עובד?
          </Button>
        </motion.div>

         {/* CYBER ROCKET ELEMENT - Re-positioned Strategically to Bottom Right of Content */}
         <motion.div 
                className="absolute right-0 md:-right-24 bottom-20 md:bottom-0 pointer-events-none select-none z-0 opacity-90"
                initial={{ opacity: 0, y: 100, x: 50 }}
                animate={{ opacity: 0.9, y: 0, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                {/* Floating Animation Container */}
                <motion.div
                    animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                >
                    {/* The Rocket Icon */}
                    <div className="relative z-10 transform -rotate-45">
                        <Rocket className="w-32 h-32 md:w-64 md:h-64 text-white stroke-[1.5] drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]" />
                        
                        {/* Internal Glow */}
                        <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />
                    </div>

                    {/* Thrust / Engine Exhaust */}
                    <motion.div
                        className="absolute top-24 left-6 w-24 h-48 bg-gradient-to-t from-transparent via-purple-500/60 to-cyan-400/90 blur-2xl rounded-full -z-10 transform -rotate-45 origin-top"
                        animate={{ height: ['120%', '160%', '120%'], opacity: [0.6, 0.9, 0.6] }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                    />

                    {/* Tech HUD Ring 1 */}
                    <motion.div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-500/10 rounded-full border-dashed -z-20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Tech HUD Ring 2 (Counter rotate) */}
                    <motion.div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-500/10 rounded-full border-dotted -z-20"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};