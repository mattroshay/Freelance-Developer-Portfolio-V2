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
      // Respect ?lang=fr / ?lang=en first so hreflang links in Google results
      // (and shared URLs) land visitors in the right language; then
      // fall back to previously-chosen language, then browser preference.
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
    },
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
