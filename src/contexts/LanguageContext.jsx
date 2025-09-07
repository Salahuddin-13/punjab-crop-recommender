import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations'; // We will create this file next

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'pa' for Punjabi

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'pa' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);