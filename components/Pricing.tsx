
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="contact" className="pt-8 pb-24 bg-slate-950 relative overflow-hidden flex items-center justify-center">
      {/* SOLID BACKGROUND ONLY */}
      
      <div className="w-full max-w-4xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 md:p-16 overflow-hidden"
        >
           {/* Static Inner Glow */}
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />

           <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
             הגיע הזמן
             <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
               לדבר תכלס.
             </span>
           </h2>
           
           <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed font-light">
             בלי טפסים, בלי בירוקרטיה ובלי המתנה.
             <br />
             לחצו על הכפתור ובואו נראה איך מזניקים את העסק שלכם.
           </p>

           <a
             href="https://wa.me/972538227778" 
             target="_blank"
             rel="noopener noreferrer"
             className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full text-xl font-black tracking-wide shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105 overflow-hidden border border-white/10"
           >
             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12 will-change-transform" />
             
             <span className="relative z-10">בוא נדבר על העסק שלך</span>
             <ArrowLeft className="w-6 h-6 relative z-10 group-hover:-translate-x-1 transition-transform" strokeWidth={3} />
           </a>

           <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-xs font-medium opacity-70">
             <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
             <span>זמינות מיידית בווצאפ</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
