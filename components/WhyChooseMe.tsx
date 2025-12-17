import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Palette, Target } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'אתרים שממירים, לא רק יפים',
    desc: 'יופי זה לא מספיק. אני בונה מערכות שנועדו למכור. המטרה היא לא רק לגרוף מחמאות, אלא להפוך גולשים ללקוחות משלמים בעזרת מבנה חכם ומניע לפעולה.'
  },
  {
    icon: Palette,
    title: 'עיצוב פסיכולוגי',
    desc: 'כל אלמנט באתר מתוכנן להשפיע על תת-המודע של הגולש. בחירת הצבעים, הטיפוגרפיה והאנימציות – הכל נועד ליצור אמון, סמכות ודחף לפעולה.'
  },
  {
    icon: ShieldCheck,
    title: 'אחריות מלאה מא\' ועד ת\'',
    desc: 'אני לא משאיר אותך לבד. אני הכתובת היחידה שלך – מהאפיון הראשוני ועד העיצוב והפיתוח. לך נשאר שקט נפשי להתעסק בעסק שלך.'
  },
  {
    icon: Rocket,
    title: 'ביצועים ומהירות',
    desc: 'חווית משתמש חלקה היא קריטית להמרה. האתרים שלי נבנים בסטנדרטים הגבוהים ביותר כדי להבטיח טעינה מיידית וזרימה ללא מעצורים.'
  }
];

export const WhyChooseMe: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-32 bg-[#010206] relative overflow-hidden">
      {/* Integrated Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Cyber Grid - Kept as requested */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
        
        {/* Subtle Radial Glow that matches the site's dark palette */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-cyan-900/5 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        
        {/* Fine Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Header Section */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-12 h-1 bg-cyan-500 mb-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] mx-auto lg:mx-0 lg:mr-0" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                  למה דווקא
                  <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-blue-500">
                    LEVI?
                    <motion.span 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -inset-2 blur-3xl bg-cyan-500/5 -z-10 rounded-full"
                    />
                  </span>
                </h2>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light max-w-sm mx-auto lg:mx-0 lg:mr-0">
                  בעולם שבו כולם נראים אותו דבר, אנחנו נותנים לך את היתרון הטכנולוגי והעסקי עם חותמת איכות בלתי מתפשרת.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Optimized Cards List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-2/3 grid gap-4 md:gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseMove={handleMouseMove}
                className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900/20 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-500 hover:border-cyan-500/20 hover:bg-slate-900/40"
              >
                {/* Dynamic Spotlight Effect */}
                <div 
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.05), transparent 40%)`
                  }}
                />

                <div className="relative z-10 flex flex-col sm:flex-row gap-5 md:gap-8 items-start">
                  {/* Smaller, sleeker Icons for better mobile matching */}
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-slate-950/80 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-500"
                  >
                    <reason.icon className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </motion.div>
                  
                  <div className="flex-1 text-right">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-cyan-50 transition-colors tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light group-hover:text-slate-300 transition-colors">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};