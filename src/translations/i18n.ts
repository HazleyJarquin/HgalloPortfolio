import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./en/default.json";
import translationES from "./es/default.json";

const resources = {
  en: {
    name: "English",
    translation: translationEN,
  },
  es: {
    name: "Spanish",
    translation: translationES,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    interpolation: { escapeValue: false },
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    resources,
  });

export default i18next;
