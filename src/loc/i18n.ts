import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './en';
import deTranslations from './de';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // Specify the supported languages
        supportedLngs: ['en', 'de'],

        // Fallback language
        fallbackLng: 'en',

        // Default namespace used
        defaultNS: 'translations',

        // Load resources for each language
        resources: {
            en: {
                translations: enTranslations

            },
            de: {
                translations: deTranslations

            },
        },
    });

export default i18n;
