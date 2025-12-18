
import React from 'react';
import { motion } from 'framer-motion';

export const UXShowcase: React.FC = () => {
  return (
    <section id="ux" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-center lg:text-right">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6"
            >
              UX שמבין את
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                המשתמש
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-400 mb-8"
            >
              האלמנטים שלנו מגיבים, חיים ונושמים יחד עם הגולש. כל אינטראקציה מתוכננת בקפידה כדי ליצור חיבור רגשי ומקצועי.
            </motion.p>
          </div>

          <div className="flex-1 relative h-[500px] w-full flex items-center justify-center">
             {/* Abstract layered cards - Removed backdrop-blur */}
             {[0, 1, 2].map((i) => (
               <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 20, z: -100 }}
                whileInView={{ 
                  opacity: 1 - i * 0.2, 
                  y: i * -40, 
                  x: i * 20,
                  rotateX: 10,
                  scale: 1 - i * 0.05
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ 
                  y: (i * -40) - 20, 
                  rotateX: 0, 
                  boxShadow: "0 20px 50px rgba(6,182,212,0.3)" 
                }}
                className="absolute w-72 md:w-96 h-64 bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
                style={{ zIndex: 10 - i }}
               >
                 <div className="flex justify-between items-center">
                   <div className="w-10 h-10 rounded-full bg-white/10" />
                   <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                 </div>
                 <div className="space-y-3">
                   <div className="h-4 bg-white/10 rounded w-3/4" />
                   <div className="h-4 bg-white/5 rounded w-1/2" />
                 </div>
                 <div className="flex gap-2 mt-4">
                   <div className="h-2 bg-cyan-500/50 rounded-full w-full" />
                   <div className="h-2 bg-purple-500/50 rounded-full w-2/3" />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
