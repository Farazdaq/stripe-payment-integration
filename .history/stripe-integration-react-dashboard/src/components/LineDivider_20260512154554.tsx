type Point = {
  x?: number | string; // allow percentages
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

  const computedPoints: { x: number | string; y: number }[] = [];

  points.forEach((p, i) => {
    if (i === 0) {
      computedPoints.push({
        x: p.x ?? 0,
        y: p.y ?? 0,
      });
    } else {
      const prev = computedPoints[i - 1];
      computedPoints.push({
        x: p.x ?? (typeof prev.x === "number" ? prev.x + 60 : prev.x),
        y: p.d !== undefined ? prev.y + p.d : (p.y ?? prev.y),
      });
    }
  });

  const ys = computedPoints.map((p) => p.y);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const lineThickness = parseFloat(thickness) || 2;
  const svgHeight = maxY - minY + lineThickness * 2;

  const path = computedPoints
    .map((p, i) => {
      const x = p.x; // number or "xx%"
      const y = p.y - minY + lineThickness;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

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
