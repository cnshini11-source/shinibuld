
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, Type, Sun, Link as LinkIcon, RotateCcw, EyeOff, X, Zap, MousePointer2, AlignJustify, Contrast } from 'lucide-react';

export const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    document.body.classList.toggle('acc-grayscale', grayscale);
    document.body.classList.toggle('acc-high-contrast', highContrast);
    document.body.classList.toggle('acc-invert', invertColors);
    document.body.classList.toggle('acc-highlight-links', highlightLinks);
    document.body.classList.toggle('acc-hide-images', hideImages);
    document.body.classList.toggle('acc-readable-font', readableFont);
    document.body.classList.toggle('acc-stop-animations', stopAnimations);
    document.body.classList.toggle('acc-big-cursor', bigCursor);
  }, [fontSize, grayscale, highContrast, invertColors, highlightLinks, hideImages, readableFont, stopAnimations, bigCursor]);

  useEffect(() => {
    const styleId = 'accessibility-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .acc-grayscale { filter: grayscale(100%); }
        .acc-high-contrast { filter: contrast(150%); }
        .acc-invert { filter: invert(100%); background-color: white; }
        .acc-invert img, .acc-invert video { filter: invert(100%); }
        
        .acc-highlight-links a, .acc-highlight-links button {
            text-decoration: underline !important;
            color: #FFFF00 !important;
            background-color: #000 !important;
            border: 2px solid #FFFF00 !important; 
        }
        
        .acc-hide-images img, .acc-hide-images video, .acc-hide-images canvas, .acc-hide-images svg:not(.acc-icon):not(.acc-control-icon) {
            opacity: 0 !important;
            visibility: hidden !important;
        }
        
        .acc-readable-font * {
            font-family: Arial, Helvetica, sans-serif !important;
            letter-spacing: normal !important;
            word-spacing: normal !important;
        }

        .acc-stop-animations *, .acc-stop-animations *::before, .acc-stop-animations *::after {
            animation: none !important;
            transition: none !important;
            transform: none !important;
        }

        .acc-big-cursor, .acc-big-cursor * {
            cursor: default !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const reset = () => {
    setFontSize(100);
    setGrayscale(false);
    setHighContrast(false);
    setInvertColors(false);
    setHighlightLinks(false);
    setHideImages(false);
    setReadableFont(false);
    setStopAnimations(false);
    setBigCursor(false);
  };

  const ToggleButton = ({ active, onClick, icon: Icon, label }: { active: boolean, onClick: () => void, icon: any, label: string }) => (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg transition-all duration-200 border ${
        active 
          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' 
          : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'
      }`}
    >
      <Icon size={20} className="acc-control-icon" />
      <span className="text-[10px] font-medium leading-none text-center">{label}</span>
    </button>
  );

  return (
    <div className="fixed bottom-6 left-6 z-[100] font-sans group">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95, originY: 1, originX: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-14 left-0 bg-slate-900 border border-white/10 rounded-xl shadow-2xl w-[320px] origin-bottom-left overflow-hidden"
          >
            <div className="flex justify-between items-center p-3 bg-white/5 border-b border-white/5">
                <span className="font-bold text-white text-sm">כלי נגישות</span>
                <div className="flex gap-2">
                    <button onClick={reset} title="איפוס הגדרות" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <RotateCcw size={16} className="acc-control-icon" />
                    </button>
                    <button onClick={() => setIsOpen(false)} title="סגור" className="text-slate-400 hover:text-white transition-colors">
                        <X size={18} className="acc-control-icon" />
                    </button>
                </div>
            </div>
            
            <div className="p-4 space-y-4">
                <div className="bg-white/5 rounded-lg p-2 flex justify-between items-center">
                    <button 
                        onClick={() => setFontSize(s => Math.max(s - 10, 80))}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded text-white transition-colors"
                    >
                        <Type size={14} className="acc-control-icon" />
                    </button>
                    <div className="flex flex-col items-center">
                        <span className="text-xs text-slate-400">גודל טקסט</span>
                        <span className="text-sm font-bold text-cyan-400">{fontSize}%</span>
                    </div>
                    <button 
                        onClick={() => setFontSize(s => Math.min(s + 10, 150))}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded text-white transition-colors"
                    >
                        <Type size={20} className="acc-control-icon" />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <ToggleButton active={grayscale} onClick={() => setGrayscale(!grayscale)} icon={Sun} label="גווני אפור" />
                    <ToggleButton active={highContrast} onClick={() => setHighContrast(!highContrast)} icon={Contrast} label="ניגודיות" />
                    <ToggleButton active={invertColors} onClick={() => setInvertColors(!invertColors)} icon={Zap} label="היפוך צבעים" />
                    
                    <ToggleButton active={highlightLinks} onClick={() => setHighlightLinks(!highlightLinks)} icon={LinkIcon} label="הדגשת קישורים" />
                    <ToggleButton active={readableFont} onClick={() => setReadableFont(!readableFont)} icon={AlignJustify} label="פונט קריא" />
                    <ToggleButton active={stopAnimations} onClick={() => setStopAnimations(!stopAnimations)} icon={EyeOff} label="עצור אנימציה" />
                    
                    <ToggleButton active={hideImages} onClick={() => setHideImages(!hideImages)} icon={X} label="הסתר תמונות" />
                    <ToggleButton active={bigCursor} onClick={() => setBigCursor(!bigCursor)} icon={MousePointer2} label="סמן גדול" />
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 ${isOpen ? 'bg-cyan-500 text-black rotate-180' : 'bg-slate-900 text-cyan-400 border border-cyan-500/50 hover:bg-slate-800'}`}
        aria-label="פתח תפריט נגישות"
      >
        <Accessibility size={20} className="acc-icon" />
      </motion.button>
    </div>
  );
};
