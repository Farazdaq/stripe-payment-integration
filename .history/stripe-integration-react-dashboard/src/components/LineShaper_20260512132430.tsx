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

  width?: number;
  height?: number;

  className?: string;
  style?: React.CSSProperties;
};

const buildPathWithCornerRadii = (
  points: Point[],
  rTL?: number,
  rTR?: number,
  rBL?: number,
  rBR?: number,
) => {
  if (points.length < 2) return "";

  const hasAnyRadius =
    (rTL ?? 0) > 0 || (rTR ?? 0) > 0 || (rBL ?? 0) > 0 || (rBR ?? 0) > 0;

  const pickRadius = (value?: number) =>
    typeof value === "number" && value > 0 ? value : 0;

  const getRadius = (i: number) => {
    if (i === 0) return pickRadius(rTL);
    if (i === 1) return pickRadius(rTR);
    if (i === points.length - 2) return pickRadius(rBL);
    if (i === points.length - 1) return pickRadius(rBR);

    const all = [rTL, rTR, rBL, rBR].filter(
      (v): v is number => typeof v === "number" && v > 0,
    );

    return all.length ? Math.min(...all) : 0;
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

    const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

    const radius = Math.min(getRadius(i), len1 / 2, len2 / 2);

    const ux1 = dx1 / len1;
    const uy1 = dy1 / len1;
    const ux2 = dx2 / len2;
    const uy2 = dy2 / len2;

    const p1x = curr.x - ux1 * radius;
    const p1y = curr.y - uy1 * radius;

    const p2x = curr.x + ux2 * radius;
    const p2y = curr.y + uy2 * radius;

    // If no radius is actually active, just draw straight lines
    if (!hasAnyRadius) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }

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

  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,

  width = 300,
  height = 150,

  className,
  style,
}) => {
  if (!points || points.length < 2) return null;

  const pathD = buildPathWithCornerRadii(
    points,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
  );

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={style}
    >
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
