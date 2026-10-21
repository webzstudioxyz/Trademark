export interface Trademark {
  id: string;
  slug: string;
  name: string; // Primary name (e.g. "लाडला काटू")
  romanizedName?: string; // Romanized name (e.g. "Ladla Kaatu")
  description: string;
  status: string; // e.g. "Details available on enquiry" or "Details coming soon"
  isPublished: boolean; // simple config toggle to publish/unhide
  isPlaceholder: boolean; // indicates placeholder slot
  slotNumber: number; // 1 to 5
  // Verified details (only populated if supplied by business owner; never invented)
  category?: string;
  goodsOrServices?: string;
  registrationNumber?: string;
  jurisdiction?: string;
  classNumber?: string;
  documentationAvailable?: boolean;
  notes?: string;
}

export interface EnquirySubmission {
  id: string;
  fullName: string;
  email: string;
  phoneOrWhatsApp?: string;
  trademarkInterest: string;
  enquiryType: 'purchasing' | 'requesting_info' | 'general';
  message: string;
  consentAgreed: boolean;
  submittedAt: string;
  sourceUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
