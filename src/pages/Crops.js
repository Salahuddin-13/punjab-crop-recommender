import React from "react";
import { Helmet } from "react-helmet-async";
import SmartWeather from "../components/SmartWeather";

export default function WeatherPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Punjab Weather Dashboard",
    "description": "Real-time weather data for all 22 districts of Punjab with temperature, humidity, wind speed, and conditions.",
    "url": "https://your-domain.com/weather"
  };

  return (
    <>
      <Helmet>
        <title>Punjab Weather Dashboard | Live District Conditions</title>
        <meta
          name="description"
          content="View live weather updates for all 22 districts of Punjab. Get temperature, humidity, wind speed, and current conditions instantly."
        />
        <meta
          name="keywords"
          content="Punjab weather, district weather Punjab, live weather India, Punjab temperature, humidity Punjab"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Punjab Weather Dashboard | Live District Conditions" />
        <meta property="og:description" content="Live weather updates for all Punjab districts. See temperature, humidity, wind speed, and conditions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/weather" />
        <meta property="og:image" content="https://your-domain.com/weather-dashboard-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Punjab Weather Dashboard | Live District Conditions" />
        <meta name="twitter:description" content="Real-time weather data for Punjab districts with temperature, humidity, and wind speed." />
        <meta name="twitter:image" content="https://your-domain.com/weather-dashboard-twitter.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/weather" />
        <meta name="author" content="Punjab Agriculture Portal" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <SmartWeather />
    </>
  );
}
