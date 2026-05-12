type LineShaperProps = {
  color?: string;
  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;
  thickness?: number;
  length?: number | string; // NEW
};

export default function LineShaper({
  color = "#000",
  radiusLeftTop = 0,
  radiusLeftBottom = 0,
  radiusRightTop = 0,
  radiusRightBottom = 0,
  thickness = 2,
  length = "100%", // default
}: LineShaperProps) {
  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: color,
        height: thickness,
        width: length,
        borderTopLeftRadius: radiusLeftTop,
        borderBottomLeftRadius: radiusLeftBottom,
        borderTopRightRadius: radiusRightTop,
        borderBottomRightRadius: radiusRightBottom,
      }}
    />
  );
}
