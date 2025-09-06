export const DISTRICTS = [
  "Amritsar", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", 
  "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", 
  "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", 
  "Rupnagar", "Sangrur", "SAS Nagar (Mohali)", "Shaheed Bhagat Singh Nagar", 
  "Tarn Taran", "Barnala"
];

export const CROPS = [
  // Cereals - Major crops of Punjab
  { 
    id: "wheat", 
    name: "Wheat", 
    type: "Cereal", 
    soil: ["loam","clay loam","alluvial"], 
    water: "medium", 
    seasons: ["rabi"], 
    avgYield: 48, 
    growingDuration: 5, 
    plantingMonths: [10,11,12], 
    harvestMonths: [4,5], 
    investment: 25000,
    marketPrice: "₹2100-2400/q",
    varieties: ["HD-3086", "PBW-725", "HD-2967", "WH-1105"],
    notes: "Major rabi crop of Punjab. Contributes 46% to India's central pool." 
  },
  { 
    id: "paddy", 
    name: "Paddy (Basmati)", 
    type: "Cereal", 
    soil: ["clay","alluvial","loam"], 
    water: "high", 
    seasons: ["kharif"], 
    avgYield: 42, 
    growingDuration: 4.5, 
    plantingMonths: [6,7], 
    harvestMonths: [10,11], 
    investment: 28000,
    marketPrice: "₹4500-6000/q",
    varieties: ["Pusa Basmati-1121", "CSR-30", "Pusa-44", "PR-126"],
    notes: "Premium basmati rice with export quality. Punjab contributes 27% to central pool." 
  },
  { 
    id: "maize", 
    name: "Maize", 
    type: "Cereal", 
    soil: ["sandy loam","loam","alluvial"], 
    water: "medium", 
    seasons: ["kharif","rabi"], 
    avgYield: 38, 
    growingDuration: 3.5, 
    plantingMonths: [6,7,2,3], 
    harvestMonths: [9,10,5,6], 
    investment: 18000,
    marketPrice: "₹1800-2200/q",
    varieties: ["PMH-1", "Parkash", "Kisan", "Pro-4640"],
    notes: "High yielding hybrid maize. Good for both grain and fodder purpose." 
  },

  // Cash Crops
  { 
    id: "cotton", 
    name: "Cotton (American)", 
    type: "Cash", 
    soil: ["black","loam","sandy loam"], 
    water: "medium", 
    seasons: ["kharif"], 
    avgYield: 18, 
    growingDuration: 6, 
    plantingMonths: [4,5,6], 
    harvestMonths: [10,11,12], 
    investment: 40000,
    marketPrice: "₹5800-6500/q",
    varieties: ["F-1378", "HS-6", "LH-2076", "RCH-773"],
    notes: "Major cash crop in southwestern Punjab. Good export and mill demand." 
  },

  { 
    id: "sugarcane", 
    name: "Sugarcane", 
    type: "Cash", 
    soil: ["loam","clay loam","alluvial"], 
    water: "high", 
    seasons: ["annual"], 
    avgYield: 680, 
    growingDuration: 12, 
    plantingMonths: [2,3,4,9,10], 
    harvestMonths: [12,1,2,3], 
    investment: 60000,
    marketPrice: "₹350-380/q",
    varieties: ["CoJ-88", "CoPb-92", "CoS-8436", "Co-118"],
    notes: "High yielding perennial crop. Strong sugar mill network in Punjab." 
  },

  // Pulses
  { 
    id: "gram", 
    name: "Gram (Chickpea)", 
    type: "Pulse", 
    soil: ["loam","clay loam","black"], 
    water: "low", 
    seasons: ["rabi"], 
    avgYield: 16, 
    growingDuration: 4.5, 
    plantingMonths: [10,11], 
    harvestMonths: [3,4], 
    investment: 15000,
    marketPrice: "₹5200-6500/q",
    varieties: ["PBG-7", "GPF-2", "Pb-7", "C-727"],
    notes: "Important rabi pulse for crop diversification. Drought tolerant." 
  },

  { 
    id: "lentil", 
    name: "Lentil (Masoor)", 
    type: "Pulse", 
    soil: ["loam","sandy loam"], 
    water: "low", 
    seasons: ["rabi"], 
    avgYield: 10, 
    growingDuration: 4, 
    plantingMonths: [10,11], 
    harvestMonths: [2,3], 
    investment: 12000,
    marketPrice: "₹6000-8000/q",
    varieties: ["L-4602", "LL-147", "PL-6", "Malka Masoor"],
    notes: "Cool season pulse crop. Good protein source and market demand." 
  },

  { 
    id: "pea", 
    name: "Field Pea", 
    type: "Pulse", 
    soil: ["loam","clay loam"], 
    water: "medium", 
    seasons: ["rabi"], 
    avgYield: 8, 
    growingDuration: 4, 
    plantingMonths: [11,12], 
    harvestMonths: [3,4], 
    investment: 14000,
    marketPrice: "₹4500-5500/q",
    varieties: ["Pb-89", "HFP-715", "Arkel", "PSM-3"],
    notes: "Alternative pulse crop for diversification. Good green fodder value." 
  },

  // Oilseeds  
  { 
    id: "mustard", 
    name: "Mustard", 
    type: "Oilseed", 
    soil: ["sandy loam","loam"], 
    water: "low", 
    seasons: ["rabi"], 
    avgYield: 12, 
    growingDuration: 4, 
    plantingMonths: [10,11], 
    harvestMonths: [3,4], 
    investment: 12000,
    marketPrice: "₹4800-5800/q",
    varieties: ["PBR-97", "PBR-378", "Hyola-401", "RH-30"],
    notes: "Major oilseed crop of Punjab. Good for edible oil production." 
  },

  { 
    id: "sunflower", 
    name: "Sunflower", 
    type: "Oilseed", 
    soil: ["sandy loam","black"], 
    water: "medium", 
    seasons: ["kharif","rabi"], 
    avgYield: 15, 
    growingDuration: 3.5, 
    plantingMonths: [6,7,2,3], 
    harvestMonths: [9,10,5,6], 
    investment: 15000,
    marketPrice: "₹5500-6800/q",
    varieties: ["PAC-36", "DRSH-1", "Surya", "Modern"],
    notes: "Emerging oilseed with processing units. Good for crop diversification." 
  },

  // Vegetables
  { 
    id: "potato", 
    name: "Potato", 
    type: "Vegetable", 
    soil: ["sandy loam","loam"], 
    water: "medium", 
    seasons: ["rabi"], 
    avgYield: 280, 
    growingDuration: 3, 
    plantingMonths: [10,11,12], 
    harvestMonths: [1,2,3], 
    investment: 50000,
    marketPrice: "₹1200-2000/q",
    varieties: ["Kufri Pukhraj", "Kufri Jyoti", "Kufri Bahar", "Atlantic"],
    notes: "Major commercial vegetable. Strong cold storage infrastructure." 
  },

  { 
    id: "onion", 
    name: "Onion", 
    type: "Vegetable", 
    soil: ["sandy loam","alluvial"], 
    water: "medium", 
    seasons: ["rabi","kharif"], 
    avgYield: 200, 
    growingDuration: 4, 
    plantingMonths: [10,11,6,7], 
    harvestMonths: [3,4,10,11], 
    investment: 40000,
    marketPrice: "₹2000-5000/q",
    varieties: ["Punjab Selection", "Pusa Red", "N-53", "Agrifound Light Red"],
    notes: "High demand vegetable crop. Good storage and processing facilities." 
  },

  { 
    id: "tomato", 
    name: "Tomato", 
    type: "Vegetable", 
    soil: ["sandy loam","loam"], 
    water: "medium", 
    seasons: ["rabi","kharif"], 
    avgYield: 350, 
    growingDuration: 3.5, 
    plantingMonths: [7,8,12,1], 
    harvestMonths: [10,11,3,4], 
    investment: 55000,
    marketPrice: "₹1500-4000/q",
    varieties: ["Punjab Chhuhara", "Hisar Anmol", "Pusa Ruby", "Naveen"],
    notes: "High value vegetable with processing industry support." 
  },

  { 
    id: "cauliflower", 
    name: "Cauliflower", 
    type: "Vegetable", 
    soil: ["loam","clay loam"], 
    water: "medium", 
    seasons: ["rabi"], 
    avgYield: 180, 
    growingDuration: 3, 
    plantingMonths: [8,9], 
    harvestMonths: [11,12], 
    investment: 35000,
    marketPrice: "₹1500-3000/q",
    varieties: ["Pusa Snowball", "Early Kunwari", "Pant Gobhi-3"],
    notes: "Premium winter vegetable. Good export potential to Middle East." 
  },

  { 
    id: "cabbage", 
    name: "Cabbage", 
    type: "Vegetable", 
    soil: ["loam","sandy loam"], 
    water: "medium", 
    seasons: ["rabi"], 
    avgYield: 220, 
    growingDuration: 3, 
    plantingMonths: [8,9], 
    harvestMonths: [11,12], 
    investment: 30000,
    marketPrice: "₹1000-2500/q",
    varieties: ["Golden Acre", "Pride of India", "Copenhagen Market"],
    notes: "Cool season vegetable. Good for fresh market and processing." 
  },

  // Fruits
  { 
    id: "citrus", 
    name: "Citrus (Kinnow)", 
    type: "Fruit", 
    soil: ["sandy loam","alluvial"], 
    water: "medium", 
    seasons: ["perennial"], 
    avgYield: 180, 
    growingDuration: 60, 
    plantingMonths: [2,3,8,9], 
    harvestMonths: [12,1,2], 
    investment: 45000,
    marketPrice: "₹1500-3500/q",
    varieties: ["Kinnow", "Malta", "Sweet Orange", "Grapefruit"],
    notes: "Major fruit export from Punjab. High vitamin C content." 
  },

  { 
    id: "guava", 
    name: "Guava", 
    type: "Fruit", 
    soil: ["sandy loam","alluvial"], 
    water: "medium", 
    seasons: ["perennial"], 
    avgYield: 120, 
    growingDuration: 36, 
    plantingMonths: [2,3,8,9], 
    harvestMonths: [11,12,1], 
    investment: 30000,
    marketPrice: "₹2000-4500/q",
    varieties: ["L-49", "Allahabad Safeda", "Apple Guava", "Punjab Pink"],
    notes: "Growing fruit crop in Punjab. Good processing potential." 
  },

  { 
    id: "mango", 
    name: "Mango", 
    type: "Fruit", 
    soil: ["sandy loam","well drained"], 
    water: "medium", 
    seasons: ["perennial"], 
    avgYield: 80, 
    growingDuration: 72, 
    plantingMonths: [6,7,8], 
    harvestMonths: [5,6,7], 
    investment: 35000,
    marketPrice: "₹3000-8000/q",
    varieties: ["Dashehari", "Langra", "Amrapali", "Mallika"],
    notes: "Premium fruit crop. Limited cultivation in southern Punjab." 
  }
];

