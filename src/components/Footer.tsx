import React from 'react';
import { ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenOwnerInbox: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenOwnerInbox }) => {
  return (
    <footer className="bg-[#263C32] text-[#F6F2E9] pt-16 pb-12 border-t border-[#324D41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#324D41]">
          
          {/* Col 1: Identity & Location */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl font-semibold tracking-tight text-[#F6F2E9]">
                NEERAJ
              </span>
              <p className="text-xs uppercase tracking-widest text-[#D6C3A1] font-medium">
                TRADEMARK COLLECTION
              </p>
            </div>
            <p className="text-sm text-[#F6F2E9]/75 max-w-sm leading-relaxed">
              Curated trademark opportunities made available for entrepreneurs, startups, and established businesses seeking a distinctive brand name.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#A8B5A0]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A8B5A0]" />
              <span>Based in Haryana, India · Direct enquiries facilitated personally</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D6C3A1] font-semibold">
              Exploration
            </h4>
            <ul className="space-y-2 text-sm text-[#F6F2E9]/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D6C3A1] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-[#D6C3A1] transition-colors cursor-pointer"
                >
                  Available Trademarks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-[#D6C3A1] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D6C3A1] transition-colors cursor-pointer"
                >
                  About Neeraj
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#D6C3A1] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Enquiry CTA */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D6C3A1] font-semibold">
              Direct Contact
            </h4>
            <p className="text-sm text-[#F6F2E9]/75 leading-relaxed">
              Interested in acquiring “लाडला काटू” or discussing upcoming opportunities? Submit an enquiry to start a direct conversation.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#263C32] bg-[#D6C3A1] hover:bg-[#F6F2E9] rounded transition-all cursor-pointer font-sans"
            >
              <span>Contact Neeraj</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Legal & Informational Disclaimer */}
        <div className="pt-8 space-y-6 text-xs text-[#F6F2E9]/60 leading-relaxed">
          <p className="max-w-4xl">
            <strong className="text-[#F6F2E9]/80 font-medium">Informational Notice:</strong> The listings and materials presented on this website are curated solely for informational purposes to introduce trademark opportunities and invite private discussion regarding potential acquisition. Submitting an enquiry does not constitute an assignment, offer, or binding reservation. All prospective transfers require mutual agreement, verification of official registry records, statutory documentation, and formal execution under applicable trademark law.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#324D41]">
            <div>
              © {new Date().getFullYear()} Neeraj. Haryana, India. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-xs">
              <button
                onClick={() => onNavigate('privacy')}
                className="hover:text-[#D6C3A1] transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onNavigate('terms')}
                className="hover:text-[#D6C3A1] transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Terms of Use
              </button>
              {/* Discrete Owner Inbox Trigger */}
              <button
                onClick={onOpenOwnerInbox}
                className="text-[#A8B5A0] hover:text-[#D6C3A1] transition-colors flex items-center gap-1 cursor-pointer"
                title="View locally stored customer enquiries and setup instructions for Neeraj"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Owner Portal</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
