import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            home: "Home",
            heroTxt: "I'm Aurelien, a freelancer specializing in creating fully responsive websites for artisans. I work with craftsmen and small businesses, offering complete digital solutions, from showcase websites to e-commerce platforms.",
            hetBtn: "See My Work",
            CopyR: "All rights reserved",
            pdc: "Privacy Policy",
            sitemap: "Sitemap",
        }
      },
      fr: {
        translation: {
            home: "Accueil",
            heroTxt: "Je m'appelle Aurélien, je suis un freelance spécialisé dans la création de sites web entièrement responsives pour les artisans. Je travaille avec des artisans et des petites entreprises, offrant des solutions digitales complètes, allant des sites vitrines aux plateformes e-commerce.",
            hetBtn: "Mes Projets",
            CopyR: "Tous droits réservés",
            pdc: "Politique de confidentialité",
            sitemap: "Plan de site",
        }
      }
    },
    fallbackLng: 'en', // Langue par défaut
    detection: {
      order: ['navigator', 'htmlTag'],
      lookupNavigator: true,
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
