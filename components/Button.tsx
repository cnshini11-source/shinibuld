import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden group border";
  
  const variants = {
    primary: "bg-cyan-500 border-cyan-400 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]",
    secondary: "bg-white/5 backdrop-blur-md text-white border-white/10 hover:bg-white/10 hover:border-white/20",
    outline: "bg-transparent border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Premium Shine & Glow Elements */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-white/10 blur-md scale-110" />
        )}
      </div>
    </motion.button>
  );
};