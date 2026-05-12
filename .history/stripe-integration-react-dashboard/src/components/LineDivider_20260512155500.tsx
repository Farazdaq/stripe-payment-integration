type Point = {
  x?: number | string;
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
  startAtLastPoint?: boolean; // NEW
};

export default function LineDivider({
  color = "red",
  thickness = "2px",
  width = "100%",
  margin = "0",
  style = {},
  points,
  startAtLastPoint = false,
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
      computedPoints.push({ x: p.x ?? 0, y: p.y ?? 0 });
    } else {
      const prev = computedPoints[i - 1];
      computedPoints.push({
        x: p.x ?? prev.x,
        y: p.d !== undefined ? prev.y + p.d : p.y ?? prev.y,
      });
    }
  });

  const lastY = computedPoints[computedPoints.length - 1].y;

  const ys = computedPoints.map((p) => p.y);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const lineThickness = parseFloat(thickness) || 2;
  const svgHeight = maxY - minY + lineThickness * 2;

  const path = computedPoints
    .map((p, i) => {
      const x = p.x;
      const y = p.y - minY + lineThickness;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg
      width="100%"
      height={svgHeight}
      preserveAspectRatio="none"
      style={{
        display: "block",
        margin,
        ...style,
        transform: startAtLastPoint ? `translateY(${lastY}px)` : "none",
      }}
    >
      <path d={path} stroke={color} strokeWidth={lineThickness} fill="none" />
    </svg>
  );
}
