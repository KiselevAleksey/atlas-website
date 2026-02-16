export type TemperatureZone = "Frozen" | "Chilled" | "Ambient";

export type InventoryStatus = "In Stock" | "Limited" | "Build to Order";

export type ProductVariant = {
  id: string;
  label: string;
  pack: string;
  netWeight: string;
  minimumOrderCases: number;
  pricePerCaseUsd: number;
  status: InventoryStatus;
};

export type ProductSubProduct = {
  id: string;
  name: string;
  format: string;
  useCase: string;
};

export type CatalogProduct = {
  slug: string;
  sku: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  brand: string;
  temperature: TemperatureZone;
  leadTimeDays: number;
  shelfLifeDays: number;
  certifications: string[];
  industries: string[];
  origin: string;
  allergenProfile: string;
  storage: string;
  highlights: string[];
  variants: ProductVariant[];
  subProducts: ProductSubProduct[];
};

export type CatalogCategory = {
  name: string;
  description: string;
  productCount: number;
  subCategories: string[];
};

type ProductSeed = {
  category: string;
  subCategory: string;
  items: string[];
  industries: string[];
  certifications: string[];
  temperature: TemperatureZone;
  brands: string[];
  origin: string;
  allergenProfile: string;
  storage: string;
  basePrice: number;
};

const tierBlueprint = [
  {
    label: "Select",
    priceMultiplier: 1,
    leadTimeOffset: 0,
    shelfLifeOffset: 0,
  },
  {
    label: "Professional",
    priceMultiplier: 1.16,
    leadTimeOffset: 1,
    shelfLifeOffset: 18,
  },
  {
    label: "Reserve",
    priceMultiplier: 1.31,
    leadTimeOffset: 2,
    shelfLifeOffset: 35,
  },
  {
    label: "Signature",
    priceMultiplier: 1.44,
    leadTimeOffset: 2,
    shelfLifeOffset: 50,
  },
] as const;

const variantBlueprint = [
  {
    label: "Case",
    packMultiplier: 1,
    priceMultiplier: 1,
    minimumOrderCases: 8,
  },
  {
    label: "Half Pallet",
    packMultiplier: 6,
    priceMultiplier: 0.97,
    minimumOrderCases: 32,
  },
  {
    label: "Full Pallet",
    packMultiplier: 12,
    priceMultiplier: 0.92,
    minimumOrderCases: 68,
  },
] as const;

const subProductSuffixes = [
  "Trim Standard",
  "Portion Control",
  "Prep Plus",
  "Line Ready",
  "Chef Reserve",
  "Express Cut",
  "Regional Spec",
  "Yield Optimized",
  "Performance Blend",
  "Service Pack",
] as const;

const subProductFormats = [
  "Prep Ready",
  "Pre-Measured",
  "Bulk",
  "Ready to Cook",
  "Premium",
  "Batch Pack",
  "Cross-Dock",
] as const;

const subProductUseCases = [
  "Back-of-house speed and labor reduction",
  "Consistent food cost and portion yield",
  "Menu standardization across locations",
  "High-throughput line service",
  "Premium menu and signature offerings",
  "Regional compliance and local assortment",
  "Peak service backup inventory",
  "Contract pricing and rebate alignment",
] as const;

const highlightPool = [
  "Case-level barcode scanning",
  "Cross-dock compatible packaging",
  "Lot-level traceability from source",
  "Built for multi-location menu consistency",
  "Optimized for labor-constrained kitchens",
  "Contract-aware replenishment guidance",
  "Substitution-aware ordering workflows",
  "Temperature-chain compliance controls",
  "Demand-planning forecast compatibility",
] as const;

