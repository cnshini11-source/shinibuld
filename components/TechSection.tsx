
import React, { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Target, Activity, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

export const TechSection: React.FC = memo(() => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.95, 1]);
  const coreRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="tech" className="relative flex items-center justify-center overflow-hidden pt-2 pb-16 selection:bg-[#3FB6B1]/30" style={{ backgroundColor: '#010206' }}>
      
      {/* SOLID BACKGROUND ONLY */}

      {/* THE CENTRAL AI CORE */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-visible">
        <motion.div 
          style={{ rotate: coreRotate, scale }}
          className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px] will-change-transform"
        >
          {/* Sharp rings, no blurs */}
          <div className="absolute inset-0 border border-white/10 rounded-full border-dashed" />
          <div className="absolute inset-10 border border-[#3FB6B1]/20 rounded-full" />
          <div className="absolute inset-20 border border-white/10 rounded-full border-dotted" />
          
          {/* Orbital Nodes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#3FB6B1] rounded-none rotate-45" // Square nodes
              style={{ 
                top: `${50 + 48 * Math.cos(i * (Math.PI / 3))}%`,
                left: `${50 + 48 * Math.sin(i * (Math.PI / 3))}%`
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* CONTENT AREA */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center text-center will-change-transform"
      >
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-cyan-500" />
            <Cpu size={20} className="text-[#3FB6B1]" />
            <div className="h-px w-12 bg-cyan-500" />
          </motion.div>

          <h2 className="text-3xl md:text-6xl font-black mb-4 leading-[1.1] tracking-tighter text-white">
            הגולשים נכנסים. <br className="hidden md:block" /> 
            הגיע הזמן שהם <span className="text-[#3FB6B1] underline decoration-1 underline-offset-4">יהיו לקוחות</span>.
          </h2>
          
          <p className="text-lg md:text-xl font-bold tracking-widest uppercase text-[#3FB6B1] mb-1 font-mono">
            "SYSTEM ALERT: Potential Client Loss Detected"
          </p>
        </div>

        <div className="max-w-2xl space-y-5 mb-8 bg-slate-900/80 border border-cyan-500/20 p-6 rounded-none">
          <p className="text-lg md:text-2xl text-slate-100 font-light leading-relaxed">
            המערכת שלנו היא לא סתם עיצוב יפה. זהו <span className="text-cyan-400 font-bold">מוח דיגיטלי</span> שעובד עבורך 24/7.
            היא מנתחת את מהירות הגלילה, תנועות העכבר וזמן השהייה כדי להבין בדיוק מתי הגולש עומד לנטוש.
          </p>
          
          <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
            ברגע הזיהוי, ה-AI מקפיץ הצעה מותאמת אישית שפותרת את חסמי הקנייה של הגולש הספציפי.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full max-w-sm mb-10"
        >
          <a 
            href="https://wa.me/972538227778"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-full py-5 rounded-none skew-x-[-10deg] text-black font-black text-xl tracking-tighter transition-all duration-500 shadow-[0_0_0_1px_rgba(63,182,177,0.5)] hover:bg-[#3FB6B1] bg-[#3FB6B1]"
          >
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10 flex items-center gap-4 skew-x-[10deg]">
              בדיקה חכמה לאתר שלי
              <Target size={24} className="group-hover:rotate-12 transition-all duration-300" />
            </span>
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
           {[
             { icon: Activity, text: "זיהוי כוונות" },
             { icon: ShieldCheck, text: "תשתית מאובטחת" },
             { icon: Cpu, text: "אופטימיזציה" }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -3 }}
               className="flex items-center gap-2 border border-white/10 px-3 py-1 bg-slate-900"
             >
                <item.icon size={14} className="text-[#3FB6B1]" />
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.text}</span>
             </motion.div>
           ))}
        </div>
      </motion.div>
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] opacity-5">
         <Brain size={600} strokeWidth={0.5} className="text-[#3FB6B1]" />
      </div>

    </section>
  );
});
