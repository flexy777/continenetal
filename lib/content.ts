// Central content source for the repositioned CRE brand.
// "Critical Infrastructure Resilience & Smart Security Solutions"

export const COMPANY_INTRO =
  "Continental Renewable Energy (CRE) is a Critical Infrastructure Resilience and Smart Security Solutions company focused on securing the systems that power modern society. Through the integration of resilient energy infrastructure, intelligent security technologies, and advanced engineering solutions, we help governments, industries, and institutions enhance operational continuity, infrastructure protection, and long-term sustainability. Our mission is simple: to build smarter, safer, and more resilient infrastructure for the future.";

export const PILLARS = [
  {
    icon: "⚡",
    title: "Critical Infrastructure Resilience",
    text: "Hardening the energy and engineering systems that keep essential operations running through any disruption.",
  },
  {
    icon: "🛡️",
    title: "Smart Security",
    text: "Intelligent, AI-driven security technologies that protect people, assets, and operations around the clock.",
  },
  {
    icon: "🌍",
    title: "Sustainable Energy",
    text: "Clean, reliable power and energy storage engineered for long-term performance and lower carbon impact.",
  },
];

export const ABOUT = {
  whoWeAre:
    "CRE is a technology-driven infrastructure company advancing resilience, security, and sustainable development through integrated energy and smart technology solutions.",
  mission:
    "Building resilient infrastructure for a secure and sustainable future.",
  vision:
    "To be the partner of choice for resilient infrastructure and intelligent security solutions.",
  governance:
    "CRE upholds the highest standards of integrity, accountability, transparency, and professional excellence.",
  partnerships:
    "CRE partners with governments, industry leaders, and technology innovators to deliver resilient and sustainable infrastructure solutions.",
};

export const LEADERSHIP = {
  name: "Dr. Odunmboku-Wilson",
  role: "Founder & Chief Executive",
  bio: "CRE is led by Dr. Odunmboku-Wilson, an Ivy League-trained engineer and seasoned executive with a proven record of leadership across government, academia, and industry. Leveraging expertise in engineering, data analytics, strategy, and policy, he brings a unique ability to align technology, infrastructure, and institutional priorities to deliver sustainable, high-impact solutions. His leadership reflects CRE's commitment to innovation, resilience, and excellence.",
};

export type ServiceArea = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  icon: string;
  services: string[];
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "energy-resilience",
    number: "01",
    title: "Energy Resilience Solutions",
    tagline: "Reliable Power for Critical Operations",
    icon: "⚡",
    services: [
      "Solar Energy Systems",
      "Battery Energy Storage Systems (BESS)",
      "Hybrid Energy Solutions",
      "Microgrids",
      "Backup Power Systems",
      "Energy Audits",
      "Infrastructure Energy Planning",
    ],
  },
  {
    slug: "smart-security",
    number: "02",
    title: "Smart Security & Infrastructure Protection",
    tagline: "Protecting People, Assets and Operations",
    icon: "🛡️",
    services: [
      "CCTV Surveillance",
      "Access Control",
      "Perimeter Security",
      "AI Security Analytics",
      "Remote Monitoring",
      "Command & Control Centers",
      "Emergency Response Technologies",
    ],
  },
  {
    slug: "digital-infrastructure",
    number: "03",
    title: "Digital Infrastructure & Technology Advisory",
    tagline: "Engineering the Infrastructure of Tomorrow",
    icon: "🧠",
    services: [
      "Infrastructure Resilience Assessments",
      "Smart City Solutions",
      "IoT Monitoring Platforms",
      "Engineering Consulting",
      "Project Management",
      "Technical Training",
      "Digital Transformation Services",
    ],
  },
];

export const INDUSTRIES = [
  { name: "Government", icon: "🏛️" },
  { name: "Utilities", icon: "🔌" },
  { name: "Education", icon: "🎓" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Telecommunications", icon: "📡" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Commercial Real Estate", icon: "🏢" },
  { name: "Residential Communities", icon: "🏘️" },
];

export type Insight = {
  category: "News" | "Technology Articles";
  title: string;
  excerpt: string;
  date: string;
};

export const INSIGHTS: Insight[] = [
  {
    category: "News",
    title: "CRE expands critical infrastructure resilience services",
    excerpt:
      "Continental Renewable Energy broadens its mandate to secure the energy and engineering systems that power modern institutions.",
    date: "2026",
  },
  {
    category: "Technology Articles",
    title: "Why Battery Energy Storage Systems (BESS) are the backbone of resilient power",
    excerpt:
      "How hybrid solar and BESS architectures keep critical operations running through grid instability and outages.",
    date: "2026",
  },
  {
    category: "Technology Articles",
    title: "AI security analytics: from passive cameras to intelligent protection",
    excerpt:
      "Moving beyond recorded footage to real-time threat detection across people, assets, and perimeters.",
    date: "2026",
  },
];

export const CONTACT_PATHS = [
  {
    title: "Request Consultation",
    text: "Speak with our team about resilience, security, and energy strategy for your organisation.",
    cta: "Request a consultation",
    intent: "Consultation",
  },
  {
    title: "Become a Partner",
    text: "Join the CRE network of governments, integrators, and technology innovators.",
    cta: "Become a partner",
    intent: "Partnership",
  },
  {
    title: "Project Inquiry",
    text: "Have a project in mind? Tell us the scope and we will scope the right solution.",
    cta: "Start a project inquiry",
    intent: "Project Inquiry",
  },
];
