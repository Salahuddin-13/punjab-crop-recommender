// src/pages/CropRecommendations.jsx
import React, { useState, useMemo } from "react";
import { DISTRICTS, CROPS } from "../data/crops";
import RecommendationsPanel from "../components/RecommendationsPanel";
import CropRecommendationCard from "../components/CropRecommendationCard";

// Map district to crop suitability (move to separate file if large)
const DISTRICT_CROP_SUITABILITY = {
  Ranchi: ["paddy", "maize", "wheat", "potato", "tomato", "turmeric", "ginger", "arhar", "finger_millet"],
  Bokaro: ["paddy", "wheat", "maize", "potato", "mustard", "gram", "sunflower"],
  Dhanbad: ["paddy", "wheat", "maize", "gram", "mustard", "onion", "groundnut"],
  "East Singhbhum": ["paddy", "maize", "cotton", "groundnut", "sesame", "jute", "chilli"],
  "West Singhbhum": ["paddy", "maize", "finger_millet", "niger", "turmeric", "pearl_millet"],
  Hazaribagh: ["wheat", "gram", "mustard", "potato", "cabbage", "cauliflower", "groundnut"],
  Giridih: ["wheat", "gram", "maize", "mustard", "groundnut", "sesame", "black_gram"],
  Koderma: ["wheat", "gram", "mustard", "green_gram", "black_gram"],
  Chatra: ["paddy", "wheat", "maize", "gram", "arhar", "potato"],
  Palamu: ["paddy", "wheat", "maize", "arhar", "mustard", "gram", "potato"],
  Latehar: ["paddy", "maize", "arhar", "mustard", "finger_millet", "turmeric"],
  Lohardaga: ["paddy", "maize", "finger_millet", "turmeric", "ginger", "arhar"],
  Gumla: ["paddy", "maize", "finger_millet", "potato", "tomato", "ginger"],
  Simdega: ["paddy", "maize", "finger_millet", "turmeric", "arhar", "niger"],
  Khunti: ["paddy", "maize", "potato", "tomato", "turmeric", "vegetables"],
  "Saraikela-Kharsawan": ["paddy", "maize", "groundnut", "sesame", "vegetables"],
  Deoghar: ["paddy", "wheat", "maize", "mustard", "gram", "vegetables"],
  Dumka: ["paddy", "maize", "finger_millet", "niger", "black_gram", "vegetables"],
  Jamtara: ["paddy", "wheat", "maize", "gram", "mustard"],
  Godda: ["paddy", "wheat", "maize", "mustard", "jute", "vegetables"],
  Pakur: ["paddy", "maize", "finger_millet", "vegetables", "spices"],
  Sahebganj: ["paddy", "wheat", "maize", "mustard", "jute", "sugarcane"],
};

export default function CropRecommendations() {
  // Filter state
  const [filters, setFilters] = useState({
    district: { label: "District", value: "", options: DISTRICTS },
    soilType: { label: "Soil Type", value: "", options: Array.from(new Set(CROPS.flatMap(c => c.soil))) },
    waterSource: { label: "Water Source", value: "", options: ["low", "medium", "high"] },
    duration: { label: "Duration", value: "", options: ["2-3 months", "3-4 months", "4-6 months", "6+ months"] },
    previousCrop: { label: "Previous Crop", value: "", options: CROPS.map(c => c.name) },
    budget: { label: "Budget", value: "", options: [] } // populate if you have ranges
  });

  // Update filter handler
  const onFilterChange = (key, value) => {
    if (key === "reset") {
      // Reset all
      setFilters(Object.fromEntries(
        Object.entries(filters).map(([k,f]) => [k, { ...f, value: "" }])
      ));
    } else {
      setFilters(prev => ({
        ...prev,
        [key]: { ...prev[key], value }
      }));
    }
  };

  // Apply filters
  const filteredCrops = useMemo(() => {
    return CROPS.filter(crop => {
      return Object.entries(filters).every(([key, { value }]) => {
        if (!value) return true;
        if (key === "district") {
          const suitable = DISTRICT_CROP_SUITABILITY[value] || [];
          return suitable.includes(crop.id);
        }
        if (key === "soilType") return crop.soil.includes(value);
        if (key === "waterSource") return crop.water === value;
        if (key === "duration") {
          const [min, max] = value.split("-").map(n => Number(n));
          return crop.growingDuration >= min && crop.growingDuration <= max;
        }
        if (key === "previousCrop") return crop.name !== value;
        // budget filter logic...
        return true;
      });
    });
  }, [filters]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-6">
      {/* Filter Panel */}
      <div className="lg:w-1/4">
        <RecommendationsPanel
          filters={filters}
          onFilterChange={onFilterChange}
          totalCrops={CROPS.length}
          visibleCrops={filteredCrops.length}
        />
      </div>

      {/* Recommendation Cards */}
      <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCrops.map(crop => (
          <CropRecommendationCard key={crop.id} crop={crop} />
        ))}
      </div>
    </div>
  );
}
