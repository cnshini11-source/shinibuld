
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
    hidden: { opacity: 0, y: 30 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden bg-[#010206]">
      {/* SOLID BACKGROUND ONLY - NO DECORATIONS */}
      
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
                <div className="w-14 h-1.5 bg-cyan-500 mb-8 rounded-none shadow-none mx-auto lg:mx-0 lg:mr-0" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                  למה דווקא
                  <br />
                  <span className="relative inline-block text-cyan-400">
                    LEVI?
                    {/* Tech underline */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500/50" />
                  </span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-sm mx-auto lg:mx-0 lg:mr-0">
                  בעולם שבו כולם נראים אותו דבר, אנחנו נותנים לך את היתרון הטכנולוגי והעסקי עם חותמת איכות בלתי מתפשרת.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Staggered Cards List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 md:p-10 bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Tech Corner Accents */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-6 md:gap-10 items-start">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 90 }} // Mechanical rotation
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-8 h-8 md:w-10 md:h-10 bg-slate-950 flex items-center justify-center flex-shrink-0 border border-cyan-500/20 group-hover:border-cyan-500 transition-all duration-500"
                  >
                    <reason.icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  </motion.div>
                  
                  <div className="flex-1 text-right">
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-base md:text-lg font-light group-hover:text-slate-300 transition-colors">
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
