import React from "react";

type Point = {
  x: number;
  y: number;
};

type LineShaperProps = {
  points: Point[];

  color?: string;
  thickness?: number;

  radiusTopLeft?: number;
  radiusTopRight?: number;
  radiusBottomLeft?: number;
  radiusBottomRight?: number;

  className?: string;
  style?: React.CSSProperties;
};

const buildPath = (
  points: Point[],
  rTL: number,
  rTR: number,
  rBL: number,
  rBR: number,
) => {
  if (!points || points.length < 2) return "";

  const getRadius = (i: number) => {
    if (i === 0) return rTL;
    if (i === 1) return rTR;
    if (i === points.length - 2) return rBL;
    if (i === points.length - 1) return rBR;
    return 0;
  };

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    const dx1 = curr.x - prev.x;
    const dy1 = curr.y - prev.y;
    const dx2 = next.x - curr.x;
    const dy2 = next.y - curr.y;

    const len1 = Math.hypot(dx1, dy1);
    const len2 = Math.hypot(dx2, dy2);

    const radius = Math.min(getRadius(i), len1 / 2, len2 / 2);

    // ✅ IMPORTANT: if radius is 0 → draw sharp corner (no curve)
    if (radius <= 0) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }

    const ux1 = dx1 / len1;
    const uy1 = dy1 / len1;
    const ux2 = dx2 / len2;
    const uy2 = dy2 / len2;

    const p1x = curr.x - ux1 * radius;
    const p1y = curr.y - uy1 * radius;

    const p2x = curr.x + ux2 * radius;
    const p2y = curr.y + uy2 * radius;

    d += ` L ${p1x} ${p1y}`;
    d += ` Q ${curr.x} ${curr.y} ${p2x} ${p2y}`;
  }

  const last = points[points.length - 1];
  d += ` L ${last.x} ${last.y}`;

  return d;
};

export const LineShaper: React.FC<LineShaperProps> = ({
  points,

  color = "#3b82f6",
  thickness = 4,

  radiusTopLeft = 0,
  radiusTopRight = 0,
  radiusBottomLeft = 0,
  radiusBottomRight = 0,

  className,
  style,
}) => {
  if (!points?.length || points.length < 2) return null;

  const d = buildPath(
    points,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
  );

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
  );
};
