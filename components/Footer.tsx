import React, { useState, Suspense, lazy } from 'react';
import { Rocket, Github, Instagram, Facebook } from 'lucide-react';

// Lazy load the modal so it's only fetched when needed
const LegalModal = lazy(() => import('./LegalModal').then(module => ({ default: module.LegalModal })));

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-slate-950 border-t border-white/5 py-12 relative z-10 content-visibility-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-4 md:mb-0 group cursor-default">
              <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Rocket className="text-cyan-400 w-6 h-6 relative z-10 transform group-hover:-rotate-45 transition-transform duration-500" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white group-hover:text-cyan-100 transition-colors">SHINI</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 hover:scale-110 transition-all duration-300" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300" aria-label="Github"><Github size={20} /></a>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500">
            <p>© {new Date().getFullYear()} SHINI. כל הזכויות שמורות.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button onClick={() => setModalType('privacy')} className="hover:text-cyan-400 transition-colors">מדיניות פרטיות</button>
              <button onClick={() => setModalType('terms')} className="hover:text-cyan-400 transition-colors">תנאי שימוש</button>
            </div>
          </div>
        </div>
      </footer>

      <Suspense fallback={null}>
          <LegalModal 
            isOpen={!!modalType} 
            type={modalType} 
            onClose={() => setModalType(null)} 
          />
      </Suspense>
    </>
  );
};