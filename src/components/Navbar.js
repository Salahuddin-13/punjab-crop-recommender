import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌱</span>
            <span className="font-bold text-xl">Jharkhand Agriculture</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              Home
            </Link>
            <Link to="/crops" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/crops" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              Crops
            </Link>
            <Link to="/weather" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/weather" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              Weather
            </Link>
            <Link to="/calendar" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/calendar" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              Calendar
            </Link>
            <Link to="/resources" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/resources" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              Resources
            </Link>
            <Link to="/profile" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/profile" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

