import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      fr: {
        translation: frTranslations
      }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    load: 'languageOnly', // Use 'fr' instead of 'fr-FR'
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
    },
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
