import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import LanguageDropdown from "../../../src/components/LanguageDropdown";

/* ---------------- IMPORT MOCKS ---------------- */
import { useThemeMock } from "../../mocks/useThemeMock";
import { changeLanguageMock } from "../../mocks/changeLanguageMock";

/* ---------------- MODULE MOCKING ---------------- */
vi.mock("../../../src/theme/useTheme", () => ({
  useTheme: useThemeMock,
}));

vi.mock("../../../src/i18n/changeLanguage", () => ({
  changeLanguage: changeLanguageMock,
}));

vi.mock("react-country-flag", () => ({
  default: () => <span>FLAG</span>,
}));

describe("LanguageDropdown", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders dropdown trigger button", () => {
    render(<LanguageDropdown />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("opens dropdown when button is clicked", async () => {
    const user = userEvent.setup();
    render(<LanguageDropdown />);

    await user.click(screen.getByRole("button"));

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

    await user.type(screen.getByPlaceholderText("Search language..."), "ar");

    expect(screen.getByText("Arabic")).toBeInTheDocument();
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });

  test("selects language and calls changeLanguage", async () => {
    const user = userEvent.setup();
    render(<LanguageDropdown />);

    await user.click(screen.getByRole("button"));

    await user.click(screen.getByText("Arabic"));

    expect(changeLanguageMock).toHaveBeenCalledWith("ar");

    expect(
      screen.queryByPlaceholderText("Search language..."),
    ).not.toBeInTheDocument();
  });
});
