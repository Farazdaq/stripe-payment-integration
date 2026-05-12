import React from "react";

type LineShaperProps = {
  color?: string;
  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;
  thickness?: number;
  width?: number;
  height?: number;
};

const LineShaper: React.FC<LineShaperProps> = ({
  color = "black",
  radiusLeftTop = 0,
  radiusLeftBottom = 0,
  radiusRightTop = 0,
  radiusRightBottom = 0,
  thickness = 0,
  width = 0,
  height = 0,
}) => {
  // Build an SVG path with independent corner radii
  const path = `
    M ${radiusLeftTop},0
    H ${width - radiusRightTop}
    Q ${width},0 ${width},${radiusRightTop}
    V ${height - radiusRightBottom}
    Q ${width},${height} ${width - radiusRightBottom},${height}
    H ${radiusLeftBottom}
    Q 0,${height} 0,${height - radiusLeftBottom}
    V ${radiusLeftTop}
    Q 0,0 ${radiusLeftTop},0
    Z
  `;

  return (
    <svg width={width} height={height}>
      <path d={path} fill="none" stroke={color} strokeWidth={thickness} />
    </svg>
  );
};

export default LineShaper;
