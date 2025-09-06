import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      home: "Home",
      crops: "Crops",
      weather: "Weather",
      calendar: "Calendar",
      resources: "Resources",
      profile: "Profile",
      
      // Hero Section
      hero_title: "Welcome to Jharkhand's Smart Farming Portal!",
      hero_subtitle: "Get expert crop advice powered by AI, real-time weather data, and local agricultural insights. Make informed decisions and boost your farm productivity.",
      btn_get_recommendations: "Get Crop Recommendations",
      btn_check_weather: "Check Weather",
      
      // Stats
      stat_crop_varieties: "Crop Varieties",
      stat_districts: "Districts Covered", 
      stat_accuracy: "Accuracy Rate",
      
      // Features
      features_heading: "Why Choose Our Platform?",
      features_subheading: "Comprehensive farming solutions designed specifically for Jharkhand's unique agricultural landscape",
      feature_ai_title: "AI-Powered Crop Recommendations",
      feature_ai_description: "Get personalized crop suggestions based on your soil, weather, and farming conditions using advanced AI algorithms.",
      feature_weather_title: "Real-Time Weather Integration", 
      feature_weather_description: "Access live weather data and harvest-time weather predictions to make informed farming decisions.",
      feature_market_title: "Market Price Analysis",
      feature_market_description: "View current market prices, investment requirements, and expected returns for different crops.",
      feature_district_title: "District-Specific Insights",
      feature_district_description: "Tailored recommendations for all 24 districts of Jharkhand based on local agricultural patterns.",
      feature_rotation_title: "Crop Rotation Planning",
      feature_rotation_description: "Smart suggestions for crop rotation to maintain soil health and maximize productivity.",
      feature_seasonal_title: "Seasonal Planning",
      feature_seasonal_description: "Complete planting and harvesting calendar with optimal timing for each crop variety.",
      
      // How It Works
      how_it_works_heading: "How It Works",
      how_it_works_subheading: "Simple steps to get personalized crop recommendations",
      step_1_title: "Enter Your Details",
      step_1_description: "Provide information about your district, soil type, farm size, and available resources",
      step_2_title: "AI Analysis", 
      step_2_description: "Our AI system analyzes weather patterns, soil conditions, and market trends",
      step_3_title: "Get Recommendations",
      step_3_description: "Receive personalized crop suggestions with planting schedules and profit estimates",
      
      // Testimonials
      testimonials_heading: "Success Stories",
      testimonials_subheading: "Hear from farmers who transformed their agriculture with our platform",
      testimonial_1: "This platform helped me increase my farm yield by 40%. The weather predictions are very accurate!",
      testimonial_2: "I started growing turmeric based on the recommendation. Now I earn ₹80,000 more per season!",
      testimonial_3: "The market price information helps me decide when to sell. Very useful for planning.",
      
      // CTA
      cta_heading: "Ready to Transform Your Farming?",
      cta_subheading: "Join thousands of successful farmers in Jharkhand who are already using our platform",
      btn_start_journey: "Start Your Journey Today",
    }
  },
  hi: {
    translation: {
      // Navbar
      home: "होम",
      crops: "फसलें",
      weather: "मौसम",
      calendar: "कैलेंडर",
      resources: "संसाधन",
      profile: "प्रोफाइल",
      
      // Hero Section
      hero_title: "झारखंड के स्मार्ट फार्मिंग पोर्टल में आपका स्वागत है!",
      hero_subtitle: "AI द्वारा संचालित विशेषज्ञ फसल सलाह, वास्तविक समय मौसम डेटा और स्थानीय कृषि अंतर्दृष्टि प्राप्त करें। सूचित निर्णय लें और अपनी खेती की उत्पादकता बढ़ाएं।",
      btn_get_recommendations: "फसल की सिफारिशें प्राप्त करें",
      btn_check_weather: "मौसम की जांच करें",
      
      // Stats
      stat_crop_varieties: "फसल की किस्में",
      stat_districts: "कवर किए गए जिले",
      stat_accuracy: "सटीकता दर",
      
      // Features
      features_heading: "हमारा प्लेटफॉर्म क्यों चुनें?",
      features_subheading: "झारखंड के अनूठे कृषि परिदृश्य के लिए विशेष रूप से डिज़ाइन किए गए व्यापक कृषि समाधान",
      feature_ai_title: "AI-संचालित फसल सिफारिशें",
      feature_ai_description: "उन्नत AI एल्गोरिदम का उपयोग करके अपनी मिट्टी, मौसम और खेती की स्थितियों के आधार पर व्यक्तिगत फसल सुझाव प्राप्त करें।",
      feature_weather_title: "वास्तविक समय मौसम एकीकरण",
      feature_weather_description: "सूचित कृषि निर्णय लेने के लिए लाइव मौसम डेटा और फसल के समय मौसम की भविष्यवाणी तक पहुंचें।",
      feature_market_title: "बाजार मूल्य विश्लेषण",
      feature_market_description: "विभिन्न फसलों के लिए वर्तमान बाजार मूल्य, निवेश आवश्यकताएं और अपेक्षित रिटर्न देखें।",
      feature_district_title: "जिला-विशिष्ट अंतर्दृष्टि",
      feature_district_description: "स्थानीय कृषि पैटर्न के आधार पर झारखंड के सभी 24 जिलों के लिए तैयार की गई सिफारिशें।",
      feature_rotation_title: "फसल चक्र योजना",
      feature_rotation_description: "मिट्टी के स्वास्थ्य को बनाए रखने और उत्पादकता को अधिकतम करने के लिए फसल चक्र के लिए स्मार्ट सुझाव।",
      feature_seasonal_title: "मौसमी योजना",
      feature_seasonal_description: "प्रत्येक फसल किस्म के लिए इष्टतम समय के साथ पूर्ण रोपण और कटाई कैलेंडर।",
      
      // How It Works
      how_it_works_heading: "यह कैसे काम करता है",
      how_it_works_subheading: "व्यक्तिगत फसल सिफारिशें प्राप्त करने के लिए सरल कदम",
      step_1_title: "अपना विवरण दर्ज करें",
      step_1_description: "अपने जिले, मिट्टी के प्रकार, खेत के आकार और उपलब्ध संसाधनों के बारे में जानकारी प्रदान करें",
      step_2_title: "AI विश्लेषण",
      step_2_description: "हमारा AI सिस्टम मौसम पैटर्न, मिट्टी की स्थिति और बाजार के रुझान का विश्लेषण करता है",
      step_3_title: "सिफारिशें प्राप्त करें",
      step_3_description: "रोपण कार्यक्रम और लाभ अनुमान के साथ व्यक्तिगत फसल सुझाव प्राप्त करें",
      
      // Testimonials
      testimonials_heading: "सफलता की कहानियां",
      testimonials_subheading: "उन किसानों से सुनें जिन्होंने हमारे प्लेटफॉर्म से अपनी कृषि को बदल दिया है",
      testimonial_1: "इस प्लेटफॉर्म ने मेरी खेती की उपज को 40% बढ़ाने में मदद की। मौसम की भविष्यवाणी बहुत सटीक है!",
      testimonial_2: "मैंने सिफारिश के आधार पर हल्दी उगाना शुरू किया। अब मैं प्रति सीजन ₹80,000 अधिक कमाती हूं!",
      testimonial_3: "बाजार मूल्य की जानकारी मुझे बेचने के समय का फैसला करने में मदद करती है। योजना बनाने के लिए बहुत उपयोगी।",
      
      // CTA
      cta_heading: "अपनी खेती को बदलने के लिए तैयार हैं?",
      cta_subheading: "झारखंड के हजारों सफल किसानों के साथ जुड़ें जो पहले से ही हमारे प्लेटफॉर्म का उपयोग कर रहे हैं",
      btn_start_journey: "आज ही अपनी यात्रा शुरू करें",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
