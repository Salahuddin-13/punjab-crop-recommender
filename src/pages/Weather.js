import React, { useEffect, useState } from "react";
import { DISTRICTS } from "../data/crops";

export default function Weather() {
  const [district, setDistrict] = useState("Ranchi");
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  useEffect(() => {
    async function fetchWeather() {
      try {
        setErr("");
        setData(null);
        const q = encodeURIComponent(`${district},IN`);
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=${apiKey}`
        );
        const json = await res.json();
        if (json.cod !== 200) throw new Error(json.message || "Failed");
        setData(json);
      } catch (e) {
        setErr(e.message);
      }
    }
    if (apiKey) fetchWeather();
  }, [district, apiKey]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold">🌦️ Weather</h2>
      <p className="text-slate-600 mt-1">Live current weather from OpenWeather.</p>

      <div className="grid md:grid-cols-3 gap-4 mt-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <label className="text-sm font-semibold">District</label>
          <select
            className="w-full rounded-xl border px-3 py-2 mt-1"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            {DISTRICTS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2 text-sm text-slate-600">
          <p>Tip: If a district isn’t found, try a nearby major city.</p>
        </div>
      </div>

      {!apiKey && (
        <div className="mt-6 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800">
          Add your API key to .env and restart the server.
        </div>
      )}

      {err && (
        <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
          Error: {err}
        </div>
      )}

      {data && (
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-lg font-semibold">
              {data.name}, {data.sys.country}
            </div>
            <div className="text-4xl font-bold mt-2">
              {Math.round(data.main.temp)}°C
            </div>
            <div className="text-slate-600 mt-1 capitalize">
              {data.weather[0].description}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>Humidity: {data.main.humidity}%</div>
            <div>Wind: {Math.round(data.wind.speed)} m/s</div>
            <div>Pressure: {data.main.pressure} hPa</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>Min: {Math.round(data.main.temp_min)}°C</div>
            <div>Max: {Math.round(data.main.temp_max)}°C</div>
            <div>Feels like: {Math.round(data.main.feels_like)}°C</div>
          </div>
        </div>
      )}
    </div>
);
}
