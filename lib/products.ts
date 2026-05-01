export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  features: string[];
  badge?: string;
  icon: string;
};

export const PRODUCTS: Product[] = [
{
    id: "amen-package",
    name: "Amen Package — 6KW Off-Grid",
    category: "Home System",
    description:
      "Entry-level off-grid solar system for standard Nigerian homes. Powers ACs, fridge, washing machine, lights, fans, and all everyday appliances with ~24 hours night autonomy.",
    price: "₦6,500,000",
    badge: "Best for 2–3 Bedroom Homes",
    icon: "🏠",
    features: [
      "6KW Growatt SPF 6000ES Plus Inverter (93% Efficiency)",
      "15kWh Rhizome LiFePO₄ Battery (12kWh Usable)",
      "6 × Jinko 595W Bifacial Solar Panels (3,570W Array)",
      "11.9 kWh/day system capacity",
      "Same-day installation by certified CRE technicians",
      "Finance available — lease-to-own via partners",
    ],
  },

  {
    id: "amen-plus-package",
    name: "Amen Plus Package — 6KW Enhanced",
    category: "Home System",
    description:
      "Double the solar panels of the Amen base. Handles 2 ACs simultaneously with 10+ kWh daily surplus for rainy season resilience. Ideal for homes needing more daytime generation.",
    price: "₦7,500,000",
    badge: "Best for Heavy Daytime Usage",
    icon: "⚡",
    features: [
      "6KW Growatt SPF 6000ES Plus Inverter (93% Efficiency)",
      "15kWh Rhizome LiFePO₄ Battery (12kWh Usable)",
      "12 × Jinko 595W Bifacial Solar Panels (7,140W Array)",
      "20.2 kWh/day system capacity",
      "Same-day installation by certified CRE technicians",
      "Finance available — lease-to-own via partners",
    ],
  },

  {
    id: "amen-pro-package",
    name: "Amen Pro Package — 11KW Professional",
    category: "Home System",
    description:
      "Full 3-bedroom energy independence with a premium Rhizome hybrid inverter. Runs 3 ACs, full kitchen, and all appliances with 2+ day battery autonomy during extended outages.",
    price: "₦17,000,000",
    badge: "Best for 3-Bedroom Homes",
    icon: "🏡",
    features: [
      "11KW Rhizome Hybrid Inverter — Dual MPPT, 22kVA Surge",
      "50kWh Rhizome Amen Pro LiFePO₄ Battery (40kWh Usable)",
      "18 × Jinko 595W Bifacial Solar Panels (10,710W Array)",
      "35.8 kWh/day system capacity",
      "Real-time monitoring via Rhizome WiFi app",
      "Finance available — lease-to-own via partners",
    ],
  },

  {
    id: "amen-pro-plus-package",
    name: "Amen Pro Plus Package — 25KW Premium",
    category: "Home System",
    description:
      "Near-complete energy independence for large 4+ bedroom homes. 3-phase Sungrow inverter handles all 4 ACs, full kitchen, home office, and more simultaneously with minimal generator need.",
    price: "₦22,000,000",
    badge: "Best for 4+ Bedroom Homes",
    icon: "🏘️",
    features: [
      "25KW Sungrow 3-Phase Inverter — 97% Efficiency, 3 MPPT",
      "50kWh Rhizome Amen Pro LiFePO₄ Battery (40kWh Usable)",
      "24 × Jinko 620W Bifacial N-Type TOPCon Panels (14,880W Array)",
      "55.2 kWh/day system capacity",
      "Remote monitoring app included",
      "Finance available — lease-to-own via partners",
    ],
  },

  {
    id: "grand-amen-pro-plus-package",
    name: "Grand Amen Pro Plus — Estate Flagship",
    category: "Estate System",
    description:
      "Complete estate-grade energy independence. 100kWh battery storage, 48 solar panels, and a 25KW 3-phase inverter powering 7 ACs, borehole pump, dryer, dishwasher, and an entire estate — generator virtually never needed.",
    price: "₦32,000,000",
    badge: "Best for Estates & Large Properties",
    icon: "🏢",
    features: [
      "25KW Sungrow 3-Phase Inverter — 97% Efficiency, 3 MPPT",
      "2 × 50kWh Rhizome LiFePO₄ Batteries (100kWh Total, 80kWh Usable)",
      "48 × Jinko 620W Bifacial N-Type TOPCon Panels (29,760W Array)",
      "117.2 kWh/day system capacity",
      "Supports borehole pump, clothes dryer, dishwasher, electric oven",
      "Finance available — lease-to-own via partners",
    ],
  },
]

export const PARTNER_TIERS = [
  "Bronze Partner",
  "Silver Partner",
  "Gold Partner",
  "Platinum Partner",
  "Authorized Dealer",
  "Installer / Technician",
];

export const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja",
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara",
];
