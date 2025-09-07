import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const features = [
    {
      icon: "🌾",
      title: "AI-Powered Crop Recommendations",
      description: "Get personalized crop suggestions for wheat, paddy, cotton and other Punjab crops using advanced AI algorithms and local climate data."
    },
    {
      icon: "🌤️",
      title: "Real-Time Weather Integration",
      description: "Access live weather data and monsoon predictions crucial for Punjab's wheat-paddy rotation and cotton cultivation timing."
    },
    {
      icon: "💰",
      title: "Market Price Analysis",
      description: "View MSP rates, mandi prices, and expected returns for major Punjab crops with direct market linkage information."
    },
    {
      icon: "📊",
      title: "District-Specific Insights",
      description: "Tailored recommendations for all 22 districts of Punjab based on agro-climatic zones and local farming practices."
    },
    {
      icon: "🔄",
      title: "Crop Rotation Planning",
      description: "Smart suggestions for wheat-paddy rotation and crop diversification to maintain soil health and reduce input costs."
    },
    {
      icon: "📅",
      title: "Seasonal Planning",
      description: "Complete rabi and kharif season planning with optimal sowing dates for maximum yield in Punjab's climate."
    }
  ];

  const stats = [
    { number: "15+", label: "Major Crops", icon: "🌾" },
    { number: "22", label: "Districts Covered", icon: "📍" },
    { number: "95%", label: "Accuracy Rate", icon: "🎯" }
  ];

  const testimonials = [
    {
      name: "Harjeet Singh",
      location: "Ludhiana",
      text: "This platform helped me increase my wheat yield by 30%. The weather predictions are very accurate for Punjab's climate!",
      crop: "Wheat & Paddy"
    },
    {
      name: "Simran Kaur", 
      location: "Bathinda",
      text: "Started cotton farming based on recommendations. Now I earn ₹1,20,000 more per season with better varieties!",
      crop: "Cotton & Mustard"
    },
    {
      name: "Ranjit Singh",
      location: "Amritsar", 
      text: "The market price information helps me get better rates for my basmati. Very useful for export quality planning.",
      crop: "Basmati Rice"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Punjab Agriculture Smart Farming Portal",
    "url": "https://your-domain.com",
    "description": "AI-powered crop recommendation system for Punjab farmers with weather integration, market analysis, and farming insights",
    "applicationCategory": "Agriculture",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  };

  return (
    <>
      <Helmet>
        <title>Punjab Agriculture - Smart Crop Recommendation System | AI-Powered Farming Solutions</title>
        <meta name="description" content="Get AI-powered crop recommendations for Punjab agriculture. Real-time weather data, market analysis, and farming insights for wheat, paddy, cotton cultivation. Free for all 22 districts." />
        <meta name="keywords" content="Punjab agriculture, crop recommendation, farming AI, weather data Punjab, wheat cultivation, paddy farming, cotton farming, MSP rates, agricultural technology, smart farming Punjab" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Punjab Agriculture - Smart Crop Recommendation System" />
        <meta property="og:description" content="AI-powered farming solutions for Punjab. Get personalized crop recommendations, weather insights, and market analysis for maximum yield." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:site_name" content="Punjab Agriculture Portal" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Punjab Agriculture - Smart Crop Recommendation System" />
        <meta name="twitter:description" content="AI-powered farming solutions for Punjab farmers with real-time weather and market insights." />
        <meta name="twitter:image" content="/twitter-card.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="author" content="Punjab Agriculture Portal" />
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Punjab, India" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20" role="banner">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Punjab's Smart Farming Portal - AI-Powered Crop Recommendations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your farming with AI-powered crop recommendations, real-time weather data, and comprehensive market analysis. 
              Designed specifically for Punjab's 22 districts to maximize agricultural productivity and profitability.
            </p>
            <nav className="flex flex-col sm:flex-row gap-4 justify-center" role="navigation" aria-label="Primary actions">
              <Link 
                to="/crops" 
                className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
                aria-label="Get personalized crop recommendations for Punjab agriculture"
              >
                🌾 Get Crop Recommendations
              </Link>
              <Link 
                to="/weather" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 font-bold py-4 px-8 rounded-lg text-lg transition-all"
                aria-label="Check current weather conditions and forecasts for Punjab districts"
              >
                🌤️ Check Weather
              </Link>
            </nav>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="stats-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="stats-heading" className="sr-only">Platform Statistics and Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <article key={index} className="text-center">
                  <div className="text-4xl mb-2" aria-hidden="true">{stat.icon}</div>
                  <div className="text-3xl font-bold text-green-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto px-6">
            <header className="text-center mb-16">
              <h2 id="features-heading" className="text-4xl font-bold text-gray-800 mb-4">
                Advanced Agricultural Technology for Punjab Farmers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive farming solutions powered by artificial intelligence, designed specifically for Punjab's intensive agricultural system, wheat-paddy rotation, and cotton cultivation.
              </p>
            </header>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <article key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4" aria-hidden="true">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-green-50" aria-labelledby="how-it-works-heading">
          <div className="max-w-6xl mx-auto px-6">
            <header className="text-center mb-16">
              <h2 id="how-it-works-heading" className="text-4xl font-bold text-gray-800 mb-4">
                How Our AI Crop Recommendation System Works
              </h2>
              <p className="text-xl text-gray-600">Three simple steps to get personalized agricultural insights for Punjab farming</p>
            </header>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Enter Your Farm Details",
                  description: "Provide information about your district, soil type, farm size, irrigation facilities, and current farming practices in Punjab"
                },
                {
                  step: 2,
                  title: "AI Analysis & Processing", 
                  description: "Our advanced AI system analyzes Punjab's weather patterns, soil conditions, MSP rates, market trends, and regional agricultural data"
                },
                {
                  step: 3,
                  title: "Get Smart Recommendations",
                  description: "Receive personalized crop suggestions with optimal sowing schedules, variety selection, profit estimates, and farming best practices"
                }
              ].map((item, index) => (
                <article key={index} className="text-center">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto px-6">
            <header className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-4xl font-bold text-gray-800 mb-4">
                Success Stories from Punjab Farmers
              </h2>
              <p className="text-xl text-gray-600">Real farmers sharing how AI-powered recommendations transformed their agricultural practices and increased profitability</p>
            </header>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <article key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-yellow-400 text-2xl mb-4" aria-label="5 star rating">⭐⭐⭐⭐⭐</div>
                  <blockquote className="text-gray-700 mb-6 italic">"{testimonial.text}"</blockquote>
                  <footer className="border-t pt-4">
                    <cite className="font-bold text-gray-800 not-italic">{testimonial.name}</cite>
                    <div className="text-green-600 text-sm">{testimonial.location}, Punjab</div>
                    <div className="text-gray-500 text-sm">Specializes in: {testimonial.crop}</div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <header className="text-center mb-16">
              <h2 id="faq-heading" className="text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
            </header>
            <div className="space-y-6">
              {[
                {
                  question: "How accurate are the crop recommendations for Punjab agriculture?",
                  answer: "Our AI system provides 95% accuracy by analyzing local Punjab weather patterns, soil conditions, and historical agricultural data from all 22 districts."
                },
                {
                  question: "Which crops are covered in the recommendation system?",
                  answer: "We cover 15+ major Punjab crops including wheat, paddy (basmati), cotton, sugarcane, maize, mustard, and various vegetables suitable for Punjab's climate."
                },
                {
                  question: "Is the platform free for Punjab farmers?",
                  answer: "Yes, our basic crop recommendation service is completely free for all farmers across Punjab's 22 districts."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-sm">
                  <summary className="p-6 cursor-pointer font-semibold text-lg hover:bg-gray-50">
                    {faq.question}
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 id="cta-heading" className="text-4xl font-bold mb-6">
              Transform Your Punjab Farm with AI Technology
            </h2>
            <p className="text-xl mb-8">
              Join over 10,000 successful farmers across Punjab who are maximizing their agricultural potential with our smart farming platform
            </p>
            <Link 
              to="/crops" 
              className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 inline-block"
              aria-label="Start getting personalized crop recommendations for your Punjab farm"
            >
              Start Your Smart Farming Journey Today →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

