import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function MarketInsights() {
  const [marketData, setMarketData] = useState([]);
  const [priceTrends, setPriceTrends] = useState([]);

  useEffect(() => {
    // Simulated live data (replace with API call later)
    const crops = [
      { name: "Paddy", price: 2694, demand: "High", change: 1.4 },
      { name: "Wheat", price: 1996, demand: "Medium", change: 2.7 },
      { name: "Maize", price: 1786, demand: "Low", change: 1.8 },
      { name: "Sugarcane", price: 2873, demand: "High", change: 0.8 },
    ];
    setMarketData(crops);

    // Simulated historical trend data
    setPriceTrends([
      { month: "June", Paddy: 2600, Wheat: 1950, Maize: 1750, Sugarcane: 2800 },
      { month: "July", Paddy: 2650, Wheat: 1975, Maize: 1775, Sugarcane: 2850 },
      { month: "Aug", Paddy: 2700, Wheat: 2000, Maize: 1800, Sugarcane: 2900 },
    ]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Market Insights — Live Punjab Crop Prices
      </h1>
      <p className="mb-8 text-gray-600">
        Stay updated with mandi prices, demand trends, and growth opportunities
        across Punjab.
      </p>

      {/* Crop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {marketData.map((crop) => (
          <div
            key={crop.name}
            className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition-all border"
          >
            <h2 className="text-xl font-semibold mb-2">{crop.name}</h2>
            <p className="text-lg text-gray-800 font-medium">
              ₹{crop.price} / quintal
            </p>
            <span
              className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                crop.demand === "High"
                  ? "bg-green-100 text-green-700"
                  : crop.demand === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              Demand: {crop.demand}
            </span>
            <p
              className={`mt-2 text-sm ${
                crop.change >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {crop.change >= 0 ? "▲" : "▼"} {crop.change}%
            </p>
          </div>
        ))}
      </div>

      {/* Price Trends Chart */}
      <div className="bg-white shadow rounded-xl p-6 border">
        <h2 className="text-2xl font-bold mb-4">Price Trends (Last 3 months)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={priceTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            {["Paddy", "Wheat", "Maize", "Sugarcane"].map((key, idx) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={["#16a34a", "#facc15", "#3b82f6", "#ef4444"][idx]}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
