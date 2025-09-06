import React from "react";

export default function CropRecommendationCard({ crop }) {
  // Simple month name conversion without date-fns
  const getMonthName = (monthNumber) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[monthNumber - 1];
  };

  // Compute profitability (simple formula)
  const priceMatch = crop.marketPrice.match(/\d+/g);
  const avgPrice = priceMatch ? Number(priceMatch[1] || priceMatch[0]) : 0;
  const profit = (crop.avgYield * avgPrice) - crop.investment;

  // Generate tips
  const tips = [
    `Plant ${crop.name} in ${crop.plantingMonths.map(m => getMonthName(m)).join(", ")}`,
    crop.water === "high" 
      ? "Ensure reliable irrigation or sow during monsoon"
      : "Rely on rainwater; avoid water logging"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition relative">
      {profit > 0 && (
        <div className="absolute top-3 right-3 bg-green-100 text-green-800 px-2 py-1 text-xs font-semibold rounded">
          ₹{profit.toLocaleString()} profit
        </div>
      )}
      
      <h3 className="font-bold text-2xl mb-2">{crop.name}</h3>
      
      <div className="flex gap-2 text-sm mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{crop.type}</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{crop.seasons.join(", ")}</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div><strong>Duration:</strong> {crop.growingDuration} months</div>
        <div><strong>Yield:</strong> {crop.avgYield} q/acre</div>
        <div><strong>Investment:</strong> ₹{crop.investment?.toLocaleString()}</div>
        <div><strong>Price:</strong> {crop.marketPrice}</div>
      </div>
      
      <div className="mb-4 text-sm">
        <p><strong>Soils:</strong> {crop.soil.join(", ")}</p>
        <p><strong>Water:</strong> {crop.water}</p>
      </div>
      
      <div className="mb-4">
        <strong className="text-sm">Varieties:</strong>
        <div className="flex flex-wrap gap-2 mt-1">
          {crop.varieties?.map(v => (
            <span key={v} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {v}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <strong className="text-sm">Tips:</strong>
        <ul className="list-disc list-inside text-sm mt-1">
          {tips.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>
      </div>
      
      
    </div>
  );
}