
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Scan, AlertTriangle, Eye, Fingerprint, MousePointer2 } from 'lucide-react';

export const TechSection: React.FC = memo(() => {
  return (
    <section className="relative pt-12 pb-8 md:pt-20 md:pb-12 overflow-hidden bg-[#020617] flex flex-col items-center justify-center">
        
        {/* --- 1. BACKGROUND LAYERS --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.6),_#000000_90%)]" />
            {/* Cyber Grid */}
            <div 
                className="absolute inset-0 opacity-[0.05]" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} 
            />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* --- LEFT SIDE: THE TEXT (PAIN & SOLUTION) --- */}
            <div className="text-right order-2 lg:order-1">
                
                {/* Warning Badge */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6"
                >
                    <AlertTriangle size={14} className="animate-pulse" />
                    <span>System Alert: Traffic Leaking</span>
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight"
                >
                    הם נכנסים, גוללים...
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-red-500 to-orange-400">
                        ויוצאים.
                    </span>
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 text-lg md:text-xl text-slate-400 font-light leading-relaxed"
                >
                    <p>
                        שילמת על ממומן, השקעת בתוכן, הבאת אותם עד הדלת – אבל הכסף נוזל מבין האצבעות. למה?
                        כי משהו שם <strong className="text-white font-bold">לא עובד</strong>, ואתה אפילו לא יודע איפה.
                    </p>
                    <p className="border-r-2 border-cyan-500 pr-4">
                        המערכת שלנו היא ה"עיניים" שלך בתוך האתר. היא מזהה בדיוק את הרגע שבו הלקוח מהסס, מתבלבל או משתעמם – ומתקנת את זה בזמן אמת.
                    </p>
                </motion.div>

                {/* Feature List - VISUAL UPDATE: Dashboard Sensors instead of Buttons */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                    {[
                        { icon: Eye, label: "זיהוי נקודות עיוורון" },
                        { icon: Fingerprint, label: "ניתוח התנהגות גולש" },
                        { icon: Scan, label: "סריקת כשלים 24/7" },
                        { icon: MousePointer2, label: "הקלטת תנועות עכבר" }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            // Changed styles: No hover borders, added cursor-default to imply "Read Only / Status"
                            className="relative flex items-center gap-4 group cursor-default select-none"
                        >
                            {/* Vertical Status Line */}
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400/50 transition-colors duration-500" />
                            
                            {/* Icon Container - Sensor Look */}
                            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                                {/* Rotating Ring */}
                                <div className="absolute inset-0 border border-cyan-500/30 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
                                {/* Static Ring */}
                                <div className="absolute inset-0 border border-white/5 rounded-full" />
                                
                                <item.icon size={20} className="text-cyan-400 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="text-base font-bold text-slate-200 tracking-wide">
                                    {item.label}
                                </span>
                                {/* Data Visualization Lines */}
                                <div className="flex items-center gap-1 h-1">
                                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                                    <div className="w-8 h-[2px] bg-cyan-900/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-cyan-500/50 w-full origin-right animate-[scaleX_1.5s_ease-in-out_infinite]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- RIGHT SIDE: THE SCANNER VISUALIZATION --- */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-md aspect-square"
                >
                    {/* 1. Base Plate (The 'Website') - Now with Image */}
                    <div className="absolute inset-0 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 md:rotate-6">
                        
                        {/* The Provided Image */}
                        <img 
                            src="https://i.imgur.com/7AeCf78.jpg" 
                            alt="LEVI AI Traffic Analysis Dashboard" 
                            className="w-full h-full object-cover opacity-80"
                        />
                        
                        {/* Overlay to ensure scanner visibility */}
                        <div className="absolute inset-0 bg-slate-950/20" />

                        {/* Drop-off Points (Red Dots) */}
                        <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red] animate-ping" />
                        <div className="absolute bottom-[25%] right-[25%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red] animate-ping delay-700" />

                    </div>

                    {/* 2. The AI Scanner Overlay */}
                    <div className="absolute inset-[-20px] pointer-events-none">
                        
                        {/* Rotating Radar Ring */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-cyan-500/30"
                            style={{ background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(6,182,212,0.2) 360deg)' }}
                        />
                        
                        {/* Counter-Rotating Dashed Ring */}
                        <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-dashed border-cyan-500/20"
                        />

                        {/* Scanner Laser Line (Vertical Sweep) */}
                        <motion.div 
                             animate={{ top: ['0%', '100%', '0%'] }}
                             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                             className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_20px_cyan] opacity-70 z-20"
                        >
                            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-cyan-500/20 to-transparent" />
                        </motion.div>

                        {/* Data Box Floating */}
                        <motion.div 
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -right-8 top-1/3 bg-black/80 backdrop-blur border border-cyan-500/50 p-3 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <Scan size={14} className="text-cyan-400" />
                                <span className="text-[10px] text-cyan-400 font-mono tracking-wider">ANALYZING</span>
                            </div>
                            <div className="text-xs text-white font-mono">
                                Friction detected: <span className="text-red-400">84%</span>
                            </div>
                            <div className="w-full h-1 bg-slate-700 mt-2 rounded-full overflow-hidden">
                                <motion.div 
                                    animate={{ width: ["0%", "84%"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="h-full bg-red-500" 
                                />
                            </div>
                        </motion.div>
                    </div>

                </motion.div>

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-cyan-500/5 blur-[80px] rounded-full z-[-1]" />
            </div>

        </div>
    </section>
  );
});
