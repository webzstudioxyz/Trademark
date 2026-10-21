import React from 'react';
import { ArrowRight, Search, FileText, MessageSquare, Scale, CheckCircle2, ShieldAlert } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Browse the Collection',
      description:
        'Explore our published trademarks and upcoming slots. Consider how the mark sounds, what industry sectors it evokes, and whether its character suits your commercial roadmap.',
    },
    {
      num: '02',
      title: 'Identify a Trademark of Interest',
      description:
        'Select the mark that catches your attention—such as “लाडला काटू” (Slot 01) or a pending slot—and review the general introductory details on its listing card.',
    },
    {
      num: '03',
      title: 'Submit an Enquiry',
      description:
        'Fill out our simple enquiry form with your contact details and questions. Tell us a bit about your intended application or the information you need before deciding.',
    },
    {
      num: '04',
      title: 'Direct Consultation & Verification',
      description:
        'Neeraj reviews your submission and connects with you directly. Together, you will discuss current registration status, relevant goods/services classifications, pricing expectations, and official registry documentation.',
    },
    {
      num: '05',
      title: 'Mutual Agreement & Formal Transfer',
      description:
        'Only after both parties are satisfied with the verification and commercial terms do you proceed to formal assignment. An appropriate assignment agreement and statutory paperwork are executed under the applicable legal framework.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
          <span>Acquisition Framework</span>
          <span aria-hidden="true">·</span>
          <span>Neeraj Trademark Collection</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#263C32] tracking-tight">
          How the Trademark Acquisition Process Works
        </h1>
        <p className="text-base sm:text-lg text-[#292B28]/80 font-sans leading-relaxed">
          From your initial discovery to formal assignment, every stage is structured for clarity, mutual verification, and direct communication.
        </p>
      </div>

      {/* Numbered Steps */}
      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-white p-8 rounded-xl border border-[#292B28]/10 flex flex-col md:flex-row gap-6 md:items-start transition-all hover:border-[#263C32]/30"
          >
            <div className="shrink-0">
              <span className="font-serif text-4xl text-[#B9A58C] font-light">
                {step.num}
              </span>
            </div>
            <div className="space-y-2 flex-1">
              <h2 className="font-serif text-2xl font-medium text-[#263C32]">
                {step.title}
              </h2>
              <p className="text-sm text-[#292B28]/75 font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Jurisdictional & Legal Notice */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#263C32] text-[#F6F2E9] space-y-4">
        <div className="flex items-center gap-2 text-[#D6C3A1] text-xs uppercase tracking-wider font-semibold">
          <Scale className="w-4 h-4" />
          <span>Statutory Framework Notice</span>
        </div>
        <h3 className="font-serif text-2xl font-medium text-[#F6F2E9]">
          Jurisdiction & Formal Documentation
        </h3>
        <p className="text-xs sm:text-sm text-[#F6F2E9]/80 leading-relaxed font-sans">
          Trademark assignments, licensing, and transfers are governed by statutory trademark legislation in the relevant jurisdiction (such as the Trade Marks Act, 1999 and the Trade Marks Rules in India). The formal requirements, documentation (such as Deeds of Assignment), government stamp duty, and official registry forms vary depending on whether the mark is applied-for or registered, and whether it is transferred with or without goodwill.
        </p>
        <p className="text-xs text-[#A8B5A0] leading-relaxed">
          We encourage all parties to seek independent legal advice if required. Submitting an enquiry through this site expresses mutual interest and begins exploratory conversation; it does not constitute legal representation or an irrevocable contract.
        </p>
      </div>

      {/* Action Strip */}
      <div className="bg-[#E8DCC9]/40 rounded-xl p-8 border border-[#292B28]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-medium text-[#263C32]">
            Ready to explore our listings?
          </h3>
          <p className="text-xs text-[#292B28]/70">
            Check the available trademarks or enquire about upcoming slots.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('explore')}
            className="px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] rounded transition-all cursor-pointer shadow-xs"
          >
            Explore Trademarks
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#263C32] bg-white border border-[#292B28]/20 hover:bg-[#F6F2E9] rounded transition-all cursor-pointer"
          >
            Contact Neeraj
          </button>
        </div>
      </div>

    </div>
  );
};
