import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("Ranchi");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (cityName) => {
    setError("");
    setWeather(null);
    try {
      const apiKey = "5e04c9e9f749a242973926ba146c8772";
      console.log("API key:", apiKey);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      setError("Unable to fetch weather. Check city name or API key.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Current Weather</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          placeholder="Enter city (e.g., Ranchi)"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Get Weather
        </button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
      {weather && (
        <div className="text-center">
          <h3 className="text-xl font-semibold">
            {weather.name}, {weather.sys.country}
          </h3>
          <p className="mt-2">
            {Math.round(weather.main.temp)}°C – {weather.weather[0].description}
          </p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}


