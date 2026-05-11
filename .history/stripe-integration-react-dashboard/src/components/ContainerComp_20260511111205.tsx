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
  stork?: number;
};

export default function ({}: ContainerCompProps) {
  return <div></div>;
}
