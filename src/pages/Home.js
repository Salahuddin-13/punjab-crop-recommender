import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: "🌱",
      title: "AI-Powered Crop Recommendations",
      description: "Get personalized crop suggestions based on your soil, weather, and farming conditions using advanced AI algorithms."
    },
    {
      icon: "🌤️",
      title: "Real-Time Weather Integration",
      description: "Access live weather data and harvest-time weather predictions to make informed farming decisions."
    },
    {
      icon: "💰",
      title: "Market Price Analysis",
      description: "View current market prices, investment requirements, and expected returns for different crops."
    },
    {
      icon: "📊",
      title: "District-Specific Insights",
      description: "Tailored recommendations for all 24 districts of Jharkhand based on local agricultural patterns."
    },
    {
      icon: "🔄",
      title: "Crop Rotation Planning",
      description: "Smart suggestions for crop rotation to maintain soil health and maximize productivity."
    },
    {
      icon: "📅",
      title: "Seasonal Planning",
      description: "Complete planting and harvesting calendar with optimal timing for each crop variety."
    }
  ];

  const stats = [
    { number: "50+", label: "Crop Varieties", icon: "🌾" },
    { number: "24", label: "Districts Covered", icon: "📍" },
    { number: "95%", label: "Accuracy Rate", icon: "🎯" }
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Ranchi",
      text: "This platform helped me increase my farm yield by 40%. The weather predictions are very accurate!",
      crop: "Paddy & Wheat"
    },
    {
      name: "Sunita Devi", 
      location: "Bokaro",
      text: "I started growing turmeric based on the recommendation. Now I earn ₹80,000 more per season!",
      crop: "Turmeric & Vegetables"
    },
    {
      name: "Manoj Singh",
      location: "Hazaribagh", 
      text: "The market price information helps me decide when to sell. Very useful for planning.",
      crop: "Mustard & Gram"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Jharkhand's Smart Farming Portal!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Get expert crop advice powered by AI, real-time weather data, and local agricultural insights. 
            Make informed decisions and boost your farm productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/crops" 
              className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              🌱 Get Crop Recommendations
            </Link>
            <Link 
              to="/weather" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              🌤️ Check Weather
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive farming solutions designed specifically for Jharkhand's unique agricultural landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Simple steps to get personalized crop recommendations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Enter Your Details</h3>
              <p className="text-gray-600">Provide information about your district, soil type, farm size, and available resources</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
              <p className="text-gray-600">Our AI system analyzes weather patterns, soil conditions, and market trends</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Get Recommendations</h3>
              <p className="text-gray-600">Receive personalized crop suggestions with planting schedules and profit estimates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">Hear from farmers who transformed their agriculture with our platform</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-green-600 text-sm">{testimonial.location}</div>
                  <div className="text-gray-500 text-sm">{testimonial.crop}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful farmers in Jharkhand who are already using our platform
          </p>
          <Link 
            to="/crops" 
            className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 inline-block"
          >
            Start Your Journey Today →
          </Link>
        </div>
      </section>
    </div>
  );
}

