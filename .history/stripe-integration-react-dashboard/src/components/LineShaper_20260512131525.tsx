import React from "react";

type Point = {
  x: number;
  y: number;
};

type LineShaperProps = {
  points: Point[];

  color?: string;
  thickness?: number;

  width?: number;
  height?: number;

  className?: string;
  style?: React.CSSProperties;
};

export const LineShaper: React.FC<LineShaperProps> = ({
  points,

  color = "#3b82f6",
  thickness = 4,

  width = 200,
  height = 100,

  className,
  style,
}) => {
  if (!points || points.length < 2) return null;

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={style}
      viewBox={`0 0 ${width} ${height}`}
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
