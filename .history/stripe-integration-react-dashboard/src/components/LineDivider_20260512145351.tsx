type Point = {
  x: number;
  y: number;
  d?: number;
};

type LineDividerProps = {
  color?: string;
  thickness?: string;
  width?: string;

  // NEW optional paddings
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;

  style?: React.CSSProperties;
  points?: Point[];
};

export default function LineDivider({
  color = "red",
  thickness = "2px",
  width = "100%",

  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,

  style = {},
  points,
}: LineDividerProps) {
  // Build padding styles only if provided
  const paddingStyles: React.CSSProperties = {
    ...(paddingTop !== undefined && { paddingTop }),
    ...(paddingBottom !== undefined && { paddingBottom }),
    ...(paddingLeft !== undefined && { paddingLeft }),
    ...(paddingRight !== undefined && { paddingRight }),
  };

  // If no points → simple divider
  if (!points || points.length === 0) {
    return (
      <div
        style={{
          height: thickness,
          width,
          backgroundColor: color,
          ...paddingStyles,
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
    <svg width={width} height="100" style={{ ...paddingStyles, ...style }}>
      <path
        d={path}
        stroke={color}
        strokeWidth={parseInt(thickness) || 2}
        fill="none"
      />
    </svg>
  );
}
