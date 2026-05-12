import {render, screen} from "@testing-library/react"
import { describe, test , expect, vi, beforeEach } from "vitest"
import { ThemeProvider } from "../../../src/theme/ThemeProvider"
import LineDivider from "../../../src/components/LineDivider"
import "@testing-library/jest-dom";

describe("Line divider comp test", ()=> {
    // Test Case: 1 Testing will the LineDivider will render as expected
    test("Render line divider", ()=> {
        render(
                <ThemeProvider>
                     <LineDivider 
                      color= "#FFFF"
                      thickness= "2px"
                      width="50%"
                     />
                </ThemeProvider>
        );
        const lineDivider = screen.getByTestId("lineDivider");
        expect(lineDivider).toBeInTheDocument();
        
        
    })

    // Test Case: 2 Testing if the LineDivider will render with passed contorling props as expected
        test("Behaviour when oponts is needed", ()=> {
        render(
              <ThemeProvider>
                     <LineDivider
                      color= ""
                      thickness= ""
                      width=""
                      points={[{ x: 0, y: 0 }, { x: 160, y: 0 }, { d: 35 }]}
                     />
                </ThemeProvider>
        );
        const lineDividerSvg = screen.getByTestId("lineDivider-svg");
        expect(lineDividerSvg).toBeVisible();
    })
})