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

  width = 300,
  height = 150,

  className,
  style,
}) => {
  // ✅ Hooks must ALWAYS be called first
  const clipId = React.useId();

  const hasRadius =
    radiusTopLeft > 0 ||
    radiusTopRight > 0 ||
    radiusBottomLeft > 0 ||
    radiusBottomRight > 0;

  const buildPath = () => {
    if (!points || points.length < 2) return "";

    return points
      .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
      .join(" ");
  };

  // ✅ safe after hooks
  if (!points || points.length < 2) return null;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={style}
      viewBox={`0 0 ${width} ${height}`}
    >
      {hasRadius && (
        <defs>
          <clipPath id={clipId}>
            <rect
              width={width}
              height={height}
              rx={Math.max(
                radiusTopLeft,
                radiusTopRight,
                radiusBottomLeft,
                radiusBottomRight,
              )}
            />
          </clipPath>
        </defs>
      )}

      <g clipPath={hasRadius ? `url(#${clipId})` : undefined}>
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
