
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-700 flex items-center justify-center gap-2 relative overflow-hidden group border";
  
  const variants = {
    primary: "bg-cyan-500 border-cyan-400 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_45px_rgba(6,182,212,0.5)]",
    secondary: "bg-white/5 backdrop-blur-md text-white border-white/10 hover:bg-white/10 hover:border-white/20",
    outline: "bg-transparent border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 tracking-wide">{children}</span>
      
      {/* Premium Shine & Internal Light Elements */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s] ease-in-out" />
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-white/5 blur-xl scale-150" />
        )}
      </div>
    </motion.button>
  );
};
