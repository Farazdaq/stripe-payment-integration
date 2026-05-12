type LineShaperProps = {
  color?: string;
  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;
  thickness?: number;
};

export default function LineShaper({
  color = "#000",
  radiusLeftTop = 0,
  radiusLeftBottom = 0,
  radiusRightTop = 0,
  radiusRightBottom = 0,
  thickness = 2,
}: LineShaperProps) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: thickness,
        borderTopLeftRadius: radiusLeftTop,
        borderBottomLeftRadius: radiusLeftBottom,
        borderTopRightRadius: radiusRightTop,
        borderBottomRightRadius: radiusRightBottom,
      }}
    />
  );
}
