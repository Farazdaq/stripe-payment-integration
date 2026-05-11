import { LineChart } from "recharts";

type ChartData = {
  name: string;
  value: number;
};

type LineChartProps = {
  title: string;

  xTitle?: string;
  yTitle?: string;

  data: ChartData[];

  width?: number;
  height?: number;

  lineColor?: string;
  gridColor?: string;

  showGrid?: boolean;
  showTooltip?: boolean;
};

export default function LineChart({
  title,
  xTitle,
  yTitle,
  width,
  height,
  data,
}: LineChartProps) {
  return (
    <div>
      <LineChart width={width ?? 400} height={height ?? 400} data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Line type="monotone" dataKey="pv" stroke="#387908" />
      </LineChart>
    </div>
  );
}
