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

  return (
    <svg width={width} height={height}>
      <defs>
        <clipPath id={clipId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx={radiusTopLeft}
            ry={radiusTopLeft}
            style={{
              borderTopLeftRadius: radiusTopLeft,
              borderTopRightRadius: radiusTopRight,
              borderBottomLeftRadius: radiusBottomLeft,
              borderBottomRightRadius: radiusBottomRight,
            }}
          />
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
