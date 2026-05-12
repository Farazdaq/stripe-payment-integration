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
  curved?: boolean; // NEW: smooth curve option
};

export default function LineDivider({
  color = "red",
  thickness = "2px",
  width = "100%",
  margin = "0",
  style = {},
  points,
  curved = false,
}: LineDividerProps) {
  // Simple divider fallback
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

  // Compute absolute points
  const computedPoints: { x: number; y: number }[] = [];
  points.forEach((p, i) => {
    if (i === 0) {
      computedPoints.push({ x: p.x ?? 0, y: p.y ?? 0 });
    } else {
      const prev = computedPoints[i - 1];
      computedPoints.push({
        x: p.x ?? prev.x + 60,
        y: p.d !== undefined ? prev.y + p.d : (p.y ?? prev.y),
      });
    }
  });

  // Calculate bounds
  const xs = computedPoints.map((p) => p.x);
  const ys = computedPoints.map((p) => p.y);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const lineThickness = parseFloat(thickness) || 2;
  const svgHeight = maxY - minY + lineThickness * 2;

  // Build path (curved or straight)
  let path = "";
  if (curved) {
    path = computedPoints
      .map((p, i) => {
        const x = p.x;
        const y = p.y - minY + lineThickness;
        if (i === 0) return `M ${x} ${y}`;
        const prev = computedPoints[i - 1];
        const cx = (prev.x + x) / 2;
        const cy = (prev.y + p.y) / 2 - minY + lineThickness;
        return `Q ${cx} ${cy}, ${x} ${y}`;
      })
      .join(" ");
  } else {
    path = computedPoints
      .map(
        (p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y - minY + lineThickness}`,
      )
      .join(" ");
  }

  return (
    <svg
      width="100%"
      height={svgHeight}
      preserveAspectRatio="none"
      style={{ display: "block", margin, ...style }}
    >
      <path d={path} stroke={color} strokeWidth={lineThickness} fill="none" />
    </svg>
  );
}
