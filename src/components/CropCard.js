import React from "react";
export default function CropCard({ crop }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-bold">{crop.name}</h3>
      <div className="text-sm text-slate-600 mt-1">
        Type: {crop.type} • Season: {crop.seasons.join(", ")}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">
          Soils: {crop.soil.join(", ")}
        </span>
        <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">
          Water: {crop.water}
        </span>
        <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">
          Yield: {crop.avgYield ?? "—"} q/acre
        </span>
      </div>
      <p className="text-sm text-slate-700 mt-2">{crop.notes}</p>
    </div>
  );
}