import { createContext } from "react";
import { themes } from "./theme.config";

export type ThemeMode = "dark" | "light";

// 👇 infer theme structure from your config
export type Theme = (typeof themes)["dark"];

export type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
