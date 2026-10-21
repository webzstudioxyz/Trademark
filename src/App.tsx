/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SignatureCursor } from './components/SignatureCursor';
import { OwnerEnquiryDrawer } from './components/OwnerEnquiryDrawer';

import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { DetailPage } from './pages/DetailPage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

import { Trademark } from './types/trademark';
import { TRADEMARKS, getTrademarkBySlug } from './data/trademarks';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedTrademark, setSelectedTrademark] = useState<Trademark | null>(null);
  const [enquiryTrademarkName, setEnquiryTrademarkName] = useState<string>('');
  const [isOwnerInboxOpen, setIsOwnerInboxOpen] = useState(false);

  // Sync state from current browser URL
  const parseUrl = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase().replace('#', '');

    const target = hash || (path === '/' ? '' : path.replace(/^\//, ''));

    if (target.startsWith('trademark/')) {
      const slug = target.replace('trademark/', '');
      const tm = getTrademarkBySlug(slug);
      if (tm) {
        setSelectedTrademark(tm);
        setCurrentPage('detail');
        return;
      }
    }

    switch (target) {
      case 'explore':
      case 'trademarks':
        setCurrentPage('explore');
        break;
      case 'how-it-works':
        setCurrentPage('how-it-works');
        break;
      case 'about':
        setCurrentPage('about');
        break;
      case 'faqs':
      case 'faq':
        setCurrentPage('faqs');
        break;
      case 'contact':
        setCurrentPage('contact');
        break;
      case 'privacy':
        setCurrentPage('privacy');
        break;
      case 'terms':
        setCurrentPage('terms');
        break;
      default:
        setCurrentPage('home');
        break;
    }
  };

  useEffect(() => {
    parseUrl();
    const handlePopState = () => parseUrl();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string, param?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let newUrl = '/';
    if (page === 'detail' && param) {
      newUrl = `/trademark/${param}`;
    } else if (page !== 'home') {
      newUrl = `/${page}`;
    }

    try {
      window.history.pushState(null, '', newUrl);
    } catch {
      // In constrained iframe environments, pushState failure is safely caught
    }

    setCurrentPage(page);
  };

  const handleSelectTrademark = (tm: Trademark) => {
    setSelectedTrademark(tm);
    navigateTo('detail', tm.slug);
  };

  const handleEnquireAboutTrademark = (trademarkName: string) => {
    setEnquiryTrademarkName(trademarkName);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F2E9] text-[#292B28] font-sans selection:bg-[#D6C3A1] selection:text-[#263C32] relative">
      
      {/* Trademark Signature Motion Cursor (Desktop only, non-blocking) */}
      <SignatureCursor />

      {/* Primary Top Bar Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => navigateTo(page)}
      />

      {/* Main Viewport Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => navigateTo(page)}
            onSelectTrademark={handleSelectTrademark}
            onEnquire={handleEnquireAboutTrademark}
          />
        )}

        {currentPage === 'explore' && (
          <ExplorePage
            onSelectTrademark={handleSelectTrademark}
            onEnquire={handleEnquireAboutTrademark}
          />
        )}

        {currentPage === 'detail' && selectedTrademark && (
          <DetailPage
            trademark={selectedTrademark}
            onBack={() => navigateTo('explore')}
            onSelectTrademark={handleSelectTrademark}
            onEnquire={handleEnquireAboutTrademark}
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage onNavigate={(page) => navigateTo(page)} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={(page) => navigateTo(page)} />
        )}

        {currentPage === 'faqs' && (
          <FaqPage onNavigate={(page) => navigateTo(page)} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialTrademarkInterest={enquiryTrademarkName}
            onNavigate={(page) => navigateTo(page)}
            onOpenOwnerInbox={() => setIsOwnerInboxOpen(true)}
          />
        )}

        {currentPage === 'privacy' && <PrivacyPage />}

        {currentPage === 'terms' && <TermsPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(page) => navigateTo(page)}
        onOpenOwnerInbox={() => setIsOwnerInboxOpen(true)}
      />

      {/* Owner Enquiry Storage Drawer (Private portal for Neeraj) */}
      <OwnerEnquiryDrawer
        isOpen={isOwnerInboxOpen}
        onClose={() => setIsOwnerInboxOpen(false)}
      />

    </div>
  );
}
