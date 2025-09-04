// src/data/crops.js

export const DISTRICTS = [
  "Ranchi","Bokaro","Dhanbad","East Singhbhum","West Singhbhum",
  "Hazaribagh","Giridih","Koderma","Chatra","Palamu","Latehar",
  "Lohardaga","Gumla","Simdega","Khunti","Saraikela-Kharsawan",
  "Deoghar","Dumka","Jamtara","Godda","Pakur","Sahebganj"
];

export const CROPS = [
  // Cereals
  { id: "paddy", name: "Paddy (Rice)", type: "Cereal", soil: ["clay","silty"], water: "high", seasons: ["kharif"], avgYield: 18, notes: "Major Kharif crop of Jharkhand, requires irrigation." },
  { id: "maize", name: "Maize", type: "Cereal", soil: ["loam","sandy loam"], water: "medium", seasons: ["kharif","rabi"], avgYield: 13, notes: "Popular in upland Jharkhand areas." },
  { id: "wheat", name: "Wheat", type: "Cereal", soil: ["loam","clay loam"], water: "medium", seasons: ["rabi"], avgYield: 14, notes: "Important rabi cereal." },
  { id: "millet", name: "Ragi (Finger Millet)", type: "Cereal", soil: ["sandy","red"], water: "low", seasons: ["kharif"], avgYield: 6, notes: "Traditional, drought tolerant." },
  { id: "sorghum", name: "Jowar (Sorghum)", type: "Cereal", soil: ["black","sandy"], water: "low", seasons: ["kharif","rabi"], avgYield: 8, notes: "Fodder + grain use." },

  // Pulses
  { id: "arhar", name: "Arhar (Pigeonpea)", type: "Pulse", soil: ["loam","black"], water: "low", seasons: ["kharif"], avgYield: 4, notes: "Important Kharif pulse." },
  { id: "gram", name: "Gram (Chickpea)", type: "Pulse", soil: ["loam"], water: "low", seasons: ["rabi"], avgYield: 5, notes: "Thrives after paddy in rabi." },
  { id: "moong", name: "Moong (Green Gram)", type: "Pulse", soil: ["sandy loam"], water: "low", seasons: ["kharif","zaid"], avgYield: 4, notes: "Short duration pulse." },
  { id: "urd", name: "Urad (Black Gram)", type: "Pulse", soil: ["loam","black"], water: "low", seasons: ["kharif"], avgYield: 3.5, notes: "Drought tolerant." },
  { id: "lentil", name: "Masoor (Lentil)", type: "Pulse", soil: ["loam"], water: "low", seasons: ["rabi"], avgYield: 4, notes: "Popular winter pulse." },

  // Oilseeds
  { id: "mustard", name: "Mustard", type: "Oilseed", soil: ["loam"], water: "low", seasons: ["rabi"], avgYield: 4, notes: "Short duration oilseed, grows after paddy." },
  { id: "linseed", name: "Linseed", type: "Oilseed", soil: ["loam","light"], water: "low", seasons: ["rabi"], avgYield: 3, notes: "Cool season oilseed." },
  { id: "niger", name: "Niger Seed", type: "Oilseed", soil: ["sandy","upland"], water: "low", seasons: ["kharif"], avgYield: 2, notes: "Traditional tribal crop." },
  { id: "groundnut", name: "Groundnut", type: "Oilseed", soil: ["sandy loam"], water: "medium", seasons: ["kharif","zaid"], avgYield: 8, notes: "Suited to upland fields." },
  { id: "sesame", name: "Til (Sesame)", type: "Oilseed", soil: ["loam","sandy"], water: "low", seasons: ["kharif","zaid"], avgYield: 3, notes: "Heat tolerant." },

  // Cash crops
  { id: "sugarcane", name: "Sugarcane", type: "Cash", soil: ["loam","clay"], water: "high", seasons: ["annual"], avgYield: 350, notes: "Requires irrigation." },
  { id: "cotton", name: "Cotton", type: "Cash", soil: ["black","loam"], water: "medium", seasons: ["kharif"], avgYield: 8, notes: "Limited area in Jharkhand." },
  { id: "lac", name: "Lac", type: "Cash", soil: ["forests"], water: "low", seasons: ["annual"], avgYield: null, notes: "Jharkhand is a top lac producer." },

  // Vegetables
  { id: "potato", name: "Potato", type: "Vegetable", soil: ["loam"], water: "medium", seasons: ["rabi"], avgYield: 80, notes: "Commercial vegetable." },
  { id: "tomato", name: "Tomato", type: "Vegetable", soil: ["loam","sandy"], water: "medium", seasons: ["kharif","rabi"], avgYield: 35, notes: "Market-driven." },
  { id: "brinjal", name: "Brinjal (Eggplant)", type: "Vegetable", soil: ["loam"], water: "medium", seasons: ["year-round"], avgYield: 30, notes: "Common homestead crop." },
  { id: "cauliflower", name: "Cauliflower", type: "Vegetable", soil: ["loam"], water: "medium", seasons: ["rabi"], avgYield: 20, notes: "Winter vegetable." },
  { id: "cabbage", name: "Cabbage", type: "Vegetable", soil: ["loam"], water: "medium", seasons: ["rabi"], avgYield: 25, notes: "Widely grown in winter." },
  { id: "okra", name: "Ladyfinger (Okra)", type: "Vegetable", soil: ["loam"], water: "medium", seasons: ["kharif","zaid"], avgYield: 18, notes: "Summer vegetable." },
  { id: "onion", name: "Onion", type: "Vegetable", soil: ["loam","sandy"], water: "medium", seasons: ["rabi","zaid"], avgYield: 100, notes: "Cash vegetable." },
  { id: "garlic", name: "Garlic", type: "Vegetable", soil: ["loam"], water: "medium", seasons: ["rabi"], avgYield: 50, notes: "Spice & vegetable." },

  // Fruits
  { id: "mango", name: "Mango", type: "Fruit", soil: ["loam"], water: "medium", seasons: ["perennial"], avgYield: 90, notes: "Common fruit tree." },
  { id: "litchi", name: "Litchi", type: "Fruit", soil: ["loam"], water: "medium", seasons: ["perennial"], avgYield: 70, notes: "Santhal Parganas." },
  { id: "guava", name: "Guava", type: "Fruit", soil: ["sandy loam"], water: "low", seasons: ["perennial"], avgYield: 60, notes: "Hardy fruit crop." },
  { id: "banana", name: "Banana", type: "Fruit", soil: ["loam"], water: "high", seasons: ["annual"], avgYield: 250, notes: "Needs irrigation." },
  { id: "papaya", name: "Papaya", type: "Fruit", soil: ["loam"], water: "medium", seasons: ["annual"], avgYield: 200, notes: "Fast-growing." },
  { id: "jackfruit", name: "Jackfruit", type: "Fruit", soil: ["loam"], water: "medium", seasons: ["perennial"], avgYield: 120, notes: "Backyard fruit." },
  { id: "custardapple", name: "Custard Apple", type: "Fruit", soil: ["sandy loam"], water: "low", seasons: ["perennial"], avgYield: 40, notes: "Upland hardy." },
  { id: "ber", name: "Ber (Indian Jujube)", type: "Fruit", soil: ["sandy loam"], water: "low", seasons: ["perennial"], avgYield: 30, notes: "Dry zone." },
  { id: "amla", name: "Amla (Gooseberry)", type: "Fruit", soil: ["loam"], water: "low", seasons: ["perennial"], avgYield: 50, notes: "Medicinal." },

  // Spices & Medicinal
  { id: "turmeric", name: "Turmeric", type: "Spice", soil: ["loam"], water: "medium", seasons: ["kharif"], avgYield: 60, notes: "Ranchi plateau." },
  { id: "ginger", name: "Ginger", type: "Spice", soil: ["loam"], water: "medium", seasons: ["kharif"], avgYield: 50, notes: "Commercial spice." },
  { id: "chilli", name: "Chilli", type: "Spice", soil: ["sandy loam"], water: "low", seasons: ["kharif","rabi"], avgYield: 12, notes: "Dual season." },
  { id: "coriander", name: "Coriander", type: "Spice", soil: ["loam"], water: "low", seasons: ["rabi"], avgYield: 10, notes: "Short-duration." },
  { id: "fenugreek", name: "Methi (Fenugreek)", type: "Spice", soil: ["loam"], water: "low", seasons: ["rabi"], avgYield: 6, notes: "Leafy & spice." }
];
