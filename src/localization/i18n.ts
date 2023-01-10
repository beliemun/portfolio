import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ko } from "./locales";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ko: { translation: ko },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.changeLanguage(navigator.language.slice(0, 2));

export const replace = (text: string, values: any[]) => {
  let replacedText = text;
  values.forEach((value, index) => {
    replacedText = replacedText.replace(`/${index + 1}/`, `${value}`);
  });
  return replacedText;
};

export default i18n;
