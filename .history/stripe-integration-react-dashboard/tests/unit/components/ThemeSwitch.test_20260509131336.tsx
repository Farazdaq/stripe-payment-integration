import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ThemeSwitch from "../../../src/components/ThemeSwitch";
import { useTheme } from "../../../src/theme/useTheme";

/* ---------------- MOCK THEME ---------------- */
const setModeMock = vi.fn();

vi.mock("../../../src/theme/useTheme", () => ({
  useTheme: vi.fn(),
}));

describe("ThemeSwitch", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders with default title and light mode", () => {
    (useTheme as any).mockReturnValue({
      mode: "light",
      setMode: setModeMock,
    });

    render(<ThemeSwitch />);

    expect(screen.getByText("Toggle Theme")).toBeInTheDocument();
    expect(screen.getByText("light")).toBeInTheDocument();
  });

  test("renders custom title", () => {
    (useTheme as any).mockReturnValue({
      mode: "light",
      setMode: setModeMock,
    });

    render(<ThemeSwitch title="Dark Mode" />);

    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  });

  test("toggles from light to dark", async () => {
    const user = userEvent.setup();

    (useTheme as any).mockReturnValue({
      mode: "light",
      setMode: setModeMock,
    });

    render(<ThemeSwitch />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(setModeMock).toHaveBeenCalledWith("dark");
  });

  test("toggles from dark to light", async () => {
    const user = userEvent.setup();

    (useTheme as any).mockReturnValue({
      mode: "dark",
      setMode: setModeMock,
    });

    render(<ThemeSwitch />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(setModeMock).toHaveBeenCalledWith("light");
  });
});
