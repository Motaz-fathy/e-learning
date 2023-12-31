import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import TranslateEnglish from './uitilty/Lang/en.json'
import TranslateArabic from './uitilty/Lang/ar.json'


i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: TranslateEnglish
    },
    ar: {
      translation: TranslateArabic
    }
  },
  lng: "en",
  fallbackLng: "ar ,en ",
  
  interpolation: {
    escapeValue: false
  },
 
});

export default i18n 