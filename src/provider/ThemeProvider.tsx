// theme/AppThemeProvider.tsx  (components only)
import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export type ThemeMode = "light" | "dark";
export interface ThemeContextType {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  toggleMode: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>("light");
  const toggleMode = () => setMode(prev => (prev === "light" ? "dark" : "light"));
  const theme = mode === "light" ? { background: "#fff", text: "#000" } : { background: "#000", text: "#fff" };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
