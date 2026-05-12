import React from "react";

type Point = {
  x: number;
  y: number;
  d?: number;
};

export type LineShaperProps = {
  color?: string;
  thickness?: number;

  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;

  points: Point[];
};

function clampRadius(r: number | undefined, fallback: number) {
  return typeof r === "number" ? r : fallback;
}

// builds a simple rounded path between points
function buildPath(
  points: Point[],
  r: {
    lt: number;
    lb: number;
    rt: number;
    rb: number;
  },
) {
  if (points.length < 2) return "";

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    // direction vectors
    const dx1 = curr.x - prev.x;
    const dy1 = curr.y - prev.y;
    const dx2 = next.x - curr.x;
    const dy2 = next.y - curr.y;

    const len1 = Math.hypot(dx1, dy1);
    const len2 = Math.hypot(dx2, dy2);

    const r1 = Math.min(r.rb, len1 / 2);
    const r2 = Math.min(r.lt, len2 / 2);

    // normalize
    const ux1 = dx1 / len1;
    const uy1 = dy1 / len1;
    const ux2 = dx2 / len2;
    const uy2 = dy2 / len2;

    // start and end of rounded corner
    const p1x = curr.x - ux1 * r1;
    const p1y = curr.y - uy1 * r1;

    const p2x = curr.x + ux2 * r2;
    const p2y = curr.y + uy2 * r2;

    d += ` L ${p1x} ${p1y}`;
    d += ` Q ${curr.x} ${curr.y} ${p2x} ${p2y}`;
  }

  const last = points[points.length - 1];
  d += ` L ${last.x} ${last.y}`;

  return d;
}

export default function LineShaper({
  color = "#000",
  thickness = 2,
  radiusLeftTop,
  radiusLeftBottom,
  radiusRightTop,
  radiusRightBottom,
  points,
}: LineShaperProps) {
  if (!points || points.length < 2) return null;

  // default radius if not provided
  const r = {
    lt: clampRadius(radiusLeftTop, 8),
    lb: clampRadius(radiusLeftBottom, 8),
    rt: clampRadius(radiusRightTop, 8),
    rb: clampRadius(radiusRightBottom, 8),
  };

  const path = buildPath(points, r);

  return (
    <svg width="100%" height="100%">
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
