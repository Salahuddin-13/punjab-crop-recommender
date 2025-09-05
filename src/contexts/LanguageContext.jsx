import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: "Home",
    crops: "Crops", 
    weather: "Weather",
    calendar: "Calendar",
    resources: "Resources",
    profile: "Profile",
    
    // Home page
    welcome: "Welcome to Jharkhand's Smart Farming Portal!",
    heroSubtext: "Get expert crop advice powered by AI, real-time weather data, and local agricultural insights.",
    getCropRecommendations: "Get Crop Recommendations",
    checkWeather: "Check Weather",
    
    // Crop page
    cropRecommendations: "Smart Crop Recommendations for Jharkhand",
    district: "District",
    selectDistrict: "Select District",
    soilType: "Soil Type",
    selectSoilType: "Select Soil Type", 
    farmSize: "Farm Size (acres)",
    enterFarmSize: "Enter farm size",
    previousCrop: "Previous Crop",
    selectPreviousCrop: "Select Previous Crop",
    harvestingTime: "Preferred Growing Duration",
    selectDuration: "Select Duration",
    budget: "Investment Budget",
    selectBudget: "Select Budget Range",
    waterSources: "Available Water Sources",
    currentWeather: "Current Weather & Season Information",
    selectDistrictWeather: "Select district to see current weather",
    seasonRecommendations: "Season & Recommendations",
    currentSeason: "Current Season",
    suitablePlanting: "Showing crops suitable for current planting time",
    autoUpdate: "Recommendations update automatically with your inputs",
    smartRecommendations: "Smart Crop Recommendations",
    cropsFound: "crops found",
    sortedBy: "Sorted by potential returns & suitability",
    selectConditions: "Select your district and farming conditions to get personalized crop recommendations",
    aiSystem: "Our AI system considers local climate, soil conditions, and market factors",
    
    // Water sources
    rainwater: "Rainwater",
    borewell: "Borewell/Tubewell",
    canal: "Canal Irrigation",
    pond: "Pond/Well",
    
    // Budget ranges
    below15k: "Below ₹15,000/acre",
    range15to30: "₹15,000 - ₹30,000/acre",
    range30to50: "₹30,000 - ₹50,000/acre",
    above50k: "Above ₹50,000/acre",
    
    // Duration options
    duration2to3: "2-3 months",
    duration3to4: "3-4 months",
    duration4to6: "4-6 months",
    duration6plus: "6+ months",
    
    // Seasons
    kharif: "Kharif",
    rabi: "Rabi",
    zaid: "Zaid",
    
    // Weather terms
    temperature: "Temperature",
    humidity: "Humidity",
    wind: "Wind",
    currentWeatherTitle: "Current Weather"
  },
  
  hi: {
    // Navigation  
    home: "होम",
    crops: "फसलें",
    weather: "मौसम", 
    calendar: "कैलेंडर",
    resources: "संसाधन",
    profile: "प्रोफ़ाइल",
    
    // Home page
    welcome: "झारखंड के स्मार्ट फार्मिंग पोर्टल में आपका स्वागत है!",
    heroSubtext: "AI और स्थानीय मौसम रिपोर्ट द्वारा संचालित विशेषज्ञ फसल सलाह प्राप्त करें।",
    getCropRecommendations: "फसल सिफारिशें प्राप्त करें",
    checkWeather: "मौसम जांचें",
    
    // Crop page
    cropRecommendations: "झारखंड के लिए स्मार्ट फसल सिफारिशें",
    district: "जिला",
    selectDistrict: "जिला चुनें",
    soilType: "मिट्टी का प्रकार",
    selectSoilType: "मिट्टी का प्रकार चुनें",
    farmSize: "खेत का आकार (एकड़)",
    enterFarmSize: "खेत का आकार दर्ज करें",
    previousCrop: "पिछली फसल",
    selectPreviousCrop: "पिछली फसल चुनें",
    harvestingTime: "पसंदीदा बढ़ने की अवधि",
    selectDuration: "अवधि चुनें",
    budget: "निवेश बजट",
    selectBudget: "बजट रेंज चुनें",
    waterSources: "उपलब्ध जल स्रोत",
    currentWeather: "वर्तमान मौसम और सीजन जानकारी",
    selectDistrictWeather: "मौसम देखने के लिए जिला चुनें",
    seasonRecommendations: "सीजन और सिफारिशें",
    currentSeason: "वर्तमान सीजन",
    suitablePlanting: "वर्तमान रोपण समय के लिए उपयुक्त फसलें दिखा रहे हैं",
    autoUpdate: "आपके इनपुट के साथ सिफारिशें स्वचालित रूप से अपडेट होती हैं",
    smartRecommendations: "स्मार्ट फसल सिफारिशें",
    cropsFound: "फसलें मिलीं",
    sortedBy: "संभावित रिटर्न और उपयुक्तता के आधार पर क्रमबद्ध",
    selectConditions: "व्यक्तिगत फसल सिफारिशें पाने के लिए अपना जिला और खेती की स्थितियां चुनें",
    aiSystem: "हमारा AI सिस्टम स्थानीय जलवायु, मिट्टी की स्थिति और बाजार कारकों पर विचार करता है",
    
    // Water sources
    rainwater: "बारिश का पानी",
    borewell: "बोरवेल/ट्यूबवेल",
    canal: "नहर सिंचाई",
    pond: "तालाब/कुआं",
    
    // Budget ranges
    below15k: "₹15,000/एकड़ से कम",
    range15to30: "₹15,000 - ₹30,000/एकड़",
    range30to50: "₹30,000 - ₹50,000/एकड़",
    above50k: "₹50,000/एकड़ से अधिक",
    
    // Duration options
    duration2to3: "2-3 महीने",
    duration3to4: "3-4 महीने",
    duration4to6: "4-6 महीने",
    duration6plus: "6+ महीने",
    
    // Seasons
    kharif: "खरीफ",
    rabi: "रबी",
    zaid: "जायद",
    
    // Weather terms
    temperature: "तापमान",
    humidity: "आर्द्रता",
    wind: "हवा",
    currentWeatherTitle: "वर्तमान मौसम"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
