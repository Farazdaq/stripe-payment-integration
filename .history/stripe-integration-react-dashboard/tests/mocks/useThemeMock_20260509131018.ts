import { vi } from "vitest";

export const useThemeMock = vi.fn(() => ({
  theme: {
    colors: {
      navbar: "#111",
      border: "#222",
      text: "#fff",
      sidebar: "#333",
    },
  },
}));
