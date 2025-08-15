// theme/AppThemeProvider.tsx  (components only)
import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme } from "../theme/light";
import { darkTheme } from "../theme/dark";

export type ThemeMode = "light" | "dark";
export interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>("light");
  const toggleMode = () => setMode(prev => (prev === "light" ? "dark" : "light"));
  const theme =  mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
