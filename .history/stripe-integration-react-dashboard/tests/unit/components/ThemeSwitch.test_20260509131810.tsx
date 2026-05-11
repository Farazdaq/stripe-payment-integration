import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ThemeSwitch from "../../../src/components/ThemeSwitch";
import { useTheme } from "../../../src/theme/useTheme";

/* ---------------- MOCK THEME ---------------- */
vi.mock("../../../src/theme/useTheme", () => ({
  useTheme: vi.fn(),
}));

const setModeMock = vi.fn();

/* Strong typing for mocked hook */
type ThemeMock = {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
};

const mockedUseTheme = vi.mocked(useTheme);

describe("ThemeSwitch", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders with default title and light mode", () => {
    mockedUseTheme.mockReturnValue({
      mode: "light",
      setMode: setModeMock,
    } satisfies ThemeMock);

    render(<ThemeSwitch />);

    expect(screen.getByText("Toggle Theme")).toBeInTheDocument();
    expect(screen.getByText("light")).toBeInTheDocument();
  });

  test("renders custom title", () => {
    mockedUseTheme.mockReturnValue({
      mode: "light",
      setMode: setModeMock,
    } satisfies ThemeMock);

    render(<ThemeSwitch title="Dark Mode" />);

    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  });

  test("toggles from light to dark", async () => {
    const user = userEvent.setup();

    mockedUseTheme.mockReturnValue({
      mode: "light",
      setMode: setModeMock,
    } satisfies ThemeMock);

    render(<ThemeSwitch />);

    await user.click(screen.getByRole("button"));

    expect(setModeMock).toHaveBeenCalledWith("dark");
  });

  test("toggles from dark to light", async () => {
    const user = userEvent.setup();

    mockedUseTheme.mockReturnValue({
      mode: "dark",
      setMode: setModeMock,
    } satisfies ThemeMock);

    render(<ThemeSwitch />);

    await user.click(screen.getByRole("button"));

    expect(setModeMock).toHaveBeenCalledWith("light");
  });
});
