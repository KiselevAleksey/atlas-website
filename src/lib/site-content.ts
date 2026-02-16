import { mediaLibrary } from "@/lib/media";

export type Metric = {
  label: string;
  value: string;
  note: string;
};

export type IndustryProgram = {
  slug: string;
  name: string;
  summary: string;
  heroImage: string;
  keyChallenges: string[];
  capabilities: string[];
  metrics: Metric[];
  featuredCategories: string[];
};

export type ProgramPhase = {
  phase: string;
  duration: string;
  objective: string;
};

export type IndustryProgramDetail = {
  operatingProfile: {
    procurementCadence: string;
    demandPattern: string;
    serviceWindow: string;
    complianceLevel: string;
  };
  buyerJourneys: string[];
  riskControls: string[];
  implementationPhases: ProgramPhase[];
  recommendedSolutionSlugs: string[];
  relatedCaseStudySlugs: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export type SolutionPillar = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  modules: string[];
  outcomes: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  segment: string;
  title: string;
  excerpt: string;
  heroImage: string;
  results: Metric[];
  body: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  heroImage: string;
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export type Brochure = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  format: string;
  pages: number;
  heroImage: string;
  topics: string[];
};

export type DistributionCenter = {
  city: string;
  state: string;
  region: string;
  squareFeet: string;
  coldCapacity: string;
  image: string;
};

export type BrandPartner = {
  name: string;
  specialty: string;
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  image: string;
};

export type JobOpening = {
  title: string;
  location: string;
  team: string;
  type: string;
};

export type SustainabilityInitiative = {
  title: string;
  summary: string;
  metric: string;
  image: string;
};

export const globalStats: Metric[] = [
  {
    label: "Annual Orders",
    value: "3.4M",
    note: "Across multi-branch B2B buyers",
  },
  {
    label: "Distribution Centers",
    value: "12",
    note: "Serving all major US regions",
  },
  {
    label: "On-time Deliveries",
    value: "98.6%",
    note: "Measured over rolling 12 months",
  },
  {
    label: "Catalog SKUs",
    value: "18,000+",
    note: "Including sub-products and variants",
  },
];

