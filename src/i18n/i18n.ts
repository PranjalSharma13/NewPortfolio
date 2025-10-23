import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
      },
       home: {
        title: "Hey, I’m Pranjal {{wave}}",
        body1:
          "Talented ✨ Software Developer with 3 years of professional experience excelling in both backend and frontend development (full stack) to create comprehensive applications.",
        body2:
          "Experienced in seamlessly integrating, rigorously testing, and fortifying enterprise applications, with a strong track record of providing robust support.",
        body3:
          "Proficient in constructing robust backend systems and intuitive user interfaces, leveraging Java, Spring Framework, and JavaScript libraries within supply chain logistics, e-commerce, and marketing domains.",
        body4:
          "Additionally, skilled in cross-platform mobile apps using React Native. Hands-on experience with Kafka, ActiveMQ, Docker, and shell scripting.",
      },
    },
  },
  hi: {
    translation: {
      nav: {
        projects: "परियोजनाएँ",
        experience: "अनुभव",
        contact: "संपर्क",
      },
      home: {
        title: "हाय, मैं प्रांजल हूँ {{wave}}",
        body1:
          "प्रतिभाशाली ✨ सॉफ्टवेयर डेवलपर, 3 वर्षों के प्रोफ़ेशनल अनुभव के साथ। बैकएंड और फ्रंटएंड (फुल-स्टैक) दोनों में उत्कृष्ट, एंटरप्राइज़ ऐप्स के इंटीग्रेशन, टेस्टिंग और हार्डनिंग में मज़बूत ट्रैक रिकॉर्ड।",
        body2:
          "सप्लाई-चेन लॉजिस्टिक्स, ई-कॉमर्स और मार्केटिंग डोमेन्स में Java, Spring Framework और JavaScript लाइब्रेरीज़ से मज़बूत बैकएंड और सहज UI बनाता/बनाती हूँ। React Native से क्रॉस-प्लैटफ़ॉर्म मोबाइल ऐप्स का अनुभव; Kafka, ActiveMQ, Docker और शेल स्क्रिप्टिंग में हाथ पक्का।",
      },
    },
  },
  ne: {
    translation: {
      nav: {
        projects: "परियोजनाहरू",
        experience: "अनुभव",
        contact: "सम्पर्क",
      },
      home: {
        title: "हाय, म प्राञ्जल हुँ {{wave}}",
        body1:
          "प्रतिभाशाली ✨ सफ्टवेयर डेभलपर, ३ वर्षको व्यावसायिक अनुभव सहित। ब्याकएन्ड र फ्रन्टएन्ड (फुल-स्ट्याक) दुबैमा उत्कृष्ट, इन्टिग्रेशन, परीक्षण र इन्टरप्राइज एप्स कडा बनाउने काममा बलियो ट्र्याक रेकर्ड।",
        body2:
          "सप्लाई-चेन, इ–कमर्स र मार्केटिङ क्षेत्रमा Java, Spring Framework र JavaScript लाइब्रेरीहरू प्रयोग गरी बलिया ब्याकएन्ड र सहज UI निर्माण। React Native बाट क्रस-प्ल्याटफर्म मोबाइल एप्सको अनुभव; Kafka, ActiveMQ, Docker र शेल स्क्रिप्टिङमा दखल।",
      },
    },
  },
  es: {
    translation: {
      nav: { projects: "Proyectos", experience: "Experiencia", contact: "Contacto" },
      home: {
        title: "Hola, soy Pranjal {{wave}}",
        body1:
          "Desarrollador(a) de software ✨ con 3 años de experiencia profesional, destacando en backend y frontend (full-stack) para crear aplicaciones completas. Experto(a) integrando, probando rigurosamente y reforzando aplicaciones empresariales, con historial sólido de soporte.",
        body2:
          "Competente en construir backends robustos e interfaces intuitivas con Java, Spring Framework y bibliotecas de JavaScript en logística de cadena de suministro, comercio electrónico y marketing. Además, experiencia en apps móviles multiplataforma con React Native; manejo de Kafka, ActiveMQ, Docker y scripting en shell.",
      },
    },
  },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).i18next = i18n;
}
