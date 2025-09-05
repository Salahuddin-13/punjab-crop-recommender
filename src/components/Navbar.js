import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();

  // Debug logging
  console.log("Current location:", location.pathname);

  // Function to check if a path is active
  const isActive = (path) => {
    const active = location.pathname === path;
    console.log(`Checking ${path}: ${active}`);
    return active;
  };

  const handleLinkClick = (path) => {
    console.log(`Clicking link to: ${path}`);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={() => handleLinkClick("/")}
          >
            <span className="text-2xl">🌱</span>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Jharkhand Agriculture</h1>
              <p className="text-sm text-gray-600">AI Crop Recommender</p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              onClick={() => handleLinkClick("/")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/") 
                  ? "text-green-600 font-semibold bg-green-50" 
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              {t('home') || 'Home'}
            </Link>
            
            <Link 
              to="/crops" 
              onClick={() => handleLinkClick("/crops")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/crops") 
                  ? "text-green-600 font-semibold bg-green-50" 
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              {t('crops') || 'Crops'}
            </Link>
            
            <Link 
              to="/weather" 
              onClick={() => handleLinkClick("/weather")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/weather") 
                  ? "text-green-600 font-semibold bg-green-50" 
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              {t('weather') || 'Weather'}
            </Link>
            
            <Link 
              to="/calendar" 
              onClick={() => handleLinkClick("/calendar")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/calendar") 
                  ? "text-green-600 font-semibold bg-green-50" 
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              {t('calendar') || 'Calendar'}
            </Link>
            
            <Link 
              to="/resources" 
              onClick={() => handleLinkClick("/resources")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/resources") 
                  ? "text-green-600 font-semibold bg-green-50" 
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              {t('resources') || 'Resources'}
            </Link>
            
            <Link 
              to="/profile" 
              onClick={() => handleLinkClick("/profile")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive("/profile") 
                  ? "text-green-600 font-semibold bg-green-50" 
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              {t('profile') || 'Profile'}
            </Link>
            
            {/* Language Switcher */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <select 
                value={language}
                onChange={(e) => {
                  console.log("Language changed to:", e.target.value);
                  changeLanguage(e.target.value);
                }}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <select 
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-xs"
            >
              <option value="en">EN</option>
              <option value="hi">हि</option>
            </select>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden pb-3 pt-2">
          <div className="flex flex-col space-y-1">
            <Link to="/" onClick={() => handleLinkClick("/")} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "text-green-600 font-semibold bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              {t('home') || 'Home'}
            </Link>
            <Link to="/crops" onClick={() => handleLinkClick("/crops")} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/crops") ? "text-green-600 font-semibold bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              {t('crops') || 'Crops'}
            </Link>
            <Link to="/weather" onClick={() => handleLinkClick("/weather")} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/weather") ? "text-green-600 font-semibold bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              {t('weather') || 'Weather'}
            </Link>
            <Link to="/calendar" onClick={() => handleLinkClick("/calendar")} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/calendar") ? "text-green-600 font-semibold bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              {t('calendar') || 'Calendar'}
            </Link>
            <Link to="/resources" onClick={() => handleLinkClick("/resources")} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/resources") ? "text-green-600 font-semibold bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              {t('resources') || 'Resources'}
            </Link>
            <Link to="/profile" onClick={() => handleLinkClick("/profile")} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/profile") ? "text-green-600 font-semibold bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-gray-50"}`}>
              {t('profile') || 'Profile'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
