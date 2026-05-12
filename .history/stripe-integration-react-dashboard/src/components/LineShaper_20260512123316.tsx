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

  radiusAll?: number;
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

  radiusAll = 0,
}: LineShaperProps) {
  const id = useId(); // ✅ stable unique id

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
        <clipPath id={id}>
          <rect width="100%" height="100%" rx={radiusAll} ry={radiusAll} />
        </clipPath>
      </defs>

      <g clipPath={`url(#${id})`}>
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
