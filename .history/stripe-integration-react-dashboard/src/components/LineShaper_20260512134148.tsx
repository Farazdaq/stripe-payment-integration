import React from "react";

export type Point = {
  x: number;
  y: number;
};

type Props = {
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

export const LineDivider: React.FC<Props> = ({
  points,

  color = "#000",
  thickness = 2,

  radiusTopLeft = 0,
  radiusTopRight = 0,
  radiusBottomLeft = 0,
  radiusBottomRight = 0,

  width = 0,
  height = 0,

  className,
  style,
}) => {
  const clipId = React.useId();

  if (!points || points.length < 2) return null;

  const buildPath = () =>
    points
      .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
      .join(" ");

  // ✅ check if ANY radius is provided
  const hasAnyRadius =
    radiusTopLeft > 0 ||
    radiusTopRight > 0 ||
    radiusBottomLeft > 0 ||
    radiusBottomRight > 0;

  // ✅ use single radius (first available one)
  const radius =
    radiusTopLeft ||
    radiusTopRight ||
    radiusBottomLeft ||
    radiusBottomRight ||
    0;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={style}
      viewBox={`0 0 ${width} ${height}`}
    >
      {hasAnyRadius && (
        <defs>
          <clipPath id={clipId}>
            <rect width={width} height={height} rx={radius} ry={radius} />
          </clipPath>
        </defs>
      )}

      <g clipPath={hasAnyRadius ? `url(#${clipId})` : undefined}>
        <path
          d={buildPath()}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
