import { useTheme } from "../theme/useTheme";

// Mad as globaly used continers to host a passed component to show in colored container
type ContainerCompProps = {
  width?: string;
  height?: string;
  radiusAll?: number;
  radiusLeftTop?: number;
  radiusLeftBottom?: number;
  radiusRightTop?: number;
  radiusRightBottom?: number;
  background?: string;
  borderColor?: string;
  border?: boolean;
  stroke?: number;
  componentDisplay: React.ReactNode;
};

export default function ContainerComp({
  width,
  height,
  radiusAll,
  radiusLeftTop,
  radiusLeftBottom,
  radiusRightTop,
  radiusRightBottom,
  borderColor,
  border,
  stroke,
  componentDisplay: ComponentDisplay,
}: ContainerCompProps) {
  const { theme } = useTheme();
  const style: React.CSSProperties = {
    width,
    height,
    backgroundColor:theme.colors.containerCopBackgroundColor,
   
    border: border
      ? `${stroke ?? 1}px solid ${borderColor ? borderColor : theme.colors.borderColor}`
      : undefined,
    borderTopLeftRadius: radiusLeftTop ?? radiusAll,
    borderBottomLeftRadius: radiusLeftBottom ?? radiusAll,
    borderTopRightRadius: radiusRightTop ?? radiusAll,
    borderBottomRightRadius: radiusRightBottom ?? radiusAll,
  };

  return (
    <div data-testid="container1" style={style}>
      {ComponentDisplay}
    </div>
  );
}
