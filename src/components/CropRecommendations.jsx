import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { DISTRICTS, CROPS } from "../data/crops";
import CropRecommendationCard from "./CropRecommendationCard";
import { useLanguage } from "../contexts/LanguageContext";

// Move all constants outside the component to prevent re-creation
const DISTRICT_CROP_SUITABILITY = {
  "Ranchi": ["paddy", "maize", "wheat", "potato", "tomato", "turmeric", "ginger", "arhar", "finger_millet"],
  "Bokaro": ["paddy", "wheat", "maize", "potato", "mustard", "gram", "sunflower"],
  "Dhanbad": ["paddy", "wheat", "maize", "gram", "mustard", "onion", "groundnut"],
  "East Singhbhum": ["paddy", "maize", "cotton", "groundnut", "sesame", "jute", "chilli"],
  "West Singhbhum": ["paddy", "maize", "finger_millet", "niger", "turmeric", "pearl_millet"],
  "Hazaribagh": ["wheat", "gram", "mustard", "potato", "cabbage", "cauliflower", "groundnut"],
  "Giridih": ["wheat", "gram", "maize", "mustard", "groundnut", "sesame", "black_gram"],
  "Koderma": ["wheat", "gram", "mustard", "green_gram", "black_gram"],
  "Chatra": ["paddy", "wheat", "maize", "gram", "arhar", "potato"],
  "Palamu": ["paddy", "wheat", "maize", "arhar", "mustard", "gram", "potato"],
  "Latehar": ["paddy", "maize", "arhar", "mustard", "finger_millet", "turmeric"],
  "Lohardaga": ["paddy", "maize", "finger_millet", "turmeric", "ginger", "arhar"],
  "Gumla": ["paddy", "maize", "finger_millet", "potato", "tomato", "ginger"],
  "Simdega": ["paddy", "maize", "finger_millet", "turmeric", "arhar", "niger"],
  "Khunti": ["paddy", "maize", "potato", "tomato", "turmeric", "vegetables"],
  "Saraikela-Kharsawan": ["paddy", "maize", "groundnut", "sesame", "vegetables"],
  "Deoghar": ["paddy", "wheat", "maize", "mustard", "gram", "vegetables"],
  "Dumka": ["paddy", "maize", "finger_millet", "niger", "black_gram", "vegetables"],
  "Jamtara": ["paddy", "wheat", "maize", "gram", "mustard"],
  "Godda": ["paddy", "wheat", "maize", "mustard", "jute", "vegetables"],
  "Pakur": ["paddy", "maize", "finger_millet", "vegetables", "spices"],
  "Sahebganj": ["paddy", "wheat", "maize", "mustard", "jute", "sugarcane"]
};

// Constants for options
const WATER_OPTIONS_DATA = [
  { key: "Rainwater", en: "Rainwater", hi: "बारिश का पानी" },
  { key: "Borewell/Tubewell", en: "Borewell/Tubewell", hi: "बोरवेल/ट्यूबवेल" },
  { key: "Canal Irrigation", en: "Canal Irrigation", hi: "नहर सिंचाई" },
  { key: "Pond/Well", en: "Pond/Well", hi: "तालाब/कुआं" },
];

const BUDGET_RANGES_DATA = [
  { key: "below15k", en: "Below ₹15,000/acre", hi: "₹15,000/एकड़ से कम", max: 15000 },
  { key: "range15to30", en: "₹15,000 - ₹30,000/acre", hi: "₹15,000 - ₹30,000/एकड़", max: 30000 },
  { key: "range30to50", en: "₹30,000 - ₹50,000/acre", hi: "₹30,000 - ₹50,000/एकड़", max: 50000 },
  { key: "above50k", en: "Above ₹50,000/acre", hi: "₹50,000/एकड़ से अधिक", max: Infinity },
];

const HARVESTING_OPTIONS_DATA = [
  { key: "duration2to3", en: "2-3 months", hi: "2-3 महीने" },
  { key: "duration3to4", en: "3-4 months", hi: "3-4 महीने" },
  { key: "duration4to6", en: "4-6 months", hi: "4-6 महीने" },
  { key: "duration6plus", en: "6+ months", hi: "6+ महीने" },
];

