type Point = {
  x: number;
  y: number;
};

type LineShaperProps = {
  color?: string;
  strokeWidth?: number;

  /**
   * Start point
   */
  startX?: number;
  startY?: number;

  /**
   * End point
   */
  endX?: number;
  endY?: number;

  /**
   * Optional bend/change points
   */
  points?: Point[];

  /**
   * Responsive sizing
   */
  width?: string;
  height?: string;

  viewBoxWidth?: number;
  viewBoxHeight?: number;
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

  viewBoxWidth = 400,
  viewBoxHeight = 300,
}: LineShaperProps) {
  /**
   * Build full line path
   *
   * Starts normally
   * Expands straight
   * Changes direction ONLY when points exist
   */
  const allPoints: Point[] = [
    { x: startX, y: startY },
    ...points,
    { x: endX, y: endY },
  ];

  const path = allPoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <div className="w-full h-full">
      <svg width={width} height={height} preserveAspectRatio="xMidYMid meet">
        <path
          d={path}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
