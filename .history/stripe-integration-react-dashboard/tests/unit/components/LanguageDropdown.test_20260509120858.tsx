import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import { useTheme } from "../theme/useTheme";
import LanguageDropdown from "../../../src/components/LanguageDropdown";

describe("Language Dropdown component", () => {
  test("render language dropdown", () => {
    render(<LanguageDropdown />);
  });

  const languageDropdown = screen.getByRole("button");

  expect(languageDropdown).toBeTruthy();
});
