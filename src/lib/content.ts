export const site = {
  companyName: "Court Developments",
  demoTitle: "Court Developments | Website Redesign Concept",
  location: "Robertsbridge, East Sussex, United Kingdom",
  officialWebsite: "https://www.courtdevelopments.com",
  conceptBy: "AccellionX",
  conceptNotice: "Independent Redesign Concept by AccellionX",
  conceptDisclaimer:
    "This is an independent website redesign concept prepared by AccellionX. It is not an official Court Developments website and does not imply endorsement or affiliation.",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/developments", label: "Our Developments" },
  { href: "/expertise", label: "Expertise & Services" },
  { href: "/news", label: "News & Insights" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const hero = {
  headline: "Exceptional Homes. Thoughtfully Created.",
  subheading:
    "Combining timeless design, modern craftsmanship and meticulous attention to detail to create distinctive homes across East Sussex and beyond.",
  primaryCta: { href: "/developments", label: "Explore Our Developments" },
  secondaryCta: { href: "/about", label: "Discover Our Approach" },
} as const;

export const coreValues = [
  {
    title: "Exceptional Craftsmanship",
    description:
      "Skilled tradespeople and careful workmanship at every stage of the build.",
  },
  {
    title: "Thoughtful Design",
    description:
      "Homes that balance contemporary living with enduring architectural character.",
  },
  {
    title: "Attention to Detail",
    description:
      "A meticulous approach to materials, finish and everyday practicality.",
  },
  {
    title: "Respect for Surroundings",
    description:
      "Developments shaped to complement their setting and enhance the local area.",
  },
  {
    title: "Innovation & Durability",
    description:
      "Practical, comfortable homes designed for lasting performance and comfort.",
  },
] as const;

export const services = [
  {
    slug: "residential-developments",
    title: "Residential Developments",
    description:
      "New-build homes designed for comfort, durability and a considered sense of place.",
  },
  {
    slug: "refurbishment-conversions",
    title: "Refurbishment & Conversions",
    description:
      "Sensitive refurbishment and conversion projects that unlock the potential of existing buildings.",
  },
  {
    slug: "listed-buildings-conservation",
    title: "Listed Buildings & Conservation",
    description:
      "Technically challenging work in listed buildings and conservation areas, undertaken with care and expertise.",
  },
  {
    slug: "land-acquisition-development",
    title: "Land Acquisition & Development",
    description:
      "Identifying and progressing land opportunities for thoughtfully planned residential schemes.",
  },
] as const;

export const aboutContent = {
  intro:
    "Court Developments creates exceptional homes by bringing together contemporary and traditional architecture, highly skilled tradespeople and meticulous attention to detail.",
  body: [
    "Specialising in new residential developments, property refurbishment and conversions, the company undertakes projects that demand both design sensitivity and construction expertise — including technically challenging work involving listed buildings and conservation areas.",
    "Every scheme is guided by thoughtful design, practicality, comfort, durability and innovation. Homes are conceived to complement their surroundings while meeting exacting standards of construction.",
    "The team is accustomed to collaborating with highways, transportation, ecological, archaeological and conservation authorities, and operates from Robertsbridge, East Sussex, alongside active development sites.",
  ],
} as const;

export type DevelopmentStatus = "Completed" | "In Progress" | "Coming Soon";
export type DevelopmentType =
  | "New Build"
  | "Refurbishment"
  | "Conversion"
  | "Conservation";

export type Development = {
  id: string;
  name: string;
  location: string;
  type: DevelopmentType;
  status: DevelopmentStatus;
  summary: string;
  image: string;
  imageAlt: string;
};

/** Illustrative placeholder developments for this redesign concept only. */
export const developments: Development[] = [
  {
    id: "illustrative-ridgeway",
    name: "The Ridgeway Residences",
    location: "East Sussex",
    type: "New Build",
    status: "Completed",
    summary:
      "An illustrative concept for a small collection of contemporary family homes set within a carefully landscaped plot.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Illustrative contemporary new-build home exterior",
  },
  {
    id: "illustrative-orchard",
    name: "Orchard Lane Mews",
    location: "Kent",
    type: "Conversion",
    status: "Completed",
    summary:
      "An illustrative conversion concept reimagining traditional structures as refined residential dwellings.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Illustrative residential conversion courtyard",
  },
  {
    id: "illustrative-ashcombe",
    name: "Ashcombe House",
    location: "East Sussex",
    type: "Conservation",
    status: "In Progress",
    summary:
      "An illustrative conservation-led concept exploring sensitive restoration within a protected setting.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Illustrative traditional British house façade",
  },
  {
    id: "illustrative-millpond",
    name: "Millpond Gardens",
    location: "East Sussex",
    type: "New Build",
    status: "Coming Soon",
    summary:
      "An illustrative new-build concept for homes designed to sit quietly within their rural surroundings.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Illustrative modern home with landscaped garden",
  },
  {
    id: "illustrative-harbour",
    name: "Harbour View Refurbishment",
    location: "East Sussex",
    type: "Refurbishment",
    status: "Completed",
    summary:
      "An illustrative refurbishment concept focused on light, material quality and lasting practicality.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Illustrative refined interior living space",
  },
  {
    id: "illustrative-chapel",
    name: "Chapel Street Residences",
    location: "Kent",
    type: "Conversion",
    status: "In Progress",
    summary:
      "An illustrative concept for converting a characterful building into distinctive residential homes.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Illustrative architectural brick and timber detail",
  },
];

export const developmentFilters = [
  "All",
  "New Build",
  "Refurbishment",
  "Conversion",
  "Conservation",
] as const;

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
};

/** Illustrative placeholder articles for this redesign concept only. */
export const newsArticles: NewsArticle[] = [
  {
    slug: "designing-homes-that-belong",
    title: "Designing Homes That Belong",
    date: "Illustrative",
    excerpt:
      "How thoughtful proportion, material choice and landscape integration help new homes sit comfortably within their setting.",
    category: "Design",
  },
  {
    slug: "working-with-conservation-sensitivities",
    title: "Working with Conservation Sensitivities",
    date: "Illustrative",
    excerpt:
      "An overview of the care, collaboration and technical expertise required when building in conservation contexts.",
    category: "Expertise",
  },
  {
    slug: "craftsmanship-in-contemporary-homes",
    title: "Craftsmanship in Contemporary Homes",
    date: "Illustrative",
    excerpt:
      "Why skilled tradesmanship remains central to creating homes that feel refined, practical and enduring.",
    category: "Craft",
  },
];
