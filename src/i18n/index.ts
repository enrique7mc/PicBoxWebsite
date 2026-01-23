import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import English translations
import commonEN from './locales/en/common.json';
import homeEN from './locales/en/home.json';
import faqEN from './locales/en/faq.json';
import privacyEN from './locales/en/privacy.json';

// Import Spanish translations
import commonES from './locales/es/common.json';
import homeES from './locales/es/home.json';
import faqES from './locales/es/faq.json';
import privacyES from './locales/es/privacy.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: commonEN,
    home: homeEN,
    faq: faqEN,
    privacy: privacyEN,
  },
  es: {
    common: commonES,
    home: homeES,
    faq: faqES,
    privacy: privacyES,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS,
    ns: ['common', 'home', 'faq', 'privacy'],

    detection: {
      // Order of language detection
      order: ['path', 'localStorage', 'navigator'],
      // Cache user language preference
      caches: ['localStorage'],
      // Look for language in URL path (e.g., /es/about)
      lookupFromPathIndex: 0,
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
