import { createContext, useContext, useState } from "react";
import { themes } from "./theme.config";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const [mode, setMode] = useState<"light" | "dark">("light");

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
  return useContext(ThemeContext);
}
