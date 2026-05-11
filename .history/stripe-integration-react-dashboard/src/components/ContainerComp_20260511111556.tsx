type ContainerCompProps = {
  width?: number;
  height?: number;
  radiusAll?: number;
  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;
  background?: string;
  border?: boolean;
  stroke?: number; // fixed typo
};

export default function ContainerComp({
  width,
  height,
  radiusAll,
  radiusLeftTop,
  radiusLeftBottom,
  radiusRightTop,
  radiusRightBottom,
  background,
  border,
  stroke,
}: ContainerCompProps) {
  const style: React.CSSProperties = {
    width,
    height,
    background,

    border: border ? `${stroke ?? 1}px solid black` : undefined,

    borderTopLeftRadius: radiusLeftTop ?? radiusAll,
    borderBottomLeftRadius: radiusLeftBottom ?? radiusAll,
    borderTopRightRadius: radiusRightTop ?? radiusAll,
    borderBottomRightRadius: radiusRightBottom ?? radiusAll,
  };

  return <div style={style} />;
}
