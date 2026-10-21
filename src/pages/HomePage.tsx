import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, HelpCircle, Compass, FileText, CheckCircle2 } from 'lucide-react';
import { HeroComposition } from '../components/HeroComposition';
import { TrademarkCard } from '../components/TrademarkCard';
import { TRADEMARKS } from '../data/trademarks';
import { FAQS } from '../data/faq';
import { Trademark } from '../types/trademark';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
  onSelectTrademark: (trademark: Trademark) => void;
  onEnquire: (trademarkName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectTrademark,
  onEnquire,
}) => {
  const featuredTrademark = TRADEMARKS[0]; // "लाडला काटू"
  const otherSlots = TRADEMARKS.slice(1);
  const previewFaqs = FAQS.slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* SECTION 1: HERO */}
      <section className="pt-8 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
                <span className="w-8 h-[1px] bg-[#B9A58C]" />
                <span>Haryana, India · Curated Trademarks</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#263C32] leading-[1.08] text-balance">
                A Name Can Be the Beginning of Something Big.
              </h1>

              <p className="text-base sm:text-lg text-[#292B28]/80 max-w-xl font-sans leading-relaxed">
                Explore selected trademark opportunities and find a name that fits your next business move. Enquire directly to review details, status, and acquisition possibilities.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('explore')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] rounded transition-all cursor-pointer shadow-xs group"
                >
                  <span>Explore Trademarks</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-[#263C32] bg-transparent hover:bg-[#E8DCC9]/50 border border-[#263C32]/30 rounded transition-all cursor-pointer"
                >
                  <span>Discuss an Opportunity</span>
                </button>
              </div>

              {/* Informational assurance */}
              <div className="pt-4 flex items-center gap-2 text-xs text-[#292B28]/60">
                <ShieldCheck className="w-4 h-4 text-[#A8B5A0] shrink-0" />
                <span>Direct personal dialogue with Neeraj · Verification confirmed prior to any formal agreement</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Composition */}
            <div className="lg:col-span-5">
              <HeroComposition />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#292B28]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B9A58C]">
            Our Perspective
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#263C32] tracking-tight">
            The Right Name Deserves a Closer Look.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#292B28]/80 leading-relaxed font-sans max-w-2xl mx-auto text-balance">
            <p>
              Choosing a brand name is one of the most consequential steps for a new venture or expanding enterprise. A distinctive mark gives an organization memorable identity, customer recognition, and clear market boundaries.
            </p>
            <p className="text-sm sm:text-base text-[#292B28]/70">
              This platform provides a straightforward venue to discover selected trademark opportunities and begin an open conversation about acquiring one. Rather than navigating convoluted intermediaries, you can speak directly with Neeraj about available listings and the steps needed to proceed.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED TRADEMARKS COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#292B28]/10 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B9A58C]">
              Trademark Catalog
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#263C32] tracking-tight">
              Selected Trademark Opportunities
            </h2>
          </div>
          <button
            onClick={() => onNavigate('explore')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#263C32] hover:text-[#1C2E26] cursor-pointer group"
          >
            <span>View All 5 Slots</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Prominent Slot 1: लाडला काटू */}
        <div>
          <TrademarkCard
            trademark={featuredTrademark}
            isFeatured={true}
            onSelect={onSelectTrademark}
            onEnquire={onEnquire}
          />
        </div>

        {/* Slots 2 through 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherSlots.map((slot) => (
            <TrademarkCard
              key={slot.id}
              trademark={slot}
              onSelect={onSelectTrademark}
              onEnquire={onEnquire}
            />
          ))}
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="bg-[#263C32] text-[#F6F2E9] py-20 border-y border-[#324D41]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D6C3A1]">
              Straightforward Facilitation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F6F2E9] tracking-tight">
              How the Process Works
            </h2>
            <p className="text-sm sm:text-base text-[#F6F2E9]/75 font-sans leading-relaxed">
              We maintain a transparent, step-by-step enquiry procedure so both parties have complete clarity before any formal commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 01 */}
            <div className="space-y-4 p-6 rounded bg-[#1C2E26]/60 border border-[#324D41]">
              <span className="font-serif text-3xl text-[#D6C3A1] font-light">01.</span>
              <h3 className="font-serif text-xl font-medium text-[#F6F2E9]">
                Explore Available Trademarks
              </h3>
              <p className="text-xs text-[#F6F2E9]/70 leading-relaxed font-sans">
                Review the current portfolio of trademark opportunities, including published listings and upcoming slots.
              </p>
            </div>

            {/* Step 02 */}
            <div className="space-y-4 p-6 rounded bg-[#1C2E26]/60 border border-[#324D41]">
              <span className="font-serif text-3xl text-[#D6C3A1] font-light">02.</span>
              <h3 className="font-serif text-xl font-medium text-[#F6F2E9]">
                Choose an Opportunity
              </h3>
              <p className="text-xs text-[#F6F2E9]/70 leading-relaxed font-sans">
                Identify the mark that aligns with your planned sector, brand strategy, and commercial ambitions.
              </p>
            </div>

            {/* Step 03 */}
            <div className="space-y-4 p-6 rounded bg-[#1C2E26]/60 border border-[#324D41]">
              <span className="font-serif text-3xl text-[#D6C3A1] font-light">03.</span>
              <h3 className="font-serif text-xl font-medium text-[#F6F2E9]">
                Submit an Enquiry
              </h3>
              <p className="text-xs text-[#F6F2E9]/70 leading-relaxed font-sans">
                Complete the validated contact form with your details, the trademark of interest, and your specific requirements.
              </p>
            </div>

            {/* Step 04 */}
            <div className="space-y-4 p-6 rounded bg-[#1C2E26]/60 border border-[#324D41]">
              <span className="font-serif text-3xl text-[#D6C3A1] font-light">04.</span>
              <h3 className="font-serif text-xl font-medium text-[#F6F2E9]">
                Direct Discussion & Verification
              </h3>
              <p className="text-xs text-[#F6F2E9]/70 leading-relaxed font-sans">
                Discuss availability, ownership documentation, statutory requirements, and transfer arrangements directly with Neeraj.
              </p>
            </div>
          </div>

          <div className="p-4 rounded bg-[#1C2E26]/40 border border-[#324D41]/80 text-xs text-[#F6F2E9]/70 max-w-3xl">
            <strong className="text-[#D6C3A1]">Important Note:</strong> An enquiry does not create an automatic or guaranteed transfer. Formal acquisition is subject to official verification, mutual commercial agreement, and appropriate statutory documentation.
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY EXPLORE THESE OPPORTUNITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B9A58C]">
            Core Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#263C32] tracking-tight">
            Why Explore These Opportunities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3 p-6 bg-white rounded border border-[#292B28]/10">
            <h3 className="font-serif text-xl font-medium text-[#263C32]">
              A Curated Selection of Names
            </h3>
            <p className="text-xs text-[#292B28]/75 leading-relaxed font-sans">
              Each listed mark is made available thoughtfully for prospective founders and businesses looking for distinct brand identity.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white rounded border border-[#292B28]/10">
            <h3 className="font-serif text-xl font-medium text-[#263C32]">
              Straightforward Enquiry Process
            </h3>
            <p className="text-xs text-[#292B28]/75 leading-relaxed font-sans">
              No hidden hurdles or opaque bidding systems. Submit your contact details and message to initiate clear communication.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white rounded border border-[#292B28]/10">
            <h3 className="font-serif text-xl font-medium text-[#263C32]">
              Direct Communication
            </h3>
            <p className="text-xs text-[#292B28]/75 leading-relaxed font-sans">
              You speak directly with Neeraj about the opportunity, enabling pragmatic discussions about fit and next steps.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white rounded border border-[#292B28]/10">
            <h3 className="font-serif text-xl font-medium text-[#263C32]">
              Relevant Information First
            </h3>
            <p className="text-xs text-[#292B28]/75 leading-relaxed font-sans">
              Review details and verify official records before taking any binding step toward acquiring a mark.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8DCC9]/40 rounded-2xl border border-[#292B28]/10 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B9A58C]">
                The Business Behind the Marks
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#263C32] tracking-tight">
                Facilitating Trademark Acquisitions from Haryana, India
              </h2>
              <p className="text-sm sm:text-base text-[#292B28]/80 leading-relaxed font-sans max-w-2xl">
                The business is owned and operated by Neeraj, based in Haryana, India. It focuses on buying, selling, and facilitating the acquisition of selected trademarks for entrepreneurs, businesses, and creators.
              </p>
              <p className="text-xs sm:text-sm text-[#292B28]/70 leading-relaxed font-sans max-w-2xl">
                Every enquiry is addressed personally with a grounded, practical approach to understanding what you are building and whether a particular name serves your venture well.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] rounded transition-all cursor-pointer shadow-xs group"
              >
                <span>Read About Neeraj</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#292B28]/10 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B9A58C]">
              Clarity & Common Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#263C32] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <button
            onClick={() => onNavigate('faqs')}
            className="text-xs font-semibold uppercase tracking-wider text-[#263C32] hover:underline cursor-pointer"
          >
            View All Questions & Answers →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white p-6 rounded border border-[#292B28]/10 space-y-3"
            >
              <h3 className="font-serif text-lg font-medium text-[#263C32]">
                {faq.question}
              </h3>
              <p className="text-xs text-[#292B28]/75 leading-relaxed font-sans">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#263C32] text-[#F6F2E9] rounded-2xl p-10 sm:p-14 lg:p-16 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F6F2E9]">
            Have a Name in Mind?
          </h2>
          <p className="text-sm sm:text-base text-[#F6F2E9]/80 max-w-xl mx-auto font-sans leading-relaxed">
            Whether you are interested in “लाडला काटू” or looking for a specific brand opportunity for your business, submit an enquiry to discuss current opportunities directly with Neeraj.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-xs font-medium uppercase tracking-wider text-[#263C32] bg-[#D6C3A1] hover:bg-[#F6F2E9] rounded transition-all cursor-pointer font-sans shadow-xs"
            >
              Start an Enquiry
            </button>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-4 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] hover:bg-white/10 border border-[#F6F2E9]/30 rounded transition-all cursor-pointer font-sans"
            >
              Understand the Process
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
