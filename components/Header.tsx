import React, { useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) {
        setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
        setIsScrolled(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3" 
            : "bg-transparent border-transparent backdrop-blur-none py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center relative z-10 w-full">
        
        {/* Logo */}
        <motion.div 
          onClick={scrollToTop}
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 cursor-pointer group select-none relative"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Rocket className="text-cyan-400 w-10 h-10 md:w-12 md:h-12 relative z-10 transform group-hover:-rotate-45 group-active:scale-90 transition-all duration-500 ease-out" />
          </div>

          <div className="relative overflow-hidden">
             <span className="text-4xl md:text-6xl font-black tracking-tighter text-white group-hover:text-cyan-100 transition-colors duration-500 relative block">
                LEVI
                {/* Text Shine Effect */}
                <motion.span 
                  initial={{ x: '-150%' }}
                  animate={{ x: '150%' }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
             </span>
             {/* Subtle underline on hover */}
             <motion.div 
                className="absolute bottom-0 right-0 h-0.5 bg-cyan-500/50 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
             />
          </div>
        </motion.div>

      </div>
    </header>
  );
};