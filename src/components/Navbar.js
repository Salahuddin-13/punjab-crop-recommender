import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/crops", label: "Crops" },
    { path: "/weather", label: "Weather" },
    { path: "/calendar", label: "Calendar" },
    { path: "/resources", label: "Resources" },
    { path: "/profile", label: "Profile" }
  ];

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
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Visible Vertical */}
        <div className="md:hidden py-4">
          {/* Logo on top */}
          <Link to="/" className="flex items-center justify-start space-x-2 mb-4 px-4">
            <span className="text-2xl">🌱</span>
            <span className="font-bold text-lg">Jharkhand Agriculture</span>
          </Link>

          {/* Vertical Navigation Links */}
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block w-full px-4 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}



