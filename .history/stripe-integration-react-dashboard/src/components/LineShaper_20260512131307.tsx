import React from "react";

type LineShaperProps = {
  color?: string;
  thickness?: number;
  width?: string | number;

  radiusTopLeft?: number;
  radiusTopRight?: number;
  radiusBottomLeft?: number;
  radiusBottomRight?: number;

  style?: React.CSSProperties;
  className?: string;
};

export const LineShaper: React.FC<LineShaperProps> = ({
  color = "#3b82f6",
  thickness = 4,
  width = "100%",

  radiusTopLeft = 0,
  radiusTopRight = 0,
  radiusBottomLeft = 0,
  radiusBottomRight = 0,

  style,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        width,
        height: thickness,
        backgroundColor: color,

        borderTopLeftRadius: radiusTopLeft,
        borderTopRightRadius: radiusTopRight,
        borderBottomLeftRadius: radiusBottomLeft,
        borderBottomRightRadius: radiusBottomRight,

        ...style,
      }}
    />
  );
};
