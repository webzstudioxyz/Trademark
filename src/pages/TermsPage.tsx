import React from 'react';
import { Scale, AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Draft Review Header Banner */}
      <div className="p-4 rounded-lg bg-[#D6C3A1]/30 border border-[#292B28]/15 flex items-start gap-3 text-xs text-[#292B28]">
        <AlertCircle className="w-4 h-4 text-[#263C32] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-[#263C32]">Draft Terms for Legal Review:</p>
          <p>
            These terms of use represent a foundational draft outlining the informational nature of trademark listings and the non-binding nature of website enquiries. This draft should be reviewed by qualified legal counsel prior to formal publication.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
          <span>Terms & Conditions</span>
          <span aria-hidden="true">·</span>
          <span>Draft Version 1.0</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#263C32] tracking-tight">
          Terms of Use
        </h1>
        <p className="text-xs text-[#292B28]/60">
          Last revised: October 2026 · Neeraj, Haryana, India
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#292B28]/10 space-y-8 text-sm text-[#292B28]/85 font-sans leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            1. Informational Nature of Website Listings
          </h2>
          <p>
            The content, catalog listings, descriptions, and materials on this website are provided solely for general informational purposes to introduce trademark opportunities curated by Neeraj in Haryana, India. Nothing on this website constitutes an offer to sell, an advertisement of regulated legal services, or a public solicitation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            2. Verification of Details and Registry Records
          </h2>
          <p>
            While every effort is made to maintain honest and accurate introductory descriptions, prospective buyers are explicitly advised and expected to verify all official records, registry statuses, application or registration certificates, classification schedules, and chain-of-title documentation independently through the relevant statutory registry (e.g., the Trade Marks Registry of India).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            3. Non-Binding Nature of Submissions
          </h2>
          <p>
            Submitting an enquiry through our contact form or indicating interest in a trademark (such as “लाडला काटू” or upcoming slots) does not constitute a purchase agreement, option, reservation, or binding contract. Availability, price, conditions of sale, and transfer arrangements must be confirmed and negotiated directly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            4. Formal Documentation & Statutory Transfer Requirements
          </h2>
          <p>
            No trademark ownership, license, or right is transferred via this website. Any actual assignment or transfer of a trademark requires the execution of formal legal instruments (including a written Deed of Assignment or Transfer Agreement), payment of requisite stamp duties, and compliance with statutory filing procedures before the competent trademark authority.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            5. No Legal Advice
          </h2>
          <p>
            The owner of this website is facilitating commercial trademark opportunities and does not provide legal representation, statutory trademark prosecution counsel, or formal legal advice. Prospective buyers should consult their own intellectual property advocates or trademark attorneys to evaluate legal compatibility with their intended commercial activities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            6. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permissible by applicable law, neither Neeraj nor any associated entity shall be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, the information provided on this website.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-[#292B28]/10 text-xs text-[#292B28]/70">
          <p>
            <strong>Applicable Law:</strong> These terms and any exploratory discussions conducted pursuant to this website shall be governed in accordance with the laws of India, subject to the jurisdiction of the courts in Haryana, India.
          </p>
        </section>

      </div>

    </div>
  );
};
