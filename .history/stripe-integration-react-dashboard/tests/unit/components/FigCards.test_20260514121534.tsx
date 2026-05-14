import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import FigCards from "../../../src/features/dashboard/components/FigCards";
import { ThemeProvider } from "../../../src/theme/ThemeProvider";

describe("Dashboard overview Fig Card test", () => {
  test("will render all card texts correctly", () => {
    render(
      <ThemeProvider>
        <FigCards
          totalRevenue={1000}
          activeSubscriptions={25}
          invoicesPaid={80}
          failedPayments={5}
          totalCustomers={120}
          topPackage={3}
        />
      </ThemeProvider>,
    );

    const figCards = screen.getByTestId("figCards");
    screen.debug();
    expect(figCards).toBeInTheDocument();

    // =========================
    // Numbers (p tags)
    // =========================
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("80")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();

    // =========================
    // Titles (h3 tags)
    // =========================
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();

    expect(screen.getByText("Active Subscriptions")).toBeInTheDocument();

    expect(screen.getByText("Invoices Paid")).toBeInTheDocument();

    expect(screen.getByText("Failed Payments")).toBeInTheDocument();

    expect(screen.getByText("Total Customers")).toBeInTheDocument();

    expect(screen.getByText("Top Package")).toBeInTheDocument();
  });
});
