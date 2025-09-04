// pages/Crops.jsx
import { useState } from "react";
import { DISTRICTS, CROPS } from "../data/crops";
import CropCard from "../components/CropCard";

export default function Crops() {
  const [district, setDistrict] = useState("");
  const [soil, setSoil] = useState("loam");
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = () => {
    const filtered = CROPS.filter(crop => crop.soil.includes(soil));
    setRecommendations(filtered.slice(0, 6));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        🌱 Crop Recommendations
      </h2>

      <div className="bg-white shadow rounded p-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-2 font-medium">District</label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select District</option>
            {DISTRICTS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Soil Type</label>
          <select
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option>loam</option>
            <option>sandy</option>
            <option>clay</option>
            <option>silty</option>
            <option>black</option>
            <option>red</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleRecommend}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Get Recommendations
      </button>

      {recommendations.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {recommendations.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      )}
    </div>
  );
}
