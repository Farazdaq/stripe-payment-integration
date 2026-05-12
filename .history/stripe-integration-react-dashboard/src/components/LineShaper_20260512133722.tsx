import React from "react";
import styled from "styled-components";

// Styled box with safe transient props
const Box = styled.div`
  width: ${({ $width }) => ($width ? `${$width}px` : "50px")};
  height: ${({ $height }) => ($height ? `${$height}px` : "50px")};
  background-color: ${({ $color }) => $color || "#ddd"};

  border-top-left-radius: ${({ $rtl }) => ($rtl ? `${$rtl}px` : "0px")};
  border-top-right-radius: ${({ $rtr }) => ($rtr ? `${$rtr}px` : "0px")};
  border-bottom-left-radius: ${({ $rbl }) => ($rbl ? `${$rbl}px` : "0px")};
  border-bottom-right-radius: ${({ $rbr }) => ($rbr ? `${$rbr}px` : "0px")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LogoBox({
  width = 50,
  height = 50,
  color = "#ddd",
  radiusTopLeft = 0,
  radiusTopRight = 0,
  radiusBottomLeft = 0,
  radiusBottomRight = 0,
  children,
}) {
  return (
    <Box
      $width={width}
      $height={height}
      $color={color}
      $rtl={radiusTopLeft}
      $rtr={radiusTopRight}
      $rbl={radiusBottomLeft}
      $rbr={radiusBottomRight}
    >
      {children}
    </Box>
  );
}
