export interface Concern {
  id: number;
  name: string;
  sector: string;
  description: string; // The short description for the homepage
  fullDescription: string; // The detailed description for the individual page
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
    logoSrc: "/logos/rahtexlogo.svg", // UPDATE: Name changed
  },
  {
    id: 2,
    name: "Rahman Overseas",
    sector: "Foreign Recruitment",
    description: "An industry veteran since 1996, we are a trusted leader in foreign recruitment, connecting skilled Bangladeshi talent with global opportunities.",
    fullDescription: "Since its inception in 1996, Rahman Overseas has been a government-approved leader in international manpower recruitment. We specialize in sourcing, training, and deploying skilled and semi-skilled Bangladeshi professionals to meet the demands of a global workforce, ensuring a seamless and reliable process for both employers and employees.",
    slug: "rahman-overseas",
    backgroundImage: "bg-brand-light",
    logoSrc: "/logos/rahmanoverseaslogo.svg", // UPDATE: Name changed
  },
  {
    id: 3,
    name: "Rahman Overseas Tradelink",
    sector: "Import & Export",
    description: "Your premier import-export agent, facilitating seamless global trade and supply chain solutions for businesses of all sizes across continents.",
    fullDescription: "Rahman Overseas Tradelink is a dynamic import-export agency dedicated to bridging markets. We provide comprehensive trade solutions, including logistics, customs clearance, and sourcing, to ensure that goods move efficiently across international borders, empowering businesses to expand their global reach.",
    slug: "rahman-overseas-tradelink",
    backgroundImage: "bg-brand-dark",
    logoSrc: "/logos/rahmanoverseastradelinklogo.svg", // UPDATE: Name changed
  },
  {
    id: 4,
    name: "Rahtex Sourcing",
    sector: "Apparel Buying House",
    description: "As a leading buying house, we provide expert sourcing, quality assurance, and end-to-end production management for the international apparel industry.",
    fullDescription: "Rahtex Sourcing operates as a premier apparel buying house, serving as a vital link between international fashion brands and local manufacturers. Our expertise covers the entire supply chain, from material sourcing and factory compliance to quality control and timely shipment, guaranteeing satisfaction for our global partners.",
    slug: "rahtex-sourcing",
    backgroundImage: "bg-brand-light",
    logoSrc: "/logos/rahtexsourcinglogo.svg", // UPDATE: Name changed
  },
  // --- NEW BUSINESSES ADDED BELOW ---
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