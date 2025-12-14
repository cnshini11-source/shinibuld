import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Use requestAnimationFrame for smoother performance during scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Passive listener improves scroll performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[90] will-change-transform"
        >
          <a
            href="https://wa.me/972538227778"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-row items-center gap-3 pl-5 pr-4 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] border border-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Glossy Reflection */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            
            {/* Shine Animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0 skew-x-12" />

            <div className="relative z-10 font-bold text-sm tracking-wide leading-none hidden sm:block">
              בוא נדבר תכלס
            </div>

            <div className="relative z-10">
                {/* Official WhatsApp SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.149.224-.579.73-.709.88-.131.149-.261.168-.486.056-.224-.112-.953-.351-1.815-1.12-.669-.597-1.12-1.335-1.25-1.56-.13-.224-.014-.345.098-.458.101-.101.224-.262.336-.393.112-.131.149-.224.224-.374.075-.149.037-.28-.019-.393-.056-.113-.504-1.214-.69-1.663-.181-.435-.366-.376-.504-.383-.13-.006-.28-.006-.429-.006-.15 0-.393.056-.599.28-.205.225-.785.767-.785 1.871 0 1.104.804 2.171.916 2.32.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.066-.056-.094-.206-.15-.43-.263" />
                </svg>

                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-red-500 border-2 border-[#128C7E] shadow-sm"></span>
                </span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};