import React from 'react';
import { ArrowRight, MapPin, Compass, Shield, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
          <MapPin className="w-3.5 h-3.5 text-[#263C32]" />
          <span>Haryana, India</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#263C32] tracking-tight text-balance">
          A More Considered Way to Discover a Brand Name.
        </h1>
        <p className="text-base sm:text-lg text-[#292B28]/80 font-sans leading-relaxed">
          Straightforward facilitation for entrepreneurs, businesses, and creators seeking distinctive trademark opportunities.
        </p>
      </div>

      {/* Main Narrative - Human, Grounded, Professional */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#292B28]/10 space-y-8 shadow-xs">
        <div className="space-y-6 text-base sm:text-lg text-[#292B28]/85 font-sans leading-relaxed">
          <p>
            Hello, and welcome. My name is <strong className="text-[#263C32] font-semibold">Neeraj</strong>, and I operate this trademark resale and acquisition initiative based in <strong className="text-[#263C32] font-semibold">Haryana, India</strong>.
          </p>

          <p>
            The purpose of this business is focused: to make selected trademark opportunities accessible to entrepreneurs, growing startups, and established enterprises who are searching for a distinctive, meaningful name for their next commercial endeavour.
          </p>

          <p>
            A brand name is more than a casual title. It is the primary mark under which reputation is built, customer trust is gathered, and commercial operations expand. Finding the right name often involves exploring different avenues, and acquiring an established or curated mark can provide a clear starting point.
          </p>

          <p>
            Rather than relying on automated broker platforms or impersonal directories, every enquiry on this website is handled directly. When you express interest in a listed trademark—such as “लाडला काटू” or an upcoming slot—we can discuss the mark, verify registry documentation together, evaluate commercial fit, and establish the practical steps required for transfer.
          </p>
        </div>

        {/* Operating Pillars */}
        <div className="pt-8 border-t border-[#292B28]/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-medium text-[#263C32]">
              Direct Dialogue
            </h4>
            <p className="text-xs text-[#292B28]/70 leading-relaxed">
              Every message is read and addressed personally, ensuring open communication without intermediaries.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-lg font-medium text-[#263C32]">
              Thorough Verification
            </h4>
            <p className="text-xs text-[#292B28]/70 leading-relaxed">
              Registry records, status, and relevant legal documents are reviewed prior to entering any binding agreement.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-lg font-medium text-[#263C32]">
              Clear Next Steps
            </h4>
            <p className="text-xs text-[#292B28]/70 leading-relaxed">
              From initial enquiry to assignment documentation, each phase is explained in plain language.
            </p>
          </div>
        </div>
      </div>

      {/* Practical Details Panel */}
      <div className="bg-[#E8DCC9]/30 rounded-xl p-8 border border-[#292B28]/10 space-y-4">
        <h3 className="font-serif text-2xl font-medium text-[#263C32]">
          Discussing an Opportunity
        </h3>
        <p className="text-sm text-[#292B28]/80 leading-relaxed font-sans">
          Whether you have questions about the currently featured trademark “लाडला काटू” or wish to enquire about our pending listings in slots 2 through 5, you are invited to get in touch.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] rounded transition-all cursor-pointer shadow-xs"
          >
            <span>Submit an Enquiry to Neeraj</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
