export type MediaAsset = {
  src: string;
  alt: string;
};

const media = (seed: string, alt: string): MediaAsset => ({
  src: `https://picsum.photos/seed/${seed}/1600/900`,
  alt,
});

export const mediaLibrary = {
  heroWarehouse: media("atlas-hero-warehouse", "Warehouse team managing foodservice inventory"),
  produceMarket: media("atlas-produce-market", "Fresh produce in a wholesale market"),
  seafoodIce: media("atlas-seafood-ice", "Seafood inventory packed in ice"),
  bakeryBread: media("atlas-bakery-bread", "Bakery breads lined up for distribution"),
  dairyMilk: media("atlas-dairy-milk", "Milk and dairy products ready for shipment"),
  kitchenPrep: media("atlas-kitchen-prep", "Chef team preparing menu items"),
  logisticsTruck: media("atlas-logistics-truck", "Delivery truck fleet for wholesale distribution"),
  distributionCenter: media("atlas-distribution-center", "Food distribution center operations"),
  freshVegetables: media("atlas-fresh-vegetables", "Fresh cut vegetables in containers"),
  meatButcher: media(
    "atlas-meat-butcher",
    "Packaged poultry products in a sanitary production line",
  ),
  frozenFood: media("atlas-frozen-food", "Frozen food products in cold storage"),
  beverageDrinks: media("atlas-beverage-drinks", "Beverage assortment for commercial programs"),
  farmHarvest: media("atlas-farm-harvest", "Harvest operations on partner farms"),
  coldStorage: media("atlas-cold-storage", "Cold storage facility with palletized inventory"),
  supplyChain: media("atlas-supply-chain", "Supply chain planning and operations"),
  industrialKitchen: media("atlas-industrial-kitchen", "Industrial kitchen with plated meals"),
  deliveryBoxes: media("atlas-delivery-boxes", "Delivery packages and order staging"),
  saladGreens: media("atlas-salad-greens", "Prepared greens and salad ingredients"),
  fruitMarket: media("atlas-fruit-market", "Fruit assortment in a market setting"),
  shippingPallets: media("atlas-shipping-pallets", "Shipping pallets in a fulfillment zone"),
  restaurantDining: media("atlas-restaurant-dining", "Restaurant dining room during service"),
  coffeeBar: media("atlas-coffee-bar", "Coffee and beverage bar program"),
  eggFarm: media("atlas-egg-farm", "Egg supply from farm operations"),
  groceryShelves: media("atlas-grocery-shelves", "Grocery shelves with packaged products"),
  schoolCafeteria: media("atlas-school-cafeteria", "School cafeteria service line"),
  hotelBreakfast: media("atlas-hotel-breakfast", "Hotel breakfast buffet presentation"),
  seafoodMarket: media("atlas-seafood-market", "Seafood market with fresh catches"),
  freshHerbs: media("atlas-fresh-herbs", "Herb bundles prepared for culinary use"),
  flourBakery: media("atlas-flour-bakery", "Bakery production ingredients and flour"),
  orangeJuice: media("atlas-orange-juice", "Orange juice and breakfast beverage setup"),
  logisticsWarehouse: media(
    "atlas-logistics-warehouse",
    "Logistics warehouse with racking and forklifts",
  ),
  chefPlating: media("atlas-chef-plating", "Chef plating dishes in final assembly"),
} satisfies Record<string, MediaAsset>;
