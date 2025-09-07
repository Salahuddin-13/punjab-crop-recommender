// src/App.js
import React, { useEffect } from "react";
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
import { HelmetProvider, Helmet } from "react-helmet-async"; 
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  // Update document title whenever language changes
  useEffect(() => {
    document.title = t("welcome"); // you can make a specific translation key for the title
  }, [i18n.language, t]);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <Navbar />
          <main className="flex-1 pt-4">
            <Helmet>
              {/* Dynamic <title> in browser tab */}
              <title>{t("welcome")}</title>
              <meta
                name="description"
                content={t("welcome")}
              />
            </Helmet>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/crops" element={<CropRecommendations />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

