import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("Ludhiana");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState([]);

  const districts = [
    "Amritsar", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", 
    "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", 
    "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", 
    "Rupnagar", "Sangrur", "SAS Nagar (Mohali)", "Shaheed Bhagat Singh Nagar", 
    "Tarn Taran", "Barnala"
  ];

  // Memoize farming advice to prevent recalculation
  const farmingAdvice = useMemo(() => {
    if (!weather) return [];
    
    const temp = weather.main.temp;
    const humidity = weather.main.humidity;
    const condition = weather.weather[0].main.toLowerCase();
    
    const advice = [];
    
    if (temp >= 20 && temp <= 30 && humidity >= 50 && humidity <= 70) {
      advice.push("🌾 Perfect conditions for wheat sowing in Punjab. Plan for October-November planting.");
    }
    
    if (temp >= 25 && temp <= 35 && condition.includes('clear')) {
      advice.push("🌾 Good for paddy transplanting. Ensure adequate water supply for basmati varieties.");
    }
    
    if (condition.includes('rain')) {
      advice.push("🌧️ Monsoon rains detected. Ideal for kharif sowing and land preparation.");
      advice.push("💧 Reduce irrigation schedule. Monitor for water logging in paddy fields.");
    }
    
    if (temp > 35) {
      advice.push("🌡️ High temperature alert. Provide shade to livestock and increase irrigation frequency.");
      advice.push("💦 Consider heat-resistant varieties for cotton and sugarcane crops.");
    }
    
    if (humidity > 80) {
      advice.push("🍄 High humidity may cause blast in paddy. Apply preventive fungicide spray.");
      advice.push("🌿 Monitor wheat crops for rust diseases during this weather.");
    }
    
    if (temp < 15) {
      advice.push("❄️ Cold wave conditions. Protect sugarcane and citrus crops from frost damage.");
      advice.push("🔥 Light up smudge pots in citrus orchards during night hours.");
    }
    
    return advice;
  }, [weather]);

  const generateFarmingAlerts = useCallback((current, forecast) => {
    const newAlerts = [];
    const temp = current.main.temp;
    const humidity = current.main.humidity;
    const windSpeed = current.wind.speed;

    // Temperature alerts specific to Punjab crops
    if (temp > 40) {
      newAlerts.push({
        type: "warning",
        icon: "🌡️",
        title: "Extreme Heat Alert",
        message: "Extreme heat may damage wheat in grain filling stage. Provide emergency irrigation."
      });
    } else if (temp < 5) {
      newAlerts.push({
        type: "warning",
        icon: "❄️",
        title: "Frost Alert",
        message: "Frost warning for Punjab. Protect potato, sugarcane and citrus crops immediately."
      });
    }

    // Humidity alerts
    if (humidity > 85) {
      newAlerts.push({
        type: "warning",
        icon: "💧",
        title: "Disease Risk Alert",
        message: "High humidity increases blast risk in paddy and rust in wheat. Apply fungicides."
      });
    }

    // Wind alerts
    if (windSpeed > 15) {
      newAlerts.push({
        type: "warning",
        icon: "💨",
        title: "Strong Wind Alert",
        message: "Strong winds may cause lodging in wheat and paddy. Harvest mature crops immediately."
      });
    }

    // Rain forecast alerts
    const rainForecast = forecast.list.slice(0, 8).some(item => 
      item.weather[0].main.toLowerCase().includes('rain')
    );
    
    if (rainForecast) {
      newAlerts.push({
        type: "success",
        icon: "🌧️",
        title: "Monsoon Update",
        message: "Rain expected in 24 hours. Good for kharif sowing. Postpone wheat harvesting."
      });
    }

    setAlerts(newAlerts);
  }, []);

  const fetchWeatherData = useCallback(async (cityName) => {
    setError("");
    setLoading(true);
    
    try {
      const apiKey = "5e04c9e9f749a242973926ba146c8772";
      
      // Use Promise.all for parallel requests (faster)
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&units=metric&appid=${apiKey}`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},IN&units=metric&appid=${apiKey}`)
      ]);

      setWeather(currentResponse.data);
      setForecast(forecastResponse.data);
      generateFarmingAlerts(currentResponse.data, forecastResponse.data);
      
    } catch (err) {
      setError("Unable to fetch weather data for Punjab district. Please try again.");
      setWeather(null);
      setForecast(null);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  }, [generateFarmingAlerts]);

  // Only fetch on mount, not on every city change
  useEffect(() => {
    fetchWeatherData(city);
  }, []); // Remove city dependency

  const getWeatherIcon = useCallback((condition) => {
    const iconMap = {
      'clear': '☀️',
      'clouds': '☁️',
      'rain': '🌧️',
      'drizzle': '🌦️',
      'thunderstorm': '⛈️',
      'snow': '❄️',
      'mist': '🌫️',
      'fog': '🌫️'
    };
    return iconMap[condition.toLowerCase()] || '🌤️';
  }, []);

  const getDayName = useCallback((timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'short' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
  };

  // Show loading spinner
  if (loading && !weather) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          <span className="ml-4 text-lg">Loading Punjab weather data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🌤️ Punjab Weather Dashboard</h1>
        <p className="text-lg text-gray-600">Advanced weather insights for smart farming decisions across Punjab's 22 districts</p>
      </div>

      {/* City Selection */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
          >
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {weather && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Weather */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{weather.name}, Punjab</h2>
                  <p className="text-green-100">{new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
                <div className="text-6xl">
                  {getWeatherIcon(weather.weather[0].main)}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</div>
                  <div className="text-green-100 capitalize">{weather.weather[0].description}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">Feels like {Math.round(weather.main.feels_like)}°C</div>
                  <div className="text-sm">Humidity: {weather.main.humidity}%</div>
                  <div className="text-sm">Wind: {weather.wind.speed} m/s</div>
                </div>
              </div>
            </div>

            {/* 5-Day Forecast */}
            {forecast && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">📅 5-Day Punjab Weather Forecast</h3>
                <div className="grid grid-cols-5 gap-4">
                  {forecast.list.filter((_, index) => index % 8 === 0).slice(0, 5).map((day, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-gray-50">
                      <div className="font-semibold text-sm">{getDayName(day.dt)}</div>
                      <div className="text-2xl my-2">{getWeatherIcon(day.weather[0].main)}</div>
                      <div className="text-sm font-bold">{Math.round(day.main.temp)}°</div>
                      <div className="text-xs text-gray-600">{day.weather[0].main}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Farming Alerts */}
            {alerts.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">🚨 Punjab Farming Alerts</h3>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className={`p-3 rounded-lg border-l-4 ${
                      alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                      alert.type === 'success' ? 'bg-green-50 border-green-400' :
                      'bg-blue-50 border-blue-400'
                    }`}>
                      <div className="flex items-start gap-2">
                        <span className="text-lg">{alert.icon}</span>
                        <div>
                          <div className="font-semibold text-sm">{alert.title}</div>
                          <div className="text-xs text-gray-600">{alert.message}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Farming Advice */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">💡 Punjab Farming Tips</h3>
              <div className="space-y-2">
                {farmingAdvice.map((tip, index) => (
                  <div key={index} className="text-sm p-2 bg-green-50 rounded border-l-2 border-green-400">
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
