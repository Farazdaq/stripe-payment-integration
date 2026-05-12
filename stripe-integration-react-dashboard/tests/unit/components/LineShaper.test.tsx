import {render, screen} from "@testing-library/react"
import { describe, test, expect, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom"
import LineShaper from "../../../src/components/LineShaper"
import { ThemeProvider } from "../../../src/theme/ThemeProvider"

describe("LineShaper comp test", ()=> {
    // Test Case 1: will the the Linshaper render 
    test("Test if LineShaper will render", () => {
        render(
             <ThemeProvider>     <LineShaper /></ThemeProvider>
       
        );
        const lineShaper = screen.getByTestId("lineShaper");
        expect(lineShaper).toBeInTheDocument();
    })

    test("Test showing with props", ()=> {
        render(
       <ThemeProvider>    
         <LineShaper
          color="#E0E0DD"
          thickness={30}
          length={"9%"}
          radiusRightTop={50}
       /></ThemeProvider>
        );
        const lineShaper = screen.getByTestId("lineShaper");
        // it has to be visisbale
        expect(lineShaper).toBeVisible();

        // it has to have corner radius and color
        expect(lineShaper).toHaveStyle({
             backgroundColor: "rgb(224, 224, 221)" ,
             borderTopRightRadius: "50px"
        });
    })
})