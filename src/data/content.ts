/**
 * ====================================================================
 * CLIENT ACTION REQUIRED
 * ====================================================================
 * Please update the 'sisterConcernsData' array below with your new business data.
 * The 'ConcernsGrid.tsx' component will automatically read and render this data.
 */

export interface Concern {
  id: number;
  name: string;
  sector: string; // e.g., "Textiles & Garments", "Real Estate", "Recruitment"
  description: string;
  slug: string; // A URL-friendly path, e.g., "rahtex-industries"
}

/**
 * DATA: Update this array with the new business information.
 */
export const sisterConcernsData: Concern[] = [
  // EXAMPLE DATA (to be replaced):
  // {
  //   id: 1,
  //   name: "New Business Name 1",
  //   sector: "Textiles",
  //   description: "A short description of what this business unit does.",
  //   slug: "business-1"
  // },
  // {
  //   id: 2,
  //   name: "New Business Name 2",
  //   sector: "Real Estate",
  //   description: "Building the future of commercial and residential properties.",
  //   slug: "business-2"
  // },
];