import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
import zodEn from "zod-i18n-map/locales/en/zod.json";
import en from "./locales/en/common.json";
import vi from "./locales/vi/common.json";
import zodVi from "./locales/vi/zod.json";

i18n.use(initReactI18next).init({
  lng: "vi",
  resources: {
    vi: {
      translation: vi,
      zod: zodVi,
    },
    en: {
      translation: en,
      zod: zodEn,
    },
  },
  supportedLngs: ["vi"],
  fallbackLng: ["vi"],
});

z.config({
  customError: (issue) => {
    const translation = i18n.getResource(i18n.language, "zod", issue.code);
    return { message: translation || issue.message };
  },
});

export default i18n;
