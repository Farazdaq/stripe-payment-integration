import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../../src/theme/ThemeProvider";
import AccountController from "../../../src/components/AccountController";

describe("Account controller test", () => {
  const user = userEvent.setup();
  test("will the account controller render with initial logout state clickable", async () => {
    render(
      <ThemeProvider>
        <AccountController isLogIn={false} loginButton={true} profileUrl="" />
      </ThemeProvider>,
    );

    const accountController = screen.getByTestId("accountController");
    const loginButton = screen.getByRole("button", { name: /login/i });

    expect(accountController).toBeInTheDocument();
    expect(accountController).toBeVisible();
    expect(loginButton).toHaveTextContent("Login");
    await user.click(loginButton);
  });

  test("will account controller render with login state and logout button clickable", async () => {
    render(
      <ThemeProvider>
        <AccountController
          isLogIn={true}
          logoutButton={true}
          profileUrl=""
          userName="Test"
        />
      </ThemeProvider>,
    );
    const logoutButton = screen.getByRole("button", { name: /logout/i });
    expect(logoutButton).toHaveTextContent("Logout");
    await user.click(logoutButton);
  });

  test("column positioning shows and profile img top", () => {
    render(
      <ThemeProvider>
        <AccountController
          isLogIn={true}
          direction="column"
          imagePosition="top"
        />
      </ThemeProvider>,
    );

    const accountController = screen.getByTestId("accountController");

    expect(accountController.className).toContain("flex-col");
  });

  test("column positioning shows and profile img top", () => {
    render(
      <ThemeProvider>
        <AccountController isLogIn={true} direction="row" imagePosition="top" />
      </ThemeProvider>,
    );

    const accountController = screen.getByTestId("accountController");

    expect(accountController.className).toContain("flex-col");
  });
});
