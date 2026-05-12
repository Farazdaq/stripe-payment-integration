type Point = {
  x: number;
  y: number;
  d?: number;
};

type LineDividerProps = {
  color?: string;
  thickness?: string;
  width?: string;

  // NEW optional margins
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;

  style?: React.CSSProperties;
  points?: Point[];
};

export default function LineDivider({
  color = "red",
  thickness = "2px",
  width = "100%",

  marginTop,
  marginBottom,
  marginLeft,
  marginRight,

  style = {},
  points,
}: LineDividerProps) {
  // Build margin styles only if provided
  const marginStyles: React.CSSProperties = {
    ...(marginTop !== undefined && { marginTop }),
    ...(marginBottom !== undefined && { marginBottom }),
    ...(marginLeft !== undefined && { marginLeft }),
    ...(marginRight !== undefined && { marginRight }),
  };

  // If no points → simple divider
  if (!points || points.length === 0) {
    return (
      <div
        style={{
          height: thickness,
          width,
          backgroundColor: color,
          ...marginStyles,
          ...style,
        }}
      />
    );
  }

  // If points exist → SVG path
  const path = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  return (
    <svg width={width} height="100" style={{ ...marginStyles, ...style }}>
      <path
        d={path}
        stroke={color}
        strokeWidth={parseInt(thickness) || 2}
        fill="none"
      />
    </svg>
  );
}
