import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Optimized: Only trigger update when crossing the threshold, not every pixel
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
            ? "bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-lg" 
            : "bg-transparent border-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-center relative z-10">
        
        {/* Logo */}
        <div 
          onClick={scrollToTop}
          className="flex items-center gap-4 cursor-pointer group"
        >
          {/* Icon Container */}
          <div className="relative flex items-center justify-center">
            {/* Simple static glow on hover instead of continuous pulse */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <Rocket className="text-cyan-400 w-10 h-10 relative z-10 transform group-hover:-rotate-45 transition-transform duration-300" />
          </div>

          {/* Text */}
          <div className="relative">
             <span className="text-4xl md:text-5xl font-black tracking-wider text-white group-hover:text-cyan-200 transition-colors duration-300">
                SHINI
             </span>
          </div>
        </div>

      </div>
    </header>
  );
};