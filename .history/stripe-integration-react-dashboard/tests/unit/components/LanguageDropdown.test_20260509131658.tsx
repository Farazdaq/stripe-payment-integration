import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import LanguageDropdown from "../../../src/components/LanguageDropdown";
import { useThemeMock } from "../../mocks/useThemeMock";
/* ---------------- MODULE MOCKS ---------------- */

vi.mock("../../../src/theme/useTheme", () => {
  return {
    useTheme: useThemeMock,
  };
});

vi.mock("../../../src/i18n/changeLanguage", () => {
  return {
    changeLanguage: vi.fn(),
  };
});

vi.mock("react-country-flag", () => {
  return {
    default: () => <span>FLAG</span>,
  };
});

/* ---------------- IMPORT AFTER MOCKS ---------------- */
import { changeLanguage } from "../../../src/i18n/changeLanguage";

describe("LanguageDropdown", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders dropdown trigger button", () => {
    render(<LanguageDropdown />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("opens dropdown when clicked", async () => {
    const user = userEvent.setup();
    render(<LanguageDropdown />);

    await user.click(screen.getByRole("button"));

    expect(
      screen.getByPlaceholderText("Search language..."),
    ).toBeInTheDocument();
  });

  test("selects language and calls changeLanguage", async () => {
    const user = userEvent.setup();
    render(<LanguageDropdown />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Arabic"));

    expect(changeLanguage).toHaveBeenCalledWith("ar");
  });
});
