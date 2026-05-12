type Point = {
  x?: number;
  y?: number;
  d?: number; // relative vertical movement
};

type LineDividerProps = {
  color?: string;
  thickness?: string;
  width?: string;
  margin?: string;
  style?: React.CSSProperties;
  points?: Point[];
};

export default function LineDivider({
  color = "red",
  thickness = "2px",
  width = "100%",
  margin = "0",
  style = {},
  points,
}: LineDividerProps) {
  // If no points → simple divider
  if (!points || points.length === 0) {
    return (
      <div
        style={{
          height: thickness,
          width,
          backgroundColor: color,
          margin,
          ...style,
        }}
      />
    );
  }

  // Convert relative points (d) into absolute x,y
  const computedPoints: { x: number; y: number }[] = [];

  points.forEach((p, i) => {
    if (i === 0) {
      // First point must have x,y
      computedPoints.push({
        x: p.x ?? 0,
        y: p.y ?? 0,
      });
    } else {
      const prev = computedPoints[i - 1];

      computedPoints.push({
        x: p.x ?? prev.x, // keep same x unless changed
        y: p.d !== undefined ? prev.y + p.d : (p.y ?? prev.y),
      });
    }
  });

  // Build SVG path
  const path = computedPoints
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  const svgHeight = parseInt(thickness) || 2;

  return (
    <svg
      width={width}
      height={svgHeight}
      style={{ display: "block", margin, ...style }}
    >
      <path d={path} stroke={color} strokeWidth={svgHeight} fill="none" />
    </svg>
  );
}
