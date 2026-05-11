import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import LanguageDropdown from "../../../src/components/LanguageDropdown";

/* ---------------- MOCK THEME ---------------- */
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

/* ---------------- MOCK LANGUAGE CHANGE ---------------- */
vi.mock("../../../src/i18n/changeLanguage", () => ({
  changeLanguage: vi.fn(),
}));

/* ---------------- MOCK FLAG ---------------- */
vi.mock("react-country-flag", () => ({
  default: () => <span>FLAG</span>,
}));

describe("Language Dropdown component", () => {
  test("render language dropdown", () => {
    render(<LanguageDropdown />);
    screen.debug();
  });

  const languageDropdown = screen.getByRole("button");

  expect(languageDropdown).toBeTruthy();
});
