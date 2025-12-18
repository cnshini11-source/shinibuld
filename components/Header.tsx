
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
            ? "bg-[#020617] border-b border-white/5 shadow-2xl py-3" 
            : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center relative z-10 w-full">
        
        {/* Logo Section */}
        <div 
          onClick={scrollToTop}
          className="flex items-center gap-4 cursor-pointer select-none relative group"
        >
          <div className="relative flex items-center justify-center">
            {/* Removed background circle as requested */}
            <Rocket className="text-cyan-400 w-10 h-10 md:w-12 md:h-12 relative z-10 transition-transform duration-500 ease-in-out group-hover:-rotate-45" />
          </div>

          <div className="relative overflow-hidden py-1">
             <span className="text-4xl md:text-6xl font-black tracking-tighter text-white relative block">
                LEVI
             </span>
             {/* Static underline */}
             <div className="absolute bottom-0 right-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>
        </div>

      </div>
    </header>
  );
};
