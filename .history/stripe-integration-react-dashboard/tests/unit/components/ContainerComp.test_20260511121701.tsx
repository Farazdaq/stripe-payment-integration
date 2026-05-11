import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import ContainerComp from "../../../src/components/ContainerComp";

describe("Container Comp", () => {
  test("render container comp", () => {
    const MockComponent = () => <div data-testid="mock">Test</div>;
    render(<ContainerComp componentDisplay={MockComponent} />);
    const ContainerCop = screen.getByText("Test");
    expect(ContainerCop).toBeInTheDocument();
  });

  test("does pass values affect the style", () => {
    const MockComponent = () => <div data-testid="mock">Test</div>;
    render(
      <ContainerComp background="#2A5269" componentDisplay={MockComponent} />,
    );
  });
});
