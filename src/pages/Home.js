import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🌱",
      title: t('feature_ai_title'),
      description: t('feature_ai_description')
    },
    {
      icon: "🌤️",
      title: t('feature_weather_title'),
      description: t('feature_weather_description')
    },
    {
      icon: "💰",
      title: t('feature_market_title'),
      description: t('feature_market_description')
    },
    {
      icon: "📊",
      title: t('feature_district_title'),
      description: t('feature_district_description')
    },
    {
      icon: "🔄",
      title: t('feature_rotation_title'),
      description: t('feature_rotation_description')
    },
    {
      icon: "📅",
      title: t('feature_seasonal_title'),
      description: t('feature_seasonal_description')
    }
  ];

  const stats = [
    { number: "50+", label: t('stat_crop_varieties'), icon: "🌾" },
    { number: "24", label: t('stat_districts'), icon: "📍" },
    { number: "95%", label: t('stat_accuracy'), icon: "🎯" }
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Ranchi",
      text: t('testimonial_1'),
      crop: "Paddy & Wheat"
    },
    {
      name: "Sunita Devi", 
      location: "Bokaro",
      text: t('testimonial_2'),
      crop: "Turmeric & Vegetables"
    },
    {
      name: "Manoj Singh",
      location: "Hazaribagh", 
      text: t('testimonial_3'),
      crop: "Mustard & Gram"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/crops" 
              className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              🌱 {t('btn_get_recommendations')}
            </Link>
            <Link 
              to="/weather" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              🌤️ {t('btn_check_weather')}
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
              {t('features_heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features_subheading')}
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
              {t('how_it_works_heading')}
            </h2>
            <p className="text-xl text-gray-600">{t('how_it_works_subheading')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">{t('step_1_title')}</h3>
              <p className="text-gray-600">{t('step_1_description')}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">{t('step_2_title')}</h3>
              <p className="text-gray-600">{t('step_2_description')}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">{t('step_3_title')}</h3>
              <p className="text-gray-600">{t('step_3_description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('testimonials_heading')}
            </h2>
            <p className="text-xl text-gray-600">{t('testimonials_subheading')}</p>
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
            {t('cta_heading')}
          </h2>
          <p className="text-xl mb-8">
            {t('cta_subheading')}
          </p>
          <Link 
            to="/crops" 
            className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 inline-block"
          >
            {t('btn_start_journey')} →
          </Link>
        </div>
      </section>
    </div>
  );
}

