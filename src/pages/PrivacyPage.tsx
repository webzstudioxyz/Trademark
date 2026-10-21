import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Draft Review Header Banner */}
      <div className="p-4 rounded-lg bg-[#D6C3A1]/30 border border-[#292B28]/15 flex items-start gap-3 text-xs text-[#292B28]">
        <AlertCircle className="w-4 h-4 text-[#263C32] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-[#263C32]">Draft Policy for Business Review:</p>
          <p>
            This document serves as an initial draft privacy policy for the trademark facilitation business operated by Neeraj in Haryana, India. It should be reviewed and completed with final operating details, specific notification emails, and formal local data practices prior to commercial deployment.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
          <span>Legal & Privacy</span>
          <span aria-hidden="true">·</span>
          <span>Draft Version 1.0</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#263C32] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#292B28]/60">
          Last revised: October 2026 · Neeraj, Haryana, India
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#292B28]/10 space-y-8 text-sm text-[#292B28]/85 font-sans leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            1. Overview
          </h2>
          <p>
            This website is maintained to present selected trademark opportunities and to enable interested parties (such as founders, businesses, and brand strategists) to enquire about acquiring them. This Privacy Policy outlines what information may be gathered when you interact with this website, particularly through the enquiry form, and how that information is handled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            2. Information We Collect
          </h2>
          <p>
            We collect only the personal information that you voluntarily choose to submit through our contact and enquiry forms. This typically includes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#292B28]/80">
            <li><strong>Full Name:</strong> To identify who we are communicating with.</li>
            <li><strong>Email Address:</strong> To send our direct reply and documentation.</li>
            <li><strong>Phone or WhatsApp Number (optional):</strong> If provided by you for direct voice or messaging contact.</li>
            <li><strong>Trademark of Interest & Enquiry Type:</strong> The specific mark or inquiry category you selected.</li>
            <li><strong>Message Details:</strong> Any context, proposed commercial use, or questions you include.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            3. Purpose of Collection
          </h2>
          <p>
            Information submitted is used solely for the following legitimate commercial purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#292B28]/80">
            <li>Responding directly to your enquiry regarding trademark availability, valuation, and classification.</li>
            <li>Engaging in bilateral discussions regarding potential acquisition or assignment terms.</li>
            <li>Maintaining a record of communication in the event the parties proceed to formal statutory documentation.</li>
          </ul>
          <p>
            We do not sell, rent, license, or monetize your contact information to third-party marketing brokers or advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            4. How Enquiries Are Handled & Stored
          </h2>
          <p>
            Enquiries are addressed directly by Neeraj. Submitted data is retained securely in local records for the period necessary to conduct commercial discussions, perform registry checks, or comply with statutory requirements under Indian law if an assignment is finalized.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            5. Access, Correction, and Deletion
          </h2>
          <p>
            If you have submitted an enquiry and wish to review, update, or request the deletion of your personal contact records, you may contact Neeraj directly through the website enquiry form requesting the removal or correction of your submitted data. Requests are handled in good faith subject to applicable statutory record-keeping requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-medium text-[#263C32]">
            6. Changes to this Policy
          </h2>
          <p>
            This policy may be updated periodically to reflect changes in our operational procedures or applicable regulatory standards. Any revisions will be reflected on this page with an updated revision date.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-[#292B28]/10 text-xs text-[#292B28]/70">
          <p>
            <strong>Contact:</strong> For questions concerning this Privacy Policy, please submit an enquiry via the Contact page with the enquiry type designated as "General Enquiry".
          </p>
        </section>

      </div>

    </div>
  );
};
