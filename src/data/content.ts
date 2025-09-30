export interface Concern {
  id: number;
  name: string;
  sector: string;
  description: string;
  slug: string;
  backgroundImage: string; // New field for placeholder background
}

/**
 * The central data for the "Sister Concerns". 
 * This array is now populated with your initial 4 businesses.
 */
export const sisterConcernsData: Concern[] = [
  {
    id: 1,
    name: "Rahtex Industries Ltd.",
    sector: "Textile Industry",
    description: "From our factory in Madhobdi, Norshingdi, we produce world-class home textiles for a global clientele, ensuring quality in every thread.",
    slug: "rahtex-industries",
    backgroundImage: "bg-brand-dark" // Dark Navy Placeholder
  },
  {
    id: 2,
    name: "Rahman Overseas",
    sector: "Foreign Recruitment",
    description: "An industry veteran since 1996, we are a trusted leader in foreign recruitment, connecting skilled Bangladeshi talent with global opportunities.",
    slug: "rahman-overseas",
    backgroundImage: "bg-brand-light" // Medium Blue Placeholder
  },
  {
    id: 3,
    name: "Rahman Overseas Tradelink",
    sector: "Import & Export",
    description: "Your premier import-export agent, facilitating seamless global trade and supply chain solutions for businesses of all sizes across continents.",
    slug: "rahman-overseas-tradelink",
    backgroundImage: "bg-brand-dark" // Dark Navy Placeholder
  },
  {
    id: 4,
    name: "Rahtex Sourcing",
    sector: "Apparel Buying House",
    description: "As a leading buying house, we provide expert sourcing, quality assurance, and end-to-end production management for the international apparel industry.",
    slug: "rahtex-sourcing",
    backgroundImage: "bg-brand-light" // Medium Blue Placeholder
  },
];