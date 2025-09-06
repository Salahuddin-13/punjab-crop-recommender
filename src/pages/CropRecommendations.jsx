import React, { useState, useMemo } from "react";
import { DISTRICTS, CROPS, DISTRICT_CROP_SUITABILITY } from "../data/crops";

export default function CropRecommendations() {
  const [district, setDistrict] = useState("");
  const [soilType, setSoilType] = useState("");
  const [waterSource, setWaterSource] = useState("");
  const [season, setSeason] = useState("");
  const [budget, setBudget] = useState("");

  // Get unique soil types from crops
  const soilTypes = useMemo(() => 
    Array.from(new Set(CROPS.flatMap(crop => crop.soil))), []
  );

  // Filter recommendations
  const recommendations = useMemo(() => {
    let filtered = [...CROPS];

    // Filter by district suitability
    if (district && DISTRICT_CROP_SUITABILITY[district]) {
      const suitableCropIds = DISTRICT_CROP_SUITABILITY[district];
      filtered = filtered.filter(crop => suitableCropIds.includes(crop.id));
    }

    // Filter by soil type
    if (soilType) {
      filtered = filtered.filter(crop => crop.soil.includes(soilType));
    }

    // Filter by water source
    if (waterSource) {
      const waterMap = {
        "canal": ["high", "medium"],
        "tubewell": ["high", "medium", "low"],
        "rainwater": ["low"]
      };
      if (waterMap[waterSource]) {
        filtered = filtered.filter(crop => waterMap[waterSource].includes(crop.water));
      }
    }

    // Filter by season
    if (season) {
      filtered = filtered.filter(crop => 
        crop.seasons.includes(season) || 
        crop.seasons.includes("annual") || 
        crop.seasons.includes("perennial")
      );
    }

    // Filter by budget
    if (budget) {
      const budgetRanges = {
        "low": 25000,
        "medium": 50000,
        "high": Infinity
      };
      filtered = filtered.filter(crop => crop.investment <= budgetRanges[budget]);
    }

    // Sort by potential returns
    return filtered.sort((a, b) => (b.avgYield * 2000) - (a.avgYield * 2000));
  }, [district, soilType, waterSource, season, budget]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🌾 Smart Crop Recommendations for Punjab
        </h1>
        <p className="text-lg text-gray-600">
          Get AI-powered crop suggestions based on your farming conditions and Punjab's agro-climatic zones
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">District</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select District</option>
              {DISTRICTS.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Soil Type</label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Soil Type</option>
              {soilTypes.map(soil => (
                <option key={soil} value={soil}>{soil}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Water Source</label>
            <select
              value={waterSource}
              onChange={(e) => setWaterSource(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Water Source</option>
              <option value="canal">Canal Irrigation</option>
              <option value="tubewell">Tubewell</option>
              <option value="rainwater">Rainwater</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Season</label>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Season</option>
              <option value="rabi">Rabi (Winter)</option>
              <option value="kharif">Kharif (Monsoon)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Budget</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Budget</option>
              <option value="low">Low (< ₹25,000/acre)</option>
              <option value="medium">Medium (₹25,000-50,000/acre)</option>
              <option value="high">High (> ₹50,000/acre)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">
          Recommended Crops ({recommendations.length} found)
        </h2>
        {recommendations.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 mb-4">No crops found matching your criteria</p>
            <p className="text-sm text-gray-500">Try adjusting your filters above</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((crop, index) => (
              <div key={crop.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                {index < 3 && (
                  <div className="mb-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Top {index + 1} Pick
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{crop.name}</h3>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {crop.type}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {crop.seasons.join(", ")}
                  </span>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div><strong>Yield:</strong> {crop.avgYield} q/acre</div>
                  <div><strong>Duration:</strong> {crop.growingDuration} months</div>
                  <div><strong>Investment:</strong> ₹{crop.investment.toLocaleString()}/acre</div>
                  <div><strong>Market Price:</strong> {crop.marketPrice}</div>
                </div>

                <div className="mb-4">
                  <strong className="text-sm">Varieties:</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {crop.varieties.map(variety => (
                      <span key={variety} className="bg-gray-100 text-xs px-2 py-1 rounded">
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{crop.notes}</p>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Get Detailed Guide
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
