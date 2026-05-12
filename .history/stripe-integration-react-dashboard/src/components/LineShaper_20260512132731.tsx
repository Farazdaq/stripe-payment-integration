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
  if (!points || points.length < 2) return null;

  const buildPath = () => {
    let d = "";

    points.forEach((p, i) => {
      const cmd = i === 0 ? "M" : "L";
      d += `${cmd} ${p.x} ${p.y} `;
    });

    return d.trim();
  };

  const path = buildPath();

  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={style}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* Optional rounded clipping (basic approximation using rect) */}
      {(radiusTopLeft ||
        radiusTopRight ||
        radiusBottomLeft ||
        radiusBottomRight) && (
        <defs>
          <clipPath id="roundedClip">
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

      <g clipPath="url(#roundedClip)">
        <path
          d={path}
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
