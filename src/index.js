// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <HelmetProvider>
    <Helmet>
      <title>Punjab AI Crop Recommender</title>
      <meta
        name="description"
        content="AI-powered crop recommendations for Punjab farmers with live weather integration and personalized insights."
      />
      <meta
        name="keywords"
        content="Punjab crop recommendations, AI agriculture, farming assistant, smart farming"
      />
      <meta property="og:title" content="Punjab AI Crop Recommender" />
      <meta
        property="og:description"
        content="Get personalized AI-driven crop recommendations for Punjab agriculture."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="https://your-domain.com/og-image.jpg" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
    <App />
  </HelmetProvider>
);
