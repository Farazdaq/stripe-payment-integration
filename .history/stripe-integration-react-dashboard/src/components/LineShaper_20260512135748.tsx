import React from "react";

type Point = {
  x: number;
  y: number;
  d?: number; // distance from previous point
};

export type LineShaperProps = {
  color?: string;
  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;
  thickness?: number;
  points: Point[];
};

export default function LineShaper({
  color = "#000",
  thickness = 2,
  points,
}: LineShaperProps) {
  if (!points || points.length < 2) return null;

  return (
    <svg width="100%" height="100%">
      {points.slice(0, -1).map((p, i) => {
        const next = points[i + 1];

        return (
          <line
            key={i}
            x1={p.x}
            y1={p.y}
            x2={next.x}
            y2={next.y}
            stroke={color}
            strokeWidth={thickness}
            strokeLinecap="round"
          />
        );
      })}

      {/* optional debug points */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} fill={color} />
      ))}
    </svg>
  );
}
