import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" }
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌱</span>
            <span className="font-bold text-xl">Jharkhand Agriculture</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md ${location.pathname === "/" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              {t('home')}
            </Link>
            <Link to="/crops" className={`px-3 py-2 rounded-md ${location.pathname === "/crops" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              {t('crops')}
            </Link>
            <Link to="/weather" className={`px-3 py-2 rounded-md ${location.pathname === "/weather" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              {t('weather')}
            </Link>
            <Link to="/calendar" className={`px-3 py-2 rounded-md ${location.pathname === "/calendar" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              {t('calendar')}
            </Link>
            <Link to="/resources" className={`px-3 py-2 rounded-md ${location.pathname === "/resources" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              {t('resources')}
            </Link>
            <Link to="/profile" className={`px-3 py-2 rounded-md ${location.pathname === "/profile" ? "text-green-600 bg-green-50" : "text-gray-700 hover:text-green-600"}`}>
              {t('profile')}
            </Link>

            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              {languages.map(({ code, label }) => (
                <option key={code} value={code}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

