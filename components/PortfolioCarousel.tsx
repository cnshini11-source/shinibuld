import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation logic - Faster (3500ms) for better flow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  // 3D Cube Logic
  const getCardProps = (index: number) => {
    const total = projects.length;
    // Calculate relative position based on a circular list of 3 items
    // If current is 0: 0=Center, 1=Right, 2=Left
    // If current is 1: 1=Center, 2=Right, 0=Left
    // If current is 2: 2=Center, 0=Right, 1=Left
    
    let position = 'center';
    if (index === currentIndex) position = 'center';
    else if (index === (currentIndex + 1) % total) position = 'right';
    else position = 'left';

    const variants = {
      center: {
        zIndex: 30,
        x: '0%',
        scale: 1,
        opacity: 1,
        rotateY: 0,
        filter: 'brightness(1.1)',
      },
      right: {
        zIndex: 10,
        x: '65%', // Visible on the right
        scale: 0.85,
        opacity: 0.5,
        rotateY: -25, // Angled towards center
        filter: 'brightness(0.6)',
      },
      left: {
        zIndex: 10,
        x: '-65%', // Visible on the left
        scale: 0.85,
        opacity: 0.5,
        rotateY: 25, // Angled towards center
        filter: 'brightness(0.6)',
      }
    };

    return variants[position as keyof typeof variants];
  };

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03),transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Compact Header */}
        <div className="text-center mb-12 max-w-xl">
            <div className="flex items-center justify-center gap-2 mb-2 text-cyan-400 font-bold tracking-widest text-xs uppercase">
                <Zap size={14} />
                <span>Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
               האחרונים <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-600">שלי</span>
            </h2>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full h-[340px] flex justify-center items-center perspective-[1000px] transform-gpu">
            {/* We map directly without AnimatePresence to keep all 3 items in DOM for circular flow */}
            {projects.map((project, index) => {
                const props = getCardProps(index);
                const isActive = index === currentIndex;

                return (
                    <motion.div
                        key={index}
                        initial={false}
                        animate={props}
                        transition={{
                            duration: 0.7,
                            ease: [0.25, 1, 0.5, 1], // Cubic bezier for "Cube" feel
                        }}
                        className="absolute w-[300px] md:w-[380px] h-[280px] md:h-[320px] rounded-2xl cursor-pointer will-change-transform"
                        onClick={() => handleCardClick(index)}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Card Content Wrapper */}
                        <div 
                            className={`relative w-full h-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${project.border} ${isActive ? 'shadow-cyan-500/20 ring-1 ring-white/10' : ''}`}
                        >
                            {/* Active Link Wrapper */}
                            {isActive ? (
                                <a 
                                    href={project.link !== "#" ? project.link : undefined}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full group"
                                >
                                    <CardContent project={project} isActive={isActive} />
                                </a>
                            ) : (
                                <CardContent project={project} isActive={isActive} />
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
};

const CardContent = ({ project, isActive }: { project: typeof projects[0], isActive: boolean }) => (
    <>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Project Image Area */}
        <div className="absolute inset-0 bg-slate-950/50">
            {project.image ? (
                <div className="relative w-full h-full">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>
            ) : (
                <div className="relative w-full h-full flex flex-col opacity-50">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
                     <div className="mt-auto p-4 space-y-2">
                        <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                        <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                     </div>
                </div>
            )}
            
            {/* Overlay Icon */}
            {isActive && (
                <div className="absolute top-4 left-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                    </div>
                </div>
            )}
        </div>

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 mb-1.5 block">{project.category}</span>
                    <h3 className={`text-xl md:text-2xl font-bold text-white leading-tight ${isActive ? project.text_glow : ''}`}>
                        {project.title}
                    </h3>
                </div>
            </div>
        </div>
    </>
);