import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Database, Rocket, MessageSquare, BarChart, Smartphone, Lock, Server, Zap, Globe, MousePointerClick, Target } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            מכונת לידים
          </h2>
          <p className="text-xl text-slate-300">
            תהליך עבודה מדויק, שקוף ומבוסס נתונים. בלי הפתעות, רק תוצאות.
          </p>
        </motion.div>

        <div className="space-y-24 relative">
          
          {/* Vertical Line Connector */}
          <div className="absolute top-0 bottom-40 left-1/2 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent -translate-x-1/2 hidden lg:block" />

          {/* STEP 1: Discovery (Right) */}
          <div className="flex flex-col lg:flex-row gap-12 items-center relative">
             {/* Visual/Icon Side */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-12 order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="relative w-full max-w-md aspect-square bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center gap-6 group hover:border-blue-500/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Floating Icons Grid */}
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                             <Search className="text-blue-400 w-8 h-8" />
                             <span className="text-xs text-slate-400">מחקר שוק</span>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                             <BarChart className="text-blue-400 w-8 h-8" />
                             <span className="text-xs text-slate-400">ניתוח מתחרים</span>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                             <MessageSquare className="text-blue-400 w-8 h-8" />
                             <span className="text-xs text-slate-400">זיקוק מסרים</span>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                             <Target className="text-blue-400 w-8 h-8" />
                             <span className="text-xs text-slate-400">הגדרת יעדים</span>
                        </div>
                    </div>
                </div>
             </motion.div>

             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pr-12 order-1 lg:order-2 text-right"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-4 mb-4 justify-end lg:justify-start">
                   <span className="text-6xl font-black text-white/5 absolute -top-8 -right-4 select-none pointer-events-none">01</span>
                   <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                      אפיון ואסטרטגיה
                   </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">יורדים לשורש העסק</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    אנחנו לא מתחילים לעצב לפני שאנחנו מבינים בדיוק מי אתם.
                    תהליך האפיון הוא המפה שלנו. אנחנו ננתח את קהל היעד, נבין את הכאבים שלהם, ונבנה את המשפך השיווקי שיוביל אותם לפעולה.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        הבנת ה-DNA העסקי והבידול שלכם.
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        מיפוי מסע לקוח מלא מכניסה ועד המרה.
                    </li>
                </ul>
             </motion.div>
          </div>

          {/* STEP 2: Design (Left) */}
          <div className="flex flex-col lg:flex-row gap-12 items-center relative">
             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pl-12 order-1 text-right lg:text-right"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-4 mb-4 justify-end lg:justify-start">
                   <span className="text-6xl font-black text-white/5 absolute -top-8 -right-4 select-none pointer-events-none">02</span>
                   <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase">
                      UI/UX ועיצוב
                   </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">עיצוב ממוקד המרה</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    זה לא רק "יפה", זה פסיכולוגי. העיצוב שלנו נבנה כדי לשדר אמינות, יוקרה וסמכות.
                    כל צבע, כפתור ואנימציה ממוקמים במטרה אחת: לגרום לגולש להישאר, להתעניין ולקנות.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        חווית משתמש שמונעת נטישה.
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        עיצוב מותאם אישית שמבדל אתכם מהמתחרים.
                    </li>
                </ul>
             </motion.div>

             {/* Visual Side */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-start lg:pr-12 order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="relative w-full max-w-md aspect-square bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex items-center justify-center group hover:border-purple-500/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Design Abstract Visual */}
                    <div className="relative w-full h-full flex flex-col gap-4">
                        <div className="w-full h-32 bg-slate-800/50 rounded-xl border border-white/5 overflow-hidden relative">
                             <div className="absolute top-4 right-4 flex gap-2">
                                 <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                 <div className="w-3 h-3 rounded-full bg-green-500/50" />
                             </div>
                             <div className="absolute top-12 right-4 w-1/2 h-2 bg-slate-700 rounded-full" />
                             <div className="absolute top-20 right-4 w-1/3 h-2 bg-slate-700 rounded-full" />
                        </div>
                        <div className="flex gap-4 h-full">
                             <div className="flex-1 bg-slate-800/50 rounded-xl border border-white/5 flex items-center justify-center">
                                 <PenTool className="text-purple-400 w-10 h-10" />
                             </div>
                             <div className="flex-1 bg-slate-800/50 rounded-xl border border-white/5 flex items-center justify-center">
                                 <MousePointerClick className="text-purple-400 w-10 h-10" />
                             </div>
                        </div>
                    </div>
                </div>
             </motion.div>
          </div>

          {/* STEP 3: Tech Wrapper (Right) */}
          <div className="flex flex-col lg:flex-row gap-12 items-center relative">
             {/* Visual/Icon Side */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-12 order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="relative w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center gap-6 group hover:border-cyan-500/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-2 bg-green-500/20 rounded-lg"><Smartphone className="w-5 h-5 text-green-400" /></div>
                                 <span className="text-sm font-bold text-slate-300">WhatsApp API</span>
                             </div>
                             <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-2 bg-blue-500/20 rounded-lg"><Database className="w-5 h-5 text-blue-400" /></div>
                                 <span className="text-sm font-bold text-slate-300">CRM Integration</span>
                             </div>
                             <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-2 bg-indigo-500/20 rounded-lg"><Server className="w-5 h-5 text-indigo-400" /></div>
                                 <span className="text-sm font-bold text-slate-300">Turbo Hosting</span>
                             </div>
                             <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-2 bg-cyan-500/20 rounded-lg"><Lock className="w-5 h-5 text-cyan-400" /></div>
                                 <span className="text-sm font-bold text-slate-300">SSL Security</span>
                             </div>
                             <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                        </div>
                    </div>
                </div>
             </motion.div>

             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pr-12 order-1 lg:order-2 text-right"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-4 mb-4 justify-end lg:justify-start">
                   <span className="text-6xl font-black text-white/5 absolute -top-8 -right-4 select-none pointer-events-none">03</span>
                   <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                      מעטפת טכנולוגית
                   </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">שקט נפשי מלא (Turn-Key)</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    אתם לא צריכים להבין בשרתים, קוד או אינטגרציות. אנחנו מספקים לכם מעטפת 360 מעלות.
                    האתר מגיע מחובר למערכת ניהול לידים, כפתור וואטסאפ חכם, אחסון מהיר ומאובטח, ודומיין.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        הלידים מגיעים ישירות למייל ולנייד שלכם.
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        אפס התעסקות טכנית מצדכם – הכל עלינו.
                    </li>
                </ul>
             </motion.div>
          </div>

          {/* STEP 4: Launch (Centered & Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-20"
          >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-[2rem] blur opacity-20" />
              <div className="relative bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-16 overflow-hidden text-center">
                  
                  {/* Grid Background inside card */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                  <div className="relative z-10 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 mb-8">
                          <Rocket className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-4xl md:text-5xl font-black text-white mb-6">השקה, הדרכה ויציאה לדרך</h3>
                      <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                          זהו הרגע הגדול. אנחנו מעלים את המערכת לאוויר, אבל לא עוזבים אתכם.
                          תקבלו הדרכה מלאה ומפורטת (כולל הקלטה) על איך לנהל את האתר, איך לקרוא את הנתונים, ואיך להשתמש במכונה שבנינו עבורכם.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                          <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <Zap className="text-yellow-400 w-8 h-8 mb-4" />
                              <h4 className="font-bold text-white mb-2">בדיקות QA מקיפות</h4>
                              <p className="text-sm text-slate-400">מוודאים שכל פיקסל במקום וכל כפתור עובד.</p>
                          </div>
                          <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <Globe className="text-cyan-400 w-8 h-8 mb-4" />
                              <h4 className="font-bold text-white mb-2">חיבור לדומיין עולמי</h4>
                              <p className="text-sm text-slate-400">הפצת האתר לשרתים מהירים (CDN).</p>
                          </div>
                          <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <div className="relative">
                                <MessageSquare className="text-green-400 w-8 h-8 mb-4" />
                              </div>
                              <h4 className="font-bold text-white mb-2">תמיכה אישית</h4>
                              <p className="text-sm text-slate-400">אני כאן לכל שאלה גם אחרי העלייה לאוויר.</p>
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