export default function CropRecommendations() {
  const { language } = useLanguage();
  const [district, setDistrict] = useState("");
  const [soilType, setSoilType] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [previousCrop, setPreviousCrop] = useState("");
  const [waterSource, setWaterSource] = useState([]);
  const [budget, setBudget] = useState("");
  const [harvestingTime, setHarvestingTime] = useState("");
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  // Memoize options to prevent re-creation
  const waterOptions = useMemo(() => 
    WATER_OPTIONS_DATA.map(option => ({
      key: option.key,
      label: option[language] || option.en
    })), [language]
  );

  const budgetRanges = useMemo(() => 
    BUDGET_RANGES_DATA.map(option => ({
      key: option.key,
      label: option[language] || option.en,
      max: option.max
    })), [language]
  );

  const harvestingOptions = useMemo(() => 
    HARVESTING_OPTIONS_DATA.map(option => ({
      key: option.key,
      label: option[language] || option.en
    })), [language]
  );

  function getCurrentSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 6 && month <= 9) return "kharif";
    if (month >= 10 && month <= 3) return "rabi";
    return "zaid";
  }

  function getSeasonalWeatherPrediction(harvestMonths) {
    const seasonalPatterns = {
      1: { temp: "15-25°C", rainfall: "Low", humidity: "60-70%", conditions: "Cool & Dry" },
      2: { temp: "18-28°C", rainfall: "Low", humidity: "55-65%", conditions: "Pleasant" },
      3: { temp: "22-32°C", rainfall: "Low", humidity: "50-60%", conditions: "Warm & Dry" },
      4: { temp: "25-35°C", rainfall: "Low", humidity: "45-55%", conditions: "Hot" },
      5: { temp: "28-38°C", rainfall: "Medium", humidity: "60-70%", conditions: "Hot & Humid" },
      6: { temp: "26-32°C", rainfall: "High", humidity: "80-90%", conditions: "Monsoon" },
      7: { temp: "24-30°C", rainfall: "Very High", humidity: "85-95%", conditions: "Heavy Rain" },
      8: { temp: "24-30°C", rainfall: "High", humidity: "85-90%", conditions: "Rainy" },
      9: { temp: "25-32°C", rainfall: "Medium", humidity: "75-85%", conditions: "Post-Monsoon" },
      10: { temp: "22-30°C", rainfall: "Low", humidity: "65-75%", conditions: "Pleasant" },
      11: { temp: "18-28°C", rainfall: "Very Low", humidity: "60-70%", conditions: "Cool" },
      12: { temp: "12-22°C", rainfall: "Very Low", humidity: "65-75%", conditions: "Winter" }
    };

    return harvestMonths.map(month => ({
      month: new Date(0, month - 1).toLocaleString('default', { month: 'long' }),
      ...seasonalPatterns[month]
    }));
  }

  // Fetch weather only when district changes
  useEffect(() => {
    if (!district) {
      setWeather(null);
      setWeatherError("");
      return;
    }

    let isCancelled = false;
    
    async function fetchWeather() {
      try {
        const apiKey = "5e04c9e9f749a242973926ba146c8772";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${district},IN&units=metric&appid=${apiKey}`;
        const response = await axios.get(url);
        
        if (!isCancelled) {
          setWeather(response.data);
          setWeatherError("");
        }
      } catch (err) {
        if (!isCancelled) {
          setWeather(null);
          setWeatherError("Could not fetch weather for selected district.");
        }
      }
    }
    
    fetchWeather();
    
    return () => {
      isCancelled = true;
    };
  }, [district]);

  // Memoized recommendations function
  const getRecommendations = useCallback(() => {
    if (!district) {
      setRecommendations([]);
      return;
    }

    let filtered = [...CROPS];
    const currentSeason = getCurrentSeason();

    // 1. Filter by district suitability
    if (DISTRICT_CROP_SUITABILITY[district]) {
      const suitableCropIds = DISTRICT_CROP_SUITABILITY[district];
      filtered = filtered.filter((crop) => suitableCropIds.includes(crop.id));
    }

    // 2. Filter by soil type
    if (soilType) {
      filtered = filtered.filter((crop) => crop.soil.includes(soilType));
    }

    // 3. Filter by budget
    if (budget) {
      const selectedBudget = budgetRanges.find((b) => b.label === budget);
      if (selectedBudget) {
        filtered = filtered.filter((crop) => (crop.investment || 0) <= selectedBudget.max);
      }
    }

    // 4. Filter by water source
    if (waterSource.length > 0) {
      const hasRainwater = waterSource.includes("Rainwater");
      const hasBorewell = waterSource.includes("Borewell/Tubewell");
      const hasCanal = waterSource.includes("Canal Irrigation");
      const hasPond = waterSource.includes("Pond/Well");

      filtered = filtered.filter((crop) => {
        if (crop.water === "low") return hasRainwater || hasPond || hasBorewell;
        if (crop.water === "medium") return hasRainwater || hasBorewell || hasPond || hasCanal;
        if (crop.water === "high") return hasBorewell || hasCanal;
        return true;
      });
    }

    // 5. Filter by harvesting time
    if (harvestingTime) {
      const durationMap = {
        "2-3 months": [2, 3],
        "3-4 months": [3, 4],
        "4-6 months": [4, 5, 6],
        "6+ months": [6, 12, 24, 36, 60]
      };
      
      const key = harvestingOptions.find(opt => opt.label === harvestingTime)?.key;
      const englishLabel = HARVESTING_OPTIONS_DATA.find(opt => opt.key === key)?.en;
      const preferredDurations = durationMap[englishLabel] || [];
      
      filtered = filtered.filter((crop) => preferredDurations.includes(crop.growingDuration));
    }

    // 6. Filter by previous crop
    if (previousCrop) {
      filtered = filtered.filter((crop) => crop.name !== previousCrop);
    }

    // Seasonal filtering
    const currentMonth = new Date().getMonth() + 1;
    filtered = filtered.filter((crop) => {
      if (crop.seasons.includes("perennial") || crop.seasons.includes("annual")) return true;
      return crop.plantingMonths.includes(currentMonth) || 
             crop.plantingMonths.includes(currentMonth + 1) ||
             crop.seasons.includes(currentSeason);
    });

    // Weather-based filtering
    if (weather) {
      const temp = weather.main.temp;
      const humidity = weather.main.humidity;
      
      filtered = filtered.filter((crop) => {
        if (humidity > 80 && crop.water === "high") return true;
        if (humidity < 50 && crop.water === "low") return true;
        if (temp > 35 && ["sesame", "pearl_millet", "cotton", "sugarcane"].includes(crop.id)) return true;
        if (temp < 20 && ["wheat", "gram", "mustard", "potato", "cabbage"].includes(crop.id)) return true;
        return true;
      });
    }

    // Sort by potential return
    filtered.sort((a, b) => {
      const aReturn = (a.avgYield || 0) * (a.investment || 1);
      const bReturn = (b.avgYield || 0) * (b.investment || 1);
      return bReturn - aReturn;
    });

    // Add harvest weather predictions
    filtered = filtered.map(crop => ({
      ...crop,
      harvestWeatherPrediction: getSeasonalWeatherPrediction(crop.harvestMonths)
    }));

    setRecommendations(filtered);
  }, [district, soilType, waterSource, previousCrop, harvestingTime, budget, weather, budgetRanges, harvestingOptions]);

  // Trigger recommendations only when required inputs are provided
  useEffect(() => {
    const hasBasicRequirements = district && soilType && waterSource.length > 0;
    const hasAdditionalInfo = budget || harvestingTime || previousCrop;
    
    if (hasBasicRequirements && hasAdditionalInfo) {
      getRecommendations();
    } else {
      setRecommendations([]);
    }
  }, [getRecommendations]);

  function toggleWaterSource(source) {
    setWaterSource(prev => 
      prev.includes(source) 
        ? prev.filter((w) => w !== source)
        : [...prev, source]
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        🌱 Smart Crop Recommendations for Jharkhand
      </h1>

      <div className="bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* District */}
        <div>
          <label className="block font-semibold mb-1">District</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            {DISTRICTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Soil Type */}
        <div>
          <label className="block font-semibold mb-1">Soil Type</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          >
            <option value="">Select Soil Type</option>
            {[...new Set(CROPS.flatMap((c) => c.soil))].map((soil) => (
              <option key={soil} value={soil}>{soil}</option>
            ))}
          </select>
        </div>

        {/* Farm Size */}
        <div>
          <label className="block font-semibold mb-1">Farm Size (acres)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter farm size"
            value={farmSize}
            onChange={(e) => setFarmSize(e.target.value)}
          />
        </div>

        {/* Previous Crop */}
        <div>
          <label className="block font-semibold mb-1">Previous Crop</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={previousCrop}
            onChange={(e) => setPreviousCrop(e.target.value)}
          >
            <option value="">Select Previous Crop</option>
            {[...new Set(CROPS.map((c) => c.name))].map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        {/* Harvesting Time */}
        <div>
          <label className="block font-semibold mb-1">Preferred Growing Duration</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={harvestingTime}
            onChange={(e) => setHarvestingTime(e.target.value)}
          >
            <option value="">Select Duration</option>
            {harvestingOptions.map((time) => (
              <option key={time.key} value={time.label}>{time.label}</option>
            ))}
          </select>
        </div>

        {/* Budget Range */}
        <div>
          <label className="block font-semibold mb-1">Investment Budget</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select Budget Range</option>
            {budgetRanges.map((b) => (
              <option key={b.key} value={b.label}>{b.label}</option>
            ))}
          </select>
        </div>

        {/* Water Source */}
        <div className="col-span-1 md:col-span-3">
          <label className="block font-semibold mb-1">Available Water Sources</label>
          <div className="flex flex-wrap gap-4">
            {waterOptions.map((ws) => (
              <label key={ws.key} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={waterSource.includes(ws.key)}
                  onChange={() => toggleWaterSource(ws.key)}
                  className="form-checkbox rounded"
                />
                {ws.label}
              </label>
            ))}
          </div>
        </div>

        {/* Weather & Season Info */}
        <div className="col-span-1 md:col-span-3">
          <label className="block font-semibold mb-1">Current Weather & Season Information</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weather ? (
              <div className="bg-blue-50 rounded p-3 border border-blue-200">
                <h4 className="font-semibold text-blue-800">Current Weather - {weather.name}</h4>
                <p className="text-sm">🌤️ {weather.weather[0].description}</p>
                <p className="text-sm">🌡️ Temperature: {Math.round(weather.main.temp)}°C</p>
                <p className="text-sm">💧 Humidity: {weather.main.humidity}%</p>
                <p className="text-sm">💨 Wind: {weather.wind.speed} m/s</p>
              </div>
            ) : (
              <div className="text-gray-500">
                {weatherError || "Select district to see current weather"}
              </div>
            )}
            <div className="bg-green-50 rounded p-3 border border-green-200">
              <h4 className="font-semibold text-green-800">Season & Recommendations</h4>
              <p className="text-sm">📅 Current Season: <span className="font-medium">{getCurrentSeason().charAt(0).toUpperCase() + getCurrentSeason().slice(1)}</span></p>
              <p className="text-sm">🎯 Showing crops suitable for current planting time</p>
              <p className="text-sm">🔄 Recommendations update automatically with your inputs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">
            🎯 Smart Crop Recommendations ({recommendations.length} crops found)
          </h2>
          {recommendations.length > 0 && (
            <div className="text-sm text-gray-600">
              Sorted by potential returns & suitability
            </div>
          )}
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.length === 0 ? (
            <div className="col-span-2 text-center py-8">
              <p className="text-gray-600 mb-2">
                🔍 Select district, soil type, water sources, and farming conditions to get personalized crop recommendations
              </p>
              <p className="text-sm text-gray-500">
                Our AI system considers local climate, soil conditions, and market factors
              </p>
            </div>
          ) : (
            recommendations.map((crop, index) => (
              <div key={crop.id} className="relative">
                {index < 3 && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-10">
                    Top {index + 1}
                  </div>
                )}
                <CropRecommendationCard crop={crop} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
