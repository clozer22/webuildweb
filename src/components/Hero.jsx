import React from 'react';
import { ChevronDown } from 'lucide-react';
import Threads from './Threads';

export default function Hero({ onExploreWork }) {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-12 flex flex-col justify-between bg-white text-[#000000] relative overflow-hidden">
      
      {/* React Bits Threads Abstract Animation Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color="#B8B8B8"
        />
      </div>

      {/* Main Hero Center - Transparent WBW Icon + Custom Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col items-center justify-center text-center my-auto">
        <div className="flex flex-col items-center justify-center my-auto space-y-6">
          
          {/* Transparent WBW Icon Graphic */}
          <img
            src="/assets/wbw-icon-transparent.png"
            alt="WBW Transparent Logo Icon"
            className="w-full max-w-xl sm:max-w-2xl h-auto object-contain mx-auto pointer-events-none select-none transition-transform duration-700 hover:scale-[1.01]"
          />

          {/* Typography: "We Build Web" + "YOUR VISION, OUR IDEA." */}
          <div className="space-y-3 pt-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#000000]">
              We<span className="text-[#B7E200]">Build</span>Web
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.35em] text-[#000000] uppercase">
              YOUR VISION, OUR IDEA.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 text-center pb-6">
        <button
          onClick={onExploreWork}
          className="inline-flex flex-col items-center gap-1.5 text-xs font-mono tracking-widest text-[#000000] hover:text-[#B7E200] transition-colors cursor-pointer"
        >
          <span className="font-semibold uppercase tracking-widest text-[11px]">SCROLL</span>
          <ChevronDown className="w-4 h-4 text-[#B7E200] animate-bounce" />
        </button>
      </div>

    </section>
  );
}
