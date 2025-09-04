import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold mb-2">Jharkhand Agriculture</div>
          <p className="text-sm text-slate-300">
            Decision-support for farmers. Prototype—verify with local officers.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Services</div>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>Crop Recommendations</li>
            <li>Weather Forecast</li>
            <li>Planting Calendar</li>
            <li>Resources & Schemes</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p className="text-sm text-slate-300">
            Dept. of Agriculture, Ranchi, Jharkhand<br/>help@agri.jh.gov.in
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 py-3 border-t border-slate-800">
        © {new Date().getFullYear()} Government of Jharkhand
      </div>
    </footer>
  );
}
