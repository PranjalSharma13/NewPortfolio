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
        role: "Associate Software Engineer",
        locationDate: "Bangalore, India • 08/2021 – 05/2022",
        bullets: [
            "React Native app with push + Google Maps which has 7K+ downloads.",
            "Client-side routing (React Router) + Redux/Context for smooth UX.",
            "Client-side encryption for session data (TypeScript + React).",
            "DB query optimizations → ~30% faster responses; hosted on GCP.",
            "Production support + docs in Confluence."
        ],
        stack: ["React Native", "Redux", "Context", "Push", "Google Maps API"]
    },
    {
        year: 2022,
        company: "RIBERA SOLUTIONS",
        role: "Software Engineer",
        locationDate: "Kathmandu, Nepal / CA, USA • 05/2022 – 05/2023",
        bullets: [
            "Built OAuth2 + JWT auth flows; strengthened access control and session security.",
            "Containerized services with Docker/Compose → reduced hardware/resource footprint.",
            "Partnered with UX to ship React + TS interfaces → +25% user satisfaction.",
            "Integrated Spring Boot Actuator for health metrics & faster issue triage.",
            "Applied Spring AOP for logging, caching, and transactions → modular, maintainable code."
        ],
        stack: ["Spring Boot", "Security", "OAuth2", "JWT", "AOP", "Docker", "Actuator"]
    },
    {
        year: 2024,
        company: "DREAMWAY MEDIA",
        role: "Web Application Developer",
        locationDate: "California • 10/2024 – 01/2025",
        bullets: [
            "Developed responsive WordPress eCom themes with Tailwind + Sass for performance.",
            "ACF + custom plugins: interactive maps, CRM integration, tailored features.",
            "Implemented WCAG 2.1/ARIA patterns to elevate accessibility across devices.",
            "Improved UX metrics via layout, caching, and asset optimizations."
        ],
        stack: ["WordPress", "PHP", "ACF", "Maps", "CRM"]
    },
    {
        year: 2025,
        company: "EULERITY",
        role: "Web Developer Intern",
        locationDate: "NYC • 01/2025 – Present",
        bullets: [
            "Refactored into a reusable component library (framework-light) for maintainability.",
            "Modular, strongly-typed React/TS → ~30% fewer runtime bugs.",
            "Redux Toolkit + REST schema guards (type-safe across the app).",
            "Context for local/shared state without global bloat.",
            "Led frontend architecture decisions → ~20% faster feature delivery.",
            "CI/CD (Actions + Jenkins) for test/lint/deploy → ~30% faster releases; GCP pipelines."
        ],
        stack: ["TypeScript", "React", "Redux Toolkit", "REST", "Context API"]
    }
];

