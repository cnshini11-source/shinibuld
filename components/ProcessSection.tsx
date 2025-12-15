import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Database, Rocket, MessageSquare, BarChart, Smartphone, Lock, Server, Zap, Globe, MousePointerClick, Target } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements - Optimized */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            מכונת לידים
          </h2>
          <p className="text-lg text-slate-300">
            תהליך עבודה מדויק, שקוף ומבוסס נתונים. אני בונה עבורך נכס דיגיטלי שעובד.
          </p>
        </motion.div>

        <div className="space-y-20 relative">
          
          {/* Vertical Line Connector */}
          <div className="absolute top-0 bottom-20 left-1/2 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent -translate-x-1/2 hidden lg:block" />

          {/* STEP 1: Discovery (Right) */}
          <div className="flex flex-col lg:flex-row gap-10 items-center relative">
             {/* Visual/Icon Side */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-10 order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                {/* Changed backdrop-blur-xl to backdrop-blur-md for better performance */}
                <div className="relative w-full max-w-sm aspect-square bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center gap-4 group hover:border-blue-500/30 transition-all duration-500 transform-gpu">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Floating Icons Grid */}
                    <div className="grid grid-cols-2 gap-3 relative z-10">
                        <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                             <Search className="text-blue-400 w-6 h-6" />
                             <span className="text-[10px] text-slate-400">מחקר שוק</span>
                        </div>
                        <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                             <BarChart className="text-blue-400 w-6 h-6" />
                             <span className="text-[10px] text-slate-400">ניתוח מתחרים</span>
                        </div>
                        <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                             <MessageSquare className="text-blue-400 w-6 h-6" />
                             <span className="text-[10px] text-slate-400">זיקוק מסרים</span>
                        </div>
                        <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                             <Target className="text-blue-400 w-6 h-6" />
                             <span className="text-[10px] text-slate-400">הגדרת יעדים</span>
                        </div>
                    </div>
                </div>
             </motion.div>

             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pr-10 order-1 lg:order-2 text-right"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-3 mb-3 justify-end lg:justify-start">
                   <span className="text-5xl font-black text-white/5 absolute -top-6 -right-4 select-none pointer-events-none">01</span>
                   <div className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
                      אפיון ואסטרטגיה
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">אני יורד לשורש העסק שלך</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                    לפני שאני מותח קו אחד של עיצוב או כותב שורת קוד, אני צולל לעומק העולם העסקי שלך.
                    אני אלמד מי הקהל שלך, אזהה את הכאבים שלהם, ואמפה את המסלול המדויק שיהפוך גולש מזדמן ללקוח משלם.
                    זה לא סתם "אתר" – זו התשתית להצלחה שלך.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        חקר עומק של ה-DNA העסקי והבידול שלך.
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        בניית משפך שיווקי מותאם אישית למטרות שלך.
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        כתיבת תוכן שיווקי מדויק שמבליט את האתר שלך.
                    </li>
                </ul>
             </motion.div>
          </div>

          {/* STEP 2: Design (Left) */}
          <div className="flex flex-col lg:flex-row gap-10 items-center relative">
             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pl-10 order-1 text-right lg:text-right"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-3 mb-3 justify-end lg:justify-start">
                   <span className="text-5xl font-black text-white/5 absolute -top-6 -right-4 select-none pointer-events-none">02</span>
                   <div className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold tracking-widest uppercase">
                      UI/UX ועיצוב
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">עיצוב פסיכולוגי ממוקד המרה</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                    אני לא רק מעצב אתר שיהיה "יפה", אלא בונה חוויה.
                    כל צבע, כפתור, פונט ואנימציה ממוקמים על ידי במחשבה תחילה ובאסטרטגיה ברורה: לשדר יוקרה, לבנות סמכות מיידית, ולייצר אצל הגולש דחף בלתי נשלט להמשיך לקרוא ולבצע פעולה.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        שימוש בטריגרים פסיכולוגיים למניעת נטישה.
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        עיצוב ייחודי (Custom Made) שלא נראה כמו שום תבנית אחרת.
                    </li>
                </ul>
             </motion.div>

             {/* Visual Side */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-start lg:pr-10 order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                {/* Changed backdrop-blur-xl to backdrop-blur-md for better performance */}
                <div className="relative w-full max-w-sm aspect-square bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-center group hover:border-purple-500/30 transition-all duration-500 transform-gpu">
                    <div className="absolute inset-0 bg-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Design Abstract Visual */}
                    <div className="relative w-full h-full flex flex-col gap-3">
                        <div className="w-full h-24 bg-slate-800/50 rounded-xl border border-white/5 overflow-hidden relative">
                             <div className="absolute top-3 right-3 flex gap-1.5">
                                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                             </div>
                             <div className="absolute top-8 right-3 w-1/2 h-1.5 bg-slate-700 rounded-full" />
                             <div className="absolute top-14 right-3 w-1/3 h-1.5 bg-slate-700 rounded-full" />
                        </div>
                        <div className="flex gap-3 h-full">
                             <div className="flex-1 bg-slate-800/50 rounded-xl border border-white/5 flex items-center justify-center">
                                 <PenTool className="text-purple-400 w-8 h-8" />
                             </div>
                             <div className="flex-1 bg-slate-800/50 rounded-xl border border-white/5 flex items-center justify-center">
                                 <MousePointerClick className="text-purple-400 w-8 h-8" />
                             </div>
                        </div>
                    </div>
                </div>
             </motion.div>
          </div>

          {/* STEP 3: Tech Wrapper (Right) */}
          <div className="flex flex-col lg:flex-row gap-10 items-center relative">
             {/* Visual/Icon Side */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-10 order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                {/* Changed backdrop-blur-xl to backdrop-blur-md for better performance */}
                <div className="relative w-full max-w-sm bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center gap-4 group hover:border-cyan-500/30 transition-all duration-500 transform-gpu">
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-1.5 bg-green-500/20 rounded-lg"><Smartphone className="w-4 h-4 text-green-400" /></div>
                                 <span className="text-xs font-bold text-slate-300">WhatsApp API</span>
                             </div>
                             <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-1.5 bg-blue-500/20 rounded-lg"><Database className="w-4 h-4 text-blue-400" /></div>
                                 <span className="text-xs font-bold text-slate-300">CRM Integration</span>
                             </div>
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-1.5 bg-indigo-500/20 rounded-lg"><Server className="w-4 h-4 text-indigo-400" /></div>
                                 <span className="text-xs font-bold text-slate-300">Turbo Hosting</span>
                             </div>
                             <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-1.5 bg-cyan-500/20 rounded-lg"><Lock className="w-4 h-4 text-cyan-400" /></div>
                                 <span className="text-xs font-bold text-slate-300">SSL Security</span>
                             </div>
                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                        </div>
                    </div>
                </div>
             </motion.div>

             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pr-10 order-1 lg:order-2 text-right"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-3 mb-3 justify-end lg:justify-start">
                   <span className="text-5xl font-black text-white/5 absolute -top-6 -right-4 select-none pointer-events-none">03</span>
                   <div className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
                      מעטפת טכנולוגית
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">אני דואג להכל – אפס כאב ראש בשבילך</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                    אתה לא צריך להבין בשרתים, בדומיינים או באינטגרציות. אני מספק לך מעטפת טכנולוגית הרמטית (Turn-Key).
                    מהרגע הראשון, האתר מגיע עם שרתים מהירים בטירוף, אבטחה מקסימלית, וחיבורים חכמים למערכות הניהול שלך. הכל כדי שתוכל להתמקד בלסגור עסקאות.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        חיבור ישיר של הלידים לנייד, למייל או ל-CRM שלך.
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        טיפול מלא בתחזוקה טכנית ובאחסון.
                    </li>
                </ul>
             </motion.div>
          </div>

          {/* STEP 4: Launch (Centered & Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-16"
          >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-[2rem] blur opacity-20 transform-gpu" />
              <div className="relative bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden text-center transform-gpu">
                  
                  {/* Grid Background inside card */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                  <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 mb-6">
                          <Rocket className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black text-white mb-4">השקה, הדרכה ויציאה לדרך משותפת</h3>
                      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                          רגע העלייה לאוויר הוא מרגש, אבל אני לא עוזב אותך שם.
                          אני נשאר בתמונה, מספק הדרכה אישית ומפורטת על איך לתפעל את המכונה שבניתי לך, ואיך לקרוא את הנתונים כדי למקסם רווחים באופן שוטף. ההצלחה שלך היא כרטיס הביקור שלי.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
                          <div className="bg-slate-800/50 p-5 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <Server className="text-yellow-400 w-6 h-6 mb-3" />
                              <h4 className="font-bold text-white mb-1.5">אחסון אתרים (Hosting)</h4>
                              <p className="text-xs text-slate-400">אני דואג לאחסון מהיר כברק. האתר שלך תמיד זמין.</p>
                          </div>
                          <div className="bg-slate-800/50 p-5 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <Globe className="text-cyan-400 w-6 h-6 mb-3" />
                              <h4 className="font-bold text-white mb-1.5">חיבור דומיין</h4>
                              <p className="text-xs text-slate-400">הכתובת העסקית שלך מחוברת ומוכנה. הכל עליי.</p>
                          </div>
                          <div className="bg-slate-800/50 p-5 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <div className="relative">
                                <MessageSquare className="text-green-400 w-6 h-6 mb-3" />
                              </div>
                              <h4 className="font-bold text-white mb-1.5">תמיכה אישית</h4>
                              <p className="text-xs text-slate-400">יש לך למי לפנות. אני זמין לכל שאלה בוואטסאפ.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};