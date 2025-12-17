import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Target, Zap, MousePointer2, User, Activity } from 'lucide-react';

// Simulated events for the AI visualization
const AI_EVENTS = [
  { id: 1, text: "זיהוי תנועת עכבר", icon: MousePointer2, color: "text-blue-400" },
  { id: 2, text: "ניתוח דפוס גלילה", icon: Brain, color: "text-purple-400" },
  { id: 3, text: "זיהוי היסוס לקוח", icon: User, color: "text-yellow-400" },
  { id: 4, text: "הפעלת טריגר מכירה", icon: Zap, color: "text-cyan-400" },
  { id: 5, text: "המרת ליד מוצלחת!", icon: Target, color: "text-green-400" },
];

export const TechSection: React.FC = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  // Cycle through events to simulate "Processing"
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % AI_EVENTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Lightweight Background Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left Side: Copy - Compact & Classic Refinement */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-lg text-right mx-auto lg:mx-0"
                >
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 mb-6">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">AI Core Active</span>
                   </div>

                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 tracking-tighter leading-[1.05]">
                     הלקוחות נכנסים, מסתכלים... <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                       ובורחים למתחרים.
                     </span>
                   </h2>
                   
                   <div className="space-y-8">
                       <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                           היום, לא משנה כמה אתה תותח או שהמוצר שלך טוב בלי נוכחות דיגיטלית חזקה – <strong className="text-white font-black border-b border-cyan-500/50 pb-0.5">אתה פשוט לא קיים.</strong>
                       </p>
                       
                       <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-[90%]">
                           הלקוחות שלך נמצאים במסך, ואם אתה לא שם לתפוס אותם - הם הולכים למתחרה שלך. זה לא מספיק רק "שיהיה אתר יפה", <strong className="text-slate-200 font-bold">חייבים מכונה שיודעת להפוך גולשים לכסף.</strong>
                       </p>

                       <div className="pt-6 border-r-2 border-cyan-500/30 pr-6 bg-white/5 rounded-l-2xl p-6 shadow-inner">
                            <p className="text-lg text-slate-200 font-medium leading-relaxed">
                                אני לא בונה אתר או דף. <br />
                                אני בונה לך <strong className="text-cyan-400 font-black">סוכן מכירות דיגיטלי</strong> שעובד בשבילך 24/7. המערכת מזהה בדיוק מתי הלקוח מהסס ומגישה לו את המסר המדויק שיגרום לו להשאיר פרטים עכשיו.
                            </p>
                       </div>
                   </div>
                </motion.div>

                {/* Right Side: The Visual AI Engine */}
                <motion.div 
                   className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center pt-6"
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                >
                    {/* HUD LABEL */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                        <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-lg px-5 py-3 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col items-center gap-1 min-w-[200px]">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="relative w-2 h-2">
                                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                                    <div className="relative w-2 h-2 bg-red-500 rounded-full"></div>
                                </div>
                                <span className="text-cyan-100 font-bold text-sm tracking-wide">
                                    סורק AI מותקן באתר שלך
                                </span>
                            </div>
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-0.5" />
                            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400/80 font-mono uppercase tracking-wider">
                                <Activity className="w-3 h-3" />
                                <span>ניתוח התנהגות בזמן אמת</span>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent relative">
                            <motion.div 
                                animate={{ y: [0, 32], opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)]"
                            />
                        </div>
                    </div>

                    {/* Radar Grid */}
                    <div className="absolute inset-0 rounded-full border border-white/5" />
                    <div className="absolute inset-[15%] rounded-full border border-white/5" />
                    <div className="absolute inset-[30%] rounded-full border border-white/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-px bg-white/5" />
                        <div className="h-full w-px bg-white/5 absolute" />
                    </div>

                    {/* Scanner */}
                    <div className="absolute inset-0 rounded-full overflow-hidden animate-[spin_4s_linear_infinite] opacity-30">
                         <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(6,182,212,0.4)_360deg)]" />
                    </div>

                    {/* Central Core */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-slate-900 border border-cyan-500/30 rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(6,182,212,0.2)] z-10">
                            <Brain className="w-10 h-10 text-cyan-400" />
                            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping opacity-20" />
                        </div>
                    </div>

                    {/* Nodes */}
                    <div className="absolute top-[20%] right-[20%]">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    </div>

                    <div className="absolute bottom-[25%] left-[25%]">
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-pulse" />
                        <div className="absolute -top-6 -left-2 text-[10px] text-green-400 font-mono bg-green-900/30 px-1 rounded border border-green-500/30">LEAD</div>
                    </div>

                    {/* Event Card */}
                    <div className="absolute bottom-8 right-0 left-0 flex justify-center z-20">
                        <AnimatePresence mode='wait'>
                            <motion.div 
                                key={activeEventIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3 shadow-xl"
                            >
                                {React.createElement(AI_EVENTS[activeEventIndex].icon, { 
                                    className: `w-4 h-4 ${AI_EVENTS[activeEventIndex].color}` 
                                })}
                                <span className="text-sm font-mono text-slate-200">
                                    {AI_EVENTS[activeEventIndex].text}
                                </span>
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </motion.div>

            </div>
        </div>
        
        <style>{`
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `}</style>
    </section>
  );
};