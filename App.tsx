import React, { Suspense, lazy } from 'react';

// --- Critical Components (Eager Load) ---
import { Header } from './components/Header';
import { Hero } from './components/Hero'; 
import { ScrollProgress } from './components/ScrollProgress';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// --- Helper for Named Exports Lazy Loading ---
const lazyLoad = (importFunc: Promise<any>, componentName: string) => {
  return lazy(() => importFunc.then((module) => ({ default: module[componentName] })));
};

// --- Lazy Loaded Components ---
const TechSection = lazyLoad(import('./components/TechSection'), 'TechSection');
const WhyChooseMe = lazyLoad(import('./components/WhyChooseMe'), 'WhyChooseMe');
const PortfolioCarousel = lazyLoad(import('./components/PortfolioCarousel'), 'PortfolioCarousel');
const ProcessSection = lazyLoad(import('./components/ProcessSection'), 'ProcessSection');
const Footer = lazyLoad(import('./components/Footer'), 'Footer');
const AccessibilityMenu = lazyLoad(import('./components/AccessibilityMenu'), 'AccessibilityMenu');

const SectionLoader = () => (
  <div className="w-full h-[300px] flex items-center justify-center bg-[#010206] opacity-50">
    <div className="w-px h-10 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
  </div>
);

function App() {
  return (
    <div className="bg-[#010206] min-h-screen text-white selection:bg-cyan-500/30 overflow-hidden relative">
      <ScrollProgress />
      <Header />
      
      <main>
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
            <div className="lazy-section">
                <TechSection />
            </div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
             <div className="lazy-section">
                <WhyChooseMe />
             </div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
             <div className="lazy-section">
                <PortfolioCarousel />
             </div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
             <div id="process" className="lazy-section scroll-mt-32">
                <ProcessSection />
             </div>
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-20 bg-slate-950" />}>
         <Footer />
      </Suspense>
      
      <WhatsAppFloat />
      
      <Suspense fallback={null}>
         <AccessibilityMenu />
      </Suspense>
    </div>
  );
}

export default App;