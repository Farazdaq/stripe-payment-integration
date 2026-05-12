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

  /**
   * Corner radius control (container rounding)
   * default = 0
   */
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
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const style: React.CSSProperties = {
    borderTopLeftRadius: radiusTopLeft ?? radiusAll,
    borderTopRightRadius: radiusTopRight ?? radiusAll,
    borderBottomLeftRadius: radiusBottomLeft ?? radiusAll,
    borderBottomRightRadius: radiusBottomRight ?? radiusAll,
    overflow: "hidden",
  };

  return (
    <div className="w-full h-full" style={style}>
      <svg width={width} height={height}>
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
