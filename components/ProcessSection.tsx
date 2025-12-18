
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Palette, 
  Globe, 
  Zap, 
  Activity,
  Search,
  CheckCircle2,
  Rocket,
  ArrowDown,
  ShieldCheck,
  CloudLightning
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
    title: 'אפיון וזיקוק - שנבין מה מניע את הלקוחות שלך',
    icon: Search,
    accent: '#06b6d4',
    desc: 'הכל מתחיל בלהבין מה באמת עובר ללקוח שלך בראש. אנחנו מזקקים את המסר שלך ככה שיהיה חד ופשוט, כזה שגורם לגולש להבין תוך שניות למה הוא חייב לעבוד דווקא איתך.',
  },
  {
    id: 'conversion',
    number: '02',
    title: 'תכנון ועיצוב המרות',
    icon: Palette,
    accent: '#a855f7',
    desc: 'אנחנו מתכננים את מבנה האתר כך שכל צבע, כותרת ומיקום של כפתור יובילו את הגולש בביטחון עד להשארת הפרטים. זהו עיצוב מקצועי שנועד לייצר אמון מיידי ולהפוך סקרנות למכירה.',
  },
  {
    id: 'envelope',
    number: '03',
    title: 'מעטפת טכנולוגית מלאה (הכל כלול)',
    icon: Globe,
    accent: '#3b82f6',
    desc: 'אפס התעסקות מצדך. אני דואג להכל: רכישת דומיין, אחסון בשרתים המהירים ביותר בעולם, אבטחת SSL וניהול טכני מלא. אתה מקבל מוצר מוגמר שעובד פיקס, בלי שום כאב ראש.',
  },
  {
    id: 'launch',
    number: '04',
    title: 'שיגור ואופטימיזציה',
    icon: Zap,
    accent: '#10b981',
    desc: 'מרגע שהאתר באוויר, אני מוודא שכל ליד טס אליך ישר לווצאפ. אנחנו עוקבים אחרי הביצועים ומשפרים את המערכת כדי לוודא שאתה מקבל את המקסימום מהנכס הדיגיטלי שלך.',
  }
];

const ProcessStep: React.FC<{ step: typeof steps[0], idx: number }> = ({ step, idx }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [80, 0, 0, -350]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.9, 1, 1, 0.7]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [15, 0, 0, -30]);

  const Icon = step.icon;

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity, scale, rotateX }}
      className="relative group will-change-transform py-2"
    >
      <div className="absolute left-1/2 -top-16 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-16 h-16 bg-slate-950 border border-white/20 flex items-center justify-center relative shadow-xl group-hover:scale-110 group-hover:border-cyan-500 transition-all duration-300 rounded-none transform rotate-45">
          <Icon size={28} className="text-white relative z-10 transform -rotate-45" />
        </div>
      </div>

      <div className="relative pt-12 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-[0.05] select-none pointer-events-none text-[12rem] font-mono font-black text-cyan-500 leading-none">
          {step.number}
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors px-2">
            {step.title}
          </h3>
          <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-light max-w-2xl mx-auto px-4">
            {step.desc}
          </p>
        </div>
      </div>

      {idx < steps.length - 1 && (
        <div className="mt-6 flex justify-center text-cyan-500/50">
          <ArrowDown size={24} strokeWidth={1.5} className="animate-pulse" />
        </div>
      )}
    </motion.div>
  );
};

export const ProcessSection: React.FC = () => {
  return (
    <section 
      id="process" 
      className="py-24 relative overflow-hidden bg-[#010206]"
    >
      {/* SOLID BACKGROUND ONLY */}
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-950/20 border border-cyan-500 text-cyan-400 font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
            >
                <Activity size={12} className="animate-pulse" />
                <span>Production Sequence v4.0</span>
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter"
            >
                הדרך <span className="text-cyan-500 font-black">שלנו</span>
            </motion.h2>
        </div>

        <div className="relative">
            {/* Central Data Beam */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cyan-500/30 -translate-x-1/2" />

            <div className="space-y-4 relative">
                {steps.map((step, idx) => (
                    <ProcessStep key={step.id} step={step} idx={idx} />
                ))}
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 pb-12 text-center relative flex flex-col items-center"
        >
            <div className="pt-12 w-full max-w-lg">
                <div className="relative bg-slate-900 border border-cyan-500/20 p-6 md:p-8 mb-6 group">
                    {/* Tech corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500" />

                    <div className="relative z-10">
                        <div className="mb-8">
                            <motion.div 
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-12 h-12 bg-cyan-500/10 border border-cyan-500 flex items-center justify-center mx-auto mb-4"
                            >
                                <ShieldCheck className="text-cyan-400 w-6 h-6" />
                            </motion.div>
                            <h4 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-2">
                                מעטפת <span className="text-cyan-400">360</span>
                            </h4>
                            <p className="text-slate-400 text-sm font-light max-w-xs mx-auto">
                                פתרון קצה לקצה שמשאיר אותך בראש שקט.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mb-8 text-right">
                            <div className="p-4 bg-black/40 border-r-2 border-cyan-500/30 flex items-start gap-4 transition-all hover:bg-white/[0.02]">
                                <div className="w-10 h-10 bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                                    <Globe className="text-cyan-400 w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-white font-black text-sm block mb-1">תשתית פרימיום (אחסון ודומיין)</span>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        אחסון בענן בשרתים המהירים ביותר בעולם יחד עם דומיין רשמי בבעלותך. הכל מנוהל טכנית כדי שהאתר שלך יטוס 24/7 ללא תקלות.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-black/40 border-r-2 border-blue-500/30 flex items-start gap-4 transition-all hover:bg-white/[0.02]">
                                <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                    <Zap className="text-blue-400 w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-white font-black text-sm block mb-1">חיבור לידים חכם ומידי</span>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        כל לקוח שמשאיר פרטים מוקפץ אליך ישירות לווצאפ תוך שניות. המערכת מחברת אותך ללקוח כשהוא עוד באתר, כדי שתוכל לסגור עסקאות בזמן אמת ולמקסם כל פנייה.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-black/40 border-r-2 border-[#25D366]/30 flex items-start gap-4 transition-all hover:bg-white/[0.02]">
                                <div className="w-10 h-10 bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/20">
                                    <WhatsAppIcon className="text-[#25D366] w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-white font-black text-sm block mb-1">תמיכה וליווי אישי בווצאפ</span>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        מענה ישיר לכל שאלה, שינוי או ייעוץ. בלי נציגים ובלי בוטים – אני כאן כדי לוודא שהאתר שלך תמיד בשיאו.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <a 
                                href="https://wa.me/972538227778" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative w-full px-10 py-4 bg-cyan-500 text-black font-black text-lg skew-x-[-10deg] transition-all duration-300 hover:bg-cyan-400 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                
                                <span className="flex items-center justify-center gap-2 relative z-10 skew-x-[10deg]">
                                    בוא נבנה מכונה
                                    <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};
