import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Activity } from 'lucide-react';

export const TechSection: React.FC = () => {
  return (
    <section id="tech" className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Lightweight Background - transform-gpu ensures it's on a separate layer */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 transform-gpu will-change-transform">
             <div className="absolute top-[10%] right-[-5%] w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:pr-8"
                >
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                     הלקוחות נכנסים, מסתכלים... <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-black">
                       ובורחים למתחרים.
                     </span>
                   </h2>
                   
                   <div className="space-y-4">
                       <p className="text-lg text-slate-400 leading-relaxed font-light">
                           זו התחושה הכי מתסכלת שיש לבעל עסק: השקעת בקמפיין, המודעה הייתה מושלמת, הגולש הקליק – ואז... נעלם. הוא יצא בלי להשאיר עקבות. הכסף שלך נשרף על "תיירים" באתר במקום על לקוחות משלמים.
                           <br className="hidden md:block" /><br className="hidden md:block" />
                           <strong className="text-white font-medium">אני משנה את החוקים.</strong><br/>
                           במקום עוד דף שנראה טוב אני בונה לך סוכן מכירות דיגיטלי שעובד בשבילך 24/7. המערכת שאני מטמיע מזהה היסוס בזמן אמת ומגישה לגולש את הטריגר הפסיכולוגי המדויק שיגרום לו לעצור, לקרוא – ולהשאיר פרטים <strong className="text-cyan-400">כאן ועכשיו</strong>.
                       </p>
                   </div>
                </motion.div>

                <motion.div 
                   className="relative group w-full max-w-lg mx-auto lg:mr-auto lg:ml-0"
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                >
                    {/* Static Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-sm opacity-50 will-change-transform transform-gpu" />
                    
                    <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden transform-gpu">
                        
                        {/* Static Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-800/50 rounded-lg border border-white/5 flex items-center justify-center">
                                        <BrainCircuit className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">מנוע AI לומד</h3>
                                </div>
                                
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20">
                                    <span className="relative flex h-2 w-2">
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                    </span>
                                    <span className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase">Live</span>
                                </div>
                            </div>
                            
                            <div className="space-y-3 text-slate-400 text-sm md:text-base leading-relaxed">
                                <p>
                                    האלגוריתם עוקב אחר תנועות העכבר, גלילה וזמן שהייה. 
                                    הוא מזהה מתי לקוח מתלבט ומקפיץ לו את המסר המדויק שיסגור את העסקה.
                                </p>
                            </div>
                        </div>

                        {/* Data Visualization Footer - Static bars for performance */}
                        <div className="relative z-10 border-t border-white/5 pt-6 mt-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Activity className="w-4 h-4 text-cyan-500" />
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">Conversion Rate</div>
                                        <div className="text-lg font-mono text-white font-bold">+184%</div>
                                    </div>
                                </div>
                                <div className="flex gap-1 h-8 items-end opacity-50">
                                    <div className="w-1.5 h-3 bg-cyan-500/40 rounded-sm" />
                                    <div className="w-1.5 h-5 bg-cyan-500/40 rounded-sm" />
                                    <div className="w-1.5 h-8 bg-cyan-500/40 rounded-sm" />
                                    <div className="w-1.5 h-4 bg-cyan-500/40 rounded-sm" />
                                    <div className="w-1.5 h-6 bg-cyan-500/40 rounded-sm" />
                                    <div className="w-1.5 h-2 bg-cyan-500/40 rounded-sm" />
                                    <div className="w-1.5 h-5 bg-cyan-500/40 rounded-sm" />
                                    <div className="w-1.5 h-7 bg-cyan-500/40 rounded-sm" />
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