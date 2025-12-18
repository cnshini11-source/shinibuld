
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Palette, 
  Globe, 
  Zap, 
  Activity,
  Search,
  Rocket,
  ShieldCheck,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.433 5.625 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const steps = [
  {
    id: 'discovery',
    number: '01',
    title: 'מבינים את העסק',
    icon: Search,
    desc: 'אנחנו לא מתחילים לעצב סתם. אנחנו יושבים יחד, מנתחים מי הלקוחות שלך, מה כואב להם ואיך אתה פותר להם את הבעיה. המטרה: ליצור מסר חד וברור שגורם ללקוח להבין תוך 3 שניות שאתה הבחירה היחידה עבורו.',
  },
  {
    id: 'conversion',
    number: '02',
    title: 'עיצוב שמוכר',
    icon: Palette,
    desc: 'יופי זה חשוב, אבל מכירות זה העיקר. אנחנו מעצבים את האתר בצורה פסיכולוגית שמכוונת את העין של הלקוח. הצבעים, הכפתורים והתמונות - הכל ממוקם בדיוק במקום שיגרום לו ללחוץ, להשאיר פרטים ולקנות.',
  },
  {
    id: 'envelope',
    number: '03',
    title: 'בונים את המנוע',
    icon: Globe,
    desc: 'מתחת למכסה המנוע, אנחנו בונים מפלצת. האתר שלך יעלה מהר בטירוף, יהיה מאובטח ברמה הכי גבוהה ויעבוד חלק מכל טלפון ומחשב. אנחנו כותבים קוד נקי שגוגל אוהב, מה שמבטיח לך יתרון על המתחרים.',
  },
  {
    id: 'launch',
    number: '04',
    title: 'באוויר ובזרימה',
    icon: Zap,
    desc: 'השקה היא רק ההתחלה. אנחנו מחברים את האתר לוואטסאפ האישי שלך, דואגים שכל פנייה תגיע אליך מיידית, ומוודאים שהמערכת עובדת כמו שעון שווייצרי 24/7 ומזרימה לך לקוחות גם כשאתה ישן.',
  }
];

const ProcessStep: React.FC<{ step: typeof steps[0], idx: number }> = ({ step, idx }) => {
  const Icon = step.icon;

  return (
    <div className="flex flex-col items-center justify-center w-full relative mb-24 z-10 group">
        
        {/* CENTER ICON NODE */}
        <div className="relative z-20">
            {/* Glow effect around node */}
            <div className="absolute inset-0 bg-cyan-500 blur-[25px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Node Container */}
            <div className="w-20 h-20 flex items-center justify-center bg-[#020617] border-2 border-cyan-500/40 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.15)] relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-cyan-400">
                <Icon size={32} className="text-cyan-400 group-hover:text-white transition-colors duration-300" />
            </div>
        </div>

        {/* Number Badge - "Glued" to site below icon */}
        <div className="relative z-10 -mt-2 mb-4">
             <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-600 to-transparent font-mono opacity-60 group-hover:opacity-100 group-hover:from-cyan-500/60 transition-all duration-500 select-none">
                {step.number}
             </span>
        </div>

        {/* CONTENT (Centered) */}
        <div className="relative text-center max-w-3xl px-6 z-20">
            {/* Soft Background Mask behind text */}
            <div className="absolute inset-0 bg-black/90 blur-xl rounded-full -z-10 scale-110" />

            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                {step.title}
            </h3>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light group-hover:text-white transition-colors drop-shadow-md">
                {step.desc}
            </p>
        </div>
    </div>
  );
};

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      id="process" 
      // Reduced top padding (pt-0) to close gap with previous section
      className="pb-24 pt-0 relative overflow-hidden bg-black" 
    >
      {/* BACKGROUND: Dark with Glowing Center */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black" />
          
          {/* Central Glow Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-cyan-900/10 blur-[100px] rounded-full" />

          {/* Ghost Tech Grid */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
            }}
          />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header with margin-top to separate from previous section slightly despite pt-0 */}
        <div className="text-center mb-16 mt-16">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/20 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-6 rounded-full"
            >
                <Activity size={12} className="animate-pulse" />
                <span>Execution_Protocol</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white tracking-tight"
            >
                הדרך <span className="text-cyan-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">שלנו</span>
            </motion.h2>
        </div>

        <div className="relative">
            {/* CENTRAL LINE (Z-0: Behind everything) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 -translate-x-1/2 z-0" />
            
            {/* Active Line (Animated) */}
            <motion.div 
                style={{ scaleY, transformOrigin: 'top' }}
                className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 -translate-x-1/2 z-0 shadow-[0_0_15px_cyan]"
            />

            {/* Steps Container (Z-10: Above the line) */}
            <div className="relative z-10 flex flex-col items-center"> 
                {steps.map((step, idx) => (
                    <ProcessStep key={step.id} step={step} idx={idx} />
                ))}
            </div>
        </div>

        {/* 360 Section - Compact Power Module */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center relative z-20"
        >
            <div className="relative group max-w-2xl w-full">
                
                {/* Tech Glow Behind */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl" />
                
                {/* The "Power Module" Card */}
                <div className="relative bg-black border border-cyan-500 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-stretch">
                    
                    {/* Left Decorative Strip */}
                    <div className="w-full md:w-2 bg-cyan-500 h-2 md:h-auto shadow-[0_0_10px_cyan]" />

                    <div className="p-8 md:p-10 flex-1 flex flex-col md:flex-row items-center gap-8 text-center md:text-right">
                        
                        {/* Title Section */}
                        <div className="flex-1">
                            <h4 className="text-3xl font-black text-white tracking-tight mb-2 uppercase italic">
                                מעטפת <span className="text-cyan-500">360</span>
                            </h4>
                            <p className="text-slate-400 text-sm font-light leading-relaxed">
                                אנחנו לא משאירים קצוות פתוחים. חבילת ה-Premium שלנו כוללת את כל מה שהעסק צריך כדי לרוץ קדימה בלי דאגות טכניות.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full md:w-[1px] h-[1px] md:h-16 bg-white/10" />

                        {/* Quick Features Grid */}
                        <div className="grid grid-cols-2 gap-4 text-xs font-bold text-white">
                             <div className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                                <ShieldCheck size={14} className="text-blue-400" />
                                <span>אחסון ודומיין</span>
                             </div>
                             <div className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                                <Smartphone size={14} className="text-purple-400" />
                                <span>תאימות נייד</span>
                             </div>
                             <div className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                                <WhatsAppIcon className="w-3.5 h-3.5 text-green-400" />
                                <span>חיבור לוואטסאפ</span>
                             </div>
                             <div className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                                <CheckCircle2 size={14} className="text-cyan-400" />
                                <span>תחזוקה מלאה</span>
                             </div>
                        </div>

                        {/* Action */}
                        <a 
                            href="https://wa.me/972538227778" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center bg-cyan-500 text-black hover:bg-white transition-colors rounded-lg shadow-[0_0_15px_cyan]"
                        >
                            <Rocket size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};
