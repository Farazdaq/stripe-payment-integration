import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { themes } from "./theme.config";

type ThemeMode = "light" | "dark";

type Theme = (typeof themes)["light"];

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>("light");

  const theme = themes[mode];

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      <div
        style={{
          backgroundColor: theme.colors.bg,
          color: theme.colors.text,
          minHeight: "100vh",
          transition: "0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
