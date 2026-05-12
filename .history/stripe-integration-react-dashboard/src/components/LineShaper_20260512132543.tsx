import { useId } from "react";

type Point = {
  x: number;
  y: number;
};

type LineShaperProps = {
  color?: string;
  strokeWidth?: number;

  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;

  points?: Point[];

  width?: string;
  height?: string;

  radiusTopLeft?: number;
  radiusTopRight?: number;
  radiusBottomLeft?: number;
  radiusBottomRight?: number;
};

export default function LineShaper({
  color = "black",
  strokeWidth = 4,

  startX = 10,
  startY = 10,
  endX = 300,
  endY = 10,

  points = [],

  width = "100%",
  height = "100%",

  radiusTopLeft = 0,
  radiusTopRight = 0,
  radiusBottomLeft = 0,
  radiusBottomRight = 0,
}: LineShaperProps) {
  const clipId = useId();

  const allPoints: Point[] = [
    { x: startX, y: startY },
    ...points,
    { x: endX, y: endY },
  ];

  const path = allPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  /**
   * Build rounded rectangle path manually (IMPORTANT FIX)
   */
  const roundedPath = `
    M ${radiusTopLeft},0
    H calc(100% - ${radiusTopRight})
    Q 100% 0 100% ${radiusTopRight}
    V calc(100% - ${radiusBottomRight})
    Q 100% 100% calc(100% - ${radiusBottomRight}) 100%
    H ${radiusBottomLeft}
    Q 0 100% 0 calc(100% - ${radiusBottomLeft})
    V ${radiusTopLeft}
    Q 0 0 ${radiusTopLeft} 0
    Z
  `;

  return (
    <svg width={width} height={height}>
      <defs>
        {/* REAL rounded clip path */}
        <clipPath id={clipId} clipPathUnits="objectBoundingBox">
          <path d={roundedPath} transform="scale(0.01, 0.01)" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <path
          d={path}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
