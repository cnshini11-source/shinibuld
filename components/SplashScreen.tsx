
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Super fast loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Large increments for speed
        const diff = Math.random() * 40 + 10;
        return Math.min(prev + diff, 100);
      });
    }, 30); // Very fast interval

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Almost immediate exit
      const timeout = setTimeout(onComplete, 200);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#010206] flex flex-col items-center justify-center font-mono overflow-hidden"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%", 
        transition: { 
          duration: 0.4, // Fast shutter exit
          ease: [0.76, 0, 0.24, 1] 
        } 
      }}
    >
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        
        {/* LOGO CONTAINER */}
        <div className="relative w-32 h-32">
          {/* 1. Background Outline (Empty State) */}
          <Rocket className="w-full h-full text-slate-800 absolute inset-0" strokeWidth={1.5} />
          
          {/* 2. Filled Version (Masked by Progress) */}
          <div 
            className="absolute inset-0 overflow-hidden transition-all duration-100 ease-out"
            style={{ height: `${progress}%`, marginTop: `${100 - progress}%` }} // Fill from bottom
          >
             {/* We translate the icon up to counteract the container moving down, keeping icon static */}
             <div style={{ transform: `translateY(-${100 - progress}%)`, height: '100%', width: '100%' }} className="w-32 h-32">
                <Rocket className="w-32 h-32 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" strokeWidth={1.5} />
             </div>
          </div>

          {/* Pulse Effect at 100% */}
          {progress === 100 && (
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5, repeat: Infinity }} // Faster pulse
                className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl z-[-1]"
            />
          )}
        </div>

        {/* TEXT & DATA */}
        <div className="flex flex-col items-center gap-2 h-16">
            <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-white tracking-tighter">
                    {Math.round(progress)}
                </span>
                <span className="text-xl text-cyan-500 mb-1 font-bold">%</span>
            </div>
            
            <div className="text-xs tracking-[0.2em] text-slate-500 uppercase">
                {progress < 30 && "System Boot"}
                {progress >= 30 && progress < 70 && "Loading Modules"}
                {progress >= 70 && progress < 100 && "Optimizing AI"}
                {progress === 100 && "Ready to Launch"}
            </div>
        </div>
      </div>

      {/* Bottom Scanner Line (Visual decorative element for the shutter) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-900 via-cyan-400 to-cyan-900 shadow-[0_0_20px_rgba(6,182,212,0.5)]" />

    </motion.div>
  );
};
