import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center justify-center md:justify-start">
              🌾 Crops Covered
            </h3>
            <p className="text-gray-300">Cereals, Pulses, Oilseeds, Vegetables, Fruits, Spices, Cash crops</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center justify-center md:justify-start">
              📍 All Districts
            </h3>
            <p className="text-gray-300">Ranchi, Bokaro, Dhanbad, East & West Singhbhum, and 19 more districts</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center justify-center md:justify-start">
              🎯 Support
            </h3>
            <p className="text-gray-300">24/7 farming assistance, weather alerts, market price updates</p>
          </div>
        </div>
        
        {/* Credit Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Jharkhand Agriculture. All rights reserved.
          </p>
          <p className="text-gray-300">
            Made with ❣️ by <span className="font-semibold text-green-400">Salahuddin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}