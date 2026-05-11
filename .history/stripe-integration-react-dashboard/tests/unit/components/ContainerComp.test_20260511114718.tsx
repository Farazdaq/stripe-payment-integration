import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ContainerComp from "../../../src/components/ContainerComp";

describe("Container Comp", () => {
  test("render container comp", () => {
    render(<ContainerComp componentDisplay={<></>} />);
    expect();
  });
});
