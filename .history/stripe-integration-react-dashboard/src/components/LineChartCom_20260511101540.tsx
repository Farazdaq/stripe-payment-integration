import {
  CartesianGrid,
  Line,
  XAxis,
  LineChart,
  Tooltip,
  YAxis,
  Label,
} from "recharts";

type ChartData = {
  name: string;
  value: number;
};

type LineChartComProps = {
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

export default function LineChartCom({
  title,
  xTitle,
  yTitle,
  width,
  height,
  data,
}: LineChartComProps) {
  return (
    <div>
      <LineChart width={width ?? 400} height={height ?? 400} data={data}>
        <XAxis></XAxis>
        <YAxis dataKey="yValue" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Line type="monotone" dataKey="pv" stroke="#387908" />
      </LineChart>
    </div>
  );
}
