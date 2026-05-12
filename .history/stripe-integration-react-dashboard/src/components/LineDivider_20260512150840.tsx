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
      computedPoints.push({
        x: p.x ?? 0,
        y: p.y ?? 0,
      });
    } else {
      const prev = computedPoints[i - 1];
      computedPoints.push({
        x: p.x ?? prev.x,
        y: p.d !== undefined ? prev.y + p.d : (p.y ?? prev.y),
      });
    }
  });

  // Calculate SVG height based on min/max Y
  const ys = computedPoints.map((p) => p.y);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const lineThickness = parseInt(thickness) || 2;

  const svgHeight = maxY - minY + lineThickness;

  // Build SVG path
  const path = computedPoints
    .map((p, i) => `L ${p.x} ${p.y - minY}`)
    .join(" ")
    .replace("L", "M"); // first L → M

  return (
    <svg
      width={width}
      height={svgHeight}
      style={{ display: "block", margin, ...style }}
    >
      <path d={path} stroke={color} strokeWidth={lineThickness} fill="none" />
    </svg>
  );
}
