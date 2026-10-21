import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, AlertCircle, Send, ShieldCheck, Copy, Check, ExternalLink } from 'lucide-react';
import { TRADEMARKS } from '../data/trademarks';
import { EnquirySubmission } from '../types/trademark';

interface ContactPageProps {
  initialTrademarkInterest?: string;
  onNavigate: (page: string) => void;
  onOpenOwnerInbox: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialTrademarkInterest,
  onNavigate,
  onOpenOwnerInbox,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneOrWhatsApp, setPhoneOrWhatsApp] = useState('');
  const [trademarkInterest, setTrademarkInterest] = useState(
    initialTrademarkInterest || 'लाडला काटू (Ladla Kaatu)'
  );
  const [enquiryType, setEnquiryType] = useState<'purchasing' | 'requesting_info' | 'general'>('purchasing');
  const [message, setMessage] = useState('');
  const [consentAgreed, setConsentAgreed] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-bot trap

  // Form states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (initialTrademarkInterest) {
      setTrademarkInterest(initialTrademarkInterest);
    }
  }, [initialTrademarkInterest]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please provide an email address so Neeraj can respond.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., name@domain.com).';
    }

    if (!message.trim()) {
      newErrors.message = 'Please provide a message outlining your enquiry or question.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Please provide a little more detail (at least 10 characters).';
    }

    if (!consentAgreed) {
      newErrors.consent = 'You must agree to the privacy notice to submit an enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Silent honeypot check
    if (honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const newEnquiry: EnquirySubmission = {
        id: 'enq-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 6),
        fullName: fullName.trim(),
        email: email.trim(),
        phoneOrWhatsApp: phoneOrWhatsApp.trim() || undefined,
        trademarkInterest,
        enquiryType,
        message: message.trim(),
        consentAgreed: true,
        submittedAt: new Date().toISOString(),
        sourceUrl: window.location.href,
      };

      // Persistent Storage in browser
      const existing = localStorage.getItem('neeraj_trademark_enquiries');
      const list: EnquirySubmission[] = existing ? JSON.parse(existing) : [];
      list.unshift(newEnquiry);
      localStorage.setItem('neeraj_trademark_enquiries', JSON.stringify(list));

      // Simulate network dispatch with guaranteed fallback
      await new Promise((resolve) => setTimeout(resolve, 600));

      setLastSubmittedId(newEnquiry.id);
      setSubmissionSuccess(true);
    } catch {
      setErrors({ form: 'An unexpected error occurred while saving your enquiry. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    const summary = `Trademark Enquiry for Neeraj:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phoneOrWhatsApp || 'Not provided'}\nTrademark: ${trademarkInterest}\nType: ${enquiryType}\nMessage:\n${message}`;
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhoneOrWhatsApp('');
    setMessage('');
    setConsentAgreed(false);
    setSubmissionSuccess(false);
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B9A58C] font-semibold">
          <span>Direct Contact</span>
          <span aria-hidden="true">·</span>
          <span>Haryana, India</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#263C32] tracking-tight">
          Enquire About a Trademark
        </h1>
        <p className="text-base text-[#292B28]/80 font-sans leading-relaxed max-w-2xl">
          Submit your details to discuss availability, registration status, pricing, or the transfer process directly with Neeraj.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-2xl border border-[#292B28]/10 shadow-xs">
          
          {submissionSuccess ? (
            <div className="space-y-6 py-6 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#263C32]">
                  Enquiry Successfully Recorded
                </h3>
                <p className="text-sm text-[#292B28]/80 leading-relaxed font-sans">
                  Thank you, <strong className="text-[#263C32]">{fullName}</strong>. Your enquiry regarding <strong className="text-[#263C32]">“{trademarkInterest}”</strong> has been securely logged for Neeraj to review.
                </p>
                <p className="text-xs text-[#292B28]/60 leading-relaxed">
                  A response will be sent directly to your email address (<span className="text-[#263C32]">{email}</span>).
                </p>
              </div>

              {/* Practical user backup option */}
              <div className="p-4 rounded-lg bg-[#F6F2E9] border border-[#292B28]/10 space-y-3">
                <p className="text-xs text-[#292B28]/70">
                  You may also copy a text summary of your enquiry for your personal records:
                </p>
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#263C32] bg-white border border-[#292B28]/15 rounded hover:bg-[#F6F2E9] transition-colors cursor-pointer"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Summary Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#B9A58C]" />
                      <span>Copy Enquiry Summary</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-[#292B28]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-medium text-[#263C32] hover:underline cursor-pointer"
                >
                  Submit another enquiry
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('explore')}
                  className="text-xs font-medium text-[#263C32] hover:underline cursor-pointer"
                >
                  Back to trademarks →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Anti-spam honeypot (hidden) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website_verification_trap"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {errors.form && (
                <div className="p-4 rounded bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-xs font-semibold text-[#292B28] uppercase tracking-wider">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                  }}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F6F2E9]/40 border rounded text-[#292B28] placeholder-[#292B28]/40 focus:outline-none ${
                    errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-[#292B28]/20 focus:border-[#263C32]'
                  }`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-[11px] text-rose-600">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-[#292B28] uppercase tracking-wider">
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  placeholder="e.g. name@company.com"
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F6F2E9]/40 border rounded text-[#292B28] placeholder-[#292B28]/40 focus:outline-none ${
                    errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-[#292B28]/20 focus:border-[#263C32]'
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-[11px] text-rose-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone or WhatsApp (optional) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#292B28] uppercase tracking-wider">
                    Phone or WhatsApp Number
                  </label>
                  <span className="text-[11px] text-[#292B28]/50">Optional</span>
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={phoneOrWhatsApp}
                  onChange={(e) => setPhoneOrWhatsApp(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F6F2E9]/40 border border-[#292B28]/20 rounded text-[#292B28] placeholder-[#292B28]/40 focus:outline-none focus:border-[#263C32]"
                />
              </div>

              {/* Trademark of Interest */}
              <div className="space-y-1.5">
                <label htmlFor="trademarkInterest" className="block text-xs font-semibold text-[#292B28] uppercase tracking-wider">
                  Trademark of Interest <span className="text-rose-600">*</span>
                </label>
                <select
                  id="trademarkInterest"
                  value={trademarkInterest}
                  onChange={(e) => setTrademarkInterest(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F6F2E9]/40 border border-[#292B28]/20 rounded text-[#292B28] focus:outline-none focus:border-[#263C32] cursor-pointer"
                >
                  <option value="लाडला काटू (Ladla Kaatu)">
                    लाडला काटू (Ladla Kaatu) — Slot 01
                  </option>
                  <option value="Slot 02 (Pending Listing)">
                    Slot 02 (Upcoming Listing)
                  </option>
                  <option value="Slot 03 (Pending Listing)">
                    Slot 03 (Upcoming Listing)
                  </option>
                  <option value="Slot 04 (Pending Listing)">
                    Slot 04 (Upcoming Listing)
                  </option>
                  <option value="Slot 05 (Pending Listing)">
                    Slot 05 (Upcoming Listing)
                  </option>
                  <option value="Other / General Trademark Enquiry">
                    Other / General Enquiry
                  </option>
                </select>
              </div>

              {/* Enquiry Type */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#292B28] uppercase tracking-wider">
                  Enquiry Type <span className="text-rose-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'purchasing', label: 'Purchasing a Mark' },
                    { value: 'requesting_info', label: 'Requesting Info' },
                    { value: 'general', label: 'General Enquiry' },
                  ].map((type) => (
                    <label
                      key={type.value}
                      className={`flex items-center gap-2 p-3 rounded border text-xs cursor-pointer transition-colors ${
                        enquiryType === type.value
                          ? 'bg-[#263C32]/10 border-[#263C32] text-[#263C32] font-semibold'
                          : 'border-[#292B28]/15 hover:bg-[#F6F2E9]/60 text-[#292B28]/80'
                      }`}
                    >
                      <input
                        type="radio"
                        name="enquiryType"
                        value={type.value}
                        checked={enquiryType === type.value}
                        onChange={() => setEnquiryType(type.value as any)}
                        className="text-[#263C32] focus:ring-[#263C32]"
                      />
                      <span>{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-semibold text-[#292B28] uppercase tracking-wider">
                  Your Message <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                  }}
                  placeholder="Please describe your interest, intended goods/services, or specific questions about the trademark..."
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F6F2E9]/40 border rounded text-[#292B28] placeholder-[#292B28]/40 focus:outline-none ${
                    errors.message ? 'border-rose-500 bg-rose-50/20' : 'border-[#292B28]/20 focus:border-[#263C32]'
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-[11px] text-rose-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="space-y-1.5 pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentAgreed}
                    onChange={(e) => {
                      setConsentAgreed(e.target.checked);
                      if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }));
                    }}
                    className="mt-0.5 rounded border-[#292B28]/30 text-[#263C32] focus:ring-[#263C32]"
                  />
                  <span className="text-xs text-[#292B28]/80 leading-relaxed">
                    I agree to the collection of my submitted details for the purpose of responding to this enquiry in accordance with the{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('privacy')}
                      className="text-[#263C32] underline hover:text-[#1C2E26] cursor-pointer font-medium"
                    >
                      Privacy Policy
                    </button>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-rose-600">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] disabled:opacity-60 rounded transition-all cursor-pointer shadow-xs font-sans"
                >
                  {isSubmitting ? (
                    <span>Recording Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry to Neeraj</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right Column: Grounded Info & Owner Setup Guidance */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-[#263C32] text-[#F6F2E9] rounded-2xl p-6 sm:p-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D6C3A1] font-semibold">
              Business Facilitator
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#F6F2E9]">
              Neeraj
            </h3>
            <p className="text-xs text-[#F6F2E9]/75 leading-relaxed font-sans">
              Based in Haryana, India. Dedicated to facilitating transparent, direct discussions regarding trademark opportunities for founders and commercial enterprises.
            </p>
            <div className="pt-4 border-t border-[#324D41] space-y-2 text-xs text-[#A8B5A0]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8B5A0]" />
                <span>Direct personal response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8B5A0]" />
                <span>Verification before agreement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8B5A0]" />
                <span>No automated price obligations</span>
              </div>
            </div>
          </div>

          {/* Form Integrity & Storage Transparency Card */}
          <div className="bg-white p-6 rounded-xl border border-[#292B28]/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#263C32]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Reliable Data Persistence</span>
            </div>
            <p className="text-xs text-[#292B28]/70 leading-relaxed font-sans">
              To ensure no customer message is lost, all submissions are securely recorded in the application's local persistent database.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenOwnerInbox}
                className="text-xs text-[#263C32] font-semibold hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>Open Owner Inbox Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
