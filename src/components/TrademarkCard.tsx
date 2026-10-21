import React from 'react';
import { ArrowUpRight, Lock, Sparkles, Clock } from 'lucide-react';
import { Trademark } from '../types/trademark';

interface TrademarkCardProps {
  trademark: Trademark;
  isFeatured?: boolean;
  onSelect: (trademark: Trademark) => void;
  onEnquire: (trademarkName: string) => void;
}

export const TrademarkCard: React.FC<TrademarkCardProps> = ({
  trademark,
  isFeatured = false,
  onSelect,
  onEnquire,
}) => {
  const isPlaceholder = trademark.isPlaceholder;

  if (isFeatured && !isPlaceholder) {
    // Featured Hero Card Style for "लाडला काटू"
    return (
      <div
        data-trademark-card
        className="relative bg-white rounded border border-[#292B28]/10 p-8 sm:p-10 shadow-xs hover:shadow-md transition-all duration-300 group overflow-hidden"
      >
        {/* Subtle decorative background motif */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#D6C3A1]/15 to-transparent pointer-events-none -mr-16 -mt-16" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl">
            {/* Slot & status line - NO PILLS, clean text */}
            <div className="flex items-center gap-2 text-xs text-[#263C32]/70 font-medium">
              <span className="text-[#B9A58C]">Featured Trademark</span>
              <span aria-hidden="true">·</span>
              <span>Slot 01 of 05</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#263C32]">{trademark.status}</span>
            </div>

            {/* Typography lockup */}
            <div className="space-y-1">
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#263C32]">
                {trademark.name}
              </h3>
              {trademark.romanizedName && (
                <p className="text-sm font-sans tracking-widest uppercase text-[#B9A58C] font-semibold">
                  {trademark.romanizedName}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#292B28]/80 leading-relaxed font-sans">
              {trademark.description}
            </p>

            {/* Grounded Note */}
            <div className="pt-2 text-xs text-[#292B28]/60 space-y-1">
              <p>Registration status, classification & documentation: available upon enquiry.</p>
              <p>Direct facilitation handled personally by Neeraj (Haryana, India).</p>
            </div>
          </div>

          {/* Action column */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 md:min-w-[200px]">
            <button
              onClick={() => onSelect(trademark)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] rounded transition-all cursor-pointer shadow-xs group"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => onEnquire(`${trademark.name} (${trademark.romanizedName || ''})`)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#263C32] bg-[#F6F2E9] hover:bg-[#E8DCC9] border border-[#292B28]/15 rounded transition-all cursor-pointer"
            >
              <span>Enquire Directly</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Regular or placeholder card
  return (
    <div
      data-trademark-card
      className={`relative bg-white rounded border border-[#292B28]/10 p-6 flex flex-col justify-between transition-all duration-200 group ${
        isPlaceholder
          ? 'bg-[#F6F2E9]/60 border-dashed border-[#292B28]/15'
          : 'hover:border-[#263C32]/30 hover:shadow-xs'
      }`}
    >
      <div>
        {/* Slot index and status */}
        <div className="flex items-center justify-between text-xs text-[#292B28]/60 mb-4">
          <span className="text-[#B9A58C] font-medium">Slot 0{trademark.slotNumber}</span>
          <span className={isPlaceholder ? 'text-[#B9A58C]' : 'text-[#263C32] font-medium'}>
            {trademark.status}
          </span>
        </div>

        {/* Title & Romanization */}
        <div className="space-y-1 mb-3">
          <h4
            className={`font-serif tracking-tight ${
              isPlaceholder
                ? 'text-lg text-[#292B28]/60 italic'
                : 'text-2xl font-semibold text-[#263C32]'
            }`}
          >
            {trademark.name}
          </h4>
          {trademark.romanizedName && (
            <p className="text-xs font-sans tracking-wider uppercase text-[#B9A58C]">
              {trademark.romanizedName}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-[#292B28]/70 leading-relaxed mb-6">
          {trademark.description}
        </p>
      </div>

      {/* Card actions */}
      <div className="pt-4 border-t border-[#292B28]/10 flex items-center justify-between gap-2">
        {isPlaceholder ? (
          <>
            <span className="text-[11px] text-[#292B28]/50 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B9A58C]" />
              <span>Pending owner confirmation</span>
            </span>
            <button
              onClick={() => onEnquire(`Slot 0${trademark.slotNumber} (Upcoming Listing)`)}
              className="text-xs font-medium text-[#263C32] hover:underline cursor-pointer"
            >
              Enquire
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onSelect(trademark)}
              className="text-xs font-medium text-[#263C32] hover:text-[#1C2E26] flex items-center gap-1 cursor-pointer group"
            >
              <span>Explore Mark</span>
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => onEnquire(`${trademark.name} (${trademark.romanizedName || ''})`)}
              className="px-3 py-1 text-xs font-medium text-[#263C32] bg-[#A8B5A0]/20 hover:bg-[#A8B5A0]/30 rounded transition-colors cursor-pointer"
            >
              Enquire
            </button>
          </>
        )}
      </div>
    </div>
  );
};
