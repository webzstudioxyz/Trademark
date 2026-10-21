import React, { useState, useEffect } from 'react';
import { X, Inbox, Download, Trash2, Mail, ExternalLink, ShieldAlert, Check } from 'lucide-react';
import { EnquirySubmission } from '../types/trademark';

interface OwnerEnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerEnquiryDrawer: React.FC<OwnerEnquiryDrawerProps> = ({ isOpen, onClose }) => {
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const loadEnquiries = () => {
    try {
      const stored = localStorage.getItem('neeraj_trademark_enquiries');
      if (stored) {
        setEnquiries(JSON.parse(stored));
      } else {
        setEnquiries([]);
      }
    } catch {
      setEnquiries([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadEnquiries();
    }
  }, [isOpen]);

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear locally stored enquiries?')) {
      localStorage.removeItem('neeraj_trademark_enquiries');
      setEnquiries([]);
    }
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(enquiries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `neeraj_trademark_enquiries_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyEnquiry = (enquiry: EnquirySubmission) => {
    const text = `Enquiry from: ${enquiry.fullName} (${enquiry.email})\nPhone/WhatsApp: ${enquiry.phoneOrWhatsApp || 'Not provided'}\nTrademark: ${enquiry.trademarkInterest}\nType: ${enquiry.enquiryType}\nSubmitted: ${enquiry.submittedAt}\n\nMessage:\n${enquiry.message}`;
    navigator.clipboard.writeText(text);
    setCopiedId(enquiry.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-2xl bg-[#F6F2E9] h-full shadow-2xl flex flex-col border-l border-[#263C32]/20">
        
        {/* Drawer Header */}
        <div className="p-6 bg-[#263C32] text-[#F6F2E9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#D6C3A1]/20 rounded text-[#D6C3A1]">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-[#F6F2E9]">
                Owner Enquiry Management
              </h3>
              <p className="text-xs text-[#A8B5A0]">
                Private dashboard for Neeraj (Haryana, India) · {enquiries.length} stored {enquiries.length === 1 ? 'enquiry' : 'enquiries'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F6F2E9]/70 hover:text-white rounded-md hover:bg-white/10"
            aria-label="Close owner panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Integration Instructions Alert */}
        <div className="p-4 bg-[#D6C3A1]/25 border-b border-[#292B28]/10 text-xs text-[#292B28] space-y-2">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-[#263C32] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#263C32]">Pre-Launch Setup Note for Neeraj:</p>
              <p className="text-[#292B28]/80 mt-0.5">
                Every enquiry submitted on the website is safely persisted in this local browser store so no customer inquiry is lost. To connect direct email dispatch or instant WhatsApp notification prior to public launch, simply set your destination email or webhook URL in your environment settings.
              </p>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="px-6 py-3 bg-[#E8DCC9]/40 border-b border-[#292B28]/10 flex items-center justify-between gap-4">
          <div className="text-xs font-medium text-[#292B28]/70">
            {enquiries.length} Recorded Enquiries
          </div>
          <div className="flex items-center gap-2">
            {enquiries.length > 0 && (
              <>
                <button
                  onClick={handleExportJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#263C32] bg-white border border-[#292B28]/15 rounded hover:bg-[#F6F2E9]"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export JSON
                </button>
                <button
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-rose-700 bg-white border border-rose-200 rounded hover:bg-rose-50"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </button>
              </>
            )}
          </div>
        </div>

        {/* Enquiries List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {enquiries.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#A8B5A0]/20 flex items-center justify-center text-[#263C32]">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg text-[#263C32]">No enquiries recorded yet</h4>
              <p className="text-xs text-[#292B28]/60 max-w-sm mx-auto">
                When a visitor fills out the contact or trademark enquiry form, their submission will appear here with full details.
              </p>
            </div>
          ) : (
            enquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                className="bg-white p-5 rounded border border-[#292B28]/10 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h5 className="font-medium text-[#263C32] text-sm flex items-center gap-2">
                      {enquiry.fullName}
                      <span className="text-[11px] font-normal text-[#292B28]/60">
                        ({enquiry.email})
                      </span>
                    </h5>
                    <div className="flex flex-wrap gap-2 text-xs text-[#B9A58C] mt-0.5">
                      <span>Mark: <strong className="text-[#263C32]">{enquiry.trademarkInterest}</strong></span>
                      <span>·</span>
                      <span className="capitalize">Type: {enquiry.enquiryType.replace('_', ' ')}</span>
                      {enquiry.phoneOrWhatsApp && (
                        <>
                          <span>·</span>
                          <span>Phone: {enquiry.phoneOrWhatsApp}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] text-[#292B28]/50 tabular-nums shrink-0">
                    {new Date(enquiry.submittedAt).toLocaleDateString()} {new Date(enquiry.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div className="bg-[#F6F2E9] p-3 rounded text-xs text-[#292B28] font-sans leading-relaxed whitespace-pre-wrap border border-[#292B28]/5">
                  {enquiry.message}
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    onClick={() => handleCopyEnquiry(enquiry)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-[#263C32] hover:bg-[#A8B5A0]/20 rounded transition-colors"
                  >
                    {copiedId === enquiry.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${enquiry.email}?subject=Regarding your enquiry for ${encodeURIComponent(enquiry.trademarkInterest)}`}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs text-[#F6F2E9] bg-[#263C32] hover:bg-[#1C2E26] rounded transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Reply via Email</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-white border-t border-[#292B28]/10 text-xs text-[#292B28]/60 flex items-center justify-between">
          <span>Neeraj Trademark Collection · Haryana</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs text-[#263C32] font-medium hover:underline"
          >
            Close Panel
          </button>
        </div>

      </div>
    </div>
  );
};
