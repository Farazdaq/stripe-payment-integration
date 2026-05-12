type Point = {
  x: number;
  y: number;
};

type LineShaperProps = {
  color?: string;
  strokeWidth?: number;
  rotate?: number;

  /**
   * Responsive SVG size
   */
  width?: string;
  height?: string;

  /**
   * Internal drawing space
   */
  viewBoxWidth?: number;
  viewBoxHeight?: number;

  /**
   * Line points
   */
  points?: Point[];
};

export default function LineShaper({
  color = "black",
  strokeWidth = 4,
  rotate = 0,

  width = "100%",
  height = "100%",

  viewBoxWidth = 300,
  viewBoxHeight = 200,

  points = [
    { x: 10, y: 10 },
    { x: 100, y: 10 },
    { x: 100, y: 100 },
    { x: 200, y: 100 },
  ],
}: LineShaperProps) {
  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <div className="w-full h-full">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          transform: `rotate(${rotate}deg)`,
          overflow: "visible",
        }}
      >
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
