import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      heroTitle: "Luxury African Safaris",
      heroSubtitle:
        "Extraordinary journeys crafted across Africa’s most breathtaking destinations.",
      destinations: "Iconic Destinations",
      discover: "Discover More",
      contact: "Contact Us",
    },
  },
  fr: {
    translation: {
      heroTitle: "Safaris Africains de Luxe",
      heroSubtitle:
        "Des voyages extraordinaires à travers les destinations les plus magnifiques d’Afrique.",
      destinations: "Destinations Iconiques",
      discover: "Découvrir",
      contact: "Contactez-nous",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
