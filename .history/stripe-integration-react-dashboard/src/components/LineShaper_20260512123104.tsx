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

  radiusAll = 0,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
}: LineShaperProps) {
  const allPoints: Point[] = [
    { x: startX, y: startY },
    ...points,
    { x: endX, y: endY },
  ];

  const path = allPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const rTL = radiusTopLeft ?? radiusAll;
  const rTR = radiusTopRight ?? radiusAll;
  const rBL = radiusBottomLeft ?? radiusAll;
  const rBR = radiusBottomRight ?? radiusAll;

  const clipId = `clip-${Math.random().toString(36).slice(2)}`;

  return (
    <svg width={width} height={height}>
      {/* Rounded clip area */}
      <defs>
        <clipPath id={clipId}>
          <rect width="100%" height="100%" rx={radiusAll} ry={radiusAll} />
        </clipPath>
      </defs>

      {/* Clipped group */}
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
