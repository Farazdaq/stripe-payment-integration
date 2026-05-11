import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import ContainerComp from "../../../src/components/ContainerComp";
import { ThemeProvider } from "../../../src/theme/ThemeProvider";

describe("Container Comp", () => {
  test("render container comp", () => {
    const MockComponent = () => <div data-testid="mock">Test</div>;

    render(
      <ThemeProvider>
        <ContainerComp componentDisplay={MockComponent} />
      </ThemeProvider>,
    );
    const ContainerCop = screen.getByText("Test");
    expect(ContainerCop).toBeInTheDocument();
  });

  test("does pass values affect the style", () => {
    const MockComponent = () => <div data-testid="mock">Test</div>;
    const { container } = render(
      <ThemeProvider>
        {" "}
        <ContainerComp
          height={200}
          width={200}
          border={true}
          stroke={5}
          radiusAll={10}
          componentDisplay={MockComponent}
        />
        ,
      </ThemeProvider>,
    );

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveStyle({
      height: "200px",
      width: "200px",
    });
  });
});
