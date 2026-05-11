import { useTheme } from "../theme/useTheme";

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
  stroke?: number;
  componentDisplay: React.ComponentType;
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
  componentDisplay: ComponentDisplay,
}: ContainerCompProps) {
  const { theme } = useTheme();
  const style: React.CSSProperties = {
    width,
    height,
    background: background
      ? background
      : theme.colors.containerCopBackgroundColor,
    border: border
      ? `${stroke ?? 1}px solid ${theme.colors.borderColor}`
      : undefined,
    borderTopLeftRadius: radiusLeftTop ?? radiusAll,
    borderBottomLeftRadius: radiusLeftBottom ?? radiusAll,
    borderTopRightRadius: radiusRightTop ?? radiusAll,
    borderBottomRightRadius: radiusRightBottom ?? radiusAll,
  };

  return (
    <div data-testid="container1" style={style}>
      <ComponentDisplay />
    </div>
  );
}
