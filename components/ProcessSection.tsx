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
  Server,
  CloudLightning,
  BellRing,
  MessageCircle
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
  const filter = useTransform(scrollYProgress, [0.7, 1], ["blur(0px)", "blur(10px)"]);

  const Icon = step.icon;

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity, scale, rotateX, filter }}
      className="relative group will-change-transform py-2"
    >
      <div className="absolute left-1/2 -top-16 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center relative shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity" style={{ backgroundColor: step.accent }} />
          <Icon size={28} className="text-white relative z-10" style={{ filter: `drop-shadow(0 0 10px ${step.accent})` }} />
        </div>
      </div>

      <div className="relative pt-12 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-[0.03] select-none pointer-events-none text-[12rem] font-black text-white leading-none">
          {step.number}
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors px-2">
            {step.title}
          </h3>
          <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-light max-w-2xl mx-auto px-4">
            {step.desc}
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold tracking-widest uppercase">
              <CheckCircle2 size={14} className="text-cyan-500" />
              <span>ניהול מלא</span>
            </div>
            <div className="h-px w-8 bg-white/5" />
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold tracking-widest uppercase">
              <CheckCircle2 size={14} className="text-cyan-500" />
              <span>אופטימיזציית המרות</span>
            </div>
          </div>
        </div>
      </div>

      {idx < steps.length - 1 && (
        <div className="mt-6 flex justify-center text-slate-800/50">
          <ArrowDown size={24} strokeWidth={1.5} className="animate-bounce" />
        </div>
      )}
    </motion.div>
  );
};

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/20 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
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
                הדרך <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-600 font-black">שלנו</span>
            </motion.h2>
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                className="h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_15px_#06b6d4]"
            />
        </div>

        {/* THE VERTICAL HOLOGRAPHIC FLOW */}
        <div className="relative">
            {/* The Central Data Beam */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent -translate-x-1/2" />

            <div className="space-y-4 relative">
                {steps.map((step, idx) => (
                    <ProcessStep key={step.id} step={step} idx={idx} />
                ))}
            </div>
        </div>

        {/* REFINED & COMPACT 360 ENVELOPE BOX */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 pb-12 text-center relative flex flex-col items-center"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-cyan-500/30 to-transparent" />
            
            <div className="pt-12 w-full max-w-lg">
                <div className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 md:p-8 mb-6 shadow-[0_0_60px_rgba(6,182,212,0.1)] group overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 blur-[80px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="relative z-10">
                        <div className="mb-8">
                            <motion.div 
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-12 h-12 bg-cyan-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
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
                            {/* Combined Storage & Domain Item */}
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-start gap-4 transition-all hover:bg-white/10 group/card">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 group-hover/card:scale-110 transition-transform">
                                    <Globe className="text-cyan-400 w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-white font-black text-sm block mb-1">תשתית פרימיום (אחסון ודומיין)</span>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        אחסון בענן בשרתים המהירים ביותר בעולם יחד עם דומיין רשמי בבעלותך. הכל מנוהל טכנית כדי שהאתר שלך יטוס 24/7 ללא תקלות.
                                    </p>
                                </div>
                            </div>

                            {/* Expanded Lead Integration Item */}
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-start gap-4 transition-all hover:bg-white/10 group/card">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover/card:scale-110 transition-transform">
                                    <Zap className="text-blue-400 w-5 h-5 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                                </div>
                                <div>
                                    <span className="text-white font-black text-sm block mb-1">חיבור לידים חכם ומידי</span>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        כל לקוח שמשאיר פרטים מוקפץ אליך ישירות לווצאפ תוך שניות. המערכת מחברת אותך ללקוח כשהוא עוד באתר, כדי שתוכל לסגור עסקאות בזמן אמת ולמקסם כל פנייה.
                                    </p>
                                </div>
                            </div>

                            {/* Personal WhatsApp Support Item - Practical & Short Text */}
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-start gap-4 transition-all hover:bg-white/10 group/card">
                                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/20 group-hover/card:scale-110 transition-transform">
                                    <WhatsAppIcon className="text-[#25D366] w-6 h-6 drop-shadow-[0_0_8px_rgba(37,211,102,0.3)]" />
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
                                className="group relative w-full px-10 py-4 bg-cyan-500 text-black font-black text-lg rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                
                                <span className="flex items-center justify-center gap-2 relative z-10">
                                    בוא נבנה מכונה
                                    <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                            
                            <div className="mt-5 flex items-center gap-3 text-slate-500 font-bold text-[9px] tracking-widest uppercase">
                                <CloudLightning size={10} className="text-cyan-500 animate-pulse" />
                                <span>LEVI DIGITAL SOLUTIONS | PREMIUM ONLY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};