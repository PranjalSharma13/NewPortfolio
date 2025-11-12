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
      contact: {
      title: "Ping Me, Maybe?",
      email: "Email",
      calendly: "Calendly",
      dm: "DM"
    },
  exp: {
    "2021": {
      "company": "BLUME GLOBAL",
      "role": "Associate Software Engineer",
      "locationDate": "Bangalore, India • 08/2021 – 05/2022",
      "bullets": {
        "0": "React Native app with push + Google Maps which has 7K+ downloads.",
        "1": "Client-side routing (React Router) + Redux/Context for smooth UX.",
        "2": "Client-side encryption for session data (TypeScript + React).",
        "3": "DB query optimizations → ~30% faster responses; hosted on GCP.",
        "4": "Production support + docs in Confluence."
      },
      "stack": {
        "0": "React Native",
        "1": "Redux",
        "2": "Context",
        "3": "Push",
        "4": "Google Maps API"
      }
    },
    "2022": {
      "company": "RIBERA SOLUTIONS",
      "role": "Software Engineer",
      "locationDate": "Kathmandu, Nepal / CA, USA • 05/2022 – 05/2023",
      "bullets": {
        "0": "Built OAuth2 + JWT auth flows; strengthened access control and session security.",
        "1": "Containerized services with Docker/Compose → reduced hardware/resource footprint.",
        "2": "Partnered with UX to ship React + TS interfaces → +25% user satisfaction.",
        "3": "Integrated Spring Boot Actuator for health metrics & faster issue triage.",
        "4": "Applied Spring AOP for logging, caching, and transactions → modular, maintainable code."
      },
      "stack": {
        "0": "Spring Boot",
        "1": "Security",
        "2": "OAuth2",
        "3": "JWT",
        "4": "AOP",
        "5": "Docker",
        "6": "Actuator"
      }
    },
    "2024": {
      "company": "DREAMWAY MEDIA",
      "role": "Web Application Developer",
      "locationDate": "California • 10/2024 – 01/2025",
      "bullets": {
        "0": "Developed responsive WordPress eCom themes with Tailwind + Sass for performance.",
        "1": "ACF + custom plugins: interactive maps, CRM integration, tailored features.",
        "2": "Implemented WCAG 2.1/ARIA patterns to elevate accessibility across devices.",
        "3": "Improved UX metrics via layout, caching, and asset optimizations."
      },
      "stack": {
        "0": "WordPress",
        "1": "PHP",
        "2": "ACF",
        "3": "Maps",
        "4": "CRM"
      }
    },
    "2025": {
      "company": "EULERITY",
      "role": "Software Engineer",
      "locationDate": "NYC • 01/2025 – Present",
      "bullets": {
        "0": "Refactored into a reusable component library (framework-light) for maintainability.",
        "1": "Modular, strongly-typed React/TS → ~30% fewer runtime bugs.",
        "2": "Redux Toolkit + REST schema guards (type-safe across the app).",
        "3": "Context for local/shared state without global bloat.",
        "4": "Led frontend architecture decisions → ~20% faster feature delivery.",
        "5": "CI/CD (Actions + Jenkins) for test/lint/deploy → ~30% faster releases; GCP pipelines."
      },
      "stack": {
        "0": "TypeScript",
        "1": "React",
        "2": "Redux Toolkit",
        "3": "REST",
        "4": "Context API"
      }
  }
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
      contact: {
      title: "पिंग करोगे, शायद?",
      email: "ईमेल",
      calendly: "कैलेंडली",
      dm: "डीएम"
    },
    exp: {
  "2021": {
    company: "ब्लूम ग्लोबल",
    role: "एसोसिएट सॉफ्टवेयर इंजीनियर",
    locationDate: "बैंगलोर, भारत • 08/2021 – 05/2022",
    bullets: {
      "0": "React Native ऐप बनाया जिसमें पुश और Google Maps हैं — 7K+ डाउनलोड।",
      "1": "क्लाइंट-साइड रूटिंग (React Router) + Redux/Context से स्मूद UX।",
      "2": "सेशन डेटा के लिए क्लाइंट-साइड एन्क्रिप्शन (TypeScript + React)।",
      "3": "DB क्वेरी ऑप्टिमाइजेशन से ~30% तेज़ रिस्पॉन्स; GCP पर होस्ट किया गया।",
      "4": "प्रोडक्शन सपोर्ट और Confluence में डॉक्यूमेंटेशन।"
    },
    stack: {
      "0": "React Native",
      "1": "Redux",
      "2": "Context",
      "3": "Push",
      "4": "Google Maps API"
    }
  },
  "2022": {
    company: "रिबेरा सॉल्यूशंस",
    role: "सॉफ्टवेयर इंजीनियर",
    locationDate: "काठमांडू, नेपाल / कैलिफ़ोर्निया, यूएसए • 05/2022 – 05/2023",
    bullets: {
      "0": "OAuth2 + JWT ऑथ फ्लो बनाए; एक्सेस कंट्रोल और सेशन सुरक्षा मज़बूत की।",
      "1": "Docker/Compose से सर्विस कंटेनराइज कीं → हार्डवेयर उपयोग घटाया।",
      "2": "UX टीम के साथ मिलकर React + TS इंटरफेस बनाए → +25% यूज़र संतुष्टि।",
      "3": "Spring Boot Actuator जोड़ा हेल्थ मेट्रिक्स और तेज़ डिबगिंग के लिए।",
      "4": "Spring AOP लागू किया लॉगिंग, कैशिंग और ट्रांज़ैक्शन के लिए → मॉड्यूलर, मेंटेन करने योग्य कोड।"
    },
    stack: {
      "0": "Spring Boot",
      "1": "Security",
      "2": "OAuth2",
      "3": "JWT",
      "4": "AOP",
      "5": "Docker",
      "6": "Actuator"
    }
  },
  "2024": {
    company: "ड्रीमवे मीडिया",
    role: "वेब एप्लिकेशन डेवलपर",
    locationDate: "कैलिफ़ोर्निया • 10/2024 – 01/2025",
    bullets: {
      "0": "Tailwind + Sass से परफॉर्मेंट वर्डप्रेस ईकॉम थीम्स विकसित कीं।",
      "1": "ACF + कस्टम प्लगइन्स: इंटरएक्टिव मैप्स, CRM इंटीग्रेशन और फीचर्स।",
      "2": "WCAG 2.1/ARIA पैटर्न लागू किए जिससे एक्सेसिबिलिटी बढ़ी।",
      "3": "लेआउट, कैशिंग और एसेट ऑप्टिमाइजेशन से UX मीट्रिक्स बेहतर किए।"
    },
    stack: {
      "0": "WordPress",
      "1": "PHP",
      "2": "ACF",
      "3": "Maps",
      "4": "CRM"
    }
  },
  "2025": {
    company: "यूलेरिटी",
    role: "सॉफ्टवेयर इंजीनियर",
    locationDate: "न्यूयॉर्क सिटी • 01/2025 – वर्तमान",
    bullets: {
      "0": "रीयूज़ेबल कॉम्पोनेंट लाइब्रेरी (फ्रेमवर्क-लाइट) बनाई, मेंटेनबिलिटी बढ़ी।",
      "1": "मॉड्यूलर, स्ट्रॉन्गली-टाइप्ड React/TS से ~30% कम रनटाइम बग।",
      "2": "Redux Toolkit + REST स्कीमा गार्ड्स → टाइप-सुरक्षित एप्लिकेशन।",
      "3": "लोकल/शेयर्ड स्टेट के लिए Context का उपयोग बिना ग्लोबल ब्लोट।",
      "4": "फ्रंटएंड आर्किटेक्चर निर्णयों का नेतृत्व → ~20% तेज़ फीचर डिलीवरी।",
      "5": "CI/CD (Actions + Jenkins) सेटअप → ~30% तेज़ रिलीज़; GCP पाइपलाइन्स।"
    },
    stack: {
      "0": "TypeScript",
      "1": "React",
      "2": "Redux Toolkit",
      "3": "REST",
      "4": "Context API"
    }
  }
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
      contact: {
      title: "पिङ्ग गर्ने हो?",
      email: "इमेल",
      calendly: "क्यालेन्डली",
      dm: "डीएम"
    },
    exp: {
  "2021": {
    company: "ब्लुम ग्लोबल",
    role: "एसोसिएट सफ्टवेयर इन्जिनियर",
    locationDate: "बेंगलोर, भारत • 08/2021 – 05/2022",
    bullets: {
      "0": "React Native एप्लिकेसन (Push + Google Maps) — 7K+ डाउनलोड।",
      "1": "React Router + Redux/Context बाट स्मूथ युजर अनुभव।",
      "2": "सेसन डाटाको लागि क्लाइन्ट-साइड इन्क्रिप्सन (TypeScript + React)।",
      "3": "DB क्वेरी अप्टिमाइजेशन → ~30% छिटो प्रतिक्रिया; GCP मा होस्ट।",
      "4": "प्रोडक्सन सपोर्ट र Confluence मा डकुमेन्टेसन।"
    },
    stack: {
      "0": "React Native",
      "1": "Redux",
      "2": "Context",
      "3": "Push",
      "4": "Google Maps API"
    }
  },
  "2022": {
    company: "रिबेरा सोलुसन्स",
    role: "सफ्टवेयर इन्जिनियर",
    locationDate: "काठमाडौँ, नेपाल / क्यालिफोर्निया, अमेरिका • 05/2022 – 05/2023",
    bullets: {
      "0": "OAuth2 + JWT प्रमाणीकरण फ्लो बनाएर पहुँच नियन्त्रण र सुरक्षा मजबुत बनाइयो।",
      "1": "Docker/Compose प्रयोग गरेर सेवा कंटेनराइज गरियो → स्रोत खपत घटाइयो।",
      "2": "UX टोलीसँग सहकार्य गर्दै React + TS इन्टरफेस बनाइयो → +25% युजर सन्तुष्टि।",
      "3": "Spring Boot Actuator जोडियो हेल्थ मेट्रिक्स र समस्या समाधानका लागि।",
      "4": "Spring AOP प्रयोग गरी लगिङ, क्यासिङ र ट्रान्ज्याक्सनलाई मोड्युलर बनाइयो।"
    },
    stack: {
      "0": "Spring Boot",
      "1": "Security",
      "2": "OAuth2",
      "3": "JWT",
      "4": "AOP",
      "5": "Docker",
      "6": "Actuator"
    }
  },
  "2024": {
    company: "ड्रिमवे मिडिया",
    role: "वेब एप्लिकेसन डेभलपर",
    locationDate: "क्यालिफोर्निया • 10/2024 – 01/2025",
    bullets: {
      "0": "Tailwind + Sass प्रयोग गरेर परफर्मेन्सयुक्त WordPress ई-कमर्स थीम विकास।",
      "1": "ACF + कस्टम प्लगइनहरू: इन्टरएक्टिभ नक्सा, CRM एकिकरण, अनुकूल सुविधा।",
      "2": "WCAG 2.1/ARIA ढाँचाहरू लागू गरी पहुँच सुधार।",
      "3": "लेआउट, क्यासिङ र एसेट अप्टिमाइजेसनमार्फत UX सुधार।"
    },
    stack: {
      "0": "WordPress",
      "1": "PHP",
      "2": "ACF",
      "3": "Maps",
      "4": "CRM"
    }
  },
  "2025": {
    company: "यूलेरिटी",
    role: "सफ्टवेयर इन्जिनियर",
    locationDate: "न्यूयोर्क सिटी • 01/2025 – हालसम्म",
    bullets: {
      "0": "रीयूजेबल कम्पोनेन्ट लाइब्रेरी (फ्रेमवर्क-लाइट) निर्माण गरी मर्मत सजिलो बनाइयो।",
      "1": "मोड्युलर, स्ट्रोङ-टाइप React/TS → ~30% कम रनटाइम बगहरू।",
      "2": "Redux Toolkit + REST स्किमाका गार्डहरू → टाइप-सुरक्षित एप।",
      "3": "लोकल/शेयर गरिएको स्टेटका लागि Context प्रयोग बिना ग्लोबल ब्लोट।",
      "4": "फ्रन्टएन्ड आर्किटेक्चर निर्णयमा नेतृत्व → ~20% छिटो फिचर डेलिभरी।",
      "5": "CI/CD (Actions + Jenkins) बाट ~30% छिटो रिलिज; GCP पाइपलाइनहरू।"
    },
    stack: {
      "0": "TypeScript",
      "1": "React",
      "2": "Redux Toolkit",
      "3": "REST",
      "4": "Context API"
    }
  }
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
      contact: {
      title: "¿Me escribes, quizá?",
      email: "Correo",
      calendly: "Calendly",
      dm: "MD"
    },
    exp: {
  "2021": {
    company: "BLUME GLOBAL",
    role: "Ingeniero/a de Software Asociado/a",
    locationDate: "Bangalore, India • 08/2021 – 05/2022",
    bullets: {
      "0": "Aplicación React Native con notificaciones push y Google Maps — más de 7 mil descargas.",
      "1": "Enrutamiento del lado del cliente (React Router) + Redux/Context para una UX fluida.",
      "2": "Cifrado del lado del cliente para datos de sesión (TypeScript + React).",
      "3": "Optimización de consultas DB → ~30 % de respuestas más rápidas; alojado en GCP.",
      "4": "Soporte de producción y documentación en Confluence."
    },
    stack: {
      "0": "React Native",
      "1": "Redux",
      "2": "Context",
      "3": "Push",
      "4": "Google Maps API"
    }
  },
  "2022": {
    company: "RIBERA SOLUTIONS",
    role: "Ingeniero/a de Software",
    locationDate: "Katmandú, Nepal / California, EE. UU. • 05/2022 – 05/2023",
    bullets: {
      "0": "Implementó flujos OAuth2 + JWT fortaleciendo el control de acceso y la seguridad.",
      "1": "Servicios contenedorizados con Docker/Compose → menor consumo de recursos.",
      "2": "En colaboración con UX se lanzaron interfaces React + TS → +25 % de satisfacción del usuario.",
      "3": "Integró Spring Boot Actuator para métricas y resolución de incidencias más rápida.",
      "4": "Aplicó Spring AOP para registro, caché y transacciones → código modular y mantenible."
    },
    stack: {
      "0": "Spring Boot",
      "1": "Security",
      "2": "OAuth2",
      "3": "JWT",
      "4": "AOP",
      "5": "Docker",
      "6": "Actuator"
    }
  },
  "2024": {
    company: "DREAMWAY MEDIA",
    role: "Desarrollador/a de Aplicaciones Web",
    locationDate: "California • 10/2024 – 01/2025",
    bullets: {
      "0": "Desarrolló temas de e-commerce en WordPress optimizados con Tailwind + Sass.",
      "1": "ACF + plugins personalizados: mapas interactivos, integración CRM, funciones a medida.",
      "2": "Aplicó patrones WCAG 2.1/ARIA para mejorar la accesibilidad en dispositivos.",
      "3": "Mejoró métricas UX mediante optimización de diseño, caché y recursos."
    },
    stack: {
      "0": "WordPress",
      "1": "PHP",
      "2": "ACF",
      "3": "Maps",
      "4": "CRM"
    }
  },
  "2025": {
    company: "EULERITY",
    role: "Ingeniero/a de Software",
    locationDate: "Nueva York • 01/2025 – Presente",
    bullets: {
      "0": "Refactorizó en una biblioteca de componentes reutilizable (ligera en framework).",
      "1": "React/TS fuertemente tipado y modular → ~30 % menos errores en ejecución.",
      "2": "Redux Toolkit + guardas REST con tipado seguro en toda la app.",
      "3": "Context para estado local/compartido sin sobrecarga global.",
      "4": "Lideró decisiones de arquitectura frontend → ~20 % más rápida entrega de funciones.",
      "5": "CI/CD (Actions + Jenkins) → ~30 % lanzamientos más rápidos; pipelines GCP."
    },
    stack: {
      "0": "TypeScript",
      "1": "React",
      "2": "Redux Toolkit",
      "3": "REST",
      "4": "Context API"
    }
  }
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
