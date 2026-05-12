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

  // If points exist → render SVG line path
  const path = points
    .map((p, i) => {
      const prefix = i === 0 ? "M" : "L";
      return `${prefix} ${p.x} ${p.y}`;
    })
    .join(" ");

  return (
    <svg width={width} height="100" style={{ margin, ...style }}>
      <path
        d={path}
        stroke={color}
        strokeWidth={parseInt(thickness) || 2}
        fill="none"
      />
    </svg>
  );
}
