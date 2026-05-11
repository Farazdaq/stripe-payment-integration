import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import LanguageDropdown from "../../../src/components/LanguageDropdown";

// MOCK theme hook
vi.mock("../../../src/theme/useTheme", () => ({
  useTheme: () => ({
    theme: {
      colors: {
        navbar: "#111",
        border: "#222",
        text: "#fff",
        sidebar: "#333",
      },
    },
  }),
}));

describe("Language Dropdown component", () => {
  test("render language dropdown", () => {
    render(<LanguageDropdown />);
  });

  const languageDropdown = screen.getByRole("button");

  expect(languageDropdown).toBeTruthy();
});
