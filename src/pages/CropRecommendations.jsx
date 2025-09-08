import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Leaf, MapPin, Droplets, Sun, Calendar, Wheat, BarChart, Info, Wind, Thermometer, TrendingUp, Shield, RefreshCcw, ChevronsRight, Zap, Eye, TestTube2, AlertTriangle, X, Sprout, Combine, Bug } from 'lucide-react';

// --- ENHANCED V4.0: COMPREHENSIVE DATA WITH IMPROVED ALGORITHM ---

// --- EXPANDED DATASET ---
const DISTRICTS = [
    "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", 
    "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", 
    "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", 
    "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", 
    "Tarn Taran", "Malerkotla"
];

const SOIL_TYPES = ["Alluvial", "Loamy", "Sandy", "Clayey", "Saline", "Red Soil", "Black Cotton", "Mixed"];

const CROPS = [
    // GRAINS & CEREALS (Enhanced Data)
    { id: "wheat", name: "Wheat", icon: "🌾", soil: ["Alluvial", "Loamy"], water: "medium", seasons: ["Rabi"], growingDuration: 5, investment: 42000, avgYield: 22, marketPrice: "₹2150/quintal", type: "Grain", varieties: ["HD-3086", "PBW-550", "HD-2967", "WH-1105"], marketDemand: "High", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Medium", commonRisks: ["Yellow Rust", "Aphids", "Loose Smut"], plantingMonths: [10, 11], harvestMonths: [3, 4], soilPH: [6.0, 7.5], interCropping: ["Mustard", "Chickpea", "Coriander"], specialNotes: "Primary staple crop of Punjab. Excellent for crop rotation with legumes to maintain soil fertility.", nutritionalValue: "High protein, carbohydrates", exportPotential: "High", storageLife: 12, mechanization: "High" },
    
    { id: "paddy", name: "Rice (Paddy)", icon: "🍚", soil: ["Clayey", "Loamy", "Alluvial"], water: "high", seasons: ["Kharif"], growingDuration: 4, investment: 48000, avgYield: 30, marketPrice: "₹2080/quintal", type: "Grain", varieties: ["Pusa-1121", "PR-126", "Pusa-44", "PR-124"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Poaceae", waterEfficiency: "Low", commonRisks: ["Blast", "Bacterial Blight", "Brown Plant Hopper"], plantingMonths: [6, 7], harvestMonths: [10, 11], soilPH: [5.5, 7.0], interCropping: ["Duck farming", "Fish farming"], specialNotes: "Major water-intensive crop. DSR (Direct Seeded Rice) recommended for water conservation.", nutritionalValue: "High carbohydrates", exportPotential: "High", storageLife: 18, mechanization: "High" },
    
    { id: "basmati_rice", name: "Basmati Rice", icon: "🌾", soil: ["Loamy", "Clayey"], water: "high", seasons: ["Kharif"], growingDuration: 5, investment: 58000, avgYield: 18, marketPrice: "₹4200/quintal", type: "Grain", varieties: ["Pusa Basmati 1509", "Pusa Basmati 1121", "CSR-30"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Poaceae", waterEfficiency: "Low", commonRisks: ["Neck Blast", "Sheath Blight", "False Smut"], plantingMonths: [6, 7], harvestMonths: [11, 12], soilPH: [5.5, 7.0], interCropping: [], specialNotes: "Premium export-quality rice with distinct aroma. Requires precise water and nutrient management.", nutritionalValue: "High carbohydrates, low glycemic", exportPotential: "Very High", storageLife: 24, mechanization: "High" },
    
    { id: "maize", name: "Maize", icon: "🌽", soil: ["Loamy", "Sandy", "Alluvial"], water: "medium", seasons: ["Kharif", "Rabi", "Zaid"], growingDuration: 3, investment: 28000, avgYield: 28, marketPrice: "₹2100/quintal", type: "Grain", varieties: ["Pioneer 3396", "Dekalb 900M", "NK-6240", "P-3522"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Poaceae", waterEfficiency: "High", commonRisks: ["Fall Armyworm", "Stalk Rot", "Maydis Leaf Blight"], plantingMonths: [6, 7, 10, 2], harvestMonths: [9, 10, 1, 5], soilPH: [5.8, 7.2], interCropping: ["Soybean", "Cowpea", "French Bean"], specialNotes: "Versatile crop for grain, fodder, and industrial use. Three seasons possible.", nutritionalValue: "High carbohydrates, vitamins", exportPotential: "Medium", storageLife: 8, mechanization: "High" },
    
    { id: "pearl_millet", name: "Pearl Millet (Bajra)", icon: "🌾", soil: ["Sandy", "Loamy", "Saline"], water: "low", seasons: ["Kharif"], growingDuration: 3, investment: 15000, avgYield: 15, marketPrice: "₹2600/quintal", type: "Grain", varieties: ["HHB-67", "RHB-121", "Pusa-322"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Very High", commonRisks: ["Downy Mildew", "Smut", "Ergot"], plantingMonths: [7, 8], harvestMonths: [10, 11], soilPH: [6.0, 8.5], interCropping: ["Moong Bean", "Guar", "Sesame"], specialNotes: "Highly drought-resistant millet, excellent for arid regions. Climate-resilient crop.", nutritionalValue: "High protein, iron, calcium", exportPotential: "Low", storageLife: 12, mechanization: "Medium" },
    
    { id: "barley", name: "Barley", icon: "🌱", soil: ["Sandy", "Saline", "Loamy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 18000, avgYield: 18, marketPrice: "₹2200/quintal", type: "Grain", varieties: ["DWRB-137", "BH-946", "RD-2552"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "High", commonRisks: ["Covered Smut", "Stripe Rust", "Powdery Mildew"], plantingMonths: [10, 11], harvestMonths: [3, 4], soilPH: [6.5, 8.5], interCropping: ["Lentil", "Mustard", "Chickpea"], specialNotes: "Salt-tolerant cereal, suitable for marginal lands. Used for food, feed, and brewing.", nutritionalValue: "High fiber, beta-glucan", exportPotential: "Medium", storageLife: 12, mechanization: "High" },
    
    { id: "sorghum", name: "Sorghum (Jowar)", icon: "🌾", soil: ["Sandy", "Loamy", "Red Soil"], water: "low", seasons: ["Kharif"], growingDuration: 4, investment: 16000, avgYield: 20, marketPrice: "₹2400/quintal", type: "Grain", varieties: ["CSH-16", "SPH-1635", "CSV-15"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Very High", commonRisks: ["Shoot Fly", "Stem Borer", "Anthracnose"], plantingMonths: [6, 7], harvestMonths: [10, 11], soilPH: [6.0, 8.5], interCropping: ["Pigeon Pea", "Cowpea"], specialNotes: "Drought-tolerant grain, excellent for dryland farming. Multiple uses as grain and fodder.", nutritionalValue: "High protein, antioxidants", exportPotential: "Medium", storageLife: 10, mechanization: "Medium" },
    
    { id: "oats", name: "Oats", icon: "🌾", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Rabi"], growingDuration: 4, investment: 20000, avgYield: 16, marketPrice: "₹2800/quintal", type: "Grain", varieties: ["Kent", "OS-6", "UPO-94"], marketDemand: "High", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Medium", commonRisks: ["Crown Rust", "Stem Rust"], plantingMonths: [10, 11], harvestMonths: [3, 4], soilPH: [6.0, 7.0], interCropping: ["Berseem"], specialNotes: "Health-conscious demand increasing. Good for fodder and human consumption.", nutritionalValue: "High fiber, beta-glucan, protein", exportPotential: "Medium", storageLife: 12, mechanization: "High" },

    // PULSES (Enhanced Data)
    { id: "gram", name: "Gram (Chickpea)", icon: "🌱", soil: ["Sandy", "Loamy", "Black Cotton"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 18000, avgYield: 10, marketPrice: "₹5200/quintal", type: "Pulse", varieties: ["PBG-7", "GNG-1581", "BG-372"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Wilt", "Pod Borer", "Ascochyta Blight"], plantingMonths: [10, 11], harvestMonths: [3, 4], soilPH: [6.0, 8.0], interCropping: ["Wheat", "Barley", "Mustard"], specialNotes: "Primary pulse crop. Excellent nitrogen-fixing ability improves soil fertility for subsequent crops.", nutritionalValue: "High protein, folate, fiber", exportPotential: "High", storageLife: 24, mechanization: "Medium" },
    
    { id: "lentil", name: "Lentil (Masur)", icon: "🌿", soil: ["Loamy", "Clayey", "Sandy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 16000, avgYield: 8, marketPrice: "₹6800/quintal", type: "Pulse", varieties: ["WBL-77", "IPL-316", "PL-639"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Rust", "Wilt", "Aphids"], plantingMonths: [10, 11], harvestMonths: [2, 3], soilPH: [6.0, 8.0], interCropping: ["Barley", "Wheat"], specialNotes: "High-value pulse with excellent protein content. Good for crop rotation and soil improvement.", nutritionalValue: "Very high protein, iron", exportPotential: "High", storageLife: 18, mechanization: "Medium" },
    
    { id: "moong_bean", name: "Moong Bean", icon: "🌿", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Kharif", "Zaid"], growingDuration: 2, investment: 16000, avgYield: 6, marketPrice: "₹8200/quintal", type: "Pulse", varieties: ["SML-668", "IPM-2-14", "Pusa-9531"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Fabaceae", waterEfficiency: "Very High", commonRisks: ["Yellow Mosaic Virus", "Thrips", "Pod Borer"], plantingMonths: [3, 7], harvestMonths: [5, 9], soilPH: [6.5, 8.5], interCropping: ["Cotton", "Maize", "Sugarcane"], specialNotes: "Short-duration pulse, perfect for gap filling between main crops. High market value.", nutritionalValue: "High protein, easy to digest", exportPotential: "Very High", storageLife: 18, mechanization: "Low" },
    
    { id: "black_gram", name: "Black Gram (Urad)", icon: "⚫", soil: ["Loamy", "Clayey"], water: "low", seasons: ["Kharif", "Rabi"], growingDuration: 3, investment: 17000, avgYield: 7, marketPrice: "₹7800/quintal", type: "Pulse", varieties: ["Pant-U-19", "T-9", "Pusa-1"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Yellow Mosaic Virus", "Pod Borer"], plantingMonths: [7, 10], harvestMonths: [10, 1], soilPH: [6.5, 8.0], interCropping: ["Maize", "Cotton"], specialNotes: "High-protein pulse used in South Indian cuisine. Good soil improver.", nutritionalValue: "Very high protein, calcium", exportPotential: "Medium", storageLife: 12, mechanization: "Low" },
    
    { id: "pigeon_pea", name: "Pigeon Pea (Arhar)", icon: "🟤", soil: ["Red Soil", "Sandy", "Loamy"], water: "low", seasons: ["Kharif"], growingDuration: 6, investment: 19000, avgYield: 9, marketPrice: "₹6500/quintal", type: "Pulse", varieties: ["UPAS-120", "Pusa-992", "AL-201"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Wilt", "Pod Borer", "Sterility Mosaic"], plantingMonths: [6, 7], harvestMonths: [12, 1], soilPH: [6.0, 8.5], interCropping: ["Maize", "Sorghum", "Cotton"], specialNotes: "Long-duration pulse, excellent for intercropping. Drought-tolerant and soil-improving.", nutritionalValue: "High protein, amino acids", exportPotential: "Medium", storageLife: 18, mechanization: "Medium" },

    // OILSEEDS (Enhanced Data)
    { id: "mustard", name: "Mustard", icon: "🌼", soil: ["Loamy", "Sandy", "Alluvial"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 22000, avgYield: 12, marketPrice: "₹5800/quintal", type: "Oilseed", varieties: ["Pusa-Bold", "GSC-7", "RH-30"], marketDemand: "High", riskFactor: "Low", cropFamily: "Brassicaceae", waterEfficiency: "High", commonRisks: ["Alternaria Blight", "Aphids", "White Rust"], plantingMonths: [10, 11], harvestMonths: [2, 3], soilPH: [6.0, 7.5], interCropping: ["Wheat", "Barley"], specialNotes: "Major oilseed crop of Rabi season. Oil content 38-42%. Good honey crop.", nutritionalValue: "High omega-3, vitamin E", exportPotential: "Medium", storageLife: 12, mechanization: "High" },
    
    { id: "sunflower", name: "Sunflower", icon: "🌻", soil: ["Sandy", "Loamy", "Black Cotton"], water: "low", seasons: ["Rabi", "Kharif"], growingDuration: 3, investment: 25000, avgYield: 12, marketPrice: "₹6800/quintal", type: "Oilseed", varieties: ["DRSH-1", "Surya", "PSH-569"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Asteraceae", waterEfficiency: "High", commonRisks: ["Head Rot", "Rust", "Necrosis"], plantingMonths: [1, 2, 7], harvestMonths: [4, 5, 10], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Photo-insensitive crop allowing flexible sowing. High oil content 38-45%.", nutritionalValue: "High vitamin E, healthy fats", exportPotential: "High", storageLife: 8, mechanization: "High" },
    
    { id: "safflower", name: "Safflower", icon: "🌸", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 18000, avgYield: 8, marketPrice: "₹7200/quintal", type: "Oilseed", varieties: ["A-1", "PBNS-12", "JSF-1"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Asteraceae", waterEfficiency: "Very High", commonRisks: ["Aphids", "Caterpillars"], plantingMonths: [10, 11], harvestMonths: [3, 4], soilPH: [6.5, 8.0], interCropping: ["Chickpea"], specialNotes: "Drought-tolerant oilseed. Oil used for cooking and cosmetics. Low water requirement.", nutritionalValue: "High linoleic acid", exportPotential: "Medium", storageLife: 12, mechanization: "Medium" },

    // VEGETABLES (Enhanced Data - Major ones)
    { id: "potato", name: "Potato", icon: "🥔", soil: ["Alluvial", "Loamy", "Sandy"], water: "medium", seasons: ["Rabi"], growingDuration: 3, investment: 65000, avgYield: 180, marketPrice: "₹1200/quintal", type: "Vegetable", varieties: ["Kufri-Jyoti", "Kufri-Pukhraj", "Kufri-Bahar"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Solanaceae", waterEfficiency: "Medium", commonRisks: ["Late Blight", "Early Blight", "Potato Tuber Moth"], plantingMonths: [10, 11], harvestMonths: [1, 2, 3], soilPH: [5.5, 6.5], interCropping: ["Garlic", "Onion", "Coriander"], specialNotes: "High investment but excellent returns. Quality seed crucial for success. Storage facilities important.", nutritionalValue: "Carbohydrates, vitamin C, potassium", exportPotential: "Medium", storageLife: 6, mechanization: "High" },
    
    { id: "onion", name: "Onion", icon: "🧅", soil: ["Loamy", "Sandy", "Alluvial"], water: "medium", seasons: ["Kharif", "Rabi"], growingDuration: 4, investment: 45000, avgYield: 150, marketPrice: "₹1800/quintal", type: "Vegetable", varieties: ["Punjab-Selection", "N-53", "Pusa-Red"], marketDemand: "High", riskFactor: "High", cropFamily: "Amaryllidaceae", waterEfficiency: "Medium", commonRisks: ["Thrips", "Purple Blotch", "Stemphylium Blight"], plantingMonths: [7, 10], harvestMonths: [11, 3], soilPH: [6.0, 7.0], interCropping: ["Sugarcane", "Turmeric"], specialNotes: "Price volatile but high demand. Good storage increases profitability. Export potential high.", nutritionalValue: "Antioxidants, vitamin C", exportPotential: "High", storageLife: 8, mechanization: "Low" },
    
    { id: "tomato", name: "Tomato", icon: "🍅", soil: ["Loamy", "Sandy", "Red Soil"], water: "medium", seasons: ["Kharif", "Rabi"], growingDuration: 4, investment: 55000, avgYield: 350, marketPrice: "₹1500/quintal", type: "Vegetable", varieties: ["Punjab-Ratta", "Pusa-Ruby", "Hisar-Lalit"], marketDemand: "High", riskFactor: "High", cropFamily: "Solanaceae", waterEfficiency: "Medium", commonRisks: ["Early Blight", "Late Blight", "Fruit Borer"], plantingMonths: [7, 11], harvestMonths: [10, 2], soilPH: [6.0, 7.0], interCropping: ["Marigold", "Basil"], specialNotes: "Requires staking and regular care. High yielding but disease-prone. Good processing demand.", nutritionalValue: "Lycopene, vitamin C, vitamin K", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "cauliflower", name: "Cauliflower", icon: "🥦", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Rabi"], growingDuration: 3, investment: 35000, avgYield: 120, marketPrice: "₹1800/quintal", type: "Vegetable", varieties: ["Pusa Snowball K-1", "Early Kunwari"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Brassicaceae", waterEfficiency: "Medium", commonRisks: ["Black Rot", "Diamondback Moth"], plantingMonths: [8, 9, 10], harvestMonths: [11, 12, 1], soilPH: [6.0, 7.0], interCropping: ["Onion", "Spinach"], specialNotes: "Temperature sensitive crop. Premium prices for quality heads.", nutritionalValue: "Vitamin C, vitamin K, folate", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "cabbage", name: "Cabbage", icon: "🥬", soil: ["Loamy", "Clayey"], water: "medium", seasons: ["Rabi"], growingDuration: 3, investment: 30000, avgYield: 200, marketPrice: "₹1200/quintal", type: "Vegetable", varieties: ["Golden Acre", "Pride of India"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Brassicaceae", waterEfficiency: "Medium", commonRisks: ["Club Root", "Aphids"], plantingMonths: [9, 10], harvestMonths: [12, 1], soilPH: [6.0, 7.0], interCropping: ["Lettuce"], specialNotes: "Good storage life. Popular for processing industry.", nutritionalValue: "Vitamin C, vitamin K", exportPotential: "Low", storageLife: 3, mechanization: "Low" },

    { id: "peas", name: "Peas", icon: "🟢", soil: ["Loamy", "Clayey"], water: "low", seasons: ["Rabi"], growingDuration: 3, investment: 25000, avgYield: 50, marketPrice: "₹3500/quintal", type: "Vegetable", varieties: ["Punjab 89", "Matar Ageta-7"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Powdery Mildew", "Rust"], plantingMonths: [10, 11], harvestMonths: [1, 2], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Nitrogen-fixing legume. Early harvest gets premium prices.", nutritionalValue: "High protein, vitamin K", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "carrot", name: "Carrot", icon: "🥕", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Rabi"], growingDuration: 3, investment: 25000, avgYield: 150, marketPrice: "₹1500/quintal", type: "Vegetable", varieties: ["Pusa Kesar", "Nantes"], marketDemand: "High", riskFactor: "Low", cropFamily: "Apiaceae", waterEfficiency: "High", commonRisks: ["Carrot Rust Fly", "Leaf Blight"], plantingMonths: [9, 10], harvestMonths: [12, 1], soilPH: [6.0, 7.0], interCropping: ["Lettuce", "Radish"], specialNotes: "Deep loose soil required. Good export potential.", nutritionalValue: "Beta-carotene, fiber", exportPotential: "High", storageLife: 4, mechanization: "Medium" },

    { id: "okra", name: "Okra (Bhindi)", icon: "🥒", soil: ["Sandy", "Loamy"], water: "medium", seasons: ["Kharif", "Zaid"], growingDuration: 2, investment: 25000, avgYield: 60, marketPrice: "₹2500/quintal", type: "Vegetable", varieties: ["Punjab Padmini", "P-8"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Malvaceae", waterEfficiency: "Medium", commonRisks: ["Yellow Vein Mosaic Virus", "Fruit Borer"], plantingMonths: [3, 6], harvestMonths: [5, 8], soilPH: [6.0, 7.5], interCropping: ["Onion"], specialNotes: "Regular picking encourages production. Heat tolerant crop.", nutritionalValue: "Vitamin C, folate, fiber", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "brinjal", name: "Brinjal (Eggplant)", icon: "🍆", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Kharif", "Rabi"], growingDuration: 5, investment: 40000, avgYield: 200, marketPrice: "₹1800/quintal", type: "Vegetable", varieties: ["Punjab Barsati", "Pusa Purple Long"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Solanaceae", waterEfficiency: "Medium", commonRisks: ["Shoot and Fruit Borer", "Bacterial Wilt"], plantingMonths: [6, 10], harvestMonths: [9, 2], soilPH: [6.0, 7.0], interCropping: ["Coriander"], specialNotes: "Long harvesting period. Requires regular irrigation.", nutritionalValue: "Antioxidants, fiber", exportPotential: "Low", storageLife: 1, mechanization: "Low" },

    { id: "bottle_gourd", name: "Bottle Gourd", icon: "🥒", soil: ["Loamy", "Alluvial"], water: "medium", seasons: ["Kharif", "Zaid"], growingDuration: 3, investment: 20000, avgYield: 150, marketPrice: "₹1200/quintal", type: "Vegetable", varieties: ["Pusa Summer Prolific Long"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Cucurbitaceae", waterEfficiency: "Medium", commonRisks: ["Downy Mildew", "Fruit Fly"], plantingMonths: [2, 6], harvestMonths: [4, 8], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Climbing variety requires support. Good for home consumption.", nutritionalValue: "Low calories, high water content", exportPotential: "Low", storageLife: 2, mechanization: "Low" },

    { id: "bitter_gourd", name: "Bitter Gourd", icon: "🥒", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Kharif", "Zaid"], growingDuration: 3, investment: 22000, avgYield: 80, marketPrice: "₹2500/quintal", type: "Vegetable", varieties: ["Coimbatore Long", "Priya"], marketDemand: "Medium", riskFactor: "Medium", cropFamily: "Cucurbitaceae", waterEfficiency: "Medium", commonRisks: ["Downy Mildew", "Aphids"], plantingMonths: [2, 6], harvestMonths: [4, 8], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Medicinal value increases demand. Requires trellising.", nutritionalValue: "Antidiabetic compounds, vitamin C", exportPotential: "Low", storageLife: 1, mechanization: "Low" },

    { id: "cucumber", name: "Cucumber", icon: "🥒", soil: ["Sandy", "Loamy"], water: "medium", seasons: ["Kharif", "Zaid"], growingDuration: 2, investment: 18000, avgYield: 100, marketPrice: "₹1500/quintal", type: "Vegetable", varieties: ["Japanese Long Green", "Poona Khira"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Cucurbitaceae", waterEfficiency: "Medium", commonRisks: ["Downy Mildew", "Aphids"], plantingMonths: [2, 6], harvestMonths: [4, 8], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Short duration crop. Good for salad industry.", nutritionalValue: "High water content, vitamin K", exportPotential: "Low", storageLife: 1, mechanization: "Low" },

    { id: "pumpkin", name: "Pumpkin", icon: "🎃", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Kharif"], growingDuration: 4, investment: 15000, avgYield: 200, marketPrice: "₹800/quintal", type: "Vegetable", varieties: ["Ambili", "CO-1"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Cucurbitaceae", waterEfficiency: "Medium", commonRisks: ["Powdery Mildew", "Squash Bug"], plantingMonths: [6, 7], harvestMonths: [10, 11], soilPH: [6.0, 7.5], interCropping: ["Maize"], specialNotes: "Good storage life. Multiple uses including seeds.", nutritionalValue: "Beta-carotene, vitamin A", exportPotential: "Low", storageLife: 6, mechanization: "Low" },

    { id: "sweet_potato", name: "Sweet Potato", icon: "🍠", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Kharif"], growingDuration: 4, investment: 20000, avgYield: 120, marketPrice: "₹1500/quintal", type: "Vegetable", varieties: ["Rajendra Shakarkand-51", "Sree Bhadra"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Convolvulaceae", waterEfficiency: "High", commonRisks: ["Sweet Potato Weevil", "Alternaria Leaf Spot"], plantingMonths: [6, 7], harvestMonths: [10, 11], soilPH: [5.8, 6.2], interCropping: [], specialNotes: "Drought tolerant root crop. Good nutritional value.", nutritionalValue: "Beta-carotene, fiber", exportPotential: "Low", storageLife: 3, mechanization: "Low" },

    { id: "beetroot", name: "Beetroot", icon: "🟣", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Rabi"], growingDuration: 3, investment: 22000, avgYield: 80, marketPrice: "₹2000/quintal", type: "Vegetable", varieties: ["Detroit Dark Red", "Crimson Globe"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Amaranthaceae", waterEfficiency: "Medium", commonRisks: ["Leaf Spot", "Root Rot"], plantingMonths: [10, 11], harvestMonths: [1, 2], soilPH: [6.0, 7.0], interCropping: ["Lettuce"], specialNotes: "Niche market crop. Good for juice industry.", nutritionalValue: "Folate, nitrates, antioxidants", exportPotential: "Medium", storageLife: 4, mechanization: "Low" },

    { id: "spinach", name: "Spinach", icon: "🥬", soil: ["Loamy", "Clayey"], water: "medium", seasons: ["Rabi"], growingDuration: 2, investment: 12000, avgYield: 30, marketPrice: "₹1800/quintal", type: "Vegetable", varieties: ["All Green", "Pusa Jyoti"], marketDemand: "High", riskFactor: "Low", cropFamily: "Amaranthaceae", waterEfficiency: "Medium", commonRisks: ["Downy Mildew", "Aphids"], plantingMonths: [10, 11], harvestMonths: [12, 1], soilPH: [6.0, 7.5], interCropping: ["Radish"], specialNotes: "Quick growing leafy vegetable. Multiple harvests possible.", nutritionalValue: "Iron, vitamin K, folate", exportPotential: "Low", storageLife: 1, mechanization: "Low" },

    { id: "fenugreek", name: "Fenugreek (Methi)", icon: "🌿", soil: ["Loamy", "Sandy"], water: "low", seasons: ["Rabi"], growingDuration: 3, investment: 15000, avgYield: 25, marketPrice: "₹3500/quintal", type: "Vegetable", varieties: ["Pusa Early Bunching", "RMt-305"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Powdery Mildew", "Aphids"], plantingMonths: [10, 11], harvestMonths: [1, 2], soilPH: [6.0, 7.5], interCropping: ["Coriander"], specialNotes: "Dual purpose - leaves and seeds both valuable. Medicinal properties.", nutritionalValue: "Iron, vitamin K, fiber", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "lettuce", name: "Lettuce", icon: "🥬", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Rabi"], growingDuration: 2, investment: 18000, avgYield: 40, marketPrice: "₹2500/quintal", type: "Vegetable", varieties: ["Great Lakes", "Iceberg"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Asteraceae", waterEfficiency: "Medium", commonRisks: ["Downy Mildew", "Aphids"], plantingMonths: [10, 11], harvestMonths: [12, 1], soilPH: [6.0, 7.0], interCropping: ["Carrot"], specialNotes: "Growing demand from hotels and restaurants. Cool season crop.", nutritionalValue: "Vitamin A, vitamin K", exportPotential: "Low", storageLife: 1, mechanization: "Low" },

    { id: "bell_pepper", name: "Bell Pepper", icon: "🫑", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Rabi", "Zaid"], growingDuration: 4, investment: 50000, avgYield: 150, marketPrice: "₹4000/quintal", type: "Vegetable", varieties: ["California Wonder", "Yolo Wonder"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Solanaceae", waterEfficiency: "Medium", commonRisks: ["Bacterial Spot", "Thrips"], plantingMonths: [9, 2], harvestMonths: [12, 5], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "High value crop. Protected cultivation recommended.", nutritionalValue: "Vitamin C, vitamin A", exportPotential: "High", storageLife: 2, mechanization: "Low" },

    { id: "chilli", name: "Chilli", icon: "🌶️", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Kharif", "Rabi"], growingDuration: 5, investment: 35000, avgYield: 80, marketPrice: "₹8000/quintal", type: "Vegetable", varieties: ["Pusa Jwala", "G-4"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Solanaceae", waterEfficiency: "Medium", commonRisks: ["Anthracnose", "Thrips"], plantingMonths: [6, 10], harvestMonths: [9, 2], soilPH: [6.0, 7.5], interCropping: ["Onion"], specialNotes: "High value spice crop. Good export potential.", nutritionalValue: "Capsaicin, vitamin C", exportPotential: "Very High", storageLife: 6, mechanization: "Low" },

    { id: "garlic", name: "Garlic", icon: "🧄", soil: ["Loamy", "Alluvial"], water: "medium", seasons: ["Rabi"], growingDuration: 5, investment: 60000, avgYield: 60, marketPrice: "₹8000/quintal", type: "Spice", varieties: ["G-1", "Yamuna Safed"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Amaryllidaceae", waterEfficiency: "Medium", commonRisks: ["Purple Blotch", "Thrips"], plantingMonths: [9, 10], harvestMonths: [3, 4], soilPH: [6.0, 7.0], interCropping: ["Potato"], specialNotes: "High value spice crop. Good storage increases profitability.", nutritionalValue: "Allicin, antioxidants", exportPotential: "High", storageLife: 8, mechanization: "Low" },

    { id: "french_bean", name: "French Bean", icon: "🫘", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Rabi", "Zaid"], growingDuration: 2, investment: 25000, avgYield: 60, marketPrice: "₹3500/quintal", type: "Vegetable", varieties: ["Arka Komal", "Contender"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "Medium", commonRisks: ["Angular Leaf Spot", "Bean Fly"], plantingMonths: [10, 2], harvestMonths: [12, 4], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Short duration legume. Export quality fetch premium prices.", nutritionalValue: "Protein, fiber, folate", exportPotential: "High", storageLife: 1, mechanization: "Low" },

    { id: "cluster_bean", name: "Cluster Bean (Guar)", icon: "🫘", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Kharif"], growingDuration: 3, investment: 18000, avgYield: 40, marketPrice: "₹4500/quintal", type: "Vegetable", varieties: ["Pusa Navbahar", "RGC-936"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "Very High", commonRisks: ["Bacterial Blight", "Pod Borer"], plantingMonths: [7, 8], harvestMonths: [10, 11], soilPH: [6.5, 8.0], interCropping: ["Pearl Millet"], specialNotes: "Industrial demand for guar gum. Drought tolerant.", nutritionalValue: "Fiber, protein", exportPotential: "High", storageLife: 12, mechanization: "Medium" },

    // FRUITS (Enhanced Data)
    { id: "kinnow", name: "Kinnow", icon: "🍊", soil: ["Loamy", "Alluvial", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 36, investment: 120000, avgYield: 150, marketPrice: "₹2500/quintal", type: "Fruit", varieties: ["Kinnow"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Rutaceae", waterEfficiency: "Medium", commonRisks: ["Citrus Canker", "Psylla", "Scale Insects"], plantingMonths: [8, 9, 2], harvestMonths: [12, 1, 2], soilPH: [6.0, 7.5], interCropping: ["Turmeric", "Ginger"], specialNotes: "Long-term investment fruit. Peak production from 5th year. High export potential to Middle East.", nutritionalValue: "Vitamin C, fiber, antioxidants", exportPotential: "Very High", storageLife: 3, mechanization: "Medium" },
    
    { id: "guava", name: "Guava", icon: "🍈", soil: ["Alluvial", "Loamy", "Red Soil"], water: "medium", seasons: ["Perennial"], growingDuration: 24, investment: 60000, avgYield: 100, marketPrice: "₹3000/quintal", type: "Fruit", varieties: ["Sardar", "Allahabad-Safeda", "Punjab-Pink"], marketDemand: "High", riskFactor: "Low", cropFamily: "Myrtaceae", waterEfficiency: "High", commonRisks: ["Fruit Fly", "Wilt", "Canker"], plantingMonths: [8, 9], harvestMonths: [11, 12, 1], soilPH: [6.0, 8.0], interCropping: ["Turmeric", "Ginger"], specialNotes: "Hardy fruit tree, drought-tolerant. Two seasons possible. Good processing potential.", nutritionalValue: "Very high vitamin C, fiber", exportPotential: "Medium", storageLife: 2, mechanization: "Low" },

    { id: "mango", name: "Mango", icon: "🥭", soil: ["Loamy", "Alluvial", "Red Soil"], water: "medium", seasons: ["Perennial"], growingDuration: 60, investment: 150000, avgYield: 80, marketPrice: "₹4500/quintal", type: "Fruit", varieties: ["Dashehari", "Langra", "Chausa"], marketDemand: "Very High", riskFactor: "Medium", cropFamily: "Anacardiaceae", waterEfficiency: "Medium", commonRisks: ["Anthracnose", "Powdery Mildew"], plantingMonths: [7, 8], harvestMonths: [4, 5, 6], soilPH: [5.5, 7.5], interCropping: ["Lemon", "Guava"], specialNotes: "King of fruits. Very long-term investment but high returns.", nutritionalValue: "Vitamin A, vitamin C", exportPotential: "Very High", storageLife: 2, mechanization: "Low" },

    { id: "orange", name: "Orange", icon: "🍊", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 36, investment: 100000, avgYield: 120, marketPrice: "₹3500/quintal", type: "Fruit", varieties: ["Jaffa", "Mosambi", "Valencia"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Rutaceae", waterEfficiency: "Medium", commonRisks: ["Citrus Canker", "Scale Insects"], plantingMonths: [8, 9], harvestMonths: [12, 1, 2], soilPH: [6.0, 7.5], interCropping: ["Lemon"], specialNotes: "Good processing potential. Juice industry demand.", nutritionalValue: "Vitamin C, folate", exportPotential: "High", storageLife: 4, mechanization: "Medium" },

    { id: "lemon", name: "Lemon", icon: "🍋", soil: ["Loamy", "Sandy"], water: "low", seasons: ["Perennial"], growingDuration: 30, investment: 80000, avgYield: 100, marketPrice: "₹4000/quintal", type: "Fruit", varieties: ["Kagzi Lime", "Assam Lemon"], marketDemand: "High", riskFactor: "Low", cropFamily: "Rutaceae", waterEfficiency: "High", commonRisks: ["Citrus Canker", "Aphids"], plantingMonths: [8, 9], harvestMonths: [1,2,3,4,5,6,7,8,9,10,11,12], soilPH: [6.0, 8.0], interCropping: [], specialNotes: "Year-round production. High demand in processing industry.", nutritionalValue: "Vitamin C, citric acid", exportPotential: "High", storageLife: 2, mechanization: "Low" },

    { id: "pomegranate", name: "Pomegranate", icon: "🍎", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Perennial"], growingDuration: 30, investment: 90000, avgYield: 80, marketPrice: "₹6000/quintal", type: "Fruit", varieties: ["Ganesh", "Bhagwa"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Lythraceae", waterEfficiency: "High", commonRisks: ["Bacterial Blight", "Aphids"], plantingMonths: [8, 9], harvestMonths: [2, 3, 10, 11], soilPH: [6.5, 8.0], interCropping: [], specialNotes: "High value fruit. Two crops per year possible.", nutritionalValue: "Antioxidants, vitamin C", exportPotential: "Very High", storageLife: 6, mechanization: "Low" },

    { id: "grapes", name: "Grapes", icon: "🍇", soil: ["Sandy", "Loamy"], water: "medium", seasons: ["Perennial"], growingDuration: 24, investment: 200000, avgYield: 150, marketPrice: "₹5000/quintal", type: "Fruit", varieties: ["Thompson Seedless", "Perlette"], marketDemand: "Very High", riskFactor: "High", cropFamily: "Vitaceae", waterEfficiency: "Medium", commonRisks: ["Downy Mildew", "Thrips"], plantingMonths: [8, 9], harvestMonths: [3, 4, 5], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "High investment but excellent returns. Export quality premium.", nutritionalValue: "Antioxidants, vitamin C", exportPotential: "Very High", storageLife: 3, mechanization: "Medium" },

    { id: "banana", name: "Banana", icon: "🍌", soil: ["Loamy", "Alluvial"], water: "high", seasons: ["Perennial"], growingDuration: 12, investment: 80000, avgYield: 300, marketPrice: "₹1500/quintal", type: "Fruit", varieties: ["Grand Naine", "Robusta"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Musaceae", waterEfficiency: "Low", commonRisks: ["Panama Wilt", "Sigatoka"], plantingMonths: [6, 7, 8], harvestMonths: [1,2,3,4,5,6,7,8,9,10,11,12], soilPH: [6.0, 7.5], interCropping: ["Turmeric", "Ginger"], specialNotes: "Continuous production. High water requirement.", nutritionalValue: "Potassium, vitamin B6", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "papaya", name: "Papaya", icon: "🫐", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 12, investment: 40000, avgYield: 200, marketPrice: "₹2000/quintal", type: "Fruit", varieties: ["Red Lady", "Taiwan"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Caricaceae", waterEfficiency: "Medium", commonRisks: ["Papaya Ring Spot Virus", "Anthracnose"], plantingMonths: [6, 7], harvestMonths: [1,2,3,4,5,6,7,8,9,10,11,12], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Quick bearing fruit tree. Year-round production.", nutritionalValue: "Vitamin C, vitamin A, enzymes", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "watermelon", name: "Watermelon", icon: "🍉", soil: ["Sandy", "Loamy"], water: "medium", seasons: ["Zaid"], growingDuration: 3, investment: 20000, avgYield: 200, marketPrice: "₹800/quintal", type: "Fruit", varieties: ["Sugar Baby", "Charleston Grey"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Cucurbitaceae", waterEfficiency: "Medium", commonRisks: ["Anthracnose", "Aphids"], plantingMonths: [2, 3], harvestMonths: [5, 6], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Summer fruit with high demand. Requires space.", nutritionalValue: "Lycopene, vitamin C", exportPotential: "Low", storageLife: 2, mechanization: "Low" },

    { id: "muskmelon", name: "Muskmelon", icon: "🍈", soil: ["Sandy", "Loamy"], water: "medium", seasons: ["Zaid"], growingDuration: 3, investment: 18000, avgYield: 150, marketPrice: "₹1200/quintal", type: "Fruit", varieties: ["Hara Madhu", "Punjab Sunehri"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Cucurbitaceae", waterEfficiency: "Medium", commonRisks: ["Downy Mildew", "Aphids"], plantingMonths: [2, 3], harvestMonths: [5, 6], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Premium summer fruit. Good storage not possible.", nutritionalValue: "Vitamin A, vitamin C", exportPotential: "Low", storageLife: 1, mechanization: "Low" },

    { id: "date_palm", name: "Date Palm", icon: "🌴", soil: ["Sandy", "Saline"], water: "medium", seasons: ["Perennial"], growingDuration: 60, investment: 200000, avgYield: 50, marketPrice: "₹15000/quintal", type: "Fruit", varieties: ["Medjool", "Zahidi"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Arecaceae", waterEfficiency: "Medium", commonRisks: ["Red Palm Weevil", "Bayoud Disease"], plantingMonths: [8, 9], harvestMonths: [8, 9, 10], soilPH: [7.0, 8.5], interCropping: [], specialNotes: "Very long-term investment. Salt tolerant. High value fruit.", nutritionalValue: "Natural sugars, fiber, potassium", exportPotential: "Very High", storageLife: 12, mechanization: "Low" },

    { id: "fig", name: "Fig", icon: "🫐", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Perennial"], growingDuration: 24, investment: 60000, avgYield: 40, marketPrice: "₹8000/quintal", type: "Fruit", varieties: ["Poona", "Brown Turkey"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Moraceae", waterEfficiency: "High", commonRisks: ["Fig Rust", "Scale Insects"], plantingMonths: [8, 9], harvestMonths: [6, 7, 11, 12], soilPH: [6.0, 8.0], interCropping: [], specialNotes: "Drought tolerant. Two crops per year. High nutritional value.", nutritionalValue: "Fiber, potassium, antioxidants", exportPotential: "High", storageLife: 1, mechanization: "Low" },

    { id: "peach", name: "Peach", icon: "🍑", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 36, investment: 80000, avgYield: 60, marketPrice: "₹5000/quintal", type: "Fruit", varieties: ["Shan-i-Punjab", "July Elberta"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Rosaceae", waterEfficiency: "Medium", commonRisks: ["Peach Leaf Curl", "Aphids"], plantingMonths: [12, 1], harvestMonths: [5, 6], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Temperate fruit suitable for hills. Requires chilling hours.", nutritionalValue: "Vitamin A, vitamin C", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "plum", name: "Plum", icon: "🍇", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 36, investment: 70000, avgYield: 50, marketPrice: "₹6000/quintal", type: "Fruit", varieties: ["Santa Rosa", "Beauty"], marketDemand: "Medium", riskFactor: "Medium", cropFamily: "Rosaceae", waterEfficiency: "Medium", commonRisks: ["Brown Rot", "Aphids"], plantingMonths: [12, 1], harvestMonths: [6, 7], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Stone fruit for temperate regions. Good processing potential.", nutritionalValue: "Vitamin C, antioxidants", exportPotential: "Medium", storageLife: 2, mechanization: "Low" },

    { id: "apricot", name: "Apricot", icon: "🍑", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 36, investment: 75000, avgYield: 40, marketPrice: "₹8000/quintal", type: "Fruit", varieties: ["New Castle", "Perfection"], marketDemand: "Medium", riskFactor: "Medium", cropFamily: "Rosaceae", waterEfficiency: "Medium", commonRisks: ["Brown Rot", "Scale Insects"], plantingMonths: [12, 1], harvestMonths: [5, 6], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "High value stone fruit. Requires proper post-harvest handling.", nutritionalValue: "Vitamin A, potassium", exportPotential: "High", storageLife: 1, mechanization: "Low" },

    { id: "apple", name: "Apple", icon: "🍎", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 48, investment: 250000, avgYield: 200, marketPrice: "₹6000/quintal", type: "Fruit", varieties: ["Red Delicious", "Royal Delicious"], marketDemand: "Very High", riskFactor: "High", cropFamily: "Rosaceae", waterEfficiency: "Medium", commonRisks: ["Apple Scab", "Codling Moth"], plantingMonths: [12, 1], harvestMonths: [8, 9, 10], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "High altitude temperate fruit. Requires cold storage facilities.", nutritionalValue: "Fiber, vitamin C, antioxidants", exportPotential: "High", storageLife: 6, mechanization: "Medium" },

    { id: "pear", name: "Pear", icon: "🍐", soil: ["Loamy", "Clayey"], water: "medium", seasons: ["Perennial"], growingDuration: 40, investment: 100000, avgYield: 80, marketPrice: "₹4000/quintal", type: "Fruit", varieties: ["Bartlett", "Patharnakh"], marketDemand: "Medium", riskFactor: "Medium", cropFamily: "Rosaceae", waterEfficiency: "Medium", commonRisks: ["Fire Blight", "Pear Psylla"], plantingMonths: [12, 1], harvestMonths: [7, 8], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Temperate fruit tree. Good for processing industry.", nutritionalValue: "Fiber, vitamin C", exportPotential: "Medium", storageLife: 4, mechanization: "Low" },

    // SPICES (Enhanced Data)
    { id: "turmeric", name: "Turmeric", icon: "🟨", soil: ["Loamy", "Clayey", "Red Soil"], water: "medium", seasons: ["Kharif"], growingDuration: 8, investment: 55000, avgYield: 80, marketPrice: "₹8500/quintal", type: "Spice", varieties: ["Rajendra-Sonia", "Punjab-Haldi-1", "Suroma"], marketDemand: "High", riskFactor: "Low", cropFamily: "Zingiberaceae", waterEfficiency: "Medium", commonRisks: ["Rhizome Rot", "Leaf Blotch", "Scale Insects"], plantingMonths: [4, 5, 6], harvestMonths: [1, 2], soilPH: [5.5, 7.5], interCropping: ["Maize", "Arhar", "Onion"], specialNotes: "High-value spice crop. Requires well-drained soil. Good for organic farming. Export demand high.", nutritionalValue: "Curcumin, antioxidants, anti-inflammatory", exportPotential: "Very High", storageLife: 24, mechanization: "Low" },
    
    { id: "ginger", name: "Ginger", icon: "🫚", soil: ["Loamy", "Red Soil"], water: "high", seasons: ["Kharif"], growingDuration: 8, investment: 75000, avgYield: 100, marketPrice: "₹12000/quintal", type: "Spice", varieties: ["Rio-de-Janeiro", "Maran", "Himachal"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Zingiberaceae", waterEfficiency: "Low", commonRisks: ["Rhizome Rot", "Leaf Spot", "Shoot Borer"], plantingMonths: [4, 5], harvestMonths: [12, 1], soilPH: [5.5, 6.5], interCropping: ["Turmeric", "Colocasia"], specialNotes: "Very high-value spice. Requires shade and high moisture. Organic cultivation preferred.", nutritionalValue: "Gingerol, anti-inflammatory compounds", exportPotential: "Very High", storageLife: 6, mechanization: "Low" },

    { id: "coriander", name: "Coriander", icon: "🌿", soil: ["Loamy", "Sandy"], water: "low", seasons: ["Rabi"], growingDuration: 3, investment: 15000, avgYield: 8, marketPrice: "₹8500/quintal", type: "Spice", varieties: ["Punjab Sugandh", "GC-2", "Rajendra Swati"], marketDemand: "High", riskFactor: "Low", cropFamily: "Apiaceae", waterEfficiency: "High", commonRisks: ["Powdery Mildew", "Aphids"], plantingMonths: [10, 11], harvestMonths: [1, 2], soilPH: [6.0, 8.0], interCropping: ["Sugarcane", "Lentil"], specialNotes: "Dual purpose crop - leaves and seeds both valuable. Essential oil extraction possible.", nutritionalValue: "Antioxidants, vitamin C", exportPotential: "High", storageLife: 12, mechanization: "Medium" },

    { id: "cumin", name: "Cumin", icon: "🌿", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 20000, avgYield: 6, marketPrice: "₹15000/quintal", type: "Spice", varieties: ["GC-4", "RZ-19"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Apiaceae", waterEfficiency: "High", commonRisks: ["Blight", "Aphids"], plantingMonths: [10, 11], harvestMonths: [2, 3], soilPH: [6.5, 8.0], interCropping: [], specialNotes: "Very high value spice. Prone to price fluctuations. Export demand good.", nutritionalValue: "Iron, antioxidants", exportPotential: "Very High", storageLife: 18, mechanization: "Low" },

    { id: "fennel", name: "Fennel", icon: "🌿", soil: ["Loamy", "Clayey"], water: "medium", seasons: ["Rabi"], growingDuration: 5, investment: 25000, avgYield: 10, marketPrice: "₹12000/quintal", type: "Spice", varieties: ["Gujarat Fennel-2", "RF-205"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Apiaceae", waterEfficiency: "Medium", commonRisks: ["Blight", "Aphids"], plantingMonths: [10], harvestMonths: [3, 4], soilPH: [6.5, 8.0], interCropping: [], specialNotes: "High value spice with good export potential. Used in food and pharmaceutical industries.", nutritionalValue: "Fiber, potassium, vitamin C", exportPotential: "High", storageLife: 12, mechanization: "Low" },

    { id: "fenugreek_seeds", name: "Fenugreek Seeds", icon: "🌱", soil: ["Loamy", "Sandy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 18000, avgYield: 12, marketPrice: "₹6500/quintal", type: "Spice", varieties: ["RMt-305", "RMt-351"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Powdery Mildew", "Root Rot"], plantingMonths: [10, 11], harvestMonths: [2, 3], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Dual purpose crop. Seeds for spice, leaves for vegetable. Medicinal properties.", nutritionalValue: "Protein, fiber, saponins", exportPotential: "Medium", storageLife: 18, mechanization: "Medium" },

    { id: "ajwain", name: "Ajwain (Carom)", icon: "🌿", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 22000, avgYield: 8, marketPrice: "₹18000/quintal", type: "Spice", varieties: ["AA-1", "Gujarat Ajwain-1"], marketDemand: "Medium", riskFactor: "Medium", cropFamily: "Apiaceae", waterEfficiency: "High", commonRisks: ["Powdery Mildew", "Aphids"], plantingMonths: [10, 11], harvestMonths: [2, 3], soilPH: [6.5, 8.0], interCropping: [], specialNotes: "Very high value medicinal spice. Small market but premium prices.", nutritionalValue: "Thymol, medicinal compounds", exportPotential: "High", storageLife: 18, mechanization: "Low" },

    { id: "black_mustard", name: "Black Mustard", icon: "⚫", soil: ["Loamy", "Sandy"], water: "low", seasons: ["Rabi"], growingDuration: 4, investment: 20000, avgYield: 10, marketPrice: "₹7500/quintal", type: "Spice", varieties: ["Pusa Karishma", "Varuna"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Brassicaceae", waterEfficiency: "High", commonRisks: ["Alternaria Blight", "White Rust"], plantingMonths: [10, 11], harvestMonths: [2, 3], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Pungent mustard variety. Used in spice blends and oil extraction.", nutritionalValue: "Omega-3, selenium", exportPotential: "Medium", storageLife: 12, mechanization: "High" },

    { id: "black_pepper", name: "Black Pepper", icon: "⚫", soil: ["Loamy", "Red Soil"], water: "high", seasons: ["Perennial"], growingDuration: 36, investment: 150000, avgYield: 15, marketPrice: "₹50000/quintal", type: "Spice", varieties: ["Panniyur-1", "Karimunda"], marketDemand: "High", riskFactor: "High", cropFamily: "Piperaceae", waterEfficiency: "Low", commonRisks: ["Quick Wilt", "Pollu Beetle"], plantingMonths: [6, 7], harvestMonths: [12, 1, 2], soilPH: [5.5, 6.5], interCropping: ["Coconut", "Areca Nut"], specialNotes: "King of spices. Very high value but requires specific climatic conditions. Climbing vine.", nutritionalValue: "Piperine, antioxidants", exportPotential: "Very High", storageLife: 24, mechanization: "Low" },

    // CASH CROPS (Enhanced Data)
    { id: "cotton", name: "Cotton", icon: "☁️", soil: ["Alluvial", "Loamy", "Black Cotton"], water: "medium", seasons: ["Kharif"], growingDuration: 6, investment: 55000, avgYield: 12, marketPrice: "₹6500/quintal", type: "Cash Crop", varieties: ["RCH-314", "MRC-7017", "Ankur-651"], marketDemand: "High", riskFactor: "High", cropFamily: "Malvaceae", waterEfficiency: "Medium", commonRisks: ["Pink Bollworm", "Whitefly", "American Bollworm"], plantingMonths: [4, 5], harvestMonths: [10, 11, 12], soilPH: [6.0, 8.0], interCropping: ["Groundnut", "Moong", "Cluster Bean"], specialNotes: "Major cash crop but high pest pressure. Bt cotton reduces pesticide use. Good intercropping potential.", nutritionalValue: "N/A (Fiber crop)", exportPotential: "High", storageLife: 12, mechanization: "High" },
    
    { id: "sugarcane", name: "Sugarcane", icon: "🎋", soil: ["Loamy", "Clayey", "Alluvial"], water: "high", seasons: ["Annual"], growingDuration: 12, investment: 85000, avgYield: 400, marketPrice: "₹380/quintal", type: "Cash Crop", varieties: ["Co-0238", "CoJ-85", "Co-05011"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Poaceae", waterEfficiency: "Low", commonRisks: ["Red Rot", "Smut", "Early Shoot Borer"], plantingMonths: [2, 3, 10], harvestMonths: [12, 1, 2], soilPH: [6.5, 7.5], interCropping: ["Potato", "Onion", "Garlic"], specialNotes: "Long-duration high-investment crop. Ratoon crops reduce establishment cost. Water-intensive.", nutritionalValue: "Sugar, bagasse for biofuel", exportPotential: "Medium", storageLife: 1, mechanization: "High" },

    { id: "tobacco", name: "Tobacco", icon: "🚬", soil: ["Sandy", "Loamy"], water: "medium", seasons: ["Kharif"], growingDuration: 4, investment: 45000, avgYield: 15, marketPrice: "₹12000/quintal", type: "Cash Crop", varieties: ["FCV", "Burley"], marketDemand: "Medium", riskFactor: "High", cropFamily: "Solanaceae", waterEfficiency: "Medium", commonRisks: ["Tobacco Mosaic Virus", "Aphids"], plantingMonths: [6, 7], harvestMonths: [10, 11], soilPH: [5.5, 6.5], interCropping: [], specialNotes: "High value but health concerns affect demand. Requires curing facilities.", nutritionalValue: "N/A (Industrial crop)", exportPotential: "Medium", storageLife: 12, mechanization: "Medium" },

    { id: "jute", name: "Jute", icon: "🌿", soil: ["Clayey", "Alluvial"], water: "high", seasons: ["Kharif"], growingDuration: 4, investment: 25000, avgYield: 20, marketPrice: "₹4500/quintal", type: "Cash Crop", varieties: ["JRO-204", "JRO-632"], marketDemand: "Medium", riskFactor: "Medium", cropFamily: "Malvaceae", waterEfficiency: "Low", commonRisks: ["Stem Rot", "Semilooper"], plantingMonths: [6, 7], harvestMonths: [10, 11], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Eco-friendly fiber crop. Growing demand for jute products. Requires retting facilities.", nutritionalValue: "N/A (Fiber crop)", exportPotential: "High", storageLife: 18, mechanization: "Medium" },

    // FODDER CROPS (Enhanced Data)
    { id: "berseem", name: "Berseem", icon: "☘️", soil: ["Clayey", "Loamy", "Alluvial"], water: "high", seasons: ["Rabi"], growingDuration: 6, investment: 18000, avgYield: 500, marketPrice: "₹400/quintal", type: "Fodder", varieties: ["BL-42", "BL-10", "Wardan"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "Medium", commonRisks: ["Stem Rot", "Aphids", "Cutworm"], plantingMonths: [9, 10], harvestMonths: [11, 12, 1, 2, 3], soilPH: [6.5, 8.0], interCropping: ["Mustard", "Barley"], specialNotes: "King of fodder crops. Multiple cuts possible. Excellent for dairy farming. Nitrogen-fixing crop.", nutritionalValue: "High protein, calcium for livestock", exportPotential: "Low", storageLife: 1, mechanization: "Medium" },

    { id: "lucerne", name: "Lucerne (Alfalfa)", icon: "🍀", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Perennial"], growingDuration: 36, investment: 25000, avgYield: 400, marketPrice: "₹450/quintal", type: "Fodder", varieties: ["Sirsa-9", "LLC-3", "RL-88"], marketDemand: "High", riskFactor: "Low", cropFamily: "Fabaceae", waterEfficiency: "High", commonRisks: ["Downy Mildew", "Aphids"], plantingMonths: [10], harvestMonths: [1,2,3,4,5,6,7,8,9,10,11,12], soilPH: [6.5, 8.0], interCropping: [], specialNotes: "Perennial fodder crop providing nutritious feed for several years. Queen of fodders.", nutritionalValue: "Very high protein, vitamins for livestock", exportPotential: "Low", storageLife: 1, mechanization: "High" },

    { id: "oats_fodder", name: "Oats Fodder", icon: "🌾", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Rabi"], growingDuration: 3, investment: 15000, avgYield: 250, marketPrice: "₹350/quintal", type: "Fodder", varieties: ["Kent", "OS-6"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Medium", commonRisks: ["Crown Rust", "Aphids"], plantingMonths: [10, 11], harvestMonths: [1, 2], soilPH: [6.0, 7.0], interCropping: ["Berseem"], specialNotes: "Quick growing winter fodder. Can be used for hay making.", nutritionalValue: "Good protein content for livestock", exportPotential: "Low", storageLife: 1, mechanization: "High" },

    { id: "maize_fodder", name: "Maize Fodder", icon: "🌽", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Kharif", "Zaid"], growingDuration: 2, investment: 18000, avgYield: 300, marketPrice: "₹300/quintal", type: "Fodder", varieties: ["African Tall", "J-1006"], marketDemand: "High", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "High", commonRisks: ["Stem Borer", "Aphids"], plantingMonths: [6, 3], harvestMonths: [8, 5], soilPH: [5.8, 7.2], interCropping: ["Cowpea"], specialNotes: "Fast growing summer fodder. High palatability and digestibility.", nutritionalValue: "Energy rich feed for livestock", exportPotential: "Low", storageLife: 1, mechanization: "High" },

    { id: "sorghum_fodder", name: "Sorghum Fodder", icon: "🌾", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Kharif"], growingDuration: 2, investment: 12000, avgYield: 200, marketPrice: "₹250/quintal", type: "Fodder", varieties: ["SSG-59-3", "CSV-21F"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Very High", commonRisks: ["Shoot Fly", "Aphids"], plantingMonths: [6, 7], harvestMonths: [8, 9], soilPH: [6.0, 8.5], interCropping: ["Cowpea"], specialNotes: "Drought tolerant fodder crop. Suitable for arid regions.", nutritionalValue: "Good carbohydrate source for livestock", exportPotential: "Low", storageLife: 1, mechanization: "High" },

    { id: "pearl_millet_fodder", name: "Pearl Millet Fodder", icon: "🌾", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Kharif"], growingDuration: 2, investment: 10000, avgYield: 180, marketPrice: "₹280/quintal", type: "Fodder", varieties: ["Giant Bajra", "APFB-2"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Poaceae", waterEfficiency: "Very High", commonRisks: ["Downy Mildew", "Aphids"], plantingMonths: [7, 8], harvestMonths: [9, 10], soilPH: [6.0, 8.5], interCropping: ["Guar"], specialNotes: "Extremely drought resistant fodder. Good for marginal lands.", nutritionalValue: "Protein and minerals for livestock", exportPotential: "Low", storageLife: 1, mechanization: "Medium" },

    // FLOWERS (Enhanced Data)
    { id: "marigold", name: "Marigold", icon: "🌼", soil: ["Sandy", "Loamy", "Alluvial"], water: "medium", seasons: ["Annual"], growingDuration: 3, investment: 25000, avgYield: 80, marketPrice: "₹4000/quintal", type: "Flower", varieties: ["Pusa-Narangi-Gainda", "Pusa-Basanti-Gainda"], marketDemand: "High", riskFactor: "Low", cropFamily: "Asteraceae", waterEfficiency: "Medium", commonRisks: ["Powdery Mildew", "Thrips", "Red Spider Mite"], plantingMonths: [2, 6, 8], harvestMonths: [4, 8, 10], soilPH: [6.0, 7.5], interCropping: ["Tomato", "Chilli"], specialNotes: "High demand during festivals. Natural pest repellent. Good companion crop for vegetables.", nutritionalValue: "Lutein, natural pesticide", exportPotential: "Low", storageLife: 1, mechanization: "Low" },

    { id: "rose", name: "Rose", icon: "🌹", soil: ["Loamy", "Clayey"], water: "medium", seasons: ["Perennial"], growingDuration: 24, investment: 80000, avgYield: 60, marketPrice: "₹15000/quintal", type: "Flower", varieties: ["Mr. Lincoln", "Fragrant Cloud"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Rosaceae", waterEfficiency: "Medium", commonRisks: ["Black Spot", "Aphids"], plantingMonths: [11, 12], harvestMonths: [1,2,3,4,10,11,12], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "High value flower crop. Used for cut flowers, essential oil, and rose water production.", nutritionalValue: "Essential oils, vitamin C", exportPotential: "High", storageLife: 1, mechanization: "Low" },

    { id: "gladiolus", name: "Gladiolus", icon: "🌸", soil: ["Sandy", "Loamy"], water: "medium", seasons: ["Rabi"], growingDuration: 4, investment: 40000, avgYield: 200000, marketPrice: "₹3/piece", type: "Flower", varieties: ["White Prosperity", "American Beauty"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Iridaceae", waterEfficiency: "Medium", commonRisks: ["Thrips", "Fusarium Wilt"], plantingMonths: [9, 10], harvestMonths: [12, 1, 2], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Premium cut flower with high market value. Requires cool storage and proper handling.", nutritionalValue: "Ornamental value", exportPotential: "High", storageLife: 1, mechanization: "Low" },

    { id: "chrysanthemum", name: "Chrysanthemum", icon: "🌼", soil: ["Loamy", "Clayey"], water: "medium", seasons: ["Rabi"], growingDuration: 4, investment: 35000, avgYield: 100, marketPrice: "₹5000/quintal", type: "Flower", varieties: ["Pusa Chitraksha", "Yellow Gold"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Asteraceae", waterEfficiency: "Medium", commonRisks: ["Leaf Spot", "Aphids"], plantingMonths: [8, 9], harvestMonths: [11, 12, 1], soilPH: [6.0, 7.0], interCropping: [], specialNotes: "Popular autumn flower. High demand during festivals and winter season.", nutritionalValue: "Ornamental, medicinal compounds", exportPotential: "Medium", storageLife: 1, mechanization: "Low" },

    { id: "jasmine", name: "Jasmine", icon: "🤍", soil: ["Loamy", "Clayey"], water: "medium", seasons: ["Perennial"], growingDuration: 18, investment: 50000, avgYield: 40, marketPrice: "₹20000/quintal", type: "Flower", varieties: ["Gundumalli", "Madanban"], marketDemand: "High", riskFactor: "Low", cropFamily: "Oleaceae", waterEfficiency: "Medium", commonRisks: ["Leaf Webber", "Scale Insects"], plantingMonths: [6, 7], harvestMonths: [1,2,3,4,5,6,7,8,9,10,11,12], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Very high value fragrant flower. Used for garlands, perfumery, and religious purposes.", nutritionalValue: "Essential oils, fragrance compounds", exportPotential: "High", storageLife: 1, mechanization: "Low" },

    { id: "tuberose", name: "Tuberose", icon: "🤍", soil: ["Sandy", "Loamy"], water: "medium", seasons: ["Annual"], growingDuration: 8, investment: 45000, avgYield: 80, marketPrice: "₹12000/quintal", type: "Flower", varieties: ["Single", "Double"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Asparagaceae", waterEfficiency: "Medium", commonRisks: ["Thrips", "Fusarium Wilt"], plantingMonths: [3, 4], harvestMonths: [8, 9, 10, 11], soilPH: [6.5, 7.5], interCropping: [], specialNotes: "Highly fragrant flower used in perfume industry. Night blooming with intense fragrance.", nutritionalValue: "Essential oils", exportPotential: "Very High", storageLife: 1, mechanization: "Low" },

    // MEDICINAL PLANTS (Enhanced Data)  
    { id: "aloe_vera", name: "Aloe Vera", icon: "🌵", soil: ["Sandy", "Loamy", "Red Soil"], water: "low", seasons: ["Perennial"], growingDuration: 18, investment: 45000, avgYield: 300, marketPrice: "₹800/quintal", type: "Medicinal", varieties: ["IC-111271", "IC-111269"], marketDemand: "High", riskFactor: "Low", cropFamily: "Asphodelaceae", waterEfficiency: "Very High", commonRisks: ["Root Rot", "Scale Insects", "Mealybugs"], plantingMonths: [7, 8], harvestMonths: [1,2,3,4,5,6,7,8,9,10,11,12], soilPH: [6.5, 8.5], interCropping: [], specialNotes: "Drought-resistant medicinal plant. Low maintenance, high demand in cosmetic industry. Organic cultivation preferred.", nutritionalValue: "Aloin, polysaccharides, vitamins", exportPotential: "High", storageLife: 1, mechanization: "Low" },

    { id: "ashwagandha", name: "Ashwagandha", icon: "🌿", soil: ["Sandy", "Loamy"], water: "low", seasons: ["Kharif"], growingDuration: 6, investment: 30000, avgYield: 8, marketPrice: "₹25000/quintal", type: "Medicinal", varieties: ["Poshita", "Jawahar Asgand-20"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Solanaceae", waterEfficiency: "High", commonRisks: ["Leaf Spot", "Root Rot"], plantingMonths: [6, 7], harvestMonths: [1, 2], soilPH: [6.5, 8.0], interCropping: [], specialNotes: "High-value medicinal crop. Growing global demand for adaptogenic herbs. Organic certification adds premium.", nutritionalValue: "Withanolides, adaptogens", exportPotential: "Very High", storageLife: 12, mechanization: "Low" },

    { id: "stevia", name: "Stevia", icon: "🌿", soil: ["Loamy", "Sandy"], water: "medium", seasons: ["Annual"], growingDuration: 8, investment: 40000, avgYield: 20, marketPrice: "₹15000/quintal", type: "Medicinal", varieties: ["Madhunasi", "Sugar Free"], marketDemand: "High", riskFactor: "Medium", cropFamily: "Asteraceae", waterEfficiency: "Medium", commonRisks: ["Leaf Spot", "Aphids"], plantingMonths: [3, 4], harvestMonths: [10, 11], soilPH: [6.5, 7.5], interCropping: [], specialNotes: "Natural sweetener plant. High demand from diabetic population and food industry.", nutritionalValue: "Steviosides, natural sweeteners", exportPotential: "Very High", storageLife: 12, mechanization: "Low" },

    { id: "tulsi", name: "Tulsi (Holy Basil)", icon: "🌿", soil: ["Loamy", "Sandy"], water: "low", seasons: ["Kharif"], growingDuration: 6, investment: 20000, avgYield: 15, marketPrice: "₹8000/quintal", type: "Medicinal", varieties: ["Krishna Tulsi", "Rama Tulsi"], marketDemand: "High", riskFactor: "Low", cropFamily: "Lamiaceae", waterEfficiency: "High", commonRisks: ["Aphids", "Leaf Spot"], plantingMonths: [6, 7], harvestMonths: [10, 11, 12], soilPH: [6.0, 7.5], interCropping: [], specialNotes: "Sacred medicinal plant with religious significance. High demand for essential oil and ayurvedic medicines.", nutritionalValue: "Eugenol, antioxidants", exportPotential: "Medium", storageLife: 6, mechanization: "Low" },

    { id: "neem", name: "Neem", icon: "🌳", soil: ["Sandy", "Loamy", "Saline"], water: "low", seasons: ["Perennial"], growingDuration: 60, investment: 50000, avgYield: 200, marketPrice: "₹2000/quintal", type: "Medicinal", varieties: ["Local varieties"], marketDemand: "Medium", riskFactor: "Low", cropFamily: "Meliaceae", waterEfficiency: "Very High", commonRisks: ["Scale Insects"], plantingMonths: [6, 7], harvestMonths: [1,2,3,4,5,6,7,8,9,10,11,12], soilPH: [6.0, 8.5], interCropping: ["Turmeric", "Ginger"], specialNotes: "Multi-purpose tree. Leaves, oil, and bark all have commercial value. Natural pesticide properties.", nutritionalValue: "Azadirachtin, nimbin", exportPotential: "Medium", storageLife: 12, mechanization: "Low" }
];

// COMPREHENSIVE DISTRICT-CROP SUITABILITY MAPPING
const DISTRICT_CROP_SUITABILITY = {
    "Amritsar": ["wheat", "paddy", "maize", "potato", "basmati_rice", "onion", "peas", "berseem", "garlic", "cauliflower", "carrot", "marigold", "gram", "mustard", "sunflower", "cotton", "sugarcane", "cabbage", "spinach", "rose", "lucerne"],
    "Barnala": ["wheat", "paddy", "cotton", "mustard", "potato", "gram", "barley", "lucerne", "maize", "sunflower", "onion", "garlic", "turmeric", "safflower", "moong_bean", "sorghum", "pearl_millet"],
    "Bathinda": ["wheat", "cotton", "maize", "mustard", "gram", "sunflower", "pearl_millet", "barley", "kinnow", "safflower", "sorghum", "onion", "potato", "cluster_bean", "ashwagandha"],
    "Faridkot": ["wheat", "cotton", "paddy", "sugarcane", "potato", "mustard", "peas", "maize", "onion", "garlic", "gram", "sunflower", "kinnow", "guava", "lentil"],
    "Fatehgarh Sahib": ["wheat", "paddy", "maize", "potato", "onion", "guava", "tomato", "sunflower", "mustard", "gram", "garlic", "turmeric", "berseem", "cabbage", "peas"],
    "Fazilka": ["wheat", "cotton", "mustard", "gram", "sunflower", "kinnow", "barley", "guava", "pearl_millet", "safflower", "maize", "onion", "date_palm", "pomegranate"],
    "Ferozepur": ["wheat", "cotton", "paddy", "sugarcane", "mustard", "kinnow", "basmati_rice", "maize", "gram", "onion", "potato", "sunflower", "orange", "lemon"],
    "Gurdaspur": ["wheat", "paddy", "maize", "potato", "sugarcane", "guava", "basmati_rice", "turmeric", "lentil", "ginger", "tomato", "onion", "berseem", "mango", "banana"],
    "Hoshiarpur": ["wheat", "maize", "potato", "sugarcane", "kinnow", "guava", "tomato", "turmeric", "ginger", "aloe_vera", "lentil", "barley", "oats", "mango", "peach", "pear"],
    "Jalandhar": ["wheat", "paddy", "potato", "maize", "sugarcane", "onion", "peas", "garlic", "cauliflower", "marigold", "gram", "mustard", "berseem", "rose", "gladiolus"],
    "Kapurthala": ["wheat", "paddy", "sugarcane", "potato", "maize", "sunflower", "peas", "onion", "garlic", "turmeric", "gram", "mustard", "guava", "banana", "papaya"],
    "Ludhiana": ["wheat", "paddy", "maize", "potato", "onion", "sunflower", "tomato", "berseem", "garlic", "cauliflower", "marigold", "gram", "mustard", "cotton", "rose", "chrysanthemum"],
    "Mansa": ["wheat", "cotton", "mustard", "gram", "pearl_millet", "barley", "safflower", "sunflower", "onion", "potato", "maize", "cluster_bean", "sorghum_fodder"],
    "Moga": ["wheat", "paddy", "potato", "mustard", "gram", "cotton", "lucerne", "maize", "onion", "garlic", "sunflower", "kinnow", "guava", "berseem"],
    "Sri Muktsar Sahib": ["wheat", "cotton", "paddy", "mustard", "gram", "kinnow", "guava", "pearl_millet", "barley", "sunflower", "maize", "orange", "pomegranate"],
    "Pathankot": ["wheat", "maize", "potato", "guava", "basmati_rice", "tomato", "turmeric", "ginger", "lentil", "gram", "onion", "mango", "apple", "peach", "plum"],
    "Patiala": ["wheat", "paddy", "maize", "potato", "mustard", "sugarcane", "guava", "berseem", "lentil", "gram", "onion", "garlic", "sunflower", "rose", "marigold"],
    "Rupnagar": ["wheat", "maize", "potato", "sugarcane", "guava", "tomato", "lentil", "gram", "onion", "turmeric", "ginger", "mango", "banana", "papaya"],
    "Sahibzada Ajit Singh Nagar": ["wheat", "maize", "potato", "onion", "sunflower", "tomato", "marigold", "gram", "mustard", "garlic", "peas", "cauliflower", "rose"],
    "Sangrur": ["wheat", "paddy", "cotton", "potato", "mustard", "sugarcane", "gram", "barley", "berseem", "lucerne", "okra", "maize", "sunflower", "onion", "kinnow", "guava"],
    "Shahid Bhagat Singh Nagar": ["wheat", "paddy", "sugarcane", "maize", "potato", "sunflower", "gram", "mustard", "onion", "garlic", "turmeric", "guava", "banana", "mango"],
    "Tarn Taran": ["wheat", "paddy", "potato", "basmati_rice", "onion", "berseem", "peas", "gram", "mustard", "maize", "garlic", "cauliflower", "rose"],
    "Malerkotla": ["wheat", "paddy", "maize", "cotton", "mustard", "gram", "potato", "onion", "sunflower", "garlic", "turmeric", "guava", "kinnow", "berseem", "marigold"]
};

// --- ENHANCED HELPER FUNCTIONS ---
const getCurrentSeason = () => {
    const month = new Date().getMonth() + 1;
    if (month >= 6 && month <= 10) return "Kharif";
    if (month >= 11 || month <= 4) return "Rabi";
    return "Zaid";
};

const getSeasonalWeatherPrediction = (months) => {
    const patterns = {
        1: {t:"10-22",r:"VL",h:"65-75"},
        2: {t:"13-26",r:"L",h:"60-70"},
        3: {t:"18-30",r:"L",h:"55-65"},
        4: {t:"24-37",r:"L",h:"45-55"},
        5: {t:"28-42",r:"L",h:"40-50"},
        6: {t:"29-39",r:"M",h:"60-70"},
        7: {t:"27-35",r:"H",h:"75-85"},
        8: {t:"26-34",r:"H",h:"80-90"},
        9: {t:"25-34",r:"M",h:"70-80"},
        10: {t:"20-32",r:"L",h:"60-70"},
        11: {t:"14-28",r:"VL",h:"55-65"},
        12: {t:"8-20",r:"VL",h:"65-75"}
    };
    const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    if (!months || months.length === 0) return { avg: "N/A", details: [] };
    
    let aT = 0, aH = 0;
    const d = months.map(m => {
        const p = patterns[m];
        aT += parseInt(p.t.split('-')[1]);
        aH += parseInt(p.h.split('-')[1]);
        return {
            month: names[m-1],
            temp: p.t + "°C",
            rainfall: p.r,
            humidity: p.h + "%"
        };
    });
    
    return {
        avg: `~${Math.round(aT/months.length)}°C | ${Math.round(aH/months.length)}% Hum`,
        details: d
    };
};

// --- ENHANCED RECOMMENDATION ALGORITHM ---
const calculateEnhancedSmartScore = (crop, filters, currentSeason, weather) => {
    // Base profit calculation
    const price = parseInt((crop.marketPrice || "0").replace(/[^0-9]/g, ''), 10);
    const profit = (crop.avgYield * price) - crop.investment;
    const profitRatio = crop.investment > 0 ? profit / crop.investment : 0;
    
    // Market demand scoring
    const demandScore = {
        'Very High': 1.4,
        'High': 1.3,
        'Medium': 1.0,
        'Low': 0.7
    }[crop.marketDemand] || 1.0;
    
    // Risk assessment scoring (inverted - lower risk = higher score)
    const riskScore = {
        'Low': 1.3,
        'Medium': 1.0,
        'High': 0.7
    }[crop.riskFactor] || 1.0;
    
    // Water efficiency scoring
    const waterScore = {
        'Very High': 1.4,
        'High': 1.2,
        'Medium': 1.0,
        'Low': 0.8
    }[crop.waterEfficiency] || 1.0;
    
    // Seasonal appropriateness
    const seasonScore = crop.seasons.includes(currentSeason) || 
                       crop.seasons.includes("Annual") || 
                       crop.seasons.includes("Perennial") ? 1.2 : 0.8;
    
    // Crop rotation benefits
    const previousCropFamily = filters.previousCrop ? 
        CROPS.find(c => c.name === filters.previousCrop)?.cropFamily : null;
    const rotationScore = (previousCropFamily && crop.cropFamily === previousCropFamily) ? 0.85 : 1.0;
    
    // Export potential scoring
    const exportScore = {
        'Very High': 1.3,
        'High': 1.2,
        'Medium': 1.0,
        'Low': 0.9
    }[crop.exportPotential] || 1.0;
    
    // Mechanization score (higher mechanization = lower labor cost)
    const mechanizationScore = {
        'High': 1.2,
        'Medium': 1.0,
        'Low': 0.9
    }[crop.mechanization] || 1.0;
    
    // Weather compatibility (if weather data available)
    let weatherScore = 1.0;
    if (weather && crop.plantingMonths) {
        const currentMonth = new Date().getMonth() + 1;
        const isPlantingTime = crop.plantingMonths.includes(currentMonth);
        weatherScore = isPlantingTime ? 1.15 : 0.95;
    }
    
    // Duration preference matching
    const [minDur, maxDur] = filters.growingDuration.split('-').map(Number);
    const durationScore = (crop.growingDuration >= minDur && 
                          crop.growingDuration <= (maxDur || 999)) ? 1.1 : 0.9;
    
    // Storage life consideration (longer storage = better)
    const storageScore = crop.storageLife > 6 ? 1.1 : crop.storageLife > 3 ? 1.0 : 0.9;
    
    // Calculate weighted smart score
    const smartScore = (
        (profitRatio * 0.25) +           // Profitability: 25%
        (demandScore * 0.15) +           // Market demand: 15%
        (riskScore * 0.15) +             // Risk factor: 15%
        (waterScore * 0.10) +            // Water efficiency: 10%
        (seasonScore * 0.10) +           // Seasonal fit: 10%
        (exportScore * 0.08) +           // Export potential: 8%
        (mechanizationScore * 0.05) +    // Mechanization: 5%
        (rotationScore * 0.05) +         // Crop rotation: 5%
        (weatherScore * 0.04) +          // Weather fit: 4%
        (durationScore * 0.02) +         // Duration fit: 2%
        (storageScore * 0.01)            // Storage life: 1%
    ) * 100; // Scale to 0-100
    
    return Math.max(0, Math.round(smartScore * 100) / 100);
};

// --- UI COMPONENTS (SAME AS ORIGINAL) ---
const FilterSelect = ({ name, label, value, onChange, options, placeholder }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select 
            id={name} 
            name={name} 
            value={value} 
            onChange={onChange} 
            className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
            <option value="">{placeholder}</option>
            {options.map(option => (
                <option key={option.value || option} value={option.value || option}>
                    {option.label || option}
                </option>
            ))}
        </select>
    </div>
);

const WaterSourceCheckboxes = ({ selected, onChange }) => {
    const sources = ["Rainwater", "Borewell/Tubewell", "Canal Irrigation", "Pond/Well"];
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Available Water Sources</label>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-2">
                {sources.map(s => (
                    <label key={s} className="flex items-center space-x-2 text-sm text-gray-600">
                        <input 
                            type="checkbox" 
                            name="waterSources" 
                            value={s} 
                            checked={selected.includes(s)} 
                            onChange={onChange} 
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span>{s}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

const WeatherInfoPanel = ({ weather, error, season }) => (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 h-full">
        <h3 className="font-semibold text-blue-800 mb-2">Intelligence Panel</h3>
        <div className="space-y-2">
            <div className="flex items-center text-sm text-blue-700">
                <Calendar className="w-4 h-4 mr-2"/> Current Season: <strong className="ml-1">{season}</strong>
            </div>
            <div className="flex items-center text-sm text-blue-700">
                <Zap className="w-4 h-4 mr-2"/> Enhanced AI with 105+ crops data.
            </div>
            <div className="pt-2 border-t border-blue-200 mt-2">
                {weather ? (
                    <>
                        <div className="flex items-center text-sm font-semibold text-blue-800">
                            <MapPin className="w-4 h-4 mr-2"/>Live Weather: {weather.name}
                        </div>
                        <div className="flex items-center text-sm text-blue-700">
                            <Thermometer className="w-4 h-4 mr-2"/>{Math.round(weather.main.temp)}°C, feels like {Math.round(weather.main.feels_like)}°C
                        </div>
                        <div className="flex items-center text-sm text-blue-700">
                            <Droplets className="w-4 h-4 mr-2"/>Humidity: {weather.main.humidity}%
                        </div>
                        <div className="flex items-center text-sm text-blue-700">
                            <Wind className="w-4 h-4 mr-2"/>Wind: {weather.wind.speed} m/s
                        </div>
                    </>
                ) : (
                    <div className="text-sm text-blue-600">{error || "Select a district for live weather."}</div>
                )}
            </div>
        </div>
    </div>
);

const AIInsightPanel = ({ filters, resultsCount, season }) => (
    <div className="bg-green-50 border-2 border-dashed border-green-200 rounded-lg p-5 mb-8 text-center">
        <p className="text-green-800">
            Based on your selections for a farm in <strong className="font-semibold">{filters.district}</strong> with <strong className="font-semibold">{filters.soilType.toLowerCase()} soil</strong> and a <strong className="font-semibold">{filters.investmentBudget > 50000 ? 'high' : 'medium'} budget</strong>, our Enhanced AI has identified <strong className="font-semibold">{resultsCount} suitable crops</strong> for the current <strong className="font-semibold">{season} season</strong>. The recommendations are ranked by an Advanced Smart Score considering profitability, market demand, risk, sustainability, and export potential.
        </p>
    </div>
);

const CropDetailModal = ({ crop, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white p-5 border-b flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span className="text-4xl">{crop.icon}</span>
                    <div>
                        <h2 className="text-2xl font-bold">{crop.name}</h2>
                        <p className="text-sm text-gray-500">{crop.type} ({crop.cropFamily})</p>
                    </div>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                    <X size={24}/>
                </button>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <Calendar/> Farming Timeline
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li><strong>Planting:</strong> {crop.plantingMonths.map(m => new Date(0, m - 1).toLocaleString('default', { month: 'long' })).join(', ')}</li>
                                <li><strong>Growing Duration:</strong> {crop.growingDuration} months</li>
                                <li><strong>Harvesting:</strong> {crop.harvestMonths.map(m => new Date(0, m - 1).toLocaleString('default', { month: 'long' })).join(', ')}</li>
                                <li><strong>Storage Life:</strong> {crop.storageLife} months</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <TrendingUp/> Market & Economics
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li><strong>Investment:</strong> ₹{crop.investment.toLocaleString()}/acre</li>
                                <li><strong>Expected Yield:</strong> {crop.avgYield} quintals/acre</li>
                                <li><strong>Market Price:</strong> {crop.marketPrice}</li>
                                <li><strong>Export Potential:</strong> {crop.exportPotential}</li>
                                <li><strong>Mechanization Level:</strong> {crop.mechanization}</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <TestTube2/> Varieties & Nutrition
                            </h3>
                            <p className="text-sm text-gray-600 mb-2"><strong>Recommended Varieties:</strong> {crop.varieties.join(', ')}</p>
                            <p className="text-sm text-gray-600"><strong>Nutritional Value:</strong> {crop.nutritionalValue}</p>
                        </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <Sun/> Seasonal Weather Forecast
                            </h3>
                            <div className="text-sm space-y-2">
                                <div>
                                    <strong>Planting Period:</strong>
                                    <div className="grid grid-cols-3 gap-2 mt-1">
                                        {crop.plantingWeather.details.slice(0, 3).map(d => 
                                            <div key={d.month} className="bg-gray-100 p-2 rounded text-center">
                                                <div className="font-bold">{d.month}</div>
                                                <div>{d.temp}</div>
                                                <div className="text-xs">{d.rainfall} Rain</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <strong>Harvesting Period:</strong>
                                    <div className="grid grid-cols-3 gap-2 mt-1">
                                        {crop.harvestWeather.details.slice(0, 3).map(d => 
                                            <div key={d.month} className="bg-gray-100 p-2 rounded text-center">
                                                <div className="font-bold">{d.month}</div>
                                                <div>{d.temp}</div>
                                                <div className="text-xs">{d.rainfall} Rain</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <Bug/> Risk Management
                            </h3>
                            <p className="text-sm text-gray-600 mb-2"><strong>Common Risks:</strong> {crop.commonRisks.join(', ')}</p>
                            <p className="text-sm text-gray-600 mb-2"><strong>Risk Level:</strong> {crop.riskFactor}</p>
                            <p className="text-sm text-gray-600">Regular monitoring and IPM practices recommended. Use resistant varieties and bio-pesticides when possible.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <Sprout/> Soil & Water Requirements
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li><strong>Suitable Soils:</strong> {crop.soil.join(', ')}</li>
                                <li><strong>Soil pH:</strong> {crop.soilPH[0]} - {crop.soilPH[1]}</li>
                                <li><strong>Water Requirement:</strong> {crop.water}</li>
                                <li><strong>Water Efficiency:</strong> {crop.waterEfficiency}</li>
                                <li><strong>Compatible Intercrops:</strong> {crop.interCropping.length > 0 ? crop.interCropping.join(', ') : "Generally grown as monocrop"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Special Notes</h3>
                    <p className="text-sm text-gray-600">{crop.specialNotes}</p>
                </div>
            </div>
        </div>
    </div>
);

const ProfitBar = ({ investment, profit }) => {
    const total = investment + Math.max(0, profit);
    const investmentPercent = total > 0 ? (investment / total) * 100 : 0;
    const isProfit = profit > 0;
    
    return (
        <div>
            <div className="relative w-full bg-gray-200 rounded-full h-2.5">
                <div className={`h-2.5 rounded-full ${isProfit ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `100%` }}></div>
                <div className="absolute top-0 left-0 bg-orange-500 h-2.5 rounded-l-full" style={{ width: `${investmentPercent}%` }}></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
                <span className="font-semibold text-orange-600">Invest: ₹{investment.toLocaleString()}</span>
                <span className={`font-semibold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                    {isProfit ? 'Profit' : 'Loss'}: ₹{Math.abs(profit).toLocaleString()}
                </span>
            </div>
        </div>
    );
};

const CropRecommendationCard = ({ crop, rank, onViewDetails }) => {
    const calculateProfit = (c) => {
        try {
            const price = parseInt((c.marketPrice || "0").replace(/[^0-9]/g, ''), 10);
            return (c.avgYield * price) - c.investment;
        } catch {
            return 0;
        }
    };
    
    const profit = calculateProfit(crop);
    const demandColor = crop.marketDemand === 'Very High' ? 'text-purple-600 bg-purple-100' :
                       crop.marketDemand === 'High' ? 'text-green-600 bg-green-100' : 
                       crop.marketDemand === 'Medium' ? 'text-yellow-600 bg-yellow-100' : 'text-red-600 bg-red-100';
    const riskColor = crop.riskFactor === 'High' ? 'text-red-600 bg-red-100' : 
                     crop.riskFactor === 'Medium' ? 'text-yellow-600 bg-yellow-100' : 'text-green-600 bg-green-100';
    const waterColor = crop.waterEfficiency.includes('Very High') ? 'text-blue-700 bg-blue-100' :
                      crop.waterEfficiency.includes('High') ? 'text-blue-600 bg-blue-100' : 'text-orange-600 bg-orange-100';
    const exportColor = crop.exportPotential === 'Very High' ? 'text-purple-600 bg-purple-100' :
                       crop.exportPotential === 'High' ? 'text-indigo-600 bg-indigo-100' : 'text-gray-600 bg-gray-100';
    
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col relative">
            <div className="p-5 flex-grow">
                <div className="flex items-center gap-4 mb-3">
                    <span className="text-5xl">{crop.icon}</span>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">{crop.name}</h3>
                        <p className="text-sm text-gray-500">{crop.type} • {crop.growingDuration} months</p>
                        <p className="text-xs text-gray-400">Smart Score: {crop.smartScore}/100</p>
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${demandColor}`}>
                        <TrendingUp size={12} className="mr-1"/>Market: {crop.marketDemand}
                    </div>
                    <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${riskColor}`}>
                        <Shield size={12} className="mr-1"/>Risk: {crop.riskFactor}
                    </div>
                    <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${waterColor}`}>
                        <Droplets size={12} className="mr-1"/>{crop.waterEfficiency} Water
                    </div>
                    <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${exportColor}`}>
                        <TrendingUp size={12} className="mr-1"/>Export: {crop.exportPotential}
                    </div>
                </div>
                
                <div className="space-y-3 text-sm mb-4">
                    <ProfitBar investment={crop.investment} profit={profit}/>
                    <div className="text-xs text-gray-600">
                        <div>Expected Yield: {crop.avgYield} quintals/acre</div>
                        <div>Market Price: {crop.marketPrice}</div>
                    </div>
                </div>
                
                <div className="bg-gray-50 rounded-md p-3 mb-4">
                    <h4 className="font-semibold text-sm mb-2 text-gray-700">Weather Forecast</h4>
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                        <strong>Planting:</strong>
                        <span>{crop.plantingWeather.avg}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-600">
                        <strong>Harvest:</strong>
                        <span>{crop.harvestWeather.avg}</span>
                    </div>
                </div>
            </div>
            
            <div className="p-5 pt-0">
                <button 
                    onClick={() => onViewDetails(crop)} 
                    className="w-full text-center bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                    View Details <Eye size={16}/>
                </button>
            </div>
            
            {rank <= 3 && (
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2.5 py-1 rounded-full font-bold z-10 shadow-lg">
                    TOP #{rank}
                </div>
            )}
        </div>
    );
};

// --- MAIN COMPONENT ---
export default function EnhancedCropRecommendations() {
    const initialFilters = { 
        district: "", 
        soilType: "", 
        previousCrop: "", 
        waterSources: [], 
        investmentBudget: "", 
        growingDuration: "" 
    };
    
    const [filters, setFilters] = useState(initialFilters);
    const [weather, setWeather] = useState(null);
    const [weatherError, setWeatherError] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedCrop, setSelectedCrop] = useState(null);
    const [season] = useState(getCurrentSeason());
    
    const totalFilters = Object.keys(initialFilters).length;
    const filledFilters = useMemo(() => 
        Object.values(filters).filter(v => 
            Array.isArray(v) ? v.length > 0 : v !== ""
        ).length, [filters]
    );
    const isFormComplete = filledFilters === totalFilters;

    // Weather API call
    useEffect(() => {
        if (!filters.district) {
            setWeather(null);
            setWeatherError("");
            return;
        }
        
        const fetchWeather = async () => {
            try {
                const apiKey = "5e04c9e9f749a242973926ba146c8772";
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${filters.district},IN&units=metric&appid=${apiKey}`;
                const response = await axios.get(url);
                setWeather(response.data);
                setWeatherError("");
            } catch (err) {
                setWeather(null);
                setWeatherError("Could not fetch live weather data.");
            }
        };
        
        fetchWeather();
    }, [filters.district]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleWaterSourceChange = (e) => {
        const { value, checked } = e.target;
        setFilters(prev => ({
            ...prev,
            waterSources: checked 
                ? [...prev.waterSources, value]
                : prev.waterSources.filter(s => s !== value)
        }));
    };

    const handleGetRecommendations = () => {
        // Enhanced filtering logic
        let filtered = CROPS.filter(crop => 
            DISTRICT_CROP_SUITABILITY[filters.district]?.includes(crop.id)
        );
        
        // Season filtering
        filtered = filtered.filter(crop => 
            crop.seasons.includes(season) || 
            ["Annual", "Perennial"].includes(crop.seasons[0])
        );
        
        // Soil type filtering
        filtered = filtered.filter(crop => crop.soil.includes(filters.soilType));
        
        // Duration filtering
        const [minDur, maxDur] = filters.growingDuration.split('-').map(Number);
        filtered = filtered.filter(c => 
            c.growingDuration >= minDur && c.growingDuration <= (maxDur || 999)
        );
        
        // Investment filtering
        filtered = filtered.filter(c => c.investment <= Number(filters.investmentBudget));
        
        // Water source compatibility
        const waterLevels = new Set(filters.waterSources.map(s => ({
            "Rainwater": "low",
            "Pond/Well": "low", 
            "Borewell/Tubewell": "medium",
            "Canal Irrigation": "high"
        }[s])));
        
        const userHas = {
            high: waterLevels.has('high'),
            medium: waterLevels.has('medium'),
            low: waterLevels.has('low')
        };
        
        filtered = filtered.filter(c => 
            (c.water === 'high' && userHas.high) ||
            (c.water === 'medium' && (userHas.high || userHas.medium)) ||
            (c.water === 'low' && (userHas.high || userHas.medium || userHas.low))
        );

        // Enhanced processing with smart scoring
        const processed = filtered.map(crop => ({
            ...crop,
            plantingWeather: getSeasonalWeatherPrediction(crop.plantingMonths),
            harvestWeather: getSeasonalWeatherPrediction(crop.harvestMonths),
            smartScore: calculateEnhancedSmartScore(crop, filters, season, weather)
        }));

        // Sort by enhanced smart score
        processed.sort((a, b) => b.smartScore - a.smartScore);
        
        setRecommendations(processed);
        setHasSearched(true);
    };

    const handleClearFilters = () => {
        setFilters(initialFilters);
        setRecommendations([]);
        setHasSearched(false);
        setWeather(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {selectedCrop && <CropDetailModal crop={selectedCrop} onClose={() => setSelectedCrop(null)} />}
            
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <header className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
                        <Leaf className="text-green-600 w-12 h-12"/> Enhanced Punjab Crop AI
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
                        Advanced AI-powered crop advisor with 105+ crops data across 23 districts. Get personalized recommendations based on comprehensive analysis.
                    </p>
                </header>
                
                <main>
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FilterSelect 
                                    name="district" 
                                    label="District" 
                                    value={filters.district} 
                                    onChange={handleFilterChange} 
                                    options={DISTRICTS} 
                                    placeholder="Select District"
                                />
                                
                                <FilterSelect 
                                    name="soilType" 
                                    label="Soil Type" 
                                    value={filters.soilType} 
                                    onChange={handleFilterChange} 
                                    options={SOIL_TYPES} 
                                    placeholder="Select Soil Type"
                                />
                                
                                <FilterSelect 
                                    name="previousCrop" 
                                    label="Previous Crop" 
                                    value={filters.previousCrop} 
                                    onChange={handleFilterChange} 
                                    options={CROPS.map(c => c.name)} 
                                    placeholder="None / Fallow Land"
                                />
                                
                                <FilterSelect 
                                    name="growingDuration" 
                                    label="Preferred Growing Duration" 
                                    value={filters.growingDuration} 
                                    onChange={handleFilterChange} 
                                    options={[
                                        {label: "Short (1-3 months)", value: "1-3"},
                                        {label: "Medium (4-6 months)", value: "4-6"},
                                        {label: "Long (6+ months)", value: "7-99"}
                                    ]} 
                                    placeholder="Select Duration"
                                />
                                
                                <div className="sm:col-span-2">
                                    <FilterSelect 
                                        name="investmentBudget" 
                                        label="Investment Budget (per acre)" 
                                        value={filters.investmentBudget} 
                                        onChange={handleFilterChange} 
                                        options={[
                                            {label: "Low (Up to ₹25,000)", value: 25000},
                                            {label: "Medium (Up to ₹50,000)", value: 50000},
                                            {label: "High (Up to ₹75,000)", value: 75000},
                                            {label: "Very High (Above ₹75,000)", value: 200000}
                                        ]} 
                                        placeholder="Select Budget Range"
                                    />
                                </div>
                                
                                <div className="sm:col-span-2">
                                    <WaterSourceCheckboxes 
                                        selected={filters.waterSources} 
                                        onChange={handleWaterSourceChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="md:col-span-2 lg:col-span-1">
                                <WeatherInfoPanel 
                                    weather={weather} 
                                    error={weatherError} 
                                    season={season}
                                />
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="w-full md:w-1/2">
                                    <p className="text-sm font-medium text-gray-700 mb-1">Recommendation Progress</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div 
                                            className="bg-green-600 h-2.5 rounded-full transition-all duration-300" 
                                            style={{ width: `${(filledFilters/totalFilters)*100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {isFormComplete ? 'Ready for Enhanced AI Analysis!' : `${filledFilters} of ${totalFilters} parameters selected.`}
                                    </p>
                                </div>
                                
                                <div className="flex-grow flex items-center gap-3 w-full md:w-auto">
                                    <button 
                                        onClick={handleGetRecommendations} 
                                        disabled={!isFormComplete} 
                                        className="w-full text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center gap-2"
                                    >
                                        <ChevronsRight size={20}/> Get Enhanced AI Recommendations
                                    </button>
                                    
                                    <button 
                                        onClick={handleClearFilters} 
                                        className="p-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                    >
                                        <RefreshCcw size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                        {hasSearched && <AIInsightPanel filters={filters} resultsCount={recommendations.length} season={season} />}
                        
                        <div className="flex items-center gap-3 mb-6">
                            <BarChart className="w-8 h-8 text-green-600"/>
                            <h2 className="text-3xl font-bold text-gray-800">Enhanced AI Results</h2>
                        </div>
                        
                        {!hasSearched ? (
                            <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md border-2 border-dashed">
                                <Info className="w-12 h-12 mx-auto text-gray-400"/>
                                <h3 className="mt-4 text-xl font-semibold text-gray-700">Your Enhanced Recommendations Await</h3>
                                <p className="mt-2 text-gray-500">Complete all parameters above for comprehensive AI-powered crop analysis with 105+ crop database.</p>
                            </div>
                        ) : recommendations.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {recommendations.map((crop, index) => 
                                    <CropRecommendationCard 
                                        key={crop.id} 
                                        crop={crop} 
                                        rank={index + 1} 
                                        onViewDetails={setSelectedCrop} 
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md border-2 border-dashed">
                                <AlertTriangle className="w-12 h-12 mx-auto text-yellow-500"/>
                                <h3 className="mt-4 text-xl font-semibold text-gray-700">No Suitable Crops Found</h3>
                                <p className="mt-2 text-gray-500">Based on your specific criteria, no ideal crops were identified. Try adjusting your parameters for broader recommendations.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}