type LineDividerProps = {
  color?: string;
  thickness?: string;
  width?: string;
  margin?: string;
  style?: React.CSSProperties;
};

export default function LineDivider({
  color = "red",
  thickness = "2px",
  width = "100%",
  margin = "0",
  style = {},
}: LineDividerProps) {
  return (
    <div
      style={{
        height: thickness,
        width,
        backgroundColor: color,
        margin,
        ...style,
      }}
    />
  );
}
