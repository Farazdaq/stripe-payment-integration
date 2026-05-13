import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../../src/theme/ThemeProvider";
import AccountController from "../../../src/components/AccountController";

describe("Account controller test", () => {
  test("will the account controller render", () => {
    render(
      <ThemeProvider>
        <AccountController isLogIn={false} />
      </ThemeProvider>,
    );

    const accountController = screen.getByTestId("accountController");
    expect(accountController).toBeInTheDocument();
    expect(accountController).toBeVisible();
  });
});
