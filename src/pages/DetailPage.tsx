import React from 'react';
import { ArrowLeft, ArrowUpRight, Shield, FileCheck, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Trademark } from '../types/trademark';
import { TRADEMARKS } from '../data/trademarks';

interface DetailPageProps {
  trademark: Trademark;
  onBack: () => void;
  onSelectTrademark: (trademark: Trademark) => void;
  onEnquire: (trademarkName: string) => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({
  trademark,
  onBack,
  onSelectTrademark,
  onEnquire,
}) => {
  const isPlaceholder = trademark.isPlaceholder;
  const relatedMarks = TRADEMARKS.filter((tm) => tm.id !== trademark.id).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#263C32] hover:text-[#1C2E26] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Trademark Collection</span>
        </button>
      </div>

      {/* Main Feature Showcase Container */}
      <div className="bg-white rounded-2xl border border-[#292B28]/10 overflow-hidden shadow-xs">
        
        {/* Top Header Plate */}
        <div className="p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#F6F2E9] via-white to-[#E8DCC9]/40 border-b border-[#292B28]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs text-[#B9A58C]">
              <span className="font-semibold text-[#263C32]">Slot 0{trademark.slotNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{isPlaceholder ? 'Pending Confirmation' : 'Curated Opportunity'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#263C32] font-medium">{trademark.status}</span>
            </div>

            <div className="text-xs text-[#292B28]/60">
              Facilitated by Neeraj (Haryana, India)
            </div>
          </div>

          <div className="space-y-4 py-4 max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#263C32]">
              {trademark.name}
            </h1>
            {trademark.romanizedName && (
              <p className="text-base sm:text-lg font-sans tracking-widest uppercase text-[#B9A58C] font-semibold">
                {trademark.romanizedName}
              </p>
            )}
          </div>
        </div>

        {/* Detail Content Grid */}
        <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Description & Specifications */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
                Overview & Description
              </h3>
              <p className="text-base text-[#292B28]/85 font-sans leading-relaxed">
                {trademark.description}
              </p>
            </div>

            {/* Verification and Documentation Section */}
            <div className="space-y-4 pt-6 border-t border-[#292B28]/10">
              <h3 className="text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
                Documentation & Verification Status
              </h3>

              {trademark.documentationAvailable ? (
                <div className="p-5 rounded bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified Documentation Available</span>
                  </div>
                  <p>Certified details are on file for this listing.</p>
                </div>
              ) : (
                <div className="p-5 rounded bg-[#F6F2E9] border border-[#292B28]/10 text-xs text-[#292B28]/80 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#263C32]">
                    <AlertCircle className="w-4 h-4 text-[#B9A58C]" />
                    <span>Contact us for current details</span>
                  </div>
                  <p className="leading-relaxed">
                    Formal registration details, classes, and statutory documents are shared and confirmed directly with prospective acquirers during enquiry discussions. We do not publish preliminary legal records publicly without prior mutual agreement.
                  </p>
                </div>
              )}

              {/* Data attributes table */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between py-2 border-b border-[#292B28]/5 text-xs">
                  <span className="text-[#292B28]/60">Jurisdiction</span>
                  <span className="font-medium text-[#263C32]">
                    {trademark.jurisdiction || 'Available on enquiry'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#292B28]/5 text-xs">
                  <span className="text-[#292B28]/60">Classification & Goods</span>
                  <span className="text-[#292B28]/70">Discuss with owner</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#292B28]/5 text-xs">
                  <span className="text-[#292B28]/60">Acquisition Pathway</span>
                  <span className="text-[#263C32] font-medium">Direct negotiation & statutory deed</span>
                </div>
              </div>
            </div>

            {/* Note on legal transfer */}
            <div className="p-4 rounded bg-[#E8DCC9]/30 border border-[#292B28]/10 text-xs text-[#292B28]/70 space-y-1">
              <p className="font-semibold text-[#263C32]">Legal Transfer Notice</p>
              <p>
                Any eventual trademark assignment requires proper documentation and statutory filings in accordance with applicable trademark law and relevant registry procedures.
              </p>
            </div>
          </div>

          {/* Right Column: Acquisition Enquiry Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#263C32] text-[#F6F2E9] rounded-xl p-6 sm:p-8 space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#D6C3A1] font-semibold">
                  Direct Acquisition
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#F6F2E9]">
                  Enquire About “{trademark.name}”
                </h3>
                <p className="text-xs text-[#F6F2E9]/75 leading-relaxed font-sans">
                  Submit an enquiry to discuss availability, ownership status, pricing, and potential transfer arrangements directly with Neeraj.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={() => onEnquire(`${trademark.name} (${trademark.romanizedName || ''})`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#263C32] bg-[#D6C3A1] hover:bg-[#F6F2E9] rounded transition-all cursor-pointer font-sans shadow-xs"
                >
                  <span>Submit Acquisition Enquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4 border-t border-[#324D41] space-y-2 text-[11px] text-[#F6F2E9]/60">
                <p>· Enquiries are reviewed personally by Neeraj.</p>
                <p>· No automated commitments or hidden reservation fees.</p>
                <p>· Privacy maintained under our data policy.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Related Trademark Opportunities */}
      <div className="space-y-6 pt-6">
        <h3 className="font-serif text-2xl font-medium text-[#263C32] tracking-tight">
          Other Trademark Slots in This Collection
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedMarks.map((related) => (
            <div
              key={related.id}
              className="bg-white p-6 rounded border border-[#292B28]/10 hover:border-[#263C32]/30 transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-[#B9A58C]">
                <span>Slot 0{related.slotNumber}</span>
                <span>{related.status}</span>
              </div>
              <h4 className="font-serif text-lg font-medium text-[#263C32]">
                {related.name}
              </h4>
              <p className="text-xs text-[#292B28]/60 line-clamp-2">
                {related.description}
              </p>
              <button
                onClick={() => onSelectTrademark(related)}
                className="text-xs font-medium text-[#263C32] hover:underline cursor-pointer pt-2 block"
              >
                View slot details →
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
