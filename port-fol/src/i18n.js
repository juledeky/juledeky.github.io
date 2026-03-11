import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nl from './Locales/nl/translation.json';
import en from './Locales/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    nl: { translation: nl },
    en: { translation: en }  // ← make sure this is here
  },
  lng: 'nl',
  fallbackLng: 'nl',  // ← fallback to nl, not en
  interpolation: { escapeValue: false }
});

export default i18n;

