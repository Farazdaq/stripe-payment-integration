type LineShaperProps = {
  color?: string;
  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;
  thickness?: number;
  length?: number | string;

  // NEW OPTIONAL MARGINS
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
};

export default function LineShaper({
  color = "#000",
  radiusLeftTop = 0,
  radiusLeftBottom = 0,
  radiusRightTop = 0,
  radiusRightBottom = 0,
  thickness = 2,
  length = "100%",

  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: LineShaperProps) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: thickness,
        width: length,

        borderTopLeftRadius: radiusLeftTop,
        borderBottomLeftRadius: radiusLeftBottom,
        borderTopRightRadius: radiusRightTop,
        borderBottomRightRadius: radiusRightBottom,

        // Only apply margins if passed
        ...(marginTop !== undefined && { marginTop }),
        ...(marginBottom !== undefined && { marginBottom }),
        ...(marginLeft !== undefined && { marginLeft }),
        ...(marginRight !== undefined && { marginRight }),
      }}
    />
  );
}
