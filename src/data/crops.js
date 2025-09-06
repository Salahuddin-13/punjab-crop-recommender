<<<<<<< HEAD
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
=======
// --- V3.1: MASSIVELY ENRICHED & EXPANDED DATASET ---
export const DISTRICTS = ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran"];
export const SOIL_TYPES = ["Alluvial", "Loamy", "Sandy", "Clayey", "Saline", "Red Soil"];
export const CROPS = [
    // Grains & Cereals
    { id: "wheat", name: "Wheat", icon: "🌾", soil: ["Alluvial", "Loamy"], water: "medium", seasons: ["Rabi"], growingDuration: 5, investment: 35000, avgYield: 20, marketPrice: "₹2125/quintal", type: "Grain", varieties: ["HD-3086", "PBW-550"], marketDemand: "High", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Medium", commonRisks: ["Yellow Rust", "Aphids"], plantingMonths: [10, 11], harvestMonths: [3, 4], soilPH: [6.0, 7.5], interCropping: ["Mustard", "Chickpea"], specialNotes: "Core crop of the Rabi season, benefits from crop rotation with legumes." },
    { id: "paddy", name: "Rice (Paddy)", icon: "🍚", soil: ["Clayey", "Loamy"], water: "high", seasons: ["Kharif"], growingDuration: 4, investment: 45000, avgYield: 28, marketPrice: "₹2060/quintal", type: "Grain", varieties: ["Pusa-1121", "PR-126"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Poaceae", waterEfficiency: "Low", commonRisks: ["Blast", "Bacterial Blight"], plantingMonths: [6, 7], harvestMonths: [10, 11], soilPH: [5.5, 7.0], interCropping: ["Fish (in flooded paddies)"], specialNotes: "Very water-intensive; consider Direct Seeded Rice (DSR) to conserve water." },
    { id: "maize", name: "Maize", icon: "🌽", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Kharif", "Rabi"], growingDuration: 3, investment: 25000, avgYield: 25, marketPrice: "₹1975/quintal", type: "Grain", varieties: ["Pioneer 3396", "Dekalb 900M"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Poaceae", waterEfficiency: "High", commonRisks: ["Fall Armyworm", "Stalk Rot"], plantingMonths: [6, 7, 10], harvestMonths: [9, 10, 1], soilPH: [5.8, 7.2], interCropping: ["Soybean", "Cowpea"], specialNotes: "Versatile crop for both grain and fodder purposes." },
    { id: "basmati_rice", name: "Basmati Rice", icon: "🌾", soil: ["Loamy", "Clayey"], water: "high", seasons: ["Kharif"], growingDuration: 5, investment: 55000, avgYield: 22, marketPrice: "₹3500/quintal", type: "Grain", varieties: ["Pusa Basmati 1509", "Pusa Basmati 1121"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Poaceae", waterEfficiency: "Low", commonRisks: ["Neck Blast", "Sheath Blight"], plantingMonths: [7], harvestMonths: [11, 12], soilPH: [5.5, 7.0], interCropping: [], specialNotes: "High-value crop, requires careful water and nutrient management." },
    { id: "pearl_millet", name: "Pearl Millet (Bajra)", icon: "🌾", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Kharif"], growingDuration: 3, investment: 12000, avgYield: 12, marketPrice: "₹2350/quintal", type: "Grain", varieties: ["PHB-2168", "PCB-164"], marketDemand: "Low", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Very High", commonRisks: ["Downy Mildew", "Smut"], plantingMonths: [7], harvestMonths: [10], soilPH: [6.0, 8.0], interCropping: ["Moong Bean", "Guar"], specialNotes: "Excellent for arid regions with low rainfall; highly drought-resistant." },
    { id: "barley", name: "Barley", icon: "🌱", soil: ["Sandy", "Saline", "Loamy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 16000, avgYield: 15, marketPrice: "₹2000/quintal", type: "Grain", varieties: ["DWRB 137", "BH 946"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "High", commonRisks: ["Covered Smut", "Stripe Rust"], plantingMonths: [10, 11], harvestMonths: [3, 4], soilPH: [6.5, 8.5], interCropping: ["Lentil", "Mustard"], specialNotes: "Tolerant to saline soils, making it a good choice for problematic land." },
    { id: "sugarcane", name: "Sugarcane", icon: "🎋", soil: ["Loamy", "Clayey"], water: "high", seasons: ["Annual"], growingDuration: 12, investment: 60000, avgYield: 350, marketPrice: "₹360/quintal", type: "Cash Crop", varieties: ["Co-0238", "CoJ-85"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Poaceae", waterEfficiency: "Low", commonRisks: ["Red Rot", "Borers"], plantingMonths: [2, 3], harvestMonths: [12, 1, 2], soilPH: [6.5, 7.5], interCropping: ["Onion", "Coriander"], specialNotes: "Long duration crop requiring significant investment and water." },
    { id: "cotton", name: "Cotton", icon: "☁️", soil: ["Alluvial", "Loamy", "Saline"], water: "medium", seasons: ["Kharif"], growingDuration: 6, investment: 40000, avgYield: 8, marketPrice: "₹6080/quintal", type: "Fiber", varieties: ["Bt Cotton", "NCS-145"], marketDemand: "High", riskFactor: "High", cropFamily: "Malvaceae", waterEfficiency: "Medium", commonRisks: ["Pink Bollworm", "Whitefly"], plantingMonths: [4, 5], harvestMonths: [10, 11, 12], soilPH: [6.0, 8.0], interCropping: ["Groundnut", "Moong Bean"], specialNotes: "Highly susceptible to pests; requires integrated pest management." },
    { id: "mustard", name: "Mustard", icon: "🌼", soil: ["Loamy", "Sandy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 18000, avgYield: 10, marketPrice: "₹5450/quintal", type: "Oilseed", varieties: ["Pusa Bold", "GSC-7"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Brassicaceae", waterEfficiency: "High", commonRisks: ["Alternaria Blight", "Aphids"], plantingMonths: [10], harvestMonths: [2, 3], soilPH: [6.0, 7.5], interCropping: ["Wheat", "Barley"], specialNotes: "Important oilseed crop for the Rabi season; low water requirement." },
    { id: "sunflower", name: "Sunflower", icon: "🌻", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Rabi", "Zaid"], growingDuration: 3, investment: 22000, avgYield: 9, marketPrice: "₹6400/quintal", type: "Oilseed", varieties: ["PSH-1962", "DK-3849"], marketDemand: "Medium", riskFactor: "Medium", cropFamily: "Asteraceae", waterEfficiency: "High", commonRisks: ["Powdery Mildew", "Head Borer"], plantingMonths: [1, 2, 10], harvestMonths: [4, 5, 1], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Photo-insensitive, allowing for flexible planting schedules." },
    { id: "gram", name: "Gram (Chickpea)", icon: "🌱", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 15000, avgYield: 8, marketPrice: "₹4875/quintal", type: "Pulse", varieties: ["PBG 7", "GNG 1581"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Wilt", "Pod Borer"], plantingMonths: [10], harvestMonths: [3], soilPH: [6.0, 8.0], interCropping: ["Wheat", "Barley"], specialNotes: "Excellent for nitrogen fixation, improving soil health for the next crop." },
    { id: "moong_bean", name: "Moong Bean", icon: "🌿", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Kharif", "Zaid"], growingDuration: 2, investment: 14000, avgYield: 5, marketPrice: "₹7755/quintal", type: "Pulse", varieties: ["SML 668", "IPM 2-14"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Fabaceae", waterEfficiency: "Very High", commonRisks: ["Yellow Mosaic Virus", "Thrips"], plantingMonths: [3, 7], harvestMonths: [5, 9], soilPH: [6.5, 8.5], interCropping: ["Cotton", "Maize"], specialNotes: "Short duration crop, perfect for filling the gap between main seasons." },
    { id: "potato", name: "Potatoes", icon: "🥔", soil: ["Alluvial", "Loamy", "Sandy"], water: "medium", seasons: ["Rabi"], growingDuration: 3, investment: 50000, avgYield: 120, marketPrice: "₹800/quintal", type: "Vegetable", varieties: ["Kufri Jyoti", "Kufri Pukhraj"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Solanaceae", waterEfficiency: "Medium", commonRisks: ["Late Blight", "Potato Scab"], plantingMonths: [10], harvestMonths: [1, 2], soilPH: [5.5, 6.5], interCropping: ["Garlic", "Onion"], specialNotes: "High investment but potentially high returns; seed quality is crucial." },
    { id: "onion", name: "Onion", icon: "🧅", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Kharif", "Rabi"], growingDuration: 4, investment: 30000, avgYield: 100, marketPrice: "₹1200/quintal", type: "Vegetable", varieties: ["PRO-6", "Punjab Naroya"], marketDemand: "High", riskFactor: "High", cropFamily: "Amaryllidaceae", waterEfficiency: "Medium", commonRisks: ["Thrips", "Purple Blotch"], plantingMonths: [7, 10], harvestMonths: [10, 3], soilPH: [6.0, 7.0], interCropping: ["Sugarcane", "Turmeric"], specialNotes: "Price can be volatile; good storage facilities can maximize profit." },
    { id: "tomato", name: "Tomato", icon: "🍅", soil: ["Loamy", "Sandy", "Red Soil"], water: "medium", seasons: ["Kharif", "Rabi"], growingDuration: 3, investment: 28000, avgYield: 250, marketPrice: "₹1000/quintal", type: "Vegetable", varieties: ["Punjab Ratta", "TH-1"], marketDemand: "High", riskFactor: "High", cropFamily: "Solanaceae", waterEfficiency: "Medium", commonRisks: ["Early Blight", "Fruit Borer"], plantingMonths: [7, 11], harvestMonths: [10, 2], soilPH: [6.0, 7.0], interCropping: ["Marigold (pest control)"], specialNotes: "Requires staking and regular pruning for best results." },
    { id: "peas", name: "Peas", icon: "🌿", soil: ["Loamy", "Clayey"], water: "low", seasons: ["Rabi"], growingDuration: 3, investment: 15000, avgYield: 40, marketPrice: "₹2500/quintal", type: "Vegetable", varieties: ["Punjab 89", "Matar Ageta-7"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Powdery Mildew", "Rust"], plantingMonths: [10, 11], harvestMonths: [1, 2], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Good for nitrogen fixation. Early sowing fetches better market prices." },
    { id: "garlic", name: "Garlic", icon: "🧄", soil: ["Loamy", "Alluvial"], water: "medium", seasons: ["Rabi"], growingDuration: 5, investment: 45000, avgYield: 50, marketPrice: "₹5000/quintal", type: "Spice", varieties: ["PG-17", "Yamuna Safed"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Amaryllidaceae", waterEfficiency: "Medium", commonRisks: ["Thrips", "Stemphylium Blight"], plantingMonths: [9, 10], harvestMonths: [3, 4], soilPH: [6.0, 7.0], interCropping: ["Potato"], specialNotes: "High-value spice crop with good storage life." },
    { id: "kinnow", name: "Kinnow", icon: "🍊", soil: ["Loamy", "Alluvial"], water: "medium", seasons: ["Perennial"], growingDuration: 36, investment: 80000, avgYield: 100, marketPrice: "₹2000/quintal", type: "Fruit", varieties: ["Kinnow"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Rutaceae", waterEfficiency: "Medium", commonRisks: ["Citrus Canker", "Psylla"], plantingMonths: [9, 2], harvestMonths: [12, 1, 2], soilPH: [6.0, 7.5], interCropping: ["Legumes (in early years)"], specialNotes: "Long-term investment. Takes 3-4 years to start bearing fruit." },
    { id: "guava", name: "Guava", icon: "🍈", soil: ["Alluvial", "Loamy", "Red Soil"], water: "low", seasons: ["Perennial"], growingDuration: 24, investment: 40000, avgYield: 60, marketPrice: "₹2500/quintal", type: "Fruit", varieties: ["Sardar", "Allahabad Safeda"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Myrtaceae", waterEfficiency: "High", commonRisks: ["Wilt", "Fruit Fly"], plantingMonths: [8, 9], harvestMonths: [11, 12, 1], soilPH: [6.0, 8.0], interCropping: ["Vegetables (in early years)"], specialNotes: "Hardy fruit tree, tolerant to drought and a wide range of soils." },
    { id: "berseem", name: "Berseem", icon: "☘️", soil: ["Clayey", "Loamy"], water: "high", seasons: ["Rabi"], growingDuration: 6, investment: 12000, avgYield: 400, marketPrice: "₹250/quintal", type: "Fodder", varieties: ["BL 42", "BL 10"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "Medium", commonRisks: ["Stem Rot", "Aphids"], plantingMonths: [9, 10], harvestMonths: [11, 12, 1, 2, 3, 4], soilPH: [6.5, 8.0], interCropping: ["Mustard"], specialNotes: "King of fodder crops. Provides multiple cuttings throughout the winter." },
    { id: "lucerne", name: "Lucerne (Alfalfa)", icon: "🍀", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 36, investment: 20000, avgYield: 350, marketPrice: "₹300/quintal", type: "Fodder", varieties: ["Sirsa-9", "LLC-3"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Downy Mildew", "Aphids"], plantingMonths: [10], harvestMonths: [1,2,3,4,5,6,7,8,9,10,11,12], soilPH: [6.5, 8.0], interCropping: [], specialNotes: "Perennial fodder crop that provides nutritious green fodder for several years." }
>>>>>>> f4c1f6a (feat: Add responsive and informative site footer)
];
export const DISTRICT_CROP_SUITABILITY = { "Amritsar": ["wheat", "paddy", "maize", "potato", "basmati_rice", "onion", "peas", "berseem", "garlic"], "Barnala": ["wheat", "paddy", "cotton", "mustard", "potato", "gram", "barley", "lucerne"], "Bathinda": ["wheat", "cotton", "maize", "mustard", "gram", "sunflower", "pearl_millet", "barley"], "Faridkot": ["wheat", "cotton", "paddy", "sugarcane", "potato", "mustard", "peas"], "Fatehgarh Sahib": ["wheat", "paddy", "maize", "potato", "onion", "guava", "tomato"], "Fazilka": ["wheat", "cotton", "mustard", "gram", "sunflower", "kinnow", "barley"], "Ferozepur": ["wheat", "cotton", "paddy", "sugarcane", "mustard", "kinnow", "basmati_rice"], "Gurdaspur": ["wheat", "paddy", "maize", "potato", "sugarcane", "guava", "basmati_rice", "turmeric"], "Hoshiarpur": ["wheat", "maize", "potato", "sugarcane", "kinnow", "guava", "tomato", "turmeric"], "Jalandhar": ["wheat", "paddy", "potato", "maize", "sugarcane", "onion", "peas", "garlic"], "Kapurthala": ["wheat", "paddy", "sugarcane", "potato", "maize", "sunflower", "peas"], "Ludhiana": ["wheat", "paddy", "maize", "potato", "onion", "sunflower", "tomato", "berseem", "garlic"], "Mansa": ["wheat", "cotton", "mustard", "gram", "pearl_millet", "barley"], "Moga": ["wheat", "paddy", "potato", "mustard", "gram", "cotton", "lucerne"], "Sri Muktsar Sahib": ["wheat", "cotton", "paddy", "mustard", "gram", "kinnow"], "Pathankot": ["wheat", "maize", "potato", "guava", "basmati_rice", "tomato", "turmeric"], "Patiala": ["wheat", "paddy", "maize", "potato", "mustard", "sugarcane", "guava", "berseem"], "Rupnagar": ["wheat", "maize", "potato", "sugarcane", "guava"], "Sahibzada Ajit Singh Nagar": ["wheat", "maize", "potato", "onion", "sunflower", "tomato"], "Sangrur": ["wheat", "paddy", "cotton", "potato", "mustard", "sugarcane", "gram", "barley", "berseem", "lucerne"], "Shahid Bhagat Singh Nagar": ["wheat", "paddy", "sugarcane", "maize", "potato"], "Tarn Taran": ["wheat", "paddy", "potato", "basmati_rice", "onion", "berseem"] };



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


