export type YearItem = {
  year: number;
  bullets: string[];
  company?: string;
  role?: string;
  locationDate?: string;
  stack?: string[];
};

export const experienceData: YearItem[] = [
  {
    year: 2021,
    company: "BLUME GLOBAL",
    role: "Associate Software Engineer (EA Mobile App)",
    locationDate: "Bangalore, India • 08/2021 – 05/2022",
    bullets: [
      "React Native app with push + Google Maps (5K+ downloads).",
      "Client-side routing & state (Redux/Context).",
      "Support, fixes, and docs in Confluence."
    ],
    stack: ["React Native","Redux","Context","Push","Google Maps API"]
  },
  {
    year: 2022,
    company: "RIBERA SOLUTIONS",
    role: "Software Engineer",
    locationDate: "Kathmandu, Nepal / CA, USA • 05/2022 – 05/2023",
    bullets: [
      "OAuth2 + JWT; Spring AOP for logging/cache/tx.",
      "Docker/Compose consolidation → fewer hosts/resources.",
      "Actuator monitoring for proactive issue detection."
    ],
    stack: ["Spring Boot","Security","OAuth2","JWT","AOP","Docker","Actuator"]
  },
  {
    year: 2024,
    company: "DREAMWAY MEDIA",
    role: "Web Application Developer",
    locationDate: "California • 10/2024 – 01/2025",
    bullets: [
      "Responsive WordPress themes for eCom UX & performance.",
      "ACF customization; interactive maps; CRM integration."
    ],
    stack: ["WordPress","PHP","ACF","Maps","CRM"]
  },
  {
    year: 2025,
    company: "EULERITY",
    role: "Web Developer Intern",
    locationDate: "NYC • 01/2025 – Present",
    bullets: [
      "Refactor with custom reusable components (no heavy UI libs).",
      "Strict TypeScript; −30% runtime bugs.",
      "REST APIs inside a TS-safe Redux architecture; Context for scoped state."
    ],
    stack: ["TypeScript","React","Redux Toolkit","REST","Context API"]
  }
];

