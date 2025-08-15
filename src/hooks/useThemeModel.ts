// theme/useThemeMode.ts (non-component exports)
import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "../provider/ThemeProvider";

export const useThemeMode = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeMode must be used within AppThemeProvider");
  return ctx;
};
