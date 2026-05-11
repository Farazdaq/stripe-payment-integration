import { useState } from "react";
import type { ReactNode } from "react";
import { themes } from "./theme.config";
import { ThemeContext, type ThemeMode } from "./theme.context";

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [mode, setMode] = useState<ThemeMode>("dark");

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
