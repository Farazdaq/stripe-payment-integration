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
        <ContainerComp componentDisplay={<MockComponent />} />
      </ThemeProvider>,
    );
    const ContainerCop = screen.getByText("Test");
    expect(ContainerCop).toBeInTheDocument();
  });

  test("does pass values affect the style", () => {
    const MockComponent = () => <div data-testid="mock">Test</div>;
    const { container } = render(
      <ThemeProvider>
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

    const div = screen.getByTestId("container1");

    expect(div).toHaveStyle({
      width: "200px",
      height: "200px",
      background: "#2A5269",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    });

    expect(div.style.border).toBe("5px solid rgb(17, 24, 39)");
  });
});
