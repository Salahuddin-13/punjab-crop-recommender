import React, { useState } from "react";

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const farmingCalendar = {
    0: { // January
      season: "Winter/Rabi",
      activities: [
        "🌾 Harvest rabi crops (wheat, gram, mustard)",
        "🥔 Potato harvesting continues",
        "🌱 Land preparation for summer crops",
        "💧 Repair irrigation systems",
        "🌿 Apply organic manure to fields"
      ],
      crops: ["Wheat", "Gram", "Mustard", "Potato", "Lentil"],
      weather: "Cool and dry, ideal for harvesting"
    },
    1: { // February
      season: "Late Winter/Rabi",
      activities: [
        "🌾 Complete rabi harvest",
        "🥬 Harvest winter vegetables",
        "🌱 Summer crop land preparation",
        "💧 Plan irrigation for summer",
        "🔧 Equipment maintenance"
      ],
      crops: ["Wheat", "Barley", "Peas", "Cauliflower", "Cabbage"],
      weather: "Pleasant weather, good for field work"
    },
    2: { // March
      season: "Spring/Pre-Summer",
      activities: [
        "🌾 Final rabi harvest",
        "🌱 Sow summer crops (maize, sunflower)",
        "🥕 Plant summer vegetables",
        "💧 Set up irrigation systems",
        "🌿 Compost preparation"
      ],
      crops: ["Maize", "Sunflower", "Fodder crops", "Summer vegetables"],
      weather: "Warming up, good for planting"
    },
    3: { // April
      season: "Summer",
      activities: [
        "🌱 Continue summer crop sowing",
        "💧 Regular irrigation important",
        "🌿 Mulching for moisture conservation",
        "🐛 Pest monitoring begins",
        "🌾 Fodder crop management"
      ],
      crops: ["Maize", "Fodder", "Vegetables", "Sugarcane"],
      weather: "Hot, requires frequent irrigation"
    },
    4: { // May
      season: "Peak Summer",
      activities: [
        "💧 Intensive irrigation management",
        "🌿 Mulching and shade provision",
        "🌱 Green manure crop sowing",
        "🔧 Equipment preparation for monsoon",
        "🌾 Summer crop care"
      ],
      crops: ["Fodder maize", "Green manure crops", "Vegetables"],
      weather: "Very hot, water conservation critical"
    },
    5: { // June
      season: "Pre-Monsoon/Early Kharif",
      activities: [
        "🌧️ Monsoon preparation",
        "🌱 Early kharif sowing (rice nursery)",
        "🚜 Field preparation for kharif",
        "💧 Drainage system check",
        "🌾 Summer crop harvest"
      ],
      crops: ["Rice nursery", "Early maize", "Fodder crops"],
      weather: "Hot with occasional showers"
    },
    6: { // July
      season: "Monsoon/Kharif",
      activities: [
        "🌱 Main kharif sowing (rice, maize, cotton)",
        "🌾 Rice transplanting",
        "🌿 Weed management",
        "🚜 Inter-cultivation",
        "🐛 Pest and disease monitoring"
      ],
      crops: ["Rice", "Maize", "Cotton", "Sugarcane", "Pulses"],
      weather: "Rainy season, ideal for kharif crops"
    },
    7: { // August
      season: "Peak Monsoon/Kharif",
      activities: [
        "🌾 Continue rice transplanting",
        "🌱 Late kharif sowing",
        "🌿 Intensive weed control",
        "💧 Drainage management",
        "🐛 Disease prevention"
      ],
      crops: ["Rice", "Maize", "Pulses", "Oilseeds", "Vegetables"],
      weather: "Heavy rainfall, high humidity"
    },
    8: { // September
      season: "Late Monsoon/Kharif",
      activities: [
        "🌾 Kharif crop management",
        "🌿 Nutrient application",
        "🐛 Pest control measures",
        "💧 Water level management",
        "🌱 Rabi land preparation begins"
      ],
      crops: ["Rice", "Maize", "Pulses", "Cotton"],
      weather: "Decreasing rainfall, post-monsoon"
    },
    9: { // October
      season: "Post-Monsoon/Rabi Preparation",
      activities: [
        "🌾 Early kharif harvest",
        "🚜 Rabi field preparation",
        "🌱 Rabi sowing begins",
        "💧 Irrigation planning",
        "🌿 Soil testing and amendment"
      ],
      crops: ["Early rice", "Wheat sowing", "Gram", "Mustard"],
      weather: "Pleasant, ideal for farming"
    },
    10: { // November
      season: "Rabi Season",
      activities: [
        "🌾 Continue kharif harvest",
        "🌱 Main rabi sowing (wheat, gram)",
        "🥔 Potato planting",
        "🌿 Organic manure application",
        "💧 Irrigation management"
      ],
      crops: ["Wheat", "Gram", "Potato", "Mustard", "Barley"],
      weather: "Cool and dry, perfect for rabi"
    },
    11: { // December
      season: "Winter/Rabi",
      activities: [
        "🌾 Complete kharif harvest",
        "🌱 Late rabi sowing",
        "🥬 Winter vegetable planting",
        "🌿 Crop protection measures",
        "🔧 Equipment maintenance"
      ],
      crops: ["Wheat", "Gram", "Vegetables", "Fodder"],
      weather: "Cold, requires frost protection"
    }
  };

  const currentMonth = farmingCalendar[selectedMonth];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🗓️ Jharkhand Farming Calendar</h1>
        <p className="text-lg text-gray-600">Your complete guide to seasonal farming activities</p>
      </div>

      {/* Month Selection */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2">
          {months.map((month, index) => (
            <button
              key={index}
              onClick={() => setSelectedMonth(index)}
              className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                selectedMonth === index
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {month.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* Current Month Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Activities */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{months[selectedMonth]}</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {currentMonth.season}
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🚜 Key Activities</h3>
              <div className="space-y-2">
                {currentMonth.activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-700">{activity}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🌾 Recommended Crops</h3>
              <div className="flex flex-wrap gap-2">
                {currentMonth.crops.map((crop, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">🌤️ Weather Conditions</h3>
              <p className="text-gray-600 bg-yellow-50 p-3 rounded-lg">{currentMonth.weather}</p>
            </div>
          </div>
        </div>

        {/* Sidebar Information */}
        <div>
          {/* Quick Tips */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">💡 Monthly Tips</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div className="text-sm font-medium text-green-800">Soil Care</div>
                <div className="text-xs text-green-600">
                  {selectedMonth < 3 || selectedMonth > 9 
                    ? "Apply organic manure and compost"
                    : "Focus on drainage and weed control"
                  }
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <div className="text-sm font-medium text-blue-800">Water Management</div>
                <div className="text-xs text-blue-600">
                  {selectedMonth >= 6 && selectedMonth <= 8
                    ? "Ensure proper drainage during monsoon"
                    : "Plan irrigation schedule carefully"
                  }
                </div>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <div className="text-sm font-medium text-yellow-800">Pest Control</div>
                <div className="text-xs text-yellow-600">
                  {selectedMonth >= 6 && selectedMonth <= 9
                    ? "High pest activity, monitor closely"
                    : "Preventive measures recommended"
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Overview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">📊 Seasonal Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Kharif Season</span>
                  <span className="text-green-600">Jun-Oct</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`bg-green-500 h-2 rounded-full transition-all duration-500 ${
                    selectedMonth >= 5 && selectedMonth <= 9 ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Rabi Season</span>
                  <span className="text-blue-600">Nov-Mar</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`bg-blue-500 h-2 rounded-full transition-all duration-500 ${
                    selectedMonth >= 10 || selectedMonth <= 2 ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Summer Season</span>
                  <span className="text-orange-600">Apr-May</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`bg-orange-500 h-2 rounded-full transition-all duration-500 ${
                    selectedMonth >= 3 && selectedMonth <= 4 ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
