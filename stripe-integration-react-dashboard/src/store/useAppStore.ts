import { create } from "zustand";

type ThemeMode = "light" | "dark";

type AppState = {
  theme: ThemeMode;
  language: string;

  setTheme: (theme: ThemeMode) => void;
  setLanguage: (lang: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  theme: (localStorage.getItem("theme") as ThemeMode) || "light",
  language: localStorage.getItem("lang") || "en",

  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },

  setLanguage: (lang) => {
    localStorage.setItem("lang", lang);
    set({ language: lang });
  },
}));
