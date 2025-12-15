import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Zap } from 'lucide-react';

const projects = [
  {
    title: "Elegant Jewelry",
    category: "Premium E-Commerce",
    description: "אתר תדמית ומכירות יוקרתי לתכשיטים, המשלב עיצוב נקי ואנימציות עדינות.",
    gradient: "from-blue-600/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
    text_glow: "group-hover:text-cyan-400",
    link: "https://cnshini11-source.github.io/LEVI-ITZHAK-SHINI/",
    image: "https://i.imgur.com/iNQ0K2j.png"
  },
  {
    title: "Neon Estate",
    category: "Real Estate AI",
    description: "פלטפורמת נדלן חכמה המבוססת על בינה מלאכותית לאיתור נכסים.",
    gradient: "from-purple-600/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    text_glow: "group-hover:text-purple-400",
    link: "https://ai.studio/apps/drive/1Cn3hlhWMbrSUWayswo47JR921X2PgyIX"
  },
  {
    title: "Quantum Fitness",
    category: "Health & Sport",
    description: "דף נחיתה הממיר בטירוף עבור מותג כושר בינלאומי.",
    gradient: "from-emerald-600/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    text_glow: "group-hover:text-emerald-400",
    link: "#" // Placeholder
  }
];

export const PortfolioCarousel: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right"
            >
                <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold tracking-widest text-sm uppercase">
                    <Zap size={16} />
                    <span>Selected Work</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                הפרוייקטים ה<span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-600">אחרונים שלי</span>
                </h2>
            </motion.div>

            <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-slate-400 max-w-md text-lg leading-relaxed md:pb-2"
            >
                כל פרויקט הוא יצירת אמנות טכנולוגית. הנה הצצה לעבודות נבחרות המשלבות עיצוב מדויק וביצועים מקסימליים.
            </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.a
                    href={project.link !== "#" ? project.link : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className={`group relative h-[450px] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${project.border} ${project.link === "#" ? "cursor-default opacity-80" : "cursor-pointer"}`}
                >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                    {/* Project Preview (Image or Abstract UI) */}
                    <div className="absolute inset-x-6 top-6 bottom-32 bg-slate-950/50 rounded-xl border border-white/5 overflow-hidden backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">
                         
                         {project.image ? (
                            // Image Mode
                            <div className="relative w-full h-full">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                {/* Inner Shadow for depth */}
                                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]" />
                            </div>
                         ) : (
                            // Abstract UI Mode (Fallback for other projects)
                            <>
                                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <div className="p-4 space-y-3 opacity-50 group-hover:opacity-80 transition-opacity">
                                    <div className="w-1/3 h-2 bg-white/20 rounded-full" />
                                    <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                        <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                                        <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                                    </div>
                                    <div className="w-full h-24 bg-gradient-to-br from-white/5 to-transparent rounded-lg mt-2" />
                                </div>
                            </>
                         )}
                         
                         {/* Overlay Icon */}
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                             <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                 <ArrowUpRight size={24} strokeWidth={2.5} />
                             </div>
                         </div>
                    </div>

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-12 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1 block">{project.category}</span>
                                <h3 className={`text-2xl font-black text-white transition-colors duration-300 ${project.text_glow}`}>
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors">
                            {project.description}
                        </p>
                    </div>

                    {/* Corner Decoration */}
                    {project.link !== "#" && (
                        <div className="absolute top-4 left-4 p-2 bg-white/5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10">
                            <ExternalLink size={16} className="text-white" />
                        </div>
                    )}
                </motion.a>
            ))}
        </div>

      </div>
    </section>
  );
};