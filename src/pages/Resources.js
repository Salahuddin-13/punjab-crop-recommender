import React, { useState } from "react";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("schemes");

  const governmentSchemes = [
    {
      title: "PM-KISAN",
      description: "Income support to farmer families",
      benefit: "₹6,000 per year in three installments",
      eligibility: "All landholding farmer families",
      contact: "Call: 155261 or visit pmkisan.gov.in"
    },
    {
      title: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme",
      benefit: "Up to 100% coverage for crop losses",
      eligibility: "All farmers (loanee and non-loanee)",
      contact: "Visit: pmfby.gov.in"
    },
    {
      title: "Kisan Credit Card",
      description: "Credit facility for farmers",
      benefit: "Low interest agricultural loans",
      eligibility: "Farmers with land ownership",
      contact: "Visit nearest bank branch"
    },
    {
      title: "Jharkhand Kisan Karj Maafi",
      description: "State loan waiver scheme",
      benefit: "Loan waiver up to ₹50,000",
      eligibility: "Small and marginal farmers of Jharkhand",
      contact: "District Collector Office"
    }
  ];

  const marketInformation = [
    {
      market: "Ranchi Mandi",
      location: "Ranchi",
      contact: "0651-2446789",
      crops: ["Rice", "Wheat", "Vegetables", "Pulses"],
      facilities: ["Weighing", "Storage", "Banking"]
    },
    {
      market: "Bokaro Agricultural Market",
      location: "Bokaro",
      contact: "06542-233456",
      crops: ["Maize", "Potato", "Onion", "Tomato"],
      facilities: ["Cold Storage", "Grading", "Packaging"]
    },
    {
      market: "Dhanbad Krishi Mandi",
      location: "Dhanbad",
      contact: "0326-2345678",
      crops: ["Vegetables", "Fruits", "Grains"],
      facilities: ["Electronic Weighing", "Quality Testing"]
    }
  ];

  const technicalSupport = [
    {
      category: "Soil Testing",
      provider: "Department of Agriculture, Jharkhand",
      service: "Free soil health card and testing",
      contact: "Call: 0651-2446123",
      location: "All district headquarters"
    },
    {
      category: "Pest Management",
      provider: "Krishi Vigyan Kendra",
      service: "Integrated pest management training",
      contact: "Visit nearest KVK center",
      location: "24 KVK centers across Jharkhand"
    },
    {
      category: "Modern Farming Techniques",
      provider: "ICAR-RCER",
      service: "Research-based farming solutions",
      contact: "0651-2450833",
      location: "Patna Road, Ranchi"
    },
    {
      category: "Weather Advisory",
      provider: "IMD Agromet",
      service: "Weather-based agro advisories",
      contact: "SMS WEATHER to 50000",
      location: "SMS service available"
    }
  ];

  const inputSuppliers = [
    {
      category: "Seeds",
      suppliers: [
        { name: "Jharkhand State Seed Corporation", contact: "0651-2481234", speciality: "Certified seeds" },
        { name: "IFFCO Bazar", contact: "1800-180-1551", speciality: "Quality seeds & fertilizers" },
        { name: "Local Seed Dealers", contact: "District wise availability", speciality: "Traditional varieties" }
      ]
    },
    {
      category: "Fertilizers",
      suppliers: [
        { name: "IFFCO", contact: "1800-103-3331", speciality: "Urea, DAP, NPK" },
        { name: "NFL", contact: "0651-2234567", speciality: "Nitrogen fertilizers" },
        { name: "Cooperative Societies", contact: "Block level availability", speciality: "Subsidized fertilizers" }
      ]
    },
    {
      category: "Equipment",
      suppliers: [
        { name: "Mahindra Tractors", contact: "1800-419-1001", speciality: "Tractors & implements" },
        { name: "TAFE", contact: "1800-425-8800", speciality: "Agricultural machinery" },
        { name: "Custom Hiring Centers", contact: "District wise", speciality: "Equipment rental" }
      ]
    }
  ];

  const trainingPrograms = [
    {
      program: "Sustainable Agriculture Practices",
      duration: "5 days",
      provider: "State Agriculture Department",
      cost: "Free",
      benefits: ["Organic farming", "Water conservation", "Soil health management"]
    },
    {
      program: "Digital Literacy for Farmers",
      duration: "3 days",
      provider: "CSC Digital Seva",
      cost: "₹500",
      benefits: ["Mobile banking", "Online crop selling", "Digital payments"]
    },
    {
      program: "Modern Irrigation Techniques",
      duration: "2 days",
      provider: "Water Resources Department",
      cost: "Free",
      benefits: ["Drip irrigation", "Sprinkler systems", "Water management"]
    },
    {
      program: "Value Addition & Processing",
      duration: "7 days",
      provider: "Food Processing Department",
      cost: "₹1000",
      benefits: ["Food processing", "Packaging", "Marketing"]
    }
  ];

  const emergencyContacts = [
    { service: "Agricultural Helpline", number: "1800-180-1551", availability: "24/7" },
    { service: "Kisan Call Center", number: "1800-180-1551", availability: "6 AM - 10 PM" },
    { service: "Weather Information", number: "1800-180-1717", availability: "24/7" },
    { service: "Veterinary Helpline", number: "1962", availability: "24/7" },
    { service: "State Agriculture Dept", number: "0651-2446123", availability: "Office hours" }
  ];

  const tabs = [
    { id: "schemes", label: "Government Schemes", icon: "🏛️" },
    { id: "markets", label: "Market Information", icon: "🏪" },
    { id: "technical", label: "Technical Support", icon: "🔬" },
    { id: "inputs", label: "Input Suppliers", icon: "🌱" },
    { id: "training", label: "Training Programs", icon: "📚" },
    { id: "emergency", label: "Emergency Contacts", icon: "📞" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">📚 Farming Resources Hub</h1>
        <p className="text-lg text-gray-600">Complete guide to agricultural resources in Jharkhand</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-lg mb-6">
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-green-500 text-green-600 bg-green-50"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Government Schemes */}
          {activeTab === "schemes" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🏛️ Government Schemes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {governmentSchemes.map((scheme, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-lg font-bold text-blue-800 mb-2">{scheme.title}</h3>
                    <p className="text-gray-700 mb-3">{scheme.description}</p>
                    <div className="space-y-2 text-sm">
                      <div><strong>Benefit:</strong> {scheme.benefit}</div>
                      <div><strong>Eligibility:</strong> {scheme.eligibility}</div>
                      <div><strong>Contact:</strong> {scheme.contact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Market Information */}
          {activeTab === "markets" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🏪 Market Information</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {marketInformation.map((market, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-lg font-bold text-green-800 mb-2">{market.market}</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>Location:</strong> {market.location}</div>
                      <div><strong>Contact:</strong> {market.contact}</div>
                      <div><strong>Main Crops:</strong> {market.crops.join(", ")}</div>
                      <div><strong>Facilities:</strong> {market.facilities.join(", ")}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Support */}
          {activeTab === "technical" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🔬 Technical Support</h2>
              <div className="space-y-4">
                {technicalSupport.map((support, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-purple-800 mb-2">{support.category}</h3>
                        <p className="text-gray-700 mb-2">{support.service}</p>
                        <div className="text-sm text-gray-600">
                          <div><strong>Provider:</strong> {support.provider}</div>
                          <div><strong>Location:</strong> {support.location}</div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4">
                        <div className="bg-purple-600 text-white px-4 py-2 rounded text-sm font-medium">
                          {support.contact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input Suppliers */}
          {activeTab === "inputs" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🌱 Input Suppliers</h2>
              {inputSuppliers.map((category, index) => (
                <div key={index} className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-lg font-bold text-yellow-800 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.suppliers.map((supplier, supplierIndex) => (
                      <div key={supplierIndex} className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-gray-800">{supplier.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{supplier.speciality}</p>
                        <p className="text-sm text-blue-600 mt-2">{supplier.contact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Training Programs */}
          {activeTab === "training" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Training Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainingPrograms.map((program, index) => (
                  <div key={index} className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                    <h3 className="text-lg font-bold text-indigo-800 mb-2">{program.program}</h3>
                    <div className="space-y-2 text-sm mb-4">
                      <div><strong>Duration:</strong> {program.duration}</div>
                      <div><strong>Provider:</strong> {program.provider}</div>
                      <div><strong>Cost:</strong> {program.cost}</div>
                    </div>
                    <div>
                      <strong className="text-sm">Benefits:</strong>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                        {program.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Emergency Contacts */}
          {activeTab === "emergency" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📞 Emergency Contacts</h2>
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="bg-white p-4 rounded border-l-4 border-red-400">
                      <h3 className="font-bold text-gray-800">{contact.service}</h3>
                      <p className="text-2xl font-bold text-red-600 my-2">{contact.number}</p>
                      <p className="text-sm text-gray-600">Available: {contact.availability}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-100 rounded border border-red-300">
                  <p className="text-sm text-red-800">
                    <strong>Note:</strong> Keep these numbers handy for quick access during emergencies. 
                    Most helplines provide services in Hindi and local languages.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}