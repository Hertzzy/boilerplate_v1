// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt }
  },
  lng: 'pt', // idioma padrão
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
