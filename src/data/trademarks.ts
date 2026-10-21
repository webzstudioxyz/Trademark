import { Trademark } from '../types/trademark';

/**
 * CENTRAL TRADEMARK REPOSITORY
 * Managed for Neeraj (Haryana, India).
 * 
 * Instructions for adding future trademarks:
 * - Update slots 2 through 5 with confirmed details once provided by Neeraj.
 * - Set `isPlaceholder: false` and `isPublished: true` once verified.
 * - Never invent registration numbers, classes, or legal status.
 */
export const TRADEMARKS: Trademark[] = [
  {
    id: 'tm-01',
    slug: 'ladla-kaatu',
    slotNumber: 1,
    name: 'लाडला काटू',
    romanizedName: 'Ladla Kaatu',
    description: 'Explore this trademark opportunity and contact us for further details.',
    status: 'Details available on enquiry',
    isPublished: true,
    isPlaceholder: false,
    // Note: Registration, ownership, class, price, certificate, and legal information
    // have not yet been supplied. They remain undefined until verified by the owner.
    jurisdiction: 'India (enquire for specific details)',
  },
  {
    id: 'tm-02',
    slug: 'trademark-slot-02',
    slotNumber: 2,
    name: 'Trademark details coming soon',
    romanizedName: 'Slot 02 (Pending)',
    description: 'A new selected trademark opportunity will be listed here once details are confirmed by the owner.',
    status: 'Details coming soon',
    isPublished: true,
    isPlaceholder: true,
  },
  {
    id: 'tm-03',
    slug: 'trademark-slot-03',
    slotNumber: 3,
    name: 'Trademark details coming soon',
    romanizedName: 'Slot 03 (Pending)',
    description: 'A new selected trademark opportunity will be listed here once details are confirmed by the owner.',
    status: 'Details coming soon',
    isPublished: true,
    isPlaceholder: true,
  },
  {
    id: 'tm-04',
    slug: 'trademark-slot-04',
    slotNumber: 4,
    name: 'Trademark details coming soon',
    romanizedName: 'Slot 04 (Pending)',
    description: 'A new selected trademark opportunity will be listed here once details are confirmed by the owner.',
    status: 'Details coming soon',
    isPublished: true,
    isPlaceholder: true,
  },
  {
    id: 'tm-05',
    slug: 'trademark-slot-05',
    slotNumber: 5,
    name: 'Trademark details coming soon',
    romanizedName: 'Slot 05 (Pending)',
    description: 'A new selected trademark opportunity will be listed here once details are confirmed by the owner.',
    status: 'Details coming soon',
    isPublished: true,
    isPlaceholder: true,
  },
];

/**
 * Filter helpers
 */
export function getAllTrademarks(): Trademark[] {
  return TRADEMARKS;
}

export function getActiveTrademarks(): Trademark[] {
  return TRADEMARKS.filter((tm) => tm.isPublished && !tm.isPlaceholder);
}

export function getPublishedSlots(): Trademark[] {
  return TRADEMARKS.filter((tm) => tm.isPublished);
}

export function getTrademarkBySlug(slug: string): Trademark | undefined {
  return TRADEMARKS.find((tm) => tm.slug === slug);
}

export function getTrademarkById(id: string): Trademark | undefined {
  return TRADEMARKS.find((tm) => tm.id === id);
}
