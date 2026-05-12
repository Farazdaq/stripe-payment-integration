import React from "react";

type LineShaperProps = {
  color?: string;
  thickness?: number;
  width?: number;
  height?: number;

  topRadius?: number;
  bottomRadius?: number;
  leftRadius?: number;
  rightRadius?: number;
};

const LineShaper: React.FC<LineShaperProps> = ({
  color = "black",
  thickness = 4,
  width = 200,
  height = 200,

  topRadius = 0,
  bottomRadius = 0,
  leftRadius = 0,
  rightRadius = 0,
}) => {
  const w = width;
  const h = height;

  const tr = topRadius;
  const br = bottomRadius;
  const lr = leftRadius;
  const rr = rightRadius;

  const path = `
    M ${lr},0
    H ${w - rr}
    Q ${w},0 ${w},${rr}
    V ${h - br}
    Q ${w},${h} ${w - rr},${h}
    H ${lr}
    Q 0,${h} 0,${h - lr}
    V ${tr}
    Q 0,0 ${lr},0
    Z
  `;

  return (
    <svg>
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LineShaper;
