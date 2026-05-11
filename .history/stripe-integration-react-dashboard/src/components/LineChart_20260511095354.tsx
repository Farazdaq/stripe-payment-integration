type LineChartProps = {
  title: string;
  xTitle?: string;
  yTitle?: string;
  data: { name: string; value: number }[];
};

export default function LineChart({
  title,
  xTitle,
  yTitle,
  data,
}: LineChartProps) {
  return (
    <div>
      <h1>{title}</h1>

      {xTitle && <p>X Title: {xTitle}</p>}
      {yTitle && <p>Y Title: {yTitle}</p>}

      <p>X Data: {xData.join(", ")}</p>
      <p>Y Data: {yData.join(", ")}</p>
    </div>
  );
}
