import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌱</span>
            <span className="font-bold text-xl">Jharkhand Agriculture</span>
          </Link>

          <div className="flex items-center space-x-4">
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

        {/* Mobile Layout - Always Visible Vertical */}
        <div className="md:hidden py-4">
          {/* Logo on top */}
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🌱</span>
            <span className="font-bold text-lg">Jharkhand Agriculture</span>
          </Link>
          
          {/* Vertical Navigation Links */}
          <div className="flex flex-col space-y-2">
            <Link to="/" className={`block px-4 py-2 text-center rounded-md text-sm font-medium ${location.pathname === "/" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              Home
            </Link>
            <Link to="/crops" className={`block px-4 py-2 text-center rounded-md text-sm font-medium ${location.pathname === "/crops" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              Crops
            </Link>
            <Link to="/weather" className={`block px-4 py-2 text-center rounded-md text-sm font-medium ${location.pathname === "/weather" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              Weather
            </Link>
            <Link to="/calendar" className={`block px-4 py-2 text-center rounded-md text-sm font-medium ${location.pathname === "/calendar" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              Calendar
            </Link>
            <Link to="/resources" className={`block px-4 py-2 text-center rounded-md text-sm font-medium ${location.pathname === "/resources" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              Resources
            </Link>
            <Link to="/profile" className={`block px-4 py-2 text-center rounded-md text-sm font-medium ${location.pathname === "/profile" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


