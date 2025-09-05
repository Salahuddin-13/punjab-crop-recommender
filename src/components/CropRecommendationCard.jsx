export default function CropRecommendationCard({ crop }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-xl text-gray-800 mb-1">{crop.name}</h3>
          <div className="flex gap-2 text-sm">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{crop.type}</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              {crop.seasons.join(", ")}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">{crop.marketPrice}</p>
          <p className="text-xs text-gray-500">Market Price</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <div>
            <p className="text-xs font-medium text-gray-600 uppercase">Growing Duration</p>
            <p className="text-sm font-semibold">{crop.growingDuration} months</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 uppercase">Expected Yield</p>
            <p className="text-sm font-semibold">{crop.avgYield ? `${crop.avgYield} q/acre` : 'Variable'}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 uppercase">Investment</p>
            <p className="text-sm font-semibold">₹{crop.investment?.toLocaleString()}/acre</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div>
            <p className="text-xs font-medium text-gray-600 uppercase">Soil Types</p>
            <p className="text-sm">{crop.soil.join(", ")}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 uppercase">Water Requirement</p>
            <p className="text-sm capitalize">{crop.water}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 uppercase">Varieties</p>
            <p className="text-sm">{crop.varieties?.join(", ") || "Multiple varieties available"}</p>
          </div>
        </div>
      </div>

      {/* Planting & Harvest Calendar */}
      <div className="mb-4 p-3 bg-gray-50 rounded">
        <h4 className="text-sm font-semibold mb-2">📅 Planting & Harvest Calendar</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="font-medium">Plant:</span> {
              crop.plantingMonths?.map(m => new Date(0, m-1).toLocaleString('default', {month: 'short'})).join(", ")
            }
          </div>
          <div>
            <span className="font-medium">Harvest:</span> {
              crop.harvestMonths?.map(m => new Date(0, m-1).toLocaleString('default', {month: 'short'})).join(", ")
            }
          </div>
        </div>
      </div>

      {/* Harvest Weather Prediction */}
      {crop.harvestWeatherPrediction && (
        <div className="mb-4 p-3 bg-blue-50 rounded border border-blue-200">
          <h4 className="text-sm font-semibold mb-2 text-blue-800">🌤️ Expected Harvest Weather</h4>
          <div className="space-y-1">
            {crop.harvestWeatherPrediction.slice(0, 2).map((weather, index) => (
              <div key={index} className="text-xs">
                <span className="font-medium">{weather.month}:</span> {weather.conditions} 
                <span className="text-blue-600 ml-1">({weather.temp})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="border-t pt-3">
        <p className="text-sm text-gray-700">{crop.notes}</p>
      </div>
    </div>
  );
}