// District-wise crop suitability for Punjab
const DISTRICT_CROP_SUITABILITY = {
  "Amritsar": ["wheat", "paddy", "maize", "potato", "onion", "citrus", "sugarcane"],
  "Bathinda": ["wheat", "cotton", "maize", "mustard", "gram", "sunflower"],
  "Faridkot": ["wheat", "cotton", "paddy", "sugarcane", "potato", "mustard"],
  "Fatehgarh Sahib": ["wheat", "paddy", "maize", "potato", "cauliflower", "cabbage"],
  "Fazilka": ["wheat", "cotton", "mustard", "gram", "sunflower"],
  "Ferozepur": ["wheat", "cotton", "paddy", "sugarcane", "citrus", "mustard"],
  "Gurdaspur": ["wheat", "paddy", "maize", "citrus", "guava", "potato"],
  "Hoshiarpur": ["wheat", "maize", "citrus", "guava", "mango", "potato"],
  "Jalandhar": ["wheat", "paddy", "potato", "cauliflower", "citrus", "maize"],
  "Kapurthala": ["wheat", "paddy", "sugarcane", "citrus", "potato", "maize"],
  "Ludhiana": ["wheat", "paddy", "maize", "potato", "cauliflower", "cabbage"],
  "Mansa": ["wheat", "cotton", "mustard", "gram", "sunflower"],
  "Moga": ["wheat", "paddy", "potato", "citrus", "cauliflower"],
  "Muktsar": ["wheat", "cotton", "paddy", "mustard", "gram"],
  "Pathankot": ["wheat", "maize", "citrus", "guava", "potato"],
  "Patiala": ["wheat", "paddy", "maize", "potato", "mustard", "sugarcane"],
  "Rupnagar": ["wheat", "maize", "citrus", "guava", "potato"],
  "Sangrur": ["wheat", "paddy", "cotton", "potato", "mustard"],
  "SAS Nagar (Mohali)": ["wheat", "maize", "potato", "citrus", "cauliflower"],
  "Shaheed Bhagat Singh Nagar": ["wheat", "paddy", "sugarcane", "citrus", "maize"],
  "Tarn Taran": ["wheat", "paddy", "potato", "cauliflower", "cabbage"],
  "Barnala": ["wheat", "paddy", "cotton", "mustard", "potato"]
};

export { DISTRICT_CROP_SUITABILITY };