export const industryPrograms: IndustryProgram[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    summary:
      "Menu-driven assortment planning for independent and regional restaurant groups with tight cost controls.",
    heroImage: mediaLibrary.restaurantDining.src,
    keyChallenges: [
      "Managing food cost volatility across changing menus",
      "Maintaining consistency across multi-unit operations",
      "Reducing prep labor without sacrificing quality",
    ],
    capabilities: [
      "Menu-level product mapping with approved substitutions",
      "Chef-ready prep programs and cut-size variants",
      "Branch-aware minimum order and delivery windows",
    ],
    metrics: [
      { label: "Average Fill Rate", value: "99.1%", note: "For core menu SKUs" },
      { label: "Labor Savings", value: "14%", note: "Through prep-ready formats" },
      { label: "Waste Reduction", value: "11%", note: "With forecast-linked ordering" },
    ],
    featuredCategories: ["Produce", "Proteins", "Frozen Foods", "Pantry"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Nutrition-compliant sourcing with predictable supply for hospitals, senior living, and patient meal programs.",
    heroImage: mediaLibrary.industrialKitchen.src,
    keyChallenges: [
      "Meeting dietary restrictions and allergen safety standards",
      "Ensuring continuity for critical patient meal lines",
      "Controlling spend across multiple facilities",
    ],
    capabilities: [
      "Allergen and nutrition metadata at SKU level",
      "Contract pricing controls by facility",
      "Emergency supply fallback for critical lines",
    ],
    metrics: [
      { label: "Compliance Accuracy", value: "99.8%", note: "Dietary attribute mapping" },
      { label: "Stockout Reduction", value: "36%", note: "For high-priority items" },
      { label: "Facility Coverage", value: "240+", note: "Healthcare sites served" },
    ],
    featuredCategories: ["Dairy & Eggs", "Proteins", "Produce", "Beverage"],
  },
  {
    slug: "education",
    name: "Education",
    summary:
      "High-volume school and campus meal support with budget-aware planning and seasonal forecasting.",
    heroImage: mediaLibrary.schoolCafeteria.src,
    keyChallenges: [
      "Operating under tight budget cycles",
      "Handling demand spikes by term and event",
      "Maintaining nutritional requirements at scale",
    ],
    capabilities: [
      "Term-based volume planning",
      "Commodity mix optimization and substitutions",
      "Forecast APIs for district planning systems",
    ],
    metrics: [
      { label: "Program Uptime", value: "99.4%", note: "Meal service continuity" },
      { label: "Cost Variance", value: "-8.2%", note: "Vs baseline purchasing" },
      { label: "Sites Supported", value: "1,150", note: "Schools and campuses" },
    ],
    featuredCategories: ["Bakery", "Frozen Foods", "Dairy & Eggs", "Pantry"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary:
      "End-to-end hotel and resort provisioning for breakfast, banquet, and room-service operations.",
    heroImage: mediaLibrary.hotelBreakfast.src,
    keyChallenges: [
      "Coordinating multiple food outlets per property",
      "Handling fluctuating occupancy demand",
      "Maintaining premium guest experience standards",
    ],
    capabilities: [
      "Outlet-level assortment templates",
      "Banquet event procurement bundles",
      "Seasonal menu calibration by occupancy forecasts",
    ],
    metrics: [
      { label: "Forecast Accuracy", value: "94%", note: "By property segment" },
      { label: "Guest Program NPS", value: "+47", note: "Food consistency impact" },
      { label: "Banquet Readiness", value: "99.3%", note: "Event order SLA" },
    ],
    featuredCategories: ["Seafood", "Produce", "Beverage", "Bakery"],
  },
  {
    slug: "quick-service",
    name: "Quick Service",
    summary:
      "Speed-focused supply programs for QSR brands requiring strict consistency and service-level reliability.",
    heroImage: mediaLibrary.logisticsWarehouse.src,
    keyChallenges: [
      "Strict product consistency across franchise locations",
      "Ultra-fast replenishment cycles",
      "Promotional demand spikes",
    ],
    capabilities: [
      "Franchise-level approved product lists",
      "Rapid replenishment routing and cut-off orchestration",
      "Promo calendar inventory reservation",
    ],
    metrics: [
      { label: "Location Coverage", value: "3,200", note: "Franchise branches" },
      { label: "Lead Time", value: "< 24h", note: "Metro markets" },
      { label: "Promo Fill Rate", value: "98.9%", note: "Limited-time offers" },
    ],
    featuredCategories: ["Frozen Foods", "Proteins", "Pantry", "Beverage"],
  },
  {
    slug: "corporate-dining",
    name: "Corporate Dining",
    summary:
      "Programmatic sourcing for enterprise cafeterias and workplace dining operations.",
    heroImage: mediaLibrary.coffeeBar.src,
    keyChallenges: [
      "Balancing menu variety with predictable costs",
      "Serving daily fluctuating headcounts",
      "Meeting diverse dietary preferences",
    ],
    capabilities: [
      "Daypart-based ordering templates",
      "Dynamic substitution by dietary profile",
      "Multi-site contract governance",
    ],
    metrics: [
      { label: "Menu Variety", value: "320+", note: "Rotating items per quarter" },
      { label: "Food Cost Control", value: "-9.7%", note: "Year-over-year" },
      { label: "Service Reliability", value: "99.5%", note: "On-schedule deliveries" },
    ],
    featuredCategories: ["Produce", "Bakery", "Beverage", "Pantry"],
  },
  {
    slug: "sports-venues",
    name: "Sports & Venues",
    summary:
      "High-volume event supply for stadiums, arenas, and concession partners.",
    heroImage: mediaLibrary.deliveryBoxes.src,
    keyChallenges: [
      "Extreme event-day demand swings",
      "Complex concession inventory planning",
      "Speed and throughput during service windows",
    ],
    capabilities: [
      "Event forecast procurement packs",
      "Venue-specific concession bundles",
      "Rapid deployment fulfillment playbooks",
    ],
    metrics: [
      { label: "Event Readiness", value: "99.2%", note: "Pre-event fulfillment" },
      { label: "Peak Throughput", value: "45k", note: "Orders per event day" },
      { label: "Waste Control", value: "-13%", note: "Post-event overstock" },
    ],
    featuredCategories: ["Frozen Foods", "Beverage", "Bakery", "Proteins"],
  },
  {
    slug: "travel-catering",
    name: "Travel Catering",
    summary:
      "Cold-chain reliable programs for airline, rail, and cruise catering operations.",
    heroImage: mediaLibrary.coldStorage.src,
    keyChallenges: [
      "Strict timing and security constraints",
      "Temperature integrity from dock to vehicle",
      "Complex international provisioning standards",
    ],
    capabilities: [
      "Time-gated order sequencing",
      "Validated cold-chain telemetry",
      "Compliance and traceability bundles",
    ],
    metrics: [
      { label: "Cold Chain Integrity", value: "99.7%", note: "Telemetry-compliant shipments" },
      { label: "Departure Readiness", value: "99.1%", note: "On-time catering handoff" },
      { label: "Global Partners", value: "70+", note: "Travel service operators" },
    ],
    featuredCategories: ["Seafood", "Dairy & Eggs", "Beverage", "Produce"],
  },
];

function buildIndustryFaq(industryName: string): IndustryProgramDetail["faq"] {
  return [
    {
      question: `How quickly can ${industryName.toLowerCase()} teams launch this program?`,
      answer:
        "Most customers launch a first wave in 8-12 weeks, starting with one region and a focused assortment before scaling.",
    },
    {
      question: "Can we enforce account and location-specific purchasing rules?",
      answer:
        "Yes. Buyer permissions, contract pricing visibility, substitutions, and approval chains can be configured by account and location.",
    },
    {
      question: "Do these workflows support ERP and procurement integrations?",
      answer:
        "Yes. The program can be connected through API and EDI adapters for orders, inventory snapshots, and invoicing flows.",
    },
  ];
}

export const industryProgramDetails: Record<string, IndustryProgramDetail> = {
  restaurants: {
    operatingProfile: {
      procurementCadence: "Daily and multi-week reorder cycles by concept",
      demandPattern: "High menu variability with seasonal promotions",
      serviceWindow: "Morning prep through late-evening service",
      complianceLevel: "Menu consistency and recipe-level yield controls",
    },
    buyerJourneys: [
      "Chef and category manager define approved menu assortments",
      "Branch buyers reorder from approved templates with budget guardrails",
      "Approvers review exceptions and substitution requests in one queue",
      "Operations team tracks fill-rate, waste, and margin performance",
    ],
    riskControls: [
      "Substitution policy by menu role and price sensitivity",
      "Out-of-stock fallback chains for critical ingredients",
      "Branch-level cut-off and delivery window enforcement",
      "Lot-level traceability for recall and quality response",
    ],
    implementationPhases: [
      { phase: "Assortment Alignment", duration: "2 weeks", objective: "Map menu to approved catalog structure." },
      { phase: "Workflow Configuration", duration: "3 weeks", objective: "Set approvals, pricing, and substitution logic." },
      { phase: "Pilot Launch", duration: "3 weeks", objective: "Roll out to one region and track key KPIs." },
      { phase: "Scale Deployment", duration: "4 weeks", objective: "Expand by market and optimize relevance rules." },
    ],
    recommendedSolutionSlugs: ["catalog-pim", "procurement-workflows", "search-discovery", "inventory-intelligence"],
    relatedCaseStudySlugs: ["regional-restaurant-group", "qsr-franchise-rollout"],
    faq: buildIndustryFaq("Restaurant"),
  },
  healthcare: {
    operatingProfile: {
      procurementCadence: "Scheduled weekly sourcing with emergency replenishment lanes",
      demandPattern: "Steady baseline demand with acuity-driven spikes",
      serviceWindow: "24/7 patient, clinical, and staff meal coverage",
      complianceLevel: "High dietary and allergen governance requirements",
    },
    buyerJourneys: [
      "Nutrition teams define approved and restricted product sets",
      "Facility buyers source by compliance-aware templates",
      "Clinical approvers validate exceptions and substitutions",
      "Supply coordinators monitor service continuity by facility",
    ],
    riskControls: [
      "Allergen and nutrition metadata gates at item level",
      "Critical-SKU fallback mapping with clinical approval rules",
      "Emergency procurement channels for priority items",
      "Audit-ready record of substitutions and approvals",
    ],
    implementationPhases: [
      { phase: "Compliance Mapping", duration: "2 weeks", objective: "Tag dietary and allergen requirements." },
      { phase: "Contract Configuration", duration: "3 weeks", objective: "Apply facility-level pricing and controls." },
      { phase: "Facility Pilot", duration: "3 weeks", objective: "Validate continuity and exception workflows." },
      { phase: "Network Expansion", duration: "4 weeks", objective: "Roll out across sites with KPI governance." },
    ],
    recommendedSolutionSlugs: ["catalog-pim", "procurement-workflows", "integrations-edi-api", "analytics-governance"],
    relatedCaseStudySlugs: ["hospital-network-sourcing"],
    faq: buildIndustryFaq("Healthcare"),
  },
  education: {
    operatingProfile: {
      procurementCadence: "Term-based planning with weekly replenishment",
      demandPattern: "Calendar-driven peaks around term and events",
      serviceWindow: "Breakfast through afternoon service windows",
      complianceLevel: "Nutrition and budget governance by district",
    },
    buyerJourneys: [
      "District planners build seasonal and term templates",
      "Campus buyers execute recurring orders with forecast adjustments",
      "Budget approvers monitor variance and commodity mix",
      "Operations leaders evaluate waste and service reliability",
    ],
    riskControls: [
      "Demand outlier alerts for event-driven spikes",
      "Commodity and substitute policy by district contracts",
      "Budget threshold checks before order submission",
      "Category-level waste and shrink monitoring",
    ],
    implementationPhases: [
      { phase: "Program Baseline", duration: "2 weeks", objective: "Capture current menus, volumes, and contracts." },
      { phase: "Template Build", duration: "3 weeks", objective: "Configure term and daypart purchasing templates." },
      { phase: "District Pilot", duration: "3 weeks", objective: "Launch with selected schools and collect metrics." },
      { phase: "District Rollout", duration: "4 weeks", objective: "Expand with governance and reporting cadence." },
    ],
    recommendedSolutionSlugs: ["procurement-workflows", "inventory-intelligence", "analytics-governance"],
    relatedCaseStudySlugs: ["campus-dining-modernization"],
    faq: buildIndustryFaq("Education"),
  },
  hospitality: {
    operatingProfile: {
      procurementCadence: "Daily outlet replenishment plus event-based sourcing",
      demandPattern: "Occupancy and event-driven demand volatility",
      serviceWindow: "All-day multi-outlet operations",
      complianceLevel: "Premium quality and guest-experience consistency",
    },
    buyerJourneys: [
      "Property teams configure outlet-level assortments",
      "Banquet planners source event bundles by forecast",
      "Procurement leads manage contract and budget controls",
      "Ops teams track spoilage, availability, and service outcomes",
    ],
    riskControls: [
      "Outlet-level inventory and menu availability thresholds",
      "Banquet cutoff and staging controls by event window",
      "Quality escalation workflows for guest-facing incidents",
      "Cross-property replenishment balancing for spikes",
    ],
    implementationPhases: [
      { phase: "Property Assessment", duration: "2 weeks", objective: "Map outlet requirements and event flows." },
      { phase: "Bundle Configuration", duration: "3 weeks", objective: "Set outlet templates and banquet bundles." },
      { phase: "Property Pilot", duration: "3 weeks", objective: "Launch in one property cluster." },
      { phase: "Portfolio Scale", duration: "4 weeks", objective: "Deploy across properties with occupancy-based tuning." },
    ],
    recommendedSolutionSlugs: ["catalog-pim", "inventory-intelligence", "analytics-governance"],
    relatedCaseStudySlugs: ["hospitality-event-scaling"],
    faq: buildIndustryFaq("Hospitality"),
  },
  "quick-service": {
    operatingProfile: {
      procurementCadence: "High-frequency replenishment with promo windows",
      demandPattern: "Stable base demand with sharp campaign peaks",
      serviceWindow: "Continuous daypart service and late-night operations",
      complianceLevel: "Strict franchise and menu consistency controls",
    },
    buyerJourneys: [
      "Franchise ops define concept-level approved lists",
      "Store managers reorder from locked assortments",
      "Regional approvers govern promo exceptions and substitutions",
      "Brand operations monitor fill-rate and promo readiness",
    ],
    riskControls: [
      "Promo inventory reservation and demand guardrails",
      "Franchise-level substitution restrictions",
      "Cut-off and replenishment SLA enforcement",
      "Branch exception dashboards and escalation workflows",
    ],
    implementationPhases: [
      { phase: "Franchise Standardization", duration: "2 weeks", objective: "Normalize approved products by concept." },
      { phase: "Promo Workflow Setup", duration: "3 weeks", objective: "Configure campaign inventory and rules." },
      { phase: "Regional Pilot", duration: "3 weeks", objective: "Launch in one franchise region." },
      { phase: "Network Rollout", duration: "4 weeks", objective: "Scale to all branches with SLA monitoring." },
    ],
    recommendedSolutionSlugs: ["procurement-workflows", "inventory-intelligence", "search-discovery"],
    relatedCaseStudySlugs: ["qsr-franchise-rollout", "regional-restaurant-group"],
    faq: buildIndustryFaq("Quick service"),
  },
  "corporate-dining": {
    operatingProfile: {
      procurementCadence: "Weekly planning with daily volume adjustments",
      demandPattern: "Headcount and event-driven demand movement",
      serviceWindow: "Breakfast, lunch, and PM service slots",
      complianceLevel: "Contract governance and dietary variety controls",
    },
    buyerJourneys: [
      "Program managers define daypart menu templates",
      "Site buyers reorder by projected attendance",
      "Approvers validate budget and substitution exceptions",
      "Leadership reviews utilization and service KPIs",
    ],
    riskControls: [
      "Attendance-based demand variance thresholds",
      "Dietary preference and availability substitution policy",
      "Contract compliance checks by account segment",
      "Operational scorecards by site and daypart",
    ],
    implementationPhases: [
      { phase: "Site Mapping", duration: "2 weeks", objective: "Capture daypart and location program patterns." },
      { phase: "Template Configuration", duration: "3 weeks", objective: "Set reorder models and approval chains." },
      { phase: "Program Pilot", duration: "3 weeks", objective: "Run pilot for selected enterprise sites." },
      { phase: "Scale and Optimize", duration: "4 weeks", objective: "Expand and tune demand/reorder policies." },
    ],
    recommendedSolutionSlugs: ["procurement-workflows", "analytics-governance", "search-discovery"],
    relatedCaseStudySlugs: ["regional-restaurant-group", "campus-dining-modernization"],
    faq: buildIndustryFaq("Corporate dining"),
  },
  "sports-venues": {
    operatingProfile: {
      procurementCadence: "Event-cycle sourcing with rapid replenishment",
      demandPattern: "Extreme demand spikes tied to event calendar",
      serviceWindow: "Compressed service windows during live events",
      complianceLevel: "Concession speed, availability, and safety controls",
    },
    buyerJourneys: [
      "Venue planners build event assortment bundles",
      "Concession teams execute pre-event staging orders",
      "Ops leaders coordinate in-event replenishment waves",
      "Finance and category teams review post-event waste and margin",
    ],
    riskControls: [
      "Event-specific inventory reservation and lock windows",
      "Concession fast-substitute policies for high-volume SKUs",
      "Real-time exception alerts during event operations",
      "Post-event reconciliation for overstock and shrink",
    ],
    implementationPhases: [
      { phase: "Event Mapping", duration: "2 weeks", objective: "Model demand by venue and event type." },
      { phase: "Bundle Design", duration: "3 weeks", objective: "Create concession-ready order bundles." },
      { phase: "Event Pilot", duration: "3 weeks", objective: "Launch with one major venue sequence." },
      { phase: "Venue Expansion", duration: "4 weeks", objective: "Scale with performance and waste controls." },
    ],
    recommendedSolutionSlugs: ["inventory-intelligence", "procurement-workflows", "analytics-governance"],
    relatedCaseStudySlugs: ["qsr-franchise-rollout", "hospitality-event-scaling"],
    faq: buildIndustryFaq("Sports and venues"),
  },
  "travel-catering": {
    operatingProfile: {
      procurementCadence: "Time-gated procurement by departure schedule",
      demandPattern: "Operationally fixed with route-based fluctuations",
      serviceWindow: "Strict handoff windows across 24/7 operations",
      complianceLevel: "High cold-chain, security, and traceability requirements",
    },
    buyerJourneys: [
      "Planning teams stage route and departure demand forecasts",
      "Buyers trigger pre-approved bundles with timing constraints",
      "Operations validate cold-chain telemetry before handoff",
      "Control towers monitor delay and exception workflows",
    ],
    riskControls: [
      "Cold-chain tolerance alerts and containment workflows",
      "Security checkpoint and handoff milestone enforcement",
      "Route-level substitution logic for constrained SKUs",
      "Audit trail for every departure-linked order event",
    ],
    implementationPhases: [
      { phase: "Ops Discovery", duration: "2 weeks", objective: "Map route, timing, and security constraints." },
      { phase: "Workflow Configuration", duration: "3 weeks", objective: "Implement time-gated order orchestration." },
      { phase: "Airport Pilot", duration: "3 weeks", objective: "Validate telemetry and handoff reliability." },
      { phase: "Network Expansion", duration: "4 weeks", objective: "Scale to additional hubs and carriers." },
    ],
    recommendedSolutionSlugs: ["integrations-edi-api", "inventory-intelligence", "analytics-governance"],
    relatedCaseStudySlugs: ["travel-catering-reliability"],
    faq: buildIndustryFaq("Travel catering"),
  },
};

export const solutionPillars: SolutionPillar[] = [
  {
    slug: "catalog-pim",
    title: "Catalog + PIM Core",
    summary:
      "One taxonomy for categories, sub-products, variants, and compliance attributes, governed across all channels.",
    heroImage: mediaLibrary.groceryShelves.src,
    modules: [
      "Category hierarchy and variant inheritance",
      "Attribute governance and schema validation",
      "Regional availability and substitution mapping",
      "Digital asset and content version control",
    ],
    outcomes: [
      "Faster onboarding for new SKUs",
      "Consistent product truth across teams",
      "Lower data QA overhead",
    ],
  },
  {
    slug: "search-discovery",
    title: "Search + Discovery",
    summary:
      "Enterprise-grade product discovery with relevance tuning, faceting, and contract-aware ranking.",
    heroImage: mediaLibrary.freshHerbs.src,
    modules: [
      "Synonym and typo-tolerant search",
      "Facets by dietary tags, pack size, region",
      "Behavioral relevance tuning",
      "Assortment and merchandising controls",
    ],
    outcomes: [
      "Higher search success rate",
      "Improved conversion from browse to quote",
      "Reduced manual procurement support",
    ],
  },
  {
    slug: "procurement-workflows",
    title: "Procurement Workflows",
    summary:
      "Role-based buyer experience with quote-to-order pipelines, approvals, and account-specific controls.",
    heroImage: mediaLibrary.shippingPallets.src,
    modules: [
      "Buyer roles and approval chains",
      "Reorder templates and budget guardrails",
      "Contract pricing and location constraints",
      "Cut-off and delivery window orchestration",
    ],
    outcomes: [
      "Reduced procurement cycle times",
      "Fewer order exceptions",
      "Improved spend governance",
    ],
  },
  {
    slug: "inventory-intelligence",
    title: "Inventory Intelligence",
    summary:
      "Inventory visibility and demand analytics to reduce stockouts, waste, and cost variance.",
    heroImage: mediaLibrary.frozenFood.src,
    modules: [
      "Stock snapshots and lead-time signals",
      "Demand forecasting by segment",
      "Substitution and risk detection",
      "Fill-rate and service-level dashboards",
    ],
    outcomes: [
      "Lower stockout incidence",
      "Better forecast confidence",
      "Reduced emergency replenishment spend",
    ],
  },
  {
    slug: "integrations-edi-api",
    title: "Integrations (EDI + API)",
    summary:
      "Reliable data exchange with ERP, finance, and procurement ecosystems through API and EDI adapters.",
    heroImage: mediaLibrary.supplyChain.src,
    modules: [
      "Order, invoice, and catalog sync",
      "Customer and contract data pipelines",
      "Error handling and retry orchestration",
      "Monitoring and alerting for integration health",
    ],
    outcomes: [
      "Lower manual reconciliation effort",
      "Faster partner onboarding",
      "Better operational visibility",
    ],
  },
  {
    slug: "analytics-governance",
    title: "Analytics + Governance",
    summary:
      "Decision-ready reporting and governance guardrails across assortment, procurement, and service quality.",
    heroImage: mediaLibrary.logisticsTruck.src,
    modules: [
      "KPI boards for category and account teams",
      "Search relevance diagnostics",
      "Operational SLA and exception reporting",
      "Audit-ready change logs",
    ],
    outcomes: [
      "Faster strategic decisions",
      "Clear accountability by function",
      "Improved compliance posture",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-restaurant-group",
    client: "Northline Grill Group",
    segment: "Regional Restaurant Chain",
    title: "Scaled multi-unit procurement across 180 locations with contract-aware catalog controls",
    excerpt:
      "Northline unified buying workflows, reduced stockouts, and improved cost predictability through role-based procurement and substitution logic.",
    heroImage: mediaLibrary.restaurantDining.src,
    results: [
      { label: "Stockouts", value: "-41%", note: "Core menu items" },
      { label: "Order Cycle Time", value: "-33%", note: "Request to confirmation" },
      { label: "Food Cost Variance", value: "-6.8%", note: "Within 2 quarters" },
    ],
    body: [
      "The client operated with fragmented category buying and inconsistent product substitutions across markets. Teams struggled to maintain menu consistency, especially during seasonal spikes.",
      "We implemented account-scoped catalog controls, location-level availability logic, and reorder templates for high-volume menu items. Each branch gained role-specific access with approval rules mapped to budget thresholds.",
      "Within two quarters, the group reported improved fill rate, fewer order escalations, and stronger visibility into spend by category and location.",
    ],
  },
  {
    slug: "hospital-network-sourcing",
    client: "Summit Health Alliance",
    segment: "Healthcare Network",
    title: "Built nutrition-compliant sourcing for 47 facilities with traceable substitutions",
    excerpt:
      "A healthcare network aligned dietary compliance and supply continuity through structured product metadata and fallback rules.",
    heroImage: mediaLibrary.industrialKitchen.src,
    results: [
      { label: "Dietary Compliance", value: "99.8%", note: "Audited meals" },
      { label: "Critical SKU Availability", value: "+22%", note: "Vs prior baseline" },
      { label: "Procurement Escalations", value: "-38%", note: "Monthly average" },
    ],
    body: [
      "Summit needed reliable sourcing for allergen-sensitive and nutrition-constrained meal plans while reducing manual cross-checking workload.",
      "We introduced structured allergen and dietary metadata, mapped equivalent substitutions, and enforced branch-level contract pricing visibility.",
      "The network improved compliance confidence and procurement stability while reducing emergency ordering behavior.",
    ],
  },
  {
    slug: "qsr-franchise-rollout",
    client: "BoltBurger Franchise",
    segment: "Quick Service",
    title: "Rolled out franchise-grade replenishment with promo-ready inventory orchestration",
    excerpt:
      "The QSR network synchronized promotions and store replenishment across 900+ units.",
    heroImage: mediaLibrary.logisticsWarehouse.src,
    results: [
      { label: "Promo Fill Rate", value: "98.9%", note: "Limited-time offers" },
      { label: "Emergency Deliveries", value: "-29%", note: "After go-live" },
      { label: "Menu Consistency", value: "+17 pts", note: "Operational score" },
    ],
    body: [
      "The franchise model required strict product governance while supporting high-frequency replenishment and promotional campaigns.",
      "Our rollout included approved product lists per concept, route-aware cut-off windows, and forecast-based inventory reservations for promotions.",
      "The network stabilized campaign launches and reduced disruption from ad-hoc procurement events.",
    ],
  },
  {
    slug: "campus-dining-modernization",
    client: "Metro University Dining",
    segment: "Education",
    title: "Modernized campus procurement with term-based planning and cost controls",
    excerpt:
      "The university system reduced spend variance while maintaining menu variety across campuses.",
    heroImage: mediaLibrary.schoolCafeteria.src,
    results: [
      { label: "Budget Variance", value: "-9.4%", note: "Annualized" },
      { label: "Procurement Throughput", value: "+31%", note: "Orders processed" },
      { label: "Waste", value: "-12%", note: "Forecast-led buying" },
    ],
    body: [
      "Campus dining teams worked with disconnected planning spreadsheets and limited visibility into demand swings by term and events.",
      "We deployed term-based templates, grouped menu bundles, and introduced alerting for demand outliers and contract drift.",
      "The result was stronger financial predictability with smoother service operations during peak periods.",
    ],
  },
  {
    slug: "hospitality-event-scaling",
    client: "Harborlight Hotels",
    segment: "Hospitality",
    title: "Enabled banquet and daily outlet sourcing with occupancy-aware forecasting",
    excerpt:
      "A hospitality portfolio aligned event and daily food operations on one procurement backbone.",
    heroImage: mediaLibrary.hotelBreakfast.src,
    results: [
      { label: "Banquet SLA", value: "99.3%", note: "Event readiness" },
      { label: "Spoilage", value: "-14%", note: "Property-wide" },
      { label: "Menu Availability", value: "+19%", note: "Peak occupancy days" },
    ],
    body: [
      "Properties needed a shared procurement strategy that still respected local demand and outlet-level variation.",
      "We configured outlet-specific assortment templates and occupancy-linked purchasing guidance for banquet, breakfast, and room service channels.",
      "Hotel operations achieved better supply precision with lower waste and stronger guest-facing consistency.",
    ],
  },
  {
    slug: "travel-catering-reliability",
    client: "AeroServe Catering",
    segment: "Travel Catering",
    title: "Strengthened cold-chain and timing reliability for airport catering operations",
    excerpt:
      "The travel catering operation improved handoff predictability through time-gated workflows and telemetry visibility.",
    heroImage: mediaLibrary.coldStorage.src,
    results: [
      { label: "Cold Chain Compliance", value: "99.7%", note: "Shipment telemetry" },
      { label: "Late Handoffs", value: "-44%", note: "Departure windows" },
      { label: "Order Accuracy", value: "99.1%", note: "Flight-level fulfillment" },
    ],
    body: [
      "AeroServe managed high-pressure schedules with strict quality and security constraints, requiring stronger process control.",
      "We introduced milestone-driven workflows, exception alerts, and traceability markers from staging to aircraft handoff.",
      "Operational confidence increased significantly, especially during high-traffic travel periods.",
    ],
  },
];

export const insights: InsightArticle[] = [
  {
    slug: "designing-catalog-taxonomy-for-18000-skus",
    title: "Designing Catalog Taxonomy for 18,000+ SKUs",
    category: "Catalog Strategy",
    readTime: "8 min",
    heroImage: mediaLibrary.groceryShelves.src,
    summary:
      "How to structure categories, sub-products, and variants without losing discoverability or governance control.",
    sections: [
      {
        heading: "Start with buyer intent, not internal org charts",
        paragraphs: [
          "Most large catalogs fail when taxonomy mirrors supplier divisions instead of buyer workflows. Organize first by buyer job-to-be-done and service context.",
          "Then add operational dimensions such as temperature, pack size, and lead-time as facetable metadata rather than top-level taxonomy branches.",
        ],
      },
      {
        heading: "Separate product identity from sellable variants",
        paragraphs: [
          "A parent product should capture the core item identity while sellable variants carry pack, MOQ, pricing, and region-specific availability.",
          "This model keeps content maintenance manageable and allows pricing or inventory changes without duplicating product storytelling.",
        ],
      },
      {
        heading: "Govern schema changes like product launches",
        paragraphs: [
          "Attribute drift creates relevance and compliance issues over time. Introduce versioned schema governance with change review and downstream impact checks.",
        ],
      },
    ],
  },
  {
    slug: "search-relevance-playbook-for-b2b-foodservice",
    title: "Search Relevance Playbook for B2B Foodservice",
    category: "Search",
    readTime: "7 min",
    heroImage: mediaLibrary.freshVegetables.src,
    summary: "A practical framework for relevance tuning across brand, pack size, and contract-aware ranking.",
    sections: [
      {
        heading: "Index for operational truth",
        paragraphs: [
          "Search indexes should include availability, lead time, and account-level eligibility, not just descriptive fields.",
          "When operational attributes are absent, relevance looks right but conversion drops because users click unavailable items.",
        ],
      },
      {
        heading: "Blend lexical and behavioral signals",
        paragraphs: [
          "Lexical matching catches intent. Behavioral signals like successful reorder events refine ranking over time.",
        ],
      },
      {
        heading: "Measure search by task completion",
        paragraphs: [
          "Track search success as completed quote/order outcomes, not only click-through. This aligns relevance investment with commercial outcomes.",
        ],
      },
    ],
  },
  {
    slug: "how-to-run-contract-pricing-without-manual-overrides",
    title: "How to Run Contract Pricing Without Manual Overrides",
    category: "Pricing",
    readTime: "6 min",
    heroImage: mediaLibrary.shippingPallets.src,
    summary:
      "Patterns for account-level pricing governance that reduce exceptions and preserve margin discipline.",
    sections: [
      {
        heading: "Use layered pricing policies",
        paragraphs: [
          "Model pricing as contract base rates with layered conditions for region, branch, and order volume.",
          "Avoid one-off manual overrides by encoding common exception patterns as reusable policy blocks.",
        ],
      },
      {
        heading: "Auditability is non-negotiable",
        paragraphs: [
          "Every pricing decision should be explainable from applied policy rules. This reduces dispute resolution time and improves trust.",
        ],
      },
    ],
  },
  {
    slug: "cold-chain-observability-for-distribution-networks",
    title: "Cold-chain Observability for Distribution Networks",
    category: "Operations",
    readTime: "9 min",
    heroImage: mediaLibrary.coldStorage.src,
    summary: "How to monitor temperature, timing, and risk signals in multi-node fulfillment networks.",
    sections: [
      {
        heading: "Monitor transitions, not just nodes",
        paragraphs: [
          "Risk often emerges during handoffs. Capture telemetry and timing at transfer points between warehouse, vehicle, and receiving docks.",
        ],
      },
      {
        heading: "Operationalize exception workflows",
        paragraphs: [
          "Alerts are only useful when tied to pre-defined response playbooks. Assign clear ownership and SLA for each exception type.",
        ],
      },
    ],
  },
  {
    slug: "launching-a-regional-b2b-catalog-pilot",
    title: "Launching a Regional B2B Catalog Pilot",
    category: "Transformation",
    readTime: "5 min",
    heroImage: mediaLibrary.distributionCenter.src,
    summary:
      "A staged rollout model to de-risk transformation while delivering measurable value in under 90 days.",
    sections: [
      {
        heading: "Start with one segment and one region",
        paragraphs: [
          "Pilot scope should be narrow enough for fast learning yet large enough to validate operations, data, and buyer experience end-to-end.",
        ],
      },
      {
        heading: "Define success metrics before kickoff",
        paragraphs: [
          "Set baseline metrics for fill rate, search completion, order cycle time, and support tickets so impact can be measured objectively.",
        ],
      },
    ],
  },
  {
    slug: "edi-integration-checklist-for-food-distributors",
    title: "EDI Integration Checklist for Food Distributors",
    category: "Integrations",
    readTime: "10 min",
    heroImage: mediaLibrary.supplyChain.src,
    summary: "A field-tested checklist for stable EDI operations across orders, invoices, and catalogs.",
    sections: [
      {
        heading: "Map transaction sets to business owners",
        paragraphs: [
          "Assign ownership by transaction set and define fallback procedures for each error condition.",
        ],
      },
      {
        heading: "Implement replay-safe pipelines",
        paragraphs: [
          "Retries should be idempotent to avoid duplicate orders or invoice mismatches. Use deterministic keys and replay tracking.",
        ],
      },
    ],
  },
  {
    slug: "menu-engineering-with-variant-level-cost-control",
    title: "Menu Engineering with Variant-level Cost Control",
    category: "Menu Planning",
    readTime: "7 min",
    heroImage: mediaLibrary.chefPlating.src,
    summary:
      "How culinary and procurement teams collaborate on pricing, yield, and pack strategy.",
    sections: [
      {
        heading: "Design recipes against constrained variant sets",
        paragraphs: [
          "Treat approved variants as design constraints in menu planning to reduce substitutions that hurt consistency.",
        ],
      },
      {
        heading: "Track margin at recipe and branch level",
        paragraphs: [
          "Variant-level cost visibility enables targeted adjustments by region or concept without redesigning entire menus.",
        ],
      },
    ],
  },
  {
    slug: "building-buyer-experience-for-large-enterprise-accounts",
    title: "Building Buyer Experience for Large Enterprise Accounts",
    category: "User Experience",
    readTime: "6 min",
    heroImage: mediaLibrary.logisticsTruck.src,
    summary: "Design principles for role-aware, low-friction procurement experiences in complex organizations.",
    sections: [
      {
        heading: "Prioritize repeat behavior",
        paragraphs: [
          "Most enterprise buying is repetitive. Reorder flows, saved lists, and branch templates should be first-class UX elements.",
        ],
      },
      {
        heading: "Make constraints visible early",
        paragraphs: [
          "Surface contract, availability, and cut-off constraints before checkout to reduce failed order attempts and support calls.",
        ],
      },
    ],
  },
];

export const brochures: Brochure[] = [
  {
    slug: "enterprise-catalog-overview",
    title: "Enterprise Catalog Platform Overview",
    audience: "Procurement and Category Leadership",
    summary:
      "A concise executive brochure covering catalog architecture, search, governance, and rollout model for multi-branch operations.",
    format: "PDF Brochure",
    pages: 14,
    heroImage: mediaLibrary.groceryShelves.src,
    topics: ["catalog", "taxonomy", "search", "governance", "onboarding"],
  },
  {
    slug: "pricing-governance-playbook",
    title: "Contract Pricing and Margin Governance",
    audience: "Finance and Commercial Operations",
    summary:
      "Practical guide for contract-based pricing controls, policy layering, approvals, and dispute-ready audit trails.",
    format: "PDF Brochure",
    pages: 12,
    heroImage: mediaLibrary.shippingPallets.src,
    topics: ["pricing", "contracts", "margin", "approvals", "governance"],
  },
  {
    slug: "search-discovery-brief",
    title: "Search and Discovery Optimization Brief",
    audience: "Digital Commerce and Product Teams",
    summary:
      "How to raise search success, reduce dead-end sessions, and route users to the right product, flow, or service page.",
    format: "PDF Brochure",
    pages: 10,
    heroImage: mediaLibrary.freshVegetables.src,
    topics: ["search", "relevance", "routing", "conversion", "facets"],
  },
  {
    slug: "cold-chain-operations-guide",
    title: "Cold-chain Reliability Operations Guide",
    audience: "Distribution and Operations Leaders",
    summary:
      "Operational framework for temperature telemetry, handoff controls, SLA tracking, and incident response at scale.",
    format: "PDF Brochure",
    pages: 16,
    heroImage: mediaLibrary.coldStorage.src,
    topics: ["cold-chain", "operations", "compliance", "sla", "telemetry"],
  },
  {
    slug: "integration-edi-api-kit",
    title: "EDI and API Integration Starter Kit",
    audience: "IT and Integration Architects",
    summary:
      "Reference brochure for stable catalog/order/invoice data exchange, replay safety, and operational monitoring.",
    format: "PDF Brochure",
    pages: 18,
    heroImage: mediaLibrary.supplyChain.src,
    topics: ["edi", "api", "integration", "orders", "invoices"],
  },
  {
    slug: "industry-solution-map",
    title: "Industry-to-Solution Mapping Deck",
    audience: "Sales Engineering and Customer Success",
    summary:
      "A practical mapping between industry operating patterns and recommended solution modules with KPI targets.",
    format: "PDF Brochure",
    pages: 11,
    heroImage: mediaLibrary.logisticsTruck.src,
    topics: ["industries", "solutions", "kpis", "rollout", "adoption"],
  },
];

export const distributionCenters: DistributionCenter[] = [
  {
    city: "Chicago",
    state: "IL",
    region: "Midwest",
    squareFeet: "410,000",
    coldCapacity: "19,500 pallets",
    image: mediaLibrary.logisticsWarehouse.src,
  },
  {
    city: "Dallas",
    state: "TX",
    region: "South Central",
    squareFeet: "390,000",
    coldCapacity: "17,900 pallets",
    image: mediaLibrary.logisticsTruck.src,
  },
  {
    city: "Atlanta",
    state: "GA",
    region: "Southeast",
    squareFeet: "355,000",
    coldCapacity: "15,200 pallets",
    image: mediaLibrary.deliveryBoxes.src,
  },
  {
    city: "Los Angeles",
    state: "CA",
    region: "West",
    squareFeet: "470,000",
    coldCapacity: "21,400 pallets",
    image: mediaLibrary.distributionCenter.src,
  },
  {
    city: "Seattle",
    state: "WA",
    region: "Northwest",
    squareFeet: "275,000",
    coldCapacity: "11,700 pallets",
    image: mediaLibrary.seafoodIce.src,
  },
  {
    city: "Newark",
    state: "NJ",
    region: "Northeast",
    squareFeet: "365,000",
    coldCapacity: "16,100 pallets",
    image: mediaLibrary.shippingPallets.src,
  },
  {
    city: "Phoenix",
    state: "AZ",
    region: "Southwest",
    squareFeet: "285,000",
    coldCapacity: "12,200 pallets",
    image: mediaLibrary.farmHarvest.src,
  },
  {
    city: "Denver",
    state: "CO",
    region: "Mountain",
    squareFeet: "260,000",
    coldCapacity: "10,900 pallets",
    image: mediaLibrary.coldStorage.src,
  },
];

export const brandPartners: BrandPartner[] = [
  { name: "NorthField Produce", specialty: "Premium greens and fresh cut", image: mediaLibrary.produceMarket.src },
  { name: "PrimeYard", specialty: "Poultry and portioned proteins", image: mediaLibrary.meatButcher.src },
  { name: "BlueDock Seafood", specialty: "Traceable seafood programs", image: mediaLibrary.seafoodMarket.src },
  { name: "CrustWorks", specialty: "Bread, rolls, and artisan bakery", image: mediaLibrary.bakeryBread.src },
  { name: "CreamRoute", specialty: "Fluid dairy and cultured products", image: mediaLibrary.dairyMilk.src },
  { name: "ColdStone Supply", specialty: "Frozen sides and appetizers", image: mediaLibrary.frozenFood.src },
  { name: "PantryAxis", specialty: "Sauces and dry-goods pantry", image: mediaLibrary.groceryShelves.src },
  { name: "PourCraft", specialty: "Beverage concentrates and syrups", image: mediaLibrary.beverageDrinks.src },
  { name: "Harvest Rail", specialty: "Farm-direct produce network", image: mediaLibrary.farmHarvest.src },
  { name: "LineChef", specialty: "Operationally optimized SKUs", image: mediaLibrary.kitchenPrep.src },
  { name: "RouteFive", specialty: "Dispense and beverage systems", image: mediaLibrary.orangeJuice.src },
  { name: "OvenBridge", specialty: "Par-baked and thaw-and-serve", image: mediaLibrary.flourBakery.src },
];

export const leadershipTeam: TeamMember[] = [
  {
    name: "Maya Chen",
    role: "Chief Executive Officer",
    focus: "Enterprise growth and customer outcomes",
    image: mediaLibrary.restaurantDining.src,
  },
  {
    name: "Luis Ortega",
    role: "Chief Operations Officer",
    focus: "Distribution reliability and service quality",
    image: mediaLibrary.distributionCenter.src,
  },
  {
    name: "Erin Patel",
    role: "Chief Product Officer",
    focus: "Catalog intelligence and buyer platform",
    image: mediaLibrary.groceryShelves.src,
  },
  {
    name: "Jonathan Pierce",
    role: "SVP Supply Chain",
    focus: "Regional fulfillment and sourcing strategy",
    image: mediaLibrary.logisticsWarehouse.src,
  },
  {
    name: "Aisha Boyd",
    role: "VP Customer Success",
    focus: "Multi-segment adoption and value realization",
    image: mediaLibrary.coffeeBar.src,
  },
  {
    name: "Daniel Kim",
    role: "VP Data & Analytics",
    focus: "Demand forecasting and performance governance",
    image: mediaLibrary.supplyChain.src,
  },
];

export const jobOpenings: JobOpening[] = [
  { title: "Senior Product Manager, Catalog", location: "Chicago, IL", team: "Product", type: "Full-time" },
  { title: "Staff Frontend Engineer", location: "Remote (US)", team: "Engineering", type: "Full-time" },
  { title: "Solutions Architect (EDI/API)", location: "Dallas, TX", team: "Integrations", type: "Full-time" },
  { title: "Regional Operations Manager", location: "Los Angeles, CA", team: "Operations", type: "Full-time" },
  { title: "Demand Planning Analyst", location: "Atlanta, GA", team: "Analytics", type: "Full-time" },
  { title: "Customer Success Lead, Healthcare", location: "Remote (US)", team: "Customer Success", type: "Full-time" },
  { title: "QA Engineer, Commerce Workflows", location: "Denver, CO", team: "Engineering", type: "Full-time" },
  { title: "Senior Category Manager, Proteins", location: "Phoenix, AZ", team: "Category", type: "Full-time" },
];

export const sustainabilityInitiatives: SustainabilityInitiative[] = [
  {
    title: "Fleet Route Optimization",
    summary: "AI-assisted routing reduced delivery miles while preserving service windows for priority accounts.",
    metric: "-12.4% transportation emissions",
    image: mediaLibrary.logisticsTruck.src,
  },
  {
    title: "Cold-chain Efficiency",
    summary: "Facility upgrades and monitoring reduced refrigeration energy intensity across major DCs.",
    metric: "-9.1% kWh per pallet stored",
    image: mediaLibrary.coldStorage.src,
  },
  {
    title: "Food Waste Recovery",
    summary: "Partnership model for donations and upcycling of eligible inventory near shelf-life thresholds.",
    metric: "3.1M meals redirected annually",
    image: mediaLibrary.farmHarvest.src,
  },
  {
    title: "Packaging Transition",
    summary: "Shift toward recyclable and right-sized secondary packaging for high-turnover categories.",
    metric: "-18% packaging material weight",
    image: mediaLibrary.deliveryBoxes.src,
  },
];

export const faqItems = [
  {
    question: "How quickly can we onboard our catalog and customer contracts?",
    answer:
      "Most customers complete phased onboarding in 8-12 weeks, starting with one region and one customer segment. We provide migration templates for product, pricing, and account data.",
  },
  {
    question: "Can we enforce buyer approvals and budget controls?",
    answer:
      "Yes. Approval workflows are configurable by account, location, buyer role, and order thresholds, including escalation paths and audit history.",
  },
  {
    question: "Do you support ERP and procurement integrations?",
    answer:
      "Yes. We support API and EDI integrations for catalog, orders, invoices, inventory snapshots, and account master data synchronization.",
  },
  {
    question: "How do you handle out-of-stock substitutions?",
    answer:
      "Substitutions can be pre-approved by category managers and constrained by account contracts, dietary requirements, and branch-level preferences.",
  },
  {
    question: "Is pricing personalized by customer contract?",
    answer:
      "Yes. Pricing visibility and checkout rules can be controlled by account contract, region, branch, and negotiated tiers.",
  },
  {
    question: "What support model is available after launch?",
    answer:
      "Customers receive dedicated success and operations support, quarterly optimization reviews, and optional managed search relevance tuning.",
  },
];

export const featuredGallery = [
  mediaLibrary.heroWarehouse,
  mediaLibrary.produceMarket,
  mediaLibrary.kitchenPrep,
  mediaLibrary.logisticsTruck,
  mediaLibrary.distributionCenter,
  mediaLibrary.farmHarvest,
];

export const officeLocations = [
  {
    city: "Chicago",
    address: "1200 W Fulton Market, Chicago, IL 60607",
    phone: "+1 (312) 555-0198",
    image: mediaLibrary.logisticsWarehouse.src,
  },
  {
    city: "Dallas",
    address: "7700 Distribution Park Blvd, Dallas, TX 75247",
    phone: "+1 (214) 555-0162",
    image: mediaLibrary.shippingPallets.src,
  },
  {
    city: "Los Angeles",
    address: "4450 Supply Chain Dr, Los Angeles, CA 90058",
    phone: "+1 (323) 555-0121",
    image: mediaLibrary.distributionCenter.src,
  },
];
