import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import ContainerComp from "../../../src/components/ContainerComp";

describe("Container Comp", () => {
  test("render container comp", () => {
    const MockComponent = () => <div data-testid="mock">Test</div>;
    render(<ContainerComp componentDisplay={MockComponent} />);
    const ContainerCop = screen.getByTestId("div");
    expect(ContainerCop).toBeInTheDocument();
  });
});
