import React, { useState } from "react";

export default function LanguageSelector({ isMobile = false }) {
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी (Hindi)" },
    { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
    { code: "bn", name: "বাংলা (Bengali)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "ml", name: "മലയാളം (Malayalam)" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
    { code: "gu", name: "ગુજરાતી (Gujarati)" },
    { code: "ur", name: "اردو (Urdu)" }
  ];

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language.name);
    setIsOpen(false);
    // In a real application, you would change the language here
    console.log(`Language changed to: ${language.code}`);
  };

  return (
    <div className="language-selector">
      {isMobile ? (
        <div>
          <div className="text-center font-medium text-gray-700 mb-2">Select Language</div>
          <div className="grid grid-cols-1 gap-2">
            {languages.map((language) => (
              <div
                key={language.code}
                className={`language-option ${currentLanguage === language.name ? 'active' : ''}`}
                onClick={() => handleLanguageChange(language)}
              >
                <span>{language.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <button 
            className="language-button" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>🌐</span>
            <span>{currentLanguage}</span>
            <span>▼</span>
          </button>
          
          {isOpen && (
            <div className="language-dropdown show">
              {languages.map((language) => (
                <div
                  key={language.code}
                  className={`language-option ${currentLanguage === language.name ? 'active' : ''}`}
                  onClick={() => handleLanguageChange(language)}
                >
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}