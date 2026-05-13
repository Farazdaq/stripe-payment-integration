// to make lines with corner radius
// defined type for the line shaper pass props
type LineShaperProps = {
  color?: string;
  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;
  thickness?: number;
  length?: number | string;

  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
};

function getMargins({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Pick<
  LineShaperProps,
  "marginTop" | "marginBottom" | "marginLeft" | "marginRight"
>) {
  return {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  };
}

function getBorderRadius({
  radiusLeftTop,
  radiusLeftBottom,
  radiusRightTop,
  radiusRightBottom,
}: Pick<
  LineShaperProps,
  "radiusLeftTop" | "radiusLeftBottom" | "radiusRightTop" | "radiusRightBottom"
>) {
  return {
    borderTopLeftRadius: radiusLeftTop,
    borderBottomLeftRadius: radiusLeftBottom,
    borderTopRightRadius: radiusRightTop,
    borderBottomRightRadius: radiusRightBottom,
  };
}

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
  const margins = getMargins({
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  });

  const borderRadius = getBorderRadius({
    radiusLeftTop,
    radiusLeftBottom,
    radiusRightTop,
    radiusRightBottom,
  });

  return (
    <div
      data-testId="lineShaper"
      style={{
        backgroundColor: color,
        height: thickness,
        width: length,
        ...borderRadius,
        ...margins,
      }}
    />
  );
}
