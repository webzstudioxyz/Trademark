import React, { useState } from 'react';
import { ChevronDown, Search, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faq';

interface FaqPageProps {
  onNavigate: (page: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [openIds, setOpenIds] = useState<string[]>([FAQS[0].id, FAQS[1].id]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()) ||
      faq.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
          <span>Knowledge & Guidance</span>
          <span aria-hidden="true">·</span>
          <span>Neeraj Trademark Collection</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#263C32] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-[#292B28]/80 font-sans leading-relaxed">
          Clear, grounded answers about exploring trademark opportunities, verification, transfer documentation, and communicating with Neeraj.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#292B28]/40" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter questions by keyword (e.g. transfer, price, verification)..."
          className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-white border border-[#292B28]/15 rounded text-[#292B28] placeholder-[#292B28]/40 focus:outline-none focus:border-[#263C32]"
        />
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-[#292B28]/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F6F2E9]/40 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  {faq.category && (
                    <span className="text-[10px] uppercase tracking-wider text-[#B9A58C] font-semibold">
                      {faq.category}
                    </span>
                  )}
                  <h2 className="font-serif text-lg sm:text-xl font-medium text-[#263C32]">
                    {faq.question}
                  </h2>
                </div>
                <div className={`shrink-0 p-1 rounded transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#263C32]' : 'text-[#292B28]/40'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#292B28]/80 font-sans leading-relaxed border-t border-[#292B28]/5 bg-[#F6F2E9]/20 animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions CTA */}
      <div className="bg-[#E8DCC9]/40 rounded-xl p-8 border border-[#292B28]/10 text-center space-y-4">
        <h3 className="font-serif text-2xl font-medium text-[#263C32]">
          Have a question not addressed here?
        </h3>
        <p className="text-xs sm:text-sm text-[#292B28]/70 max-w-lg mx-auto leading-relaxed">
          Reach out directly to Neeraj with your specific enquiry, and we will be happy to provide clarification.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] rounded transition-all cursor-pointer shadow-xs"
        >
          <span>Ask a Question</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
