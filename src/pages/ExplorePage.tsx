import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpRight, Clock, Shield, Sparkles, X } from 'lucide-react';
import { TRADEMARKS } from '../data/trademarks';
import { Trademark } from '../types/trademark';

interface ExplorePageProps {
  onSelectTrademark: (trademark: Trademark) => void;
  onEnquire: (trademarkName: string) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  onSelectTrademark,
  onEnquire,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'active' | 'upcoming'>('all');

  const filteredTrademarks = useMemo(() => {
    return TRADEMARKS.filter((tm) => {
      // Filter by type
      if (filterType === 'active' && tm.isPlaceholder) return false;
      if (filterType === 'upcoming' && !tm.isPlaceholder) return false;

      // Filter by search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchName = tm.name.toLowerCase().includes(q);
      const matchRoman = tm.romanizedName?.toLowerCase().includes(q) || false;
      const matchDesc = tm.description.toLowerCase().includes(q);
      const matchStatus = tm.status.toLowerCase().includes(q);

      return matchName || matchRoman || matchDesc || matchStatus;
    });
  }, [searchQuery, filterType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
          <span>Catalog & Opportunities</span>
          <span aria-hidden="true">·</span>
          <span>Haryana, India</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#263C32] tracking-tight">
          Explore Available Trademarks
        </h1>
        <p className="text-base text-[#292B28]/80 font-sans leading-relaxed">
          Browse current listings and upcoming slots in our curated collection. Every mark is made available for direct acquisition discussions with Neeraj.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white p-4 sm:p-6 rounded border border-[#292B28]/10 space-y-4 shadow-xs">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#292B28]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by trademark name (e.g. लाडला काटू, Ladla)..."
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-[#F6F2E9]/50 border border-[#292B28]/15 rounded text-[#292B28] placeholder-[#292B28]/40 focus:outline-none focus:border-[#263C32]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#292B28]/40 hover:text-[#292B28]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter segment tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F6F2E9] rounded border border-[#292B28]/10 self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'all'
                  ? 'bg-white text-[#263C32] shadow-xs font-semibold'
                  : 'text-[#292B28]/70 hover:text-[#263C32]'
              }`}
            >
              All Slots (5)
            </button>
            <button
              onClick={() => setFilterType('active')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'active'
                  ? 'bg-white text-[#263C32] shadow-xs font-semibold'
                  : 'text-[#292B28]/70 hover:text-[#263C32]'
              }`}
            >
              Active Mark (1)
            </button>
            <button
              onClick={() => setFilterType('upcoming')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'upcoming'
                  ? 'bg-white text-[#263C32] shadow-xs font-semibold'
                  : 'text-[#292B28]/70 hover:text-[#263C32]'
              }`}
            >
              Upcoming Slots (4)
            </button>
          </div>

        </div>

        {/* Informational grounded note */}
        <div className="text-[11px] text-[#292B28]/60 flex items-center justify-between border-t border-[#292B28]/5 pt-3">
          <span>Showing {filteredTrademarks.length} {filteredTrademarks.length === 1 ? 'result' : 'results'}</span>
          <span>Placeholder slots represent upcoming opportunities awaiting owner confirmation</span>
        </div>
      </div>

      {/* Grid of Trademarks */}
      {filteredTrademarks.length === 0 ? (
        <div className="text-center py-20 bg-white rounded border border-[#292B28]/10 p-8 space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#E8DCC9]/40 flex items-center justify-center text-[#B9A58C]">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-[#263C32]">No trademarks match your query</h3>
          <p className="text-xs sm:text-sm text-[#292B28]/60 max-w-md mx-auto">
            We couldn't find any trademark matching "{searchQuery}". Clear your search query or view all available listings.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterType('all');
            }}
            className="px-4 py-2 text-xs font-medium text-[#263C32] bg-[#F6F2E9] hover:bg-[#E8DCC9] rounded border border-[#292B28]/15"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrademarks.map((trademark) => {
            const isPlaceholder = trademark.isPlaceholder;

            return (
              <div
                key={trademark.id}
                data-trademark-card
                className={`bg-white rounded border flex flex-col justify-between transition-all duration-300 ${
                  isPlaceholder
                    ? 'border-dashed border-[#292B28]/20 bg-[#F6F2E9]/40'
                    : 'border-[#292B28]/15 hover:border-[#263C32]/40 hover:shadow-sm'
                }`}
              >
                {/* Visual Header / Plaque */}
                <div className={`p-8 border-b ${isPlaceholder ? 'border-dashed border-[#292B28]/15 bg-[#F6F2E9]/80' : 'border-[#292B28]/10 bg-gradient-to-b from-[#F6F2E9]/60 to-white'}`}>
                  <div className="flex items-center justify-between text-xs text-[#B9A58C] mb-6">
                    <span className="font-semibold text-[#263C32]">Slot 0{trademark.slotNumber}</span>
                    <span className="text-[11px] font-sans">{trademark.status}</span>
                  </div>

                  <div className="space-y-2 text-center py-4">
                    <h2
                      className={`font-serif tracking-tight leading-tight ${
                        isPlaceholder
                          ? 'text-xl text-[#292B28]/50 italic font-normal'
                          : 'text-3xl sm:text-4xl font-medium text-[#263C32]'
                      }`}
                    >
                      {trademark.name}
                    </h2>
                    {trademark.romanizedName && (
                      <p className="text-xs font-sans tracking-widest uppercase text-[#B9A58C] font-semibold">
                        {trademark.romanizedName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-[#292B28]/75 leading-relaxed font-sans">
                      {trademark.description}
                    </p>

                    {/* Metadata items if available - clean unboxed typography */}
                    {!isPlaceholder && (
                      <div className="pt-2 border-t border-[#292B28]/10 space-y-1.5 text-xs text-[#292B28]/70">
                        {trademark.jurisdiction && (
                          <div className="flex items-baseline justify-between">
                            <span className="text-[#B9A58C]">Jurisdiction</span>
                            <span className="font-medium text-[#263C32]">{trademark.jurisdiction}</span>
                          </div>
                        )}
                        <div className="flex items-baseline justify-between">
                          <span className="text-[#B9A58C]">Class / Registration</span>
                          <span className="text-[#292B28]/60">Available on enquiry</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#292B28]/10 flex items-center justify-between gap-3">
                    {isPlaceholder ? (
                      <>
                        <span className="text-[11px] text-[#292B28]/50 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#B9A58C]" />
                          <span>Details pending</span>
                        </span>
                        <button
                          onClick={() => onEnquire(`Slot 0${trademark.slotNumber} (Upcoming Listing)`)}
                          className="px-3 py-1.5 text-xs font-medium text-[#263C32] bg-[#E8DCC9]/40 hover:bg-[#E8DCC9] rounded transition-colors cursor-pointer"
                        >
                          Enquire
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => onSelectTrademark(trademark)}
                          className="text-xs font-medium text-[#263C32] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Full Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onEnquire(`${trademark.name} (${trademark.romanizedName || ''})`)}
                          className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] rounded transition-all cursor-pointer"
                        >
                          Enquire
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Informational footer notice on the catalog page */}
      <div className="bg-[#E8DCC9]/30 rounded p-6 border border-[#292B28]/10 text-xs text-[#292B28]/70 space-y-2">
        <p className="font-semibold text-[#263C32]">Catalog Policy & Future Slots</p>
        <p>
          The trademark “लाडला काटू” is currently available for direct inquiry. The remaining four slots represent additional trademark opportunities that will be published once their specific details are confirmed by the owner. You may enquire about any upcoming slot or discuss a specific name requirement with Neeraj at any time.
        </p>
      </div>

    </div>
  );
};
