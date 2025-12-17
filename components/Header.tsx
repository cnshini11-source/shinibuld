
import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
            ? "bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-lg" 
            : "bg-transparent border-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-center relative z-10 w-full">
        
        {/* Logo */}
        <div 
          onClick={scrollToTop}
          className="flex items-center gap-4 md:gap-5 cursor-pointer group select-none"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Rocket className="text-cyan-400 w-10 h-10 md:w-12 md:h-12 relative z-10 transform group-hover:-rotate-45 transition-transform duration-300" />
          </div>

          <div className="relative">
             <span className="text-4xl md:text-6xl font-black tracking-wider text-white group-hover:text-cyan-200 transition-colors duration-300">
                LEVI
             </span>
          </div>
        </div>

      </div>
    </header>
  );
};
