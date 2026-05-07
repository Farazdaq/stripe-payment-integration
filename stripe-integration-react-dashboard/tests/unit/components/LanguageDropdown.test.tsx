import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, vi, expect } from "vitest";
import LanguageDropdown from "../../../src/components/LanguageDropdown";

// Mock changeLanguage
vi.mock("../../../src/i18n/changeLanguage", () => ({
  changeLanguage: vi.fn(),
}));

// Typed mock for flag
type FlagProps = {
  countryCode: string;
};

vi.mock("react-country-flag", () => ({
  default: ({ countryCode }: FlagProps) => {
    return <span data-testid="flag">{countryCode}</span>;
  },
}));

describe("LanguageDropdown", () => {
  test("renders trigger button", () => {
    render(<LanguageDropdown />);

    const buttonText = screen.getByText("EN").textContent;

    if (!buttonText) {
      throw new Error("Trigger button not rendered");
    }
  });

  test("opens dropdown on click", async () => {
    const user = userEvent.setup();

    render(<LanguageDropdown />);

    const button = screen.getByRole("button");
    await user.click(button);

    const input = screen.getByPlaceholderText("Search language...");

    if (!input) {
      throw new Error("Dropdown did not open");
    }
  });

  test("filters languages by search", async () => {
    const user = userEvent.setup();

    render(<LanguageDropdown />);

    await user.click(screen.getByRole("button"));

    const input = screen.getByPlaceholderText("Search language...");
    await user.type(input, "Arabic");

    const arabicText = screen.queryByText("Arabic");

    if (!arabicText) {
      throw new Error("Arabic language not found after filtering");
    }
  });
});
