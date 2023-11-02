import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import fiTranslation from "./locales/fi.json";

var lang = "en"; // default language

// Get saved language from local storage
if (typeof window !== "undefined") {
  const storedLanguage = window.localStorage.getItem("lang");
  if (storedLanguage) {
    lang = storedLanguage;
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fi: {
      translation: fiTranslation,
    },
  },
  lng: lang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
