// src/components/RecommendationsPanel.jsx
import React from "react";

export default function RecommendationsPanel({
  filters,
  onFilterChange,
  totalCrops,
  visibleCrops
}) {
  return (
    <aside className="sticky top-16 bg-white p-6 rounded-lg shadow mb-8">
      <h2 className="text-xl font-bold mb-4">Filter Your Recommendations</h2>
      <div className="text-sm text-gray-600 mb-4">
        Showing <span className="font-semibold">{visibleCrops}</span> of{" "}
        <span className="font-semibold">{totalCrops}</span> crops
      </div>

      {Object.entries(filters).map(([key, { label, value, options }]) => (
        <div key={key} className="mb-4">
          <label className="block text-sm font-medium mb-1">{label}</label>
          {options.length > 0 ? (
            <select
              value={value}
              onChange={(e) => onFilterChange(key, e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">{`Any ${label}`}</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => onFilterChange(key, e.target.value)}
              placeholder={`Enter ${label}`}
              className="w-full border rounded px-3 py-2"
            />
          )}
        </div>
      ))}

      <button
        onClick={() => onFilterChange("reset")}
        className="mt-2 text-sm text-red-600 hover:underline"
      >
        Reset Filters
      </button>
    </aside>
  );
}