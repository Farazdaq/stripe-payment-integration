import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import FigCards from "../../../src/features/dashboard/components/FigCards";
import { ThemeProvider } from "../../../src/theme/ThemeProvider";
describe("Dashboard overview Fig Card test", () => {
  test("will fig cards render", () => {
    render(
      <ThemeProvider>
        <FigCards
          totalRevenue={0}
          activeSubscriptions={0}
          invoicesPaid={0}
          failedPayments={0}
          totalCustomers={0}
          topPackage={0}
        />
        ,
      </ThemeProvider>,
    );
    const figCards = screen.getByTestId("figCards");
    screen.debug();
    expect(figCards).toBeInTheDocument();
  });
});
