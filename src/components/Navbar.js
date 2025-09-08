// src/components/Navbar.js

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/crops", label: "Crops" },
    { path: "/weather", label: "Weather" },
    { path: "/calendar", label: "Calendar" },
    { path: "/resources", label: "Resources" },
    { path: "/profile", label: "Profile" },
  ];

  // Load Google Translate script
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "hi,te,ta,ml,kn,gu,mr,bn,pa,or,ur,as,ks,sd", // Only Indian languages
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Custom styles to make dropdown clean
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-gadget {
        font-family: inherit !important;
        font-size: 14px !important;
        color: #374151 !important; /* gray-700 */
      }
      .goog-te-gadget-simple {
        background-color: #f9fafb !important; /* gray-50 */
        border: 1px solid #d1d5db !important; /* gray-300 */
        border-radius: 0.5rem !important; /* rounded-md */
        padding: 4px 8px !important;
        cursor: pointer;
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
      }
      .goog-te-gadget-simple span {
        color: #374151 !important; /* gray-700 */
      }
      .goog-te-gadget-icon {
        display: none !important; /* remove Google logo */
      }
      .goog-te-menu-value span:nth-child(3) {
        display: none !important; /* remove ▼ arrow */
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌾</span>
            <span className="font-bold text-xl">Punjab Agriculture</span>
          </Link>
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
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
            {/* Language Selector */}
            <div id="google_translate_element"></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden py-4">
          <Link
            to="/"
            className="flex items-center justify-start space-x-2 mb-4 px-4"
          >
            <span className="text-2xl">🌾</span>
            <span className="font-bold text-lg">Punjab Agriculture</span>
          </Link>
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
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
          {/* Language Selector for Mobile */}
          <div className="mt-4 px-4">
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
