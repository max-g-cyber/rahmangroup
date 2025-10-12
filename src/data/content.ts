export interface Concern {
  id: number;
  name: string;
  sector: string;
  description: string; // The short description for the homepage
  fullDescription: string; // NEW: The detailed description for the individual page
  slug: string;
  backgroundImage: string;
  logoSrc?: string;
}

export const sisterConcernsData: Concern[] = [
  {
    id: 1,
    name: "Rahtex Industries Ltd.",
    sector: "Textile Industry",
    description: "From our state-of-the-art factory in Madhobdi, Norshingdi, we produce world-class home textiles for a global clientele, ensuring quality in every thread.",
    fullDescription: "Rahtex Industries Ltd. stands as a pillar of the Bangladeshi textile sector. Our facility in Madhobdi is equipped with modern machinery to produce a wide range of high-quality home textile products for the international export market. We are committed to sustainable practices and excellence in manufacturing.",
    slug: "rahtex-industries",
    backgroundImage: "bg-brand-dark",
    logoSrc: "/logos/rahtex-industries.png",
  },
  {
    id: 2,
    name: "Rahman Overseas",
    sector: "Foreign Recruitment",
    description: "An industry veteran since 1996, we are a trusted leader in foreign recruitment, connecting skilled Bangladeshi talent with global opportunities.",
    fullDescription: "Since its inception in 1996, Rahman Overseas has been a government-approved leader in international manpower recruitment. We specialize in sourcing, training, and deploying skilled and semi-skilled Bangladeshi professionals to meet the demands of a global workforce, ensuring a seamless and reliable process for both employers and employees.",
    slug: "rahman-overseas",
    backgroundImage: "bg-brand-light",
    logoSrc: "/logos/rahman-overseas.png",
  },
  {
    id: 3,
    name: "Rahman Overseas Tradelink",
    sector: "Import & Export",
    description: "Your premier import-export agent, facilitating seamless global trade and supply chain solutions for businesses of all sizes across continents.",
    fullDescription: "Rahman Overseas Tradelink is a dynamic import-export agency dedicated to bridging markets. We provide comprehensive trade solutions, including logistics, customs clearance, and sourcing, to ensure that goods move efficiently across international borders, empowering businesses to expand their global reach.",
    slug: "rahman-overseas-tradelink",
    backgroundImage: "bg-brand-dark",
  },
  {
    id: 4,
    name: "Rahtex Sourcing",
    sector: "Apparel Buying House",
    description: "As a leading buying house, we provide expert sourcing, quality assurance, and end-to-end production management for the international apparel industry.",
    fullDescription: "Rahtex Sourcing operates as a premier apparel buying house, serving as a vital link between international fashion brands and local manufacturers. Our expertise covers the entire supply chain, from material sourcing and factory compliance to quality control and timely shipment, guaranteeing satisfaction for our global partners.",
    slug: "rahtex-sourcing",
    backgroundImage: "bg-brand-light",
    logoSrc: "/logos/rahtex-sourcing.png",
  },
];