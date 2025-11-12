// experience.i18n.ts
import { useTranslation } from "react-i18next";

export type YearItem = {
  year: number;
  bullets: string[];
  company?: string;
  role?: string;
  locationDate?: string;
  stack?: string[];
};

/** Internal: keyed version so UI strings live in i18n resources */
type YearItemKeys = {
  year: number;
  companyKey: string;
  roleKey: string;
  locationDateKey: string;
  bulletsKeys: string[];
  stackKeys?: string[];
};

/** Keep structure in code; put actual copy in i18n resources under `exp` */
const experienceDataKeys: YearItemKeys[] = [
  {
    year: 2021,
    companyKey: "exp.2021.company",
    roleKey: "exp.2021.role",
    locationDateKey: "exp.2021.locationDate",
    bulletsKeys: [
      "exp.2021.bullets.0",
      "exp.2021.bullets.1",
      "exp.2021.bullets.2",
      "exp.2021.bullets.3",
      "exp.2021.bullets.4",
    ],
    stackKeys: [
      "exp.2021.stack.0",
      "exp.2021.stack.1",
      "exp.2021.stack.2",
      "exp.2021.stack.3",
      "exp.2021.stack.4",
    ],
  },
  {
    year: 2022,
    companyKey: "exp.2022.company",
    roleKey: "exp.2022.role",
    locationDateKey: "exp.2022.locationDate",
    bulletsKeys: [
      "exp.2022.bullets.0",
      "exp.2022.bullets.1",
      "exp.2022.bullets.2",
      "exp.2022.bullets.3",
      "exp.2022.bullets.4",
    ],
    stackKeys: [
      "exp.2022.stack.0",
      "exp.2022.stack.1",
      "exp.2022.stack.2",
      "exp.2022.stack.3",
      "exp.2022.stack.4",
      "exp.2022.stack.5",
      "exp.2022.stack.6",
    ],
  },
  {
    year: 2024,
    companyKey: "exp.2024.company",
    roleKey: "exp.2024.role",
    locationDateKey: "exp.2024.locationDate",
    bulletsKeys: [
      "exp.2024.bullets.0",
      "exp.2024.bullets.1",
      "exp.2024.bullets.2",
      "exp.2024.bullets.3",
    ],
    stackKeys: [
      "exp.2024.stack.0",
      "exp.2024.stack.1",
      "exp.2024.stack.2",
      "exp.2024.stack.3",
      "exp.2024.stack.4",
    ],
  },
  {
    year: 2025,
    companyKey: "exp.2025.company",
    roleKey: "exp.2025.role",
    locationDateKey: "exp.2025.locationDate",
    bulletsKeys: [
      "exp.2025.bullets.0",
      "exp.2025.bullets.1",
      "exp.2025.bullets.2",
      "exp.2025.bullets.3",
      "exp.2025.bullets.4",
      "exp.2025.bullets.5",
    ],
    stackKeys: [
      "exp.2025.stack.0",
      "exp.2025.stack.1",
      "exp.2025.stack.2",
      "exp.2025.stack.3",
      "exp.2025.stack.4",
    ],
  },
];

/**
 * Hook: returns translated experience data for the current locale.
 * Add your strings under the `exp` namespace in i18n resources (en/hi/ne/es).
 */
export const useExperience = (): YearItem[] => {
  const { t } = useTranslation(); // use default ns or pass "experience" if you split namespaces

  return experienceDataKeys.map((item) => ({
    year: item.year,
    company: t(item.companyKey),
    role: t(item.roleKey),
    locationDate: t(item.locationDateKey),
    bullets: item.bulletsKeys.map((k) => t(k)),
    stack: item.stackKeys?.map((k) => t(k)) ?? [],
  }));
};
