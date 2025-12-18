
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Palette, Target } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'אתרים שממירים, לא רק יפים',
    desc: 'יופי זה לא מספיק. אני בונה מערכות שנועדו למכור. המטרה היא לא רק לגרוף מחמאות, אלא להפוך גולשים ללקוחות משלמים.'
  },
  {
    icon: Palette,
    title: 'עיצוב פסיכולוגי',
    desc: 'כל אלמנט באתר מתוכנן להשפיע על תת-המודע של הגולש. בחירת הצבעים, הטיפוגרפיה והאנימציות – הכל נועד ליצור אמון וסמכות.'
  },
  {
    icon: ShieldCheck,
    title: 'אחריות מלאה מא\' ועד ת\'',
    desc: 'אני הכתובת היחידה שלך – מהאפיון ועד הפיתוח. לך נשאר שקט נפשי להתעסק בעסק שלך בזמן שאני דואג לטכנולוגיה.'
  },
  {
    icon: Rocket,
    title: 'ביצועים ומהירות',
    desc: 'חווית משתמש חלקה היא קריטית להמרה. האתרים שלי נבנים בסטנדרטים הגבוהים ביותר כדי להבטיח טעינה מיידית.'
  }
];

export const WhyChooseMe: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 }, 
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden bg-[#020617]">
      {/* BACKGROUND: Deep Black/Gray Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
          {/* Subtle noise/texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-14 h-1.5 bg-cyan-500 mb-8 rounded-full shadow-none mx-auto lg:mx-0 lg:mr-0" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                  למה דווקא
                  <br />
                  <span className="relative inline-block text-cyan-400">
                    LEVI?
                    {/* Rounded underline */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500/50 rounded-full" />
                  </span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-sm mx-auto lg:mx-0 lg:mr-0">
                  בעולם שבו כולם נראים אותו דבר, אנחנו נותנים לך את היתרון הטכנולוגי והעסקי עם חותמת איכות בלתי מתפשרת.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Staggered ROUNDED Cards List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Rounded Card Container */}
                <div className="bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all duration-300">
                    
                    <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                        {/* Rounded Icon Box */}
                        <div className="w-14 h-14 flex items-center justify-center bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 rounded-2xl group-hover:text-white group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                            <reason.icon className="w-6 h-6" />
                        </div>

                        <div className="text-right flex-1">
                            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-slate-400 font-light leading-relaxed text-base group-hover:text-slate-300">
                                {reason.desc}
                            </p>
                        </div>
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
