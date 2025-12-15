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
    
    // Set CSS variables for the spotlight effect
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Title */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
              >
                למה דווקא
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">
                  LEVI?
                </span>
              </motion.h2>
              <p className="text-slate-400 text-base md:text-lg">
                בעולם שבו כולם נראים אותו דבר, אנחנו נותנים לך את היתרון הטכנולוגי והעסקי.
              </p>
              <div className="mt-8 hidden lg:block">
                 <div className="w-16 h-1 bg-cyan-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Reasons List */}
          <div className="lg:w-2/3 grid gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                onMouseMove={handleMouseMove}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                {/* 1. Dynamic Mouse Spotlight Effect */}
                <div 
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.1), transparent 40%)`
                  }}
                />

                {/* 2. Static Hover Background Transition */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row gap-5 items-start">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20">
                    <reason.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{reason.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};