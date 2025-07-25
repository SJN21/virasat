// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/home.json';
import translationHI from './locales/hi/home.json';
import translationGU from './locales/gu/home.json';

const resources = {
  en: { translation: translationEN },
  hi: { translation: translationHI },
  gu: { translation: translationGU }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
