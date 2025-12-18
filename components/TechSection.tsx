
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ScanEye, AlertTriangle, TrendingUp, Activity, Lock, MousePointerClick } from 'lucide-react';

export const TechSection: React.FC = memo(() => {
  
  // HUD Data Nodes - Representing the analysis phases
  const dataNodes = [
    { 
      id: 1,
      label: "זיהוי נטישה",
      sub: "Friction Detected",
      icon: AlertTriangle, 
      color: "text-rose-400", 
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      shadow: "shadow-rose-500/20",
      x: "-260px", 
      y: "-60px",
      delay: 0
    },
    { 
      id: 2,
      label: "ניתוח פסיכולוגי",
      sub: "Psychometric Analysis",
      icon: ScanEye, 
      color: "text-purple-400", 
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      shadow: "shadow-purple-500/20",
      x: "260px", 
      y: "-20px",
      delay: 1.5
    },
    { 
      id: 3,
      label: "אופטימיזציה",
      sub: "Conversion Boost",
      icon: TrendingUp, 
      color: "text-emerald-400", 
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      shadow: "shadow-emerald-500/20",
      x: "0px", 
      y: "220px",
      delay: 3
    },
  ];

  return (
    <section id="tech" className="relative flex items-center justify-center overflow-hidden py-32 bg-[#020617]">
      
      {/* 1. ANALYTICAL BACKGROUND DEPTH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-[#020617]" />
        
        {/* Precise Grid (The "Map") */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ 
                 backgroundImage: `linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)`,
                 backgroundSize: '60px 60px'
             }} 
        />
        
        {/* Floating Data Bits */}
        <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/3 left-1/4 text-[10px] font-mono text-cyan-900/40 select-none"
        >
            010110... ANALYZING...
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center">
        
        {/* --- HEADLINE --- */}
        <div className="mb-24 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl"
          >
            הגולשים נכנסים? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
              הגיע הזמן שיהיו לקוחות.
            </span>
          </motion.h2>
        </div>

        {/* --- THE ANALYTICAL ENGINE (CORE) --- */}
        <div className="relative w-[600px] h-[500px] flex items-center justify-center">
            
            {/* 1. RADAR SCANNERS (The Rings) */}
            
            {/* Outer Static Scale */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-slate-800/60" />
            <div className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-slate-700/40 opacity-50" />
            
            {/* Rotating Scanner Line (The "Eye") */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full z-10 pointer-events-none"
            >
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[2px] bg-gradient-to-r from-transparent to-cyan-500/20 origin-left rotate-[-45deg]" />
            </motion.div>

            {/* 2. THE PROCESSING CORE (Central Unit) */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-20 w-[300px] h-[300px] rounded-full flex items-center justify-center"
            >
                {/* Glass HUD Background */}
                <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-xl border border-cyan-500/20 rounded-full shadow-[0_0_60px_rgba(6,182,212,0.1)]" />
                
                {/* Active Pulse (Thinking) */}
                <motion.div 
                    animate={{ boxShadow: ["0 0 0px rgba(6,182,212,0)", "0 0 20px rgba(6,182,212,0.3)", "0 0 0px rgba(6,182,212,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border border-cyan-500/30"
                />

                {/* --- ANALYTICAL TEXT CONTENT --- */}
                <div className="relative z-30 flex flex-col items-center justify-center text-center px-4">
                    
                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 mb-4">
                         <Activity size={14} className="text-cyan-400 animate-pulse" />
                         <span className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">System: Optimizing</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                        מנוע אנליטי
                    </h3>
                    
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-3" />

                    <div className="text-sm md:text-base text-slate-300 font-mono space-y-1">
                        <p className="flex items-center justify-center gap-2">
                            <span className="text-rose-400">></span> מזהה היסוס
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <span className="text-purple-400">></span> בונה אמון
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <span className="text-emerald-400">></span> <span className="font-bold text-white bg-emerald-500/20 px-1 rounded">סוגר עסקה</span>
                        </p>
                    </div>
                </div>
            </motion.div>


            {/* 3. INTELLIGENT NODES (The Floating Insights) */}
            {dataNodes.map((node) => (
                <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: node.delay * 0.2, duration: 0.5 }}
                    className={`absolute hidden md:flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md z-30 ${node.bg} ${node.border} ${node.shadow}`}
                    style={{ 
                        transform: `translate(${node.x}, ${node.y})`,
                    }}
                >
                    <div className={`p-2 rounded-lg bg-black/40 ${node.color}`}>
                        <node.icon size={20} />
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-mono opacity-60 uppercase tracking-wider text-slate-400">{node.sub}</div>
                        <div className="text-sm font-bold text-white">{node.label}</div>
                    </div>
                    
                    {/* Connection Line to Core */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none -z-10 opacity-30">
                        {/* Coordinates are simplified, in real implementation calculation would be dynamic based on center */}
                        <line x1="50%" y1="50%" x2={parseInt(node.x) * -1.5} y2={parseInt(node.y) * -1.5} stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className={node.color} />
                    </svg>
                </motion.div>
            ))}

        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
        >
             <a 
                href="https://wa.me/972538227778"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-medium text-sm rounded-full overflow-hidden transition-all hover:border-cyan-500 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
                <span className="relative z-10 flex items-center gap-2">
                    <MousePointerClick size={16} />
                    תראה לי איפה אני מפסיד כסף
                </span>
             </a>
        </motion.div>

      </div>
    </section>
  );
});
