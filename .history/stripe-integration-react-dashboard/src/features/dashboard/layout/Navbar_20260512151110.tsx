type Point = {
  x?: number;
  y?: number;
  d?: number;
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

  // Build absolute points
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

  // Auto-calc bounds
  const xs = computedPoints.map((p) => p.x);
  const ys = computedPoints.map((p) => p.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const lineThickness = parseInt(thickness) || 2;

  // Auto-size SVG to fit the line
  const svgWidth = maxX - minX + lineThickness;
  const svgHeight = maxY - minY + lineThickness;

  // Build path (shift to 0,0)
  const path = computedPoints
    .map((p, i) => {
      const x = p.x - minX;
      const y = p.y - minY;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      style={{
        display: "block",
        margin,
        ...style,
      }}
    >
      <path d={path} stroke={color} strokeWidth={lineThickness} fill="none" />
    </svg>
  );
}
