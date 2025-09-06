import React, { useState, useMemo } from "react";
import { University, Building, Microscope, Tractor, BookOpen, Phone, MapPin, Link as LinkIcon, Search, Tag, Wheat, Tent, Info } from 'lucide-react';

// --- Smart Resources Component for Punjab ---

export default function Resources() {
  const [activeTab, setActiveTab] = useState("schemes");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // --- PUNJAB SPECIFIC DATA ---
  const districts = ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Gurdaspur", "Hoshiarpur", "Sangrur", "Khanna"];

  const governmentSchemes = [
    { 
        title: "PM-KISAN Samman Nidhi", 
        description: "A central scheme providing income support to all landholding farmer families.", 
        benefit: "₹6,000 per year in three equal installments of ₹2,000.", 
        eligibility: "All landholding farmer families across the country.", 
        link: "https://pmkisan.gov.in/", 
        contact: "Helpline: 155261" 
    },
    { 
        title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)", 
        description: "Provides comprehensive insurance coverage against crop failure, helping to stabilize farmers' income.", 
        benefit: "Insurance cover for all stages of the crop cycle including post-harvest losses.", 
        eligibility: "All farmers, including sharecroppers and tenant farmers, growing notified crops in notified areas.", 
        link: "https://pmfby.gov.in/", 
        contact: "Agri Insurance Helpline" 
    },
    { 
        title: "Kisan Credit Card (KCC)", 
        description: "A credit scheme to ensure that farmers have access to timely and affordable credit.", 
        benefit: "Short-term credit for cultivation, post-harvest expenses, and consumption requirements at low interest rates.", 
        eligibility: "All farmers - individuals/joint borrowers who are owner cultivators.", 
        link: "#", 
        contact: "Contact your nearest nationalized bank branch." 
    },
    { 
        title: "Punjab State Subsidy on Agricultural Machinery", 
        description: "State scheme to promote farm mechanization by providing subsidies on equipment.", 
        benefit: "Up to 50% subsidy on various agricultural implements like tractors, rotavators, and happy seeders.", 
        eligibility: "Farmers and cooperative societies in Punjab.", 
        link: "https://agrimachinery.nic.in/", 
        contact: "Contact District Agricultural Officer." 
    }
  ];

  const marketInformation = [
    { 
        market: "Khanna Mandi", 
        district: "Khanna", 
        contact: "Contact local APMC", 
        crops: ["Wheat", "Paddy", "Maize"], 
        facilities: ["Asia's Largest Grain Market", "Electronic Weighing", "Storage Godowns"] 
    },
    { 
        market: "Ludhiana Mandi", 
        district: "Ludhiana", 
        contact: "Contact local APMC", 
        crops: ["Vegetables", "Fruits", "Grains"], 
        facilities: ["Cold Storage", "Grading Facilities", "Retail Outlets"] 
    },
    { 
        market: "Jalandhar Mandi", 
        district: "Jalandhar", 
        contact: "Contact local APMC", 
        crops: ["Potato", "Cauliflower", "Carrot", "Kinnow"], 
        facilities: ["Specialized Vegetable Market", "Packaging Units"] 
    },
    { 
        market: "Patiala Mandi", 
        district: "Patiala", 
        contact: "Contact local APMC", 
        crops: ["Paddy", "Wheat", "Mustard"], 
        facilities: ["Drying Platforms", "Quality Testing Labs"] 
    }
  ];

  const technicalSupport = [
    { 
        category: "University Support", 
        provider: "Punjab Agricultural University (PAU), Ludhiana", 
        service: "Leading agricultural research, extension services, and farmer training.", 
        contact: "0161-2401960", 
        link: "https://www.pau.edu/", 
        district: "Ludhiana" 
    },
    { 
        category: "Soil & Water Testing", 
        provider: "PAU and State Dept. of Agriculture", 
        service: "Provides Soil Health Cards and analysis for balanced fertilizer application.", 
        contact: "Visit nearest KVK or District Agri Office", 
        link: "#", 
        district: "All" 
    },
    { 
        category: "Krishi Vigyan Kendra (KVK)", 
        provider: "Operated under PAU", 
        service: "District-level farm science centers for technology dissemination and training.", 
        contact: "Find your local KVK online", 
        link: "https://www.pau.edu/index.php?_act=manage&_mod=kvk_front", 
        district: "All" 
    },
    { 
        category: "Weather Advisory", 
        provider: "IMD Agromet & PAU", 
        service: "Provides district-specific weather forecasts and crop advisories.", 
        contact: "Check PAU's website", 
        link: "https://www.pau.edu/index.php?_act=manage&_mod=weather", 
        district: "All" 
    }
  ];

  const inputSuppliers = [
    { 
        category: "Seeds & Fertilizers", 
        suppliers: [
            { name: "Punjab Agro Industries Corporation", contact: "1800-180-2500", speciality: "Certified seeds, fertilizers, and agro-chemicals." },
            { name: "Markfed Punjab", contact: "0172-2660151", speciality: "Cooperatives for seeds and fertilizers at subsidized rates." },
            { name: "IFFCO Bazar", contact: "1800-103-1967", speciality: "Wide range of quality seeds and fertilizers." }
        ] 
    },
    { 
        category: "Agricultural Machinery", 
        suppliers: [
            { name: "Custom Hiring Centers (CHCs)", contact: "Available in most blocks", speciality: "Rent modern farm equipment on an hourly basis." },
            { name: "Mahindra & Swaraj Tractors", contact: "Check local dealerships", speciality: "Leading tractor and implement manufacturers." },
            { name: "State Agriculture Department", contact: "District offices", speciality: "Information on machinery subsidies." }
        ] 
    }
  ];

  const filteredContent = useMemo(() => {
    let content = [];
    if (activeTab === 'schemes') content = governmentSchemes;
    if (activeTab === 'markets') content = marketInformation;
    if (activeTab === 'technical') content = technicalSupport;
    if (activeTab === 'inputs') content = inputSuppliers;

    let districtFiltered = content;
    if(selectedDistrict && (activeTab === 'markets' || activeTab === 'technical')){
      districtFiltered = content.filter(item => item.district === selectedDistrict || item.district === "All");
    }

    if (!searchTerm) return districtFiltered;

    const lowerCaseSearch = searchTerm.toLowerCase();

    if(activeTab === 'inputs'){
        return districtFiltered.map(category => {
            const filteredSuppliers = category.suppliers.filter(
              supplier => supplier.name.toLowerCase().includes(lowerCaseSearch) ||
                          supplier.speciality.toLowerCase().includes(lowerCaseSearch)
            );
            return { ...category, suppliers: filteredSuppliers };
          }).filter(category => category.suppliers.length > 0);
    }

    return districtFiltered.filter(item => 
        Object.values(item).some(val => 
            String(val).toLowerCase().includes(lowerCaseSearch)
        )
    );
  }, [activeTab, searchTerm, selectedDistrict]);

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <Wheat className="text-green-600 w-12 h-12" /> Punjab Farmer's Resource Hub
        </h1>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Your one-stop guide to schemes, markets, and support for agriculture in Punjab.</p>
      </header>

      {/* Smart Controls */}
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
                type="text"
                placeholder="Search for a scheme, market, or resource..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div>
            <select
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-green-500"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={activeTab !== 'markets' && activeTab !== 'technical'}
            >
                <option value="">Filter by District (for Markets/Support)</option>
                {districts.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button onClick={() => setActiveTab('schemes')} className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === 'schemes' ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}><University size={16}/> Schemes</button>
        <button onClick={() => setActiveTab('markets')} className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === 'markets' ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}><Tent size={16}/> Mandis</button>
        <button onClick={() => setActiveTab('technical')} className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === 'technical' ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}><Microscope size={16}/> Support</button>
        <button onClick={() => setActiveTab('inputs')} className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${activeTab === 'inputs' ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}><Tractor size={16}/> Suppliers</button>
      </div>

      <div className="min-h-[400px]">
        {filteredContent.length === 0 ? (
            <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md"><Info className="w-12 h-12 mx-auto text-gray-400"/><h3 className="mt-4 text-xl font-semibold text-gray-700">No Resources Found</h3><p className="mt-2 text-gray-500">Try adjusting your search term or filter settings.</p></div>
        ) : (
        <>
        {/* Government Schemes */}
        {activeTab === "schemes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredContent.map((scheme, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{scheme.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{scheme.description}</p>
                    <div className="space-y-2 text-sm bg-blue-50 p-4 rounded-md">
                        <div><strong className="text-blue-800">Benefit:</strong> {scheme.benefit}</div>
                        <div><strong className="text-blue-800">Eligibility:</strong> {scheme.eligibility}</div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500 flex items-center gap-2"><Phone size={14}/> {scheme.contact}</span>
                        <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1">Visit Site <LinkIcon size={14}/></a>
                    </div>
                </div>
            ))}
            </div>
        )}
        {/* Market Info */}
        {activeTab === "markets" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredContent.map((market, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{market.market}</h3>
                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-2"><MapPin size={14}/> {market.district}</p>
                    <div className="mb-4">
                        <strong className="text-sm text-green-800">Main Crops:</strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {market.crops.map(c => <span key={c} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{c}</span>)}
                        </div>
                    </div>
                    <div className="mb-4">
                        <strong className="text-sm text-green-800">Facilities:</strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                             {market.facilities.map(f => <span key={f} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{f}</span>)}
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500 flex items-center gap-2"><Phone size={14}/> {market.contact}</span>
                        <button className="text-sm font-bold bg-green-600 text-white py-1 px-3 rounded-full hover:bg-green-700 transition-colors">Live Prices (Soon)</button>
                    </div>
                </div>
                ))}
            </div>
        )}
        {/* Technical Support */}
        {activeTab === "technical" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredContent.map((support, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{support.category}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{support.service}</p>
                    <div className="text-sm text-gray-500 mb-4"><strong>Provider:</strong> {support.provider}</div>
                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500 flex items-center gap-2"><Phone size={14}/> {support.contact}</span>
                        <a href={support.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-purple-600 hover:underline flex items-center gap-1">Learn More <LinkIcon size={14}/></a>
                    </div>
                </div>
                ))}
            </div>
        )}
        {/* Input Suppliers */}
        {activeTab === "inputs" && (
            <div className="space-y-8">
                {filteredContent.map((category, index) => (
                    <div key={index}>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                           {category.category === 'Seeds & Fertilizers' ? <Wheat size={20}/> : <Tractor size={20}/>} {category.category}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.suppliers.map((supplier, supIndex) => (
                            <div key={supIndex} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
                                <h4 className="font-bold text-lg text-gray-800">{supplier.name}</h4>
                                <p className="text-sm text-gray-600 mt-1 mb-3">{supplier.speciality}</p>
                                <div className="mt-2 pt-2 border-t">
                                     <span className="text-sm font-medium text-yellow-700 flex items-center gap-2"><Phone size={14}/> {supplier.contact}</span>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        )}
        </>
        )}
      </div>
    </div>
    </div>
<<<<<<< HEAD
  );
=======
  );
>>>>>>> f4c1f6a (feat: Add responsive and informative site footer)
}