const productSeeds: ProductSeed[] = [
  {
    category: "Produce",
    subCategory: "Leafy Greens",
    items: [
      "Baby Spinach",
      "Romaine Hearts",
      "Spring Mix",
      "Kale Medley",
      "Arugula",
      "Butter Lettuce",
      "Iceberg Shred",
      "Power Greens",
    ],
    industries: ["Restaurants", "Healthcare", "Corporate Dining"],
    certifications: ["USDA GAP", "Traceable Farm ID"],
    temperature: "Chilled",
    brands: ["NorthField", "Harvest Rail"],
    origin: "California, USA",
    allergenProfile: "None declared",
    storage: "34-38F cold chain",
    basePrice: 34,
  },
  {
    category: "Produce",
    subCategory: "Fresh Cut Vegetables",
    items: [
      "Diced Onions",
      "Julienne Carrots",
      "Broccoli Florets",
      "Tri-Pepper Blend",
      "Celery Sticks",
      "Sliced Mushrooms",
      "Diced Tomatoes",
      "Zucchini Coins",
    ],
    industries: ["Quick Service", "Meal Kits", "Education"],
    certifications: ["SQF", "Traceable Farm ID"],
    temperature: "Chilled",
    brands: ["PrepPath", "Harvest Rail"],
    origin: "Arizona, USA",
    allergenProfile: "None declared",
    storage: "34-38F cold chain",
    basePrice: 32,
  },
  {
    category: "Produce",
    subCategory: "Whole Fruits",
    items: [
      "Gala Apples",
      "Banana Bunches",
      "Navel Oranges",
      "Seedless Grapes",
      "Pineapple Spears",
      "Berry Medley",
      "Cantaloupe Cubes",
      "Pear Halves",
    ],
    industries: ["Hospitality", "Education", "Healthcare"],
    certifications: ["USDA GAP", "SQF"],
    temperature: "Chilled",
    brands: ["NorthField", "Sunridge"],
    origin: "Washington, USA",
    allergenProfile: "None declared",
    storage: "34-40F cold chain",
    basePrice: 30,
  },
  {
    category: "Proteins",
    subCategory: "Poultry",
    items: [
      "Chicken Breast Fillet",
      "Chicken Thigh Boneless",
      "Turkey Medallions",
      "Chicken Tenders",
      "Grilled Chicken Strips",
      "Rotisserie Pull",
      "Turkey Roast Slices",
      "Chicken Wing Flats",
    ],
    industries: ["Restaurants", "Healthcare", "Airline Catering"],
    certifications: ["USDA Inspected", "Halal Options"],
    temperature: "Frozen",
    brands: ["PrimeYard", "LineChef"],
    origin: "Arkansas, USA",
    allergenProfile: "Contains no major allergens",
    storage: "0F or below",
    basePrice: 78,
  },
  {
    category: "Proteins",
    subCategory: "Beef & Pork",
    items: [
      "Choice Beef Strip",
      "Ground Beef 80/20",
      "Pulled Pork",
      "Pork Loin Roast",
      "Beef Meatballs",
      "Smoked Ham Slices",
      "Sirloin Tips",
      "Pork Carnitas",
    ],
    industries: ["Restaurants", "Hospitality", "Stadium Concessions"],
    certifications: ["USDA Inspected", "Animal Welfare Audited"],
    temperature: "Frozen",
    brands: ["CattleMark", "LineChef"],
    origin: "Nebraska, USA",
    allergenProfile: "Contains no major allergens",
    storage: "0F or below",
    basePrice: 89,
  },
  {
    category: "Proteins",
    subCategory: "Plant-Based",
    items: [
      "Plant Protein Crumbles",
      "Vegan Burger Patty",
      "Plant-Based Sausage Link",
      "Chickpea Cutlet",
      "Soy-Free Protein Patty",
      "Lentil Loaf Slice",
      "Mushroom Protein Blend",
      "Vegan Meatball",
    ],
    industries: ["Corporate Dining", "Healthcare", "Education"],
    certifications: ["Non-GMO", "SQF"],
    temperature: "Frozen",
    brands: ["LineChef", "GreenForge"],
    origin: "Illinois, USA",
    allergenProfile: "May contain soy or pea protein",
    storage: "0F or below",
    basePrice: 71,
  },
  {
    category: "Seafood",
    subCategory: "Portioned Seafood",
    items: [
      "Atlantic Salmon Portion",
      "Cod Loin",
      "Shrimp Peeled 21/25",
      "Tuna Steak",
      "Tilapia Fillet",
      "Pollock Portion",
      "Mahi Mahi Cut",
      "Crab Cake",
    ],
    industries: ["Restaurants", "Cruise", "Corporate Dining"],
    certifications: ["MSC", "BAP"],
    temperature: "Frozen",
    brands: ["BlueDock", "HarborPeak"],
    origin: "Nova Scotia, Canada",
    allergenProfile: "Contains fish/shellfish",
    storage: "-10F to 0F",
    basePrice: 96,
  },
  {
    category: "Seafood",
    subCategory: "Value-Added Seafood",
    items: [
      "Breaded Cod Strip",
      "Coconut Shrimp",
      "Salmon Burger",
      "Seafood Mix",
      "Calamari Rings",
      "Lemon Pepper Haddock",
      "Teriyaki Salmon Bite",
      "Cajun Shrimp Skewer",
    ],
    industries: ["Quick Service", "Hospitality", "Travel Catering"],
    certifications: ["BAP", "SQF"],
    temperature: "Frozen",
    brands: ["BlueDock", "HarborPeak"],
    origin: "Alaska, USA",
    allergenProfile: "Contains fish/shellfish; may contain wheat",
    storage: "-10F to 0F",
    basePrice: 92,
  },
  {
    category: "Dairy & Eggs",
    subCategory: "Cultured & Fluid",
    items: [
      "Whole Milk",
      "Greek Yogurt",
      "Sour Cream",
      "Cage Free Liquid Eggs",
      "Half & Half",
      "Lowfat Milk",
      "Vanilla Yogurt",
      "Buttermilk",
    ],
    industries: ["Healthcare", "Education", "Bakery"],
    certifications: ["Grade A", "HACCP Verified"],
    temperature: "Chilled",
    brands: ["CreamRoute", "LactoLine"],
    origin: "Wisconsin, USA",
    allergenProfile: "Contains milk/egg",
    storage: "34-38F cold chain",
    basePrice: 44,
  },
  {
    category: "Dairy & Eggs",
    subCategory: "Cheese & Butter",
    items: [
      "Mozzarella Shred",
      "Cheddar Slice",
      "Parmesan Grate",
      "Salted Butter",
      "Unsalted Butter",
      "Cream Cheese",
      "Swiss Slice",
      "Feta Crumble",
    ],
    industries: ["Restaurants", "Bakery", "Hospitality"],
    certifications: ["Grade A", "SQF"],
    temperature: "Chilled",
    brands: ["CreamRoute", "LactoLine"],
    origin: "Idaho, USA",
    allergenProfile: "Contains milk",
    storage: "34-38F cold chain",
    basePrice: 49,
  },
  {
    category: "Bakery",
    subCategory: "Bread & Rolls",
    items: [
      "Brioche Bun",
      "Sourdough Loaf",
      "Ciabatta Roll",
      "Whole Grain Sandwich Bread",
      "Potato Bun",
      "Hoagie Roll",
      "Dinner Roll",
      "Multigrain Bun",
    ],
    industries: ["Restaurants", "Healthcare", "Retail Cafes"],
    certifications: ["Kosher", "SQF"],
    temperature: "Ambient",
    brands: ["CrustWorks", "OvenBridge"],
    origin: "Ohio, USA",
    allergenProfile: "Contains wheat; may contain sesame",
    storage: "60-72F dry storage",
    basePrice: 29,
  },
  {
    category: "Bakery",
    subCategory: "Pastry & Breakfast",
    items: [
      "Croissant Dough",
      "Blueberry Muffin",
      "Cinnamon Roll",
      "Danish Assortment",
      "Banana Bread Slice",
      "Mini Donut",
      "Bagel Plain",
      "Scone Variety",
    ],
    industries: ["Hospitality", "Corporate Dining", "Education"],
    certifications: ["SQF", "Kosher"],
    temperature: "Ambient",
    brands: ["CrustWorks", "OvenBridge"],
    origin: "Pennsylvania, USA",
    allergenProfile: "Contains wheat, milk, egg",
    storage: "60-72F dry storage",
    basePrice: 33,
  },
  {
    category: "Frozen Foods",
    subCategory: "Sides & Appetizers",
    items: [
      "Steak Fries",
      "Mozzarella Sticks",
      "Mac & Cheese Bites",
      "Vegetable Medley",
      "Onion Rings",
      "Breaded Cauliflower",
      "Sweet Potato Fries",
      "Jalapeno Poppers",
    ],
    industries: ["Quick Service", "Hospitality", "Sports Venues"],
    certifications: ["SQF", "HACCP Verified"],
    temperature: "Frozen",
    brands: ["ColdStone Supply", "LineChef"],
    origin: "Minnesota, USA",
    allergenProfile: "Product dependent; see case label",
    storage: "0F or below",
    basePrice: 53,
  },
  {
    category: "Frozen Foods",
    subCategory: "Breakfast & Entrees",
    items: [
      "Scrambled Egg Patty",
      "Breakfast Sausage Patty",
      "Pancake Round",
      "Waffle Belgian",
      "Chicken Alfredo Tray",
      "Lasagna Portion",
      "Veggie Stir Fry",
      "Rice Pilaf Blend",
    ],
    industries: ["Education", "Healthcare", "Travel Catering"],
    certifications: ["HACCP Verified", "SQF"],
    temperature: "Frozen",
    brands: ["ColdStone Supply", "LineChef"],
    origin: "Iowa, USA",
    allergenProfile: "Product dependent; see case label",
    storage: "0F or below",
    basePrice: 56,
  },
  {
    category: "Pantry",
    subCategory: "Sauces & Condiments",
    items: [
      "Tomato Marinara",
      "Chipotle Aioli",
      "Classic Ketchup",
      "Sesame Teriyaki",
      "Ranch Dressing",
      "Honey Mustard",
      "Alfredo Sauce",
      "BBQ Sauce Smoky",
    ],
    industries: ["Restaurants", "Meal Prep", "Education"],
    certifications: ["SQF", "Lot Traceable"],
    temperature: "Ambient",
    brands: ["PantryAxis", "RouteFive"],
    origin: "Texas, USA",
    allergenProfile: "May contain soy, egg, or sesame",
    storage: "55-72F dry storage",
    basePrice: 37,
  },
  {
    category: "Pantry",
    subCategory: "Grains & Bases",
    items: [
      "Long Grain Rice",
      "Quinoa Blend",
      "Penne Pasta",
      "Couscous",
      "Instant Mashed Potato",
      "Tortilla Wrap",
      "Pizza Sauce Base",
      "Soup Starter Vegetable",
    ],
    industries: ["Restaurants", "Corporate Dining", "Healthcare"],
    certifications: ["SQF", "Lot Traceable"],
    temperature: "Ambient",
    brands: ["PantryAxis", "LineChef"],
    origin: "Kansas, USA",
    allergenProfile: "May contain wheat or soy",
    storage: "55-72F dry storage",
    basePrice: 35,
  },
  {
    category: "Beverage",
    subCategory: "Juices & Mixes",
    items: [
      "Orange Juice Concentrate",
      "Lemonade Base",
      "Cold Brew Concentrate",
      "Iced Tea Syrup",
      "Fruit Punch Mix",
      "Mango Puree",
      "Cranberry Blend",
      "Limeade Base",
    ],
    industries: ["Hospitality", "Corporate Dining", "Convenience"],
    certifications: ["SQF", "Brix Controlled"],
    temperature: "Ambient",
    brands: ["PourCraft", "RouteFive"],
    origin: "Florida, USA",
    allergenProfile: "None declared",
    storage: "55-72F dry storage",
    basePrice: 41,
  },
  {
    category: "Beverage",
    subCategory: "Coffee & Tea Program",
    items: [
      "Espresso Beans Dark",
      "House Coffee Ground",
      "Decaf Coffee Ground",
      "Chai Tea Concentrate",
      "Black Tea Bag",
      "Green Tea Bag",
      "Oat Milk Barista",
      "Vanilla Syrup",
    ],
    industries: ["Hospitality", "Corporate Dining", "Retail Cafes"],
    certifications: ["SQF", "Rainforest Certified Options"],
    temperature: "Ambient",
    brands: ["PourCraft", "RouteFive"],
    origin: "Global Blend",
    allergenProfile: "Product dependent; may contain milk",
    storage: "55-72F dry storage",
    basePrice: 39,
  },
];

const categoryDescriptions: Record<string, string> = {
  Produce: "Farm-direct produce programs with prep-ready options.",
  Proteins: "Portioned protein programs built for high-throughput kitchens.",
  Seafood: "Traceable seafood with sustainability and cold-chain controls.",
  "Dairy & Eggs": "Reliable dairy and egg inventory across regional hubs.",
  Bakery: "Par-baked and fresh bakery lines for all daypart menus.",
  "Frozen Foods": "Freezer-stable sides and entrees for speed and consistency.",
  Pantry: "Shelf-stable flavor systems for repeatable menu engineering.",
  Beverage: "Concentrates and beverage systems for high-margin drink menus.",
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function hashString(input: string): number {
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function toSku(category: string, rawIndex: number, slug: string): string {
  const categoryCode = category
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((segment) => segment[0])
    .join("")
    .toUpperCase()
    .slice(0, 3)
    .padEnd(3, "X");

  const hash = hashString(slug);
  const serial = (rawIndex * 7919 + 104729) % 900000;
  const lot = (hash % 900) + 100;
  const checksum = (hash % 36).toString(36).toUpperCase();

  return `${categoryCode}-${String(serial).padStart(6, "0")}-${lot}${checksum}`;
}

function getPackLabel(category: string, packMultiplier: number): string {
  if (category === "Produce") {
    return `${packMultiplier * 5} lb x ${packMultiplier}`;
  }

  if (category === "Pantry" || category === "Beverage") {
    return `${packMultiplier * 2} gal x ${packMultiplier}`;
  }

  return `${packMultiplier * 10} lb x ${packMultiplier}`;
}

function getInventoryStatus(hash: number): InventoryStatus {
  const score = hash % 100;

  if (score < 10) {
    return "Limited";
  }

  if (score < 18) {
    return "Build to Order";
  }

  return "In Stock";
}

function pickByHash<T>(options: readonly T[], hash: number, offset: number): T {
  return options[(hash + offset) % options.length];
}

function buildSubProducts(item: string, slug: string, category: string): ProductSubProduct[] {
  const hash = hashString(`${slug}-${category}`);
  const subProductCount = 2 + (hash % 6);

  return Array.from({ length: subProductCount }, (_, index) => {
    const localHash = hashString(`${slug}-${index}`);

    return {
      id: `${slug}-sub-${String(index + 1).padStart(2, "0")}-${String(localHash % 89).padStart(2, "0")}`,
      name: `${item} ${pickByHash(subProductSuffixes, localHash, index)}`,
      format: pickByHash(subProductFormats, localHash, index * 2),
      useCase: pickByHash(subProductUseCases, localHash, index * 3),
    };
  });
}

const generatedProducts: CatalogProduct[] = [];
let rawIndex = 0;

for (const [seedIndex, seed] of productSeeds.entries()) {
  for (const [itemIndex, item] of seed.items.entries()) {
    for (const [tierIndex, tier] of tierBlueprint.entries()) {
      const slug = slugify(`${seed.category}-${seed.subCategory}-${item}-${tier.label}`);
      const hash = hashString(`${slug}-${seed.origin}-${tier.label}`);
      const variantBasePrice = seed.basePrice + (itemIndex % 5) * 3 + (seedIndex % 4) * 2;
      const leadTimeDays = 2 + tier.leadTimeOffset + (seed.temperature === "Frozen" ? 1 : 0) + (hash % 2);
      const shelfLifeDays =
        28 + tier.shelfLifeOffset + (seed.temperature === "Frozen" ? 100 : 0) + (hash % 16);

      const variants: ProductVariant[] = variantBlueprint.map((variant, variantIndex) => {
        const variantHash = hashString(`${slug}-${variant.label}-${variantIndex}`);
        const rawPrice =
          variantBasePrice * tier.priceMultiplier * variant.priceMultiplier +
          (variantHash % 14) +
          variantIndex * 8;
        const netWeightBase = seed.category === "Pantry" || seed.category === "Beverage" ? 8 : 10;

        return {
          id: `${slug}-variant-${String((variantHash % 900) + 100)}`,
          label: variant.label,
          pack: getPackLabel(seed.category, variant.packMultiplier),
          netWeight: `${variant.packMultiplier * netWeightBase} lb`,
          minimumOrderCases: variant.minimumOrderCases + tierIndex * 4 + (variantHash % 4),
          pricePerCaseUsd: Math.round(rawPrice),
          status: getInventoryStatus(variantHash),
        };
      });

      const subProducts = buildSubProducts(item, slug, seed.category);

      generatedProducts.push({
        slug,
        sku: toSku(seed.category, rawIndex, slug),
        name: `${item} ${tier.label}`,
        category: seed.category,
        subCategory: seed.subCategory,
        description:
          `${item} in a ${tier.label.toLowerCase()} program with regional fulfillment and lot-level traceability for ${seed.industries[0].toLowerCase()} teams.`,
        brand: seed.brands[(hash + itemIndex + tierIndex) % seed.brands.length],
        temperature: seed.temperature,
        leadTimeDays,
        shelfLifeDays,
        certifications: seed.certifications,
        industries: seed.industries,
        origin: seed.origin,
        allergenProfile: seed.allergenProfile,
        storage: seed.storage,
        highlights: [
          pickByHash(highlightPool, hash, 0),
          pickByHash(highlightPool, hash, 3),
          `${seed.temperature} chain validated`,
        ],
        variants,
        subProducts,
      });

      rawIndex += 1;
    }
  }
}

export const catalogProducts: CatalogProduct[] = generatedProducts;

const categoryMap = new Map<string, CatalogCategory>();

for (const product of catalogProducts) {
  if (!categoryMap.has(product.category)) {
    categoryMap.set(product.category, {
      name: product.category,
      description: categoryDescriptions[product.category] ?? "Category program.",
      productCount: 0,
      subCategories: [],
    });
  }

  const category = categoryMap.get(product.category);

  if (!category) {
    continue;
  }

  category.productCount += 1;

  if (!category.subCategories.includes(product.subCategory)) {
    category.subCategories.push(product.subCategory);
    category.subCategories.sort((left, right) => left.localeCompare(right));
  }
}

export const catalogCategories = Array.from(categoryMap.values()).sort(
  (left, right) => right.productCount - left.productCount,
);

export const featuredProducts = catalogProducts.filter((_, index) => index % 37 === 3).slice(0, 8);

const productLookup = new Map(catalogProducts.map((product) => [product.slug, product]));

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return productLookup.get(slug);
}

export function getRelatedProducts(product: CatalogProduct, limit = 4): CatalogProduct[] {
  return catalogProducts
    .filter((candidate) => candidate.category === product.category && candidate.slug !== product.slug)
    .slice(0, limit);
}

export const catalogIndustries = Array.from(
  new Set(catalogProducts.flatMap((product) => product.industries)),
).sort((left, right) => left.localeCompare(right));

export const catalogSummary = {
  totalProducts: catalogProducts.length,
  totalCategories: catalogCategories.length,
  totalSubProducts: catalogProducts.reduce((acc, product) => acc + product.subProducts.length, 0),
  totalVariants: catalogProducts.reduce((acc, product) => acc + product.variants.length, 0),
};
