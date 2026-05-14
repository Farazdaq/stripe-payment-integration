import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";

describe("Dashboard overview Fig Card test", () => {
  test("will fig cards render", () => {
    render(
      <FigCards
        totalRevenue={0}
        activeSubscriptions={0}
        invoicesPaid={0}
        failedPayments={0}
        totalCustomers={0}
        topPackage={0}
      />,
    );
  });
});
