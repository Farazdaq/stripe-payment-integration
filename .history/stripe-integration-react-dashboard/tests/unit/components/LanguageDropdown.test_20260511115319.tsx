import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { describe, test, expect, vi, beforeEach } from "vitest";
import LanguageDropdown from "../../../src/components/LanguageDropdown";
import { changeLanguage } from "../../../src/i18n/changeLanguage";

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

describe("LanguageDropdown", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders dropdown trigger button", () => {
    render(<LanguageDropdown />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("opens dropdown when button is clicked", async () => {
    const user = userEvent.setup();
    render(<LanguageDropdown />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(
      screen.getByPlaceholderText("Search language..."),
    ).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Arabic")).toBeInTheDocument();
  });

  test("filters languages based on search input", async () => {
    const user = userEvent.setup();
    render(<LanguageDropdown />);

    await user.click(screen.getByRole("button"));

    const input = screen.getByPlaceholderText("Search language...");
    await user.type(input, "ar");

    expect(screen.getByText("Arabic")).toBeInTheDocument();
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });

  test("selects language and calls changeLanguage", async () => {
    const user = userEvent.setup();
    render(<LanguageDropdown />);

    await user.click(screen.getByRole("button"));

    const arabicOption = screen.getByText("Arabic");
    await user.click(arabicOption);

    expect(changeLanguage).toHaveBeenCalledWith("ar");

    // dropdown should close
    expect(
      screen.queryByPlaceholderText("Search language..."),
    ).not.toBeInTheDocument();
  });
});
