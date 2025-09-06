import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Crops from "./pages/Crops";
import Weather from "./pages/Weather";
import Calendar from "./pages/Calendar";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import CropRecommendations from "./pages/CropRecommendations";

export default function App() {
  useEffect(() => {
    document.title = "Jharkhand Crop Recommender";
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <Navbar />
          <main className="flex-1 pt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/profile" element={<Profile />} />
		 <Route path="/crops" element={<CropRecommendations />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
