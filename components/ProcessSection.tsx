
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { 
  MessageCircle, 
  PenTool, 
  Zap, 
  Rocket
} from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'שיחת אפיון ופיצוח',
    desc: 'אנחנו צוללים לעומק העסק שלך. לא עוד שיחה שטחית, אלא ניתוח מדויק של קהל היעד, המתחרים והמסרים שיהפכו גולש אדיש ללקוח משלם. אנחנו מכינים את הקרקע להצלחה ומגדירים בדיוק מה המטרה העסקית של האתר.',
    icon: MessageCircle,
    color: 'text-blue-400',
    // Premium Halo & Border Styles
    premiumStyle: 'shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_60px_-5px_rgba(59,130,246,0.5)] border-blue-500/20 hover:border-blue-400/60',
    gradient: 'from-blue-500/20'
  },
  {
    id: '02',
    title: 'עיצוב וקופירייטינג',
    desc: 'עיצוב שמושך תשומת לב וטקסט שמוביל לפעולה. אנחנו בונים מסר ברור ומדויק שגורם לגולש להבין מהר, להרגיש בטוח – ולהשאיר פרטים. כל כפתור וכל מילה נועדו להביא תוצאות.',
    icon: PenTool,
    color: 'text-purple-400',
    // Premium Halo & Border Styles
    premiumStyle: 'shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_60px_-5px_rgba(168,85,247,0.5)] border-purple-500/20 hover:border-purple-400/60',
    gradient: 'from-purple-500/20'
  },
  {
    id: '03',
    title: 'פיתוח טכנולוגי',
    desc: 'פיתוח בקוד נקי ומהיר ללא פשרות. האתר שלך יעבוד חלק כמו אפליקציה, יתאים בצורה מושלמת לכל מסך (רספונסיביות מלאה) וידורג גבוה בגוגל בזכות ביצועים מהירים. אנחנו בונים נכס דיגיטלי יציב ואמין.',
    icon: Zap,
    color: 'text-yellow-400',
    // Premium Halo & Border Styles
    premiumStyle: 'shadow-[0_0_40px_-10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_60px_-5px_rgba(234,179,8,0.5)] border-yellow-500/20 hover:border-yellow-400/60',
    gradient: 'from-yellow-500/20'
  },
  {
    id: '04',
    title: 'עלייה לאוויר והדרכה',
    desc: 'רגע האמת. אנחנו מעלים את המערכת לאוויר, מבצעים בדיקות QA מקיפות לוודא שכל פיקסל במקום, ומציידים אותך בהדרכה מלאה: איך לנהל את האתר, איך לקרוא נתונים ואיך להתחיל לראות תוצאות בזמן אמת.',
    icon: Rocket,
    color: 'text-cyan-400',
    // Premium Halo & Border Styles
    premiumStyle: 'shadow-[0_0_40px_-10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_60px_-5px_rgba(6,182,212,0.5)] border-cyan-500/20 hover:border-cyan-400/60',
    gradient: 'from-cyan-500/20'
  }
];

interface CardProps {
  i: number;
  step: typeof steps[0];
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ 
  i, 
  step, 
  targetScale 
}) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // --- Animation Logic for "Strong Throw/Push" ---
  
  // 1. Scale: Shrink significantly to create distance feeling
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale * 0.85]);
  
  // 2. Opacity: Stay visible longer, then cut out abruptly
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  
  // 3. Y Position: STRONG negative value (-1500px).
  // This makes the card feel like it's being launched upwards as the new one arrives.
  const y = useTransform(scrollYProgress, [0, 1], [0, -1500]);

  return (
    // Reduced height from 90vh to 55vh to increase scroll speed/flow
    <div ref={container} className="h-[55vh] flex items-start justify-center sticky top-28">
      <motion.div 
        style={{ 
            scale,
            opacity,
            y
        }}
        className="relative flex flex-col w-full max-w-md origin-top"
      >
        {/* 
            CARD CONTAINER UPDATES:
            - Removed backdrop-blur-2xl (Heavy Performance Cost)
            - Changed to bg-[#020617]/95 (Deep Premium Black)
        */}
        <div className={`relative overflow-hidden rounded-[2rem] bg-[#020617]/95 border p-8 flex flex-col gap-6 transition-all duration-500 ${step.premiumStyle} group min-h-[500px] justify-between z-10`}>
            
            {/* Dynamic Hover Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            {/* Giant Number Background */}
            <div className="absolute -right-4 -bottom-10 text-[180px] font-black leading-none select-none pointer-events-none text-white/[0.03] z-0">
                {step.id}
            </div>

            <div className="relative z-10 flex flex-col items-center text-center h-full gap-6">
                
                {/* Tech Node - Connection point to the moving line */}
                <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] border-2 border-white absolute -top-10 left-1/2 -translate-x-1/2 z-20" />

                {/* Icon Box */}
                <div className="flex-shrink-0 mt-4">
                    <div className="relative">
                        <div className={`absolute inset-0 blur-2xl opacity-30 ${step.color.replace('text-', 'bg-')}`} />
                        <div className={`w-20 h-20 rounded-2xl bg-[#15151a]/50 border border-white/10 flex items-center justify-center ${step.color} shadow-lg relative z-10 backdrop-blur-md`}>
                            <step.icon size={36} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-50 transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed font-light">
                        {step.desc}
                    </p>
                </div>
            </div>

            {/* Top Shine Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

export const ProcessSection: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="bg-[#050508] relative">
      
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050508_100%)] opacity-80" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        
        {/* HEADER */}
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl"
          >
            פשוט, ברור, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">מביא תוצאות.</span>
          </motion.h2>
        </div>

        {/* STACKING CARDS CONTAINER */}
        <div className="relative flex flex-col items-center">
          
          {/* THE MOVING TECH LINE - Enhanced for attraction */}
          <div className="absolute top-0 bottom-0 w-[3px] bg-slate-800/80 left-1/2 -translate-x-1/2 z-0 overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.15)]">
             {/* Brighter, Faster Beam */}
             <motion.div 
               className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_30px_rgba(6,182,212,1)]"
               animate={{ top: ['-40%', '140%'] }}
               transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
             />
             {/* Consistent Core Glow */}
             <div className="absolute inset-0 bg-cyan-500/20" />
          </div>

          {steps.map((step, i) => {
            const targetScale = 1 - ((steps.length - 1 - i) * 0.05);
            return (
              <Card 
                key={i} 
                i={i} 
                step={step} 
                progress={scrollYProgress} 
                range={[i * 0.25, 1]} 
                targetScale={targetScale} 
              />
            );
          })}

          {/* --- NEW VISUAL CUBE / MACHINE BUTTON --- */}
          {/* Tighter spacing: mt-8 instead of mt-32 to feel connected to the flow */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-20 mt-8" 
          >
             <a 
               href="https://wa.me/972538227778" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative block"
             >
                {/* The Cube Container */}
                <div className="relative w-64 h-24 bg-black border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] group-hover:border-cyan-400 transition-all duration-500">
                    
                    {/* Animated Background Mesh */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-30" />
                    
                    {/* Scan Line Effect inside Button */}
                    <motion.div 
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-between px-6">
                        <div className="flex flex-col justify-center h-full">
                             <span className="text-xl font-black text-white tracking-tight group-hover:text-cyan-50 transition-colors">
                                בוא נבנה מכונה
                             </span>
                        </div>
                        
                        {/* Rocket Icon in circle */}
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                             <Rocket className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                    </div>
                </div>

                {/* Connecting Lines to Main Line */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[2px] h-10 bg-cyan-500/30" />
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_cyan]" />

             </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
