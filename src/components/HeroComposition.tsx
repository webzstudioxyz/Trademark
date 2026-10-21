import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export const HeroComposition: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto flex items-center justify-center p-6 select-none">
      
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E8DCC9]/40 via-transparent to-[#A8B5A0]/10 border border-[#292B28]/10 overflow-hidden shadow-xs">
        {/* Subtle geometric grid lines */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(#292B28 1px, transparent 1px), linear-gradient(90deg, #292B28 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Rotating concentric fine circles */}
      <svg
        className="absolute w-[92%] h-[92%] text-[#B9A58C]/40 animate-[spin_60s_linear_infinite]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="115" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
        {/* Quadrant tick marks */}
        <line x1="200" y1="8" x2="200" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="200" y1="376" x2="200" y2="392" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="200" x2="24" y2="200" stroke="currentColor" strokeWidth="1.5" />
        <line x1="376" y1="200" x2="392" y2="200" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Centerpiece Curated Trademark Plate */}
      <div className="relative z-10 w-full max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-xl border border-[#292B28]/15 p-6 sm:p-8 shadow-sm transition-transform duration-500 hover:scale-[1.01]">
        
        {/* Top Plate Kicker */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#B9A58C] border-b border-[#292B28]/10 pb-3 mb-5">
          <span className="font-semibold text-[#263C32]">TRADEMARK OPPORTUNITY</span>
          <span>SLOT 01</span>
        </div>

        {/* Featured Mark Artwork */}
        <div className="space-y-2 text-center py-4">
          <div className="relative inline-block">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#263C32] block">
              लाडला काटू
            </span>
            {/* Subtle moving highlight line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D6C3A1] to-transparent mt-2 animate-pulse" />
          </div>
          <p className="text-xs font-sans tracking-widest uppercase text-[#B9A58C] font-semibold pt-1">
            Ladla Kaatu
          </p>
        </div>

        {/* Verification Status Banner */}
        <div className="mt-5 pt-4 border-t border-[#292B28]/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#263C32]">
            <Shield className="w-3.5 h-3.5 text-[#263C32]" />
            <span className="font-medium">Direct Acquisition</span>
          </div>
          <span className="text-[11px] text-[#292B28]/60">Haryana, India</span>
        </div>

      </div>

      {/* Decorative floating architectural stamp in corner */}
      <div className="absolute bottom-4 right-4 z-20 bg-[#263C32] text-[#D6C3A1] text-[10px] font-sans font-medium uppercase tracking-widest px-3 py-1.5 rounded border border-[#324D41] shadow-xs">
        Curated Listing
      </div>

    </div>
  );
};
