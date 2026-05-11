import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";

import LanguageDropdown from "../../../src/components/LanguageDropdown";
describe("Language Dropdown component", () => {
  test("render language dropdown", () => {
    render(<LanguageDropdown />);
  });
});
