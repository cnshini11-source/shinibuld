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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Copy */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:pr-8"
                >
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 mb-6">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">AI Core Active</span>
                   </div>

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

                {/* Right Side: The Visual AI Engine (CSS/SVG only - High Performance) */}
                <motion.div 
                   className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center pt-12" // Added pt-12 for the label space
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                >
                    {/* --- INTEGRATED HUD LABEL --- */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                        {/* The Panel Box */}
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

                        {/* Connector Line to Radar */}
                        <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent relative">
                            {/* Moving dot on the line */}
                            <motion.div 
                                animate={{ y: [0, 32], opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)]"
                            />
                        </div>
                    </div>


                    {/* 1. Radar Grid Circles (Static CSS) */}
                    <div className="absolute inset-0 rounded-full border border-white/5" />
                    <div className="absolute inset-[15%] rounded-full border border-white/5" />
                    <div className="absolute inset-[30%] rounded-full border border-white/5" />
                    
                    {/* Crosshairs */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-px bg-white/5" />
                        <div className="h-full w-px bg-white/5 absolute" />
                    </div>

                    {/* 2. The Scanner (Rotating Gradient) - GPU Accelerated */}
                    <div className="absolute inset-0 rounded-full overflow-hidden animate-[spin_4s_linear_infinite] opacity-30">
                         <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(6,182,212,0.4)_360deg)]" />
                    </div>

                    {/* 3. Central Core (Pulsing) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-slate-900 border border-cyan-500/30 rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(6,182,212,0.2)] z-10">
                            <Brain className="w-10 h-10 text-cyan-400" />
                            {/* Inner Rings pulsing */}
                            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping opacity-20" />
                        </div>
                    </div>

                    {/* 4. Floating Nodes (Users) */}
                    {/* User 1: Top Right */}
                    <div className="absolute top-[20%] right-[20%]">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                        {/* Connecting Line to Center */}
                        <svg className="absolute top-1.5 right-1.5 w-[110px] h-[110px] pointer-events-none overflow-visible" style={{ transform: 'rotate(135deg)', transformOrigin: 'top right' }}>
                             <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(239,68,68,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                        </svg>
                    </div>

                    {/* User 2: Bottom Left (Converting) */}
                    <div className="absolute bottom-[25%] left-[25%]">
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-pulse" />
                        <div className="absolute -top-6 -left-2 text-[10px] text-green-400 font-mono bg-green-900/30 px-1 rounded border border-green-500/30">LEAD</div>
                         {/* Connecting Line to Center */}
                         <svg className="absolute bottom-1.5 left-1.5 w-[100px] h-[100px] pointer-events-none overflow-visible" style={{ transform: 'rotate(-45deg)', transformOrigin: 'bottom left' }}>
                             <line x1="0" y1="0" x2="90" y2="0" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
                             {/* Data Packet moving */}
                             <circle cx="0" cy="0" r="2" fill="#4ade80">
                                <animate attributeName="cx" from="90" to="0" dur="1s" repeatCount="indefinite" />
                             </circle>
                        </svg>
                    </div>

                    {/* 5. Dynamic Event Card (Changing) */}
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
        
        {/* Custom CSS for the rotation animation if needed, though tailwind 'animate-spin' usually covers it. 
            We ensure conic-gradient works across browsers. */}
        <style>{`
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `}</style>
    </section>
  );
};