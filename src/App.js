// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Calendar from "./pages/Calendar";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import CropRecommendations from "./pages/CropRecommendations";
import ErrorBoundary from "./components/ErrorBoundary";
import MarketInsights from "./pages/MarketInsights";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-1 pt-4">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/crops" element={<CropRecommendations />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/profile" element={<Profile />} />
		<Route path="/market" element={<MarketInsights />} />

            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

