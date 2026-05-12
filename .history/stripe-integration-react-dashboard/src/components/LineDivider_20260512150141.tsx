type Point = {
  x: number;
  y: number;
  d?: number; // optional distance from previous point
};

type LineDividerProps = {
  color?: string;
  thickness?: string;
  width?: string;
  margin?: string;
  style?: React.CSSProperties;
  points?: Point[]; // optional line path points
};

export default function LineDivider({
  color = "red",
  thickness = "2px",
  width = "100%",
  margin = "0",
  style = {},
  points,
}: LineDividerProps) {
  // If no points provided → simple divider
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

  // Build SVG path
  const path = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  // FIX: SVG height should match thickness, not 100px
  const svgHeight = parseInt(thickness) || 2;

  return (
    <svg
      width={width}
      height={svgHeight}
      style={{
        display: "block",
        margin,
        ...style,
      }}
    >
      <path d={path} stroke={color} strokeWidth={svgHeight} fill="none" />
    </svg>
  );
}
