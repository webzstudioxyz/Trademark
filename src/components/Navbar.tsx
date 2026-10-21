import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, param?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Trademarks' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F6F2E9]/90 backdrop-blur-md border-b border-[#292B28]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single element brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-baseline gap-2.5 text-left text-inherit cursor-pointer focus:outline-none"
            aria-label="Neeraj Trademark Collection Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#263C32] transition-colors group-hover:text-[#1C2E26]">
              NEERAJ
            </span>
            <span className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-[#B9A58C] font-medium">
              TRADEMARK COLLECTION
            </span>
          </button>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#292B28]/80">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#263C32] cursor-pointer ${
                    isActive ? 'text-[#263C32] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#263C32] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] rounded hover:bg-[#1C2E26] transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0 group"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] rounded"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#292B28] hover:text-[#263C32] rounded-md focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#292B28]/10 bg-[#F6F2E9] px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#263C32]/10 text-[#263C32] font-semibold'
                      : 'text-[#292B28] hover:bg-[#292B28]/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left px-3 py-2 text-base font-medium text-[#263C32] bg-[#A8B5A0]/20 rounded-md"
            >
              Contact Neeraj
            </button>
          </div>
          <div className="pt-3 border-t border-[#292B28]/10 text-xs text-[#292B28]/60 flex justify-between items-center px-1">
            <span>Haryana, India</span>
            <span>Direct Trademark Opportunities</span>
          </div>
        </div>
      )}
    </header>
  );
};
