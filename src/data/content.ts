export interface Concern {
  id: number;
  name: string;
  sector: string;
  description: string; // The short description for the homepage
  fullDescription: string; // The detailed description for the individual page
  slug: string;
  backgroundImage: string; // No longer used in current design, but kept for potential future use
  logoSrc?: string;
}

// ... (Interface definition remains the same) ...

// ... (Interface definition remains the same) ...

export const sisterConcernsData: Concern[] = [
  {
    id: 1,
    name: "Rahtex Industries Ltd.",
    sector: "Textile & Readymade Garments",
    description: "A leading 100% export-oriented manufacturer of Home Textiles and Readymade Garments, based in Norshingdi and Savar.", // Already concise and correct
    // === UPDATED & CORRECTED FULL DESCRIPTION ===
    fullDescription: `Established in 2007, Rahtex Industries Ltd. is a 100% export-oriented powerhouse in Bangladesh's textile and readymade garments sector. Our primary textile unit is strategically located in Madhabdi, Norshingdi – known as the "Manchester of Bangladesh" – with additional state-of-the-art garment manufacturing facilities in Baipail and Dosaid Bazar, Ashulia, Savar. As an environmentally conscious company, we specialize in producing a diverse range of Home Textile products and high-quality knit and woven Readymade Garments for children, ladies, and men. Rahtex Industries Ltd. prides itself not only on superior manufacturing but also on providing total international standard customer service.`,
    slug: "rahtex-industries",
    backgroundImage: "bg-brand-dark",
    logoSrc: "/logos/rahtexlogo.svg",
  },
  {
    id: 2,
    name: "Rahman Overseas",
    sector: "Foreign Recruitment",
    description: "A government-approved leader since 1996 in international manpower recruitment, providing solid and swift service.", // Already concise and correct
    // === UPDATED & CORRECTED FULL DESCRIPTION ===
    fullDescription: `Rahman Overseas (Govt. Approved Recruiting License No. RL-887) is a pioneering International Manpower Recruitment Agent and Consultant based in Bangladesh, operating since 1997. With decades of experience, we specialize in the ethical and efficient placement of skilled, semi-skilled, and unskilled Bangladeshi manpower across the globe, particularly in the Gulf region (Saudi Arabia, UAE, Qatar, Kuwait, Jordan, Libya) and Southeast Asia (Malaysia, Singapore, South Korea). We pride ourselves on our professional approach, rigorous selection process (including practical and psychological assessments), and commitment to meeting employer demands accurately and swiftly. Our services encompass recruitment, consultation, visa processing, and training facilitation through our sister concerns, ensuring a comprehensive solution for international employers. Rahman Overseas operates under the slogan "Assurance of Solid & Swift Service", reflecting our dedication to reliability and efficiency.`,
    slug: "rahman-overseas",
    backgroundImage: "bg-brand-light",
    logoSrc: "/logos/rahmanoverseaslogo.svg",
  },
  // ... (Other company data remains the same but ensure spelling is correct) ...
    {
    id: 3,
    name: "Rahman Overseas Tradelink",
    sector: "Import & Export",
    description: "Your premier import-export agent, facilitating seamless global trade and supply chain solutions for businesses of all sizes across continents.",
    fullDescription: "Rahman Overseas Tradelink is a dynamic import-export agency dedicated to bridging markets. We provide comprehensive trade solutions, including logistics, customs clearance, and sourcing, to ensure that goods move efficiently across international borders, empowering businesses to expand their global reach.",
    slug: "rahman-overseas-tradelink",
    backgroundImage: "bg-brand-dark",
    logoSrc: "/logos/rahmanoverseastradelinklogo.svg",
  },
  {
    id: 4,
    name: "Rahtex Sourcing",
    sector: "Apparel Buying House",
    description: "As a leading buying house, we provide expert sourcing, quality assurance, and end-to-end production management for the international apparel industry.",
    fullDescription: "Rahtex Sourcing operates as a premier apparel buying house, serving as a vital link between international fashion brands and local manufacturers. Our expertise covers the entire supply chain, from material sourcing and factory compliance to quality control and timely shipment, guaranteeing satisfaction for our global partners.",
    slug: "rahtex-sourcing",
    backgroundImage: "bg-brand-light",
    logoSrc: "/logos/rahtexsourcinglogo.svg",
  },
  {
    id: 5,
    name: "Lobster Restaurant",
    sector: "Hospitality & Restaurant",
    description: "Dhaka's premier destination for authentic and exquisite culinary experiences, specializing in fine dining.",
    fullDescription: "Lobster Restaurant is a cornerstone of the fine dining scene in Dhaka. We are renowned for our commitment to quality, offering a diverse menu that showcases both local and international flavors. Our culinary team is dedicated to providing an exceptional dining experience for every guest.",
    slug: "lobster-restaurant",
    backgroundImage: "bg-brand-dark",
    logoSrc: "/logos/lobsterlogo.svg",
  },
  {
    id: 6,
    name: "Rahtech Developers Ltd.",
    sector: "Real Estate Development",
    description: "Building the future of residential and commercial properties with a focus on quality, integrity, and modern design.",
    fullDescription: "Rahtech Developers Ltd. is a trusted name in the real estate sector. We specialize in developing high-quality residential and commercial properties that meet the evolving needs of the community. Our projects are defined by their superior construction, modern amenities, and commitment to timely delivery.",
    slug: "rahtech-developers",
    backgroundImage: "bg-brand-light",
    logoSrc: "/logos/rahtechlogo.svg",
  },
];