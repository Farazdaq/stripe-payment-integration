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
  xValue: string;
  yValue: number;
};

type LineChartCompProps = {
  title: string;
  chartColor?: string;
  xTitle?: string;
  yTitle?: string;
  data: ChartData[];
  width?: number;
  height?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
};

export default function LineChartComp({
  title,
  chartColor,
  xTitle,
  yTitle,
  width,
  height,
  data,
}: LineChartCompProps) {
  return (
    <div style={{ padding: 20, alignItems: "center" }}>
      <h3 style={{ textAlign: "left", marginBottom: 10, marginLeft: 40 }}>
        {title ?? "set title about"}
      </h3>
      <LineChart width={width ?? 400} height={height ?? 400} data={data}>
        <XAxis dataKey="xValue" stroke={chartColor}>
          <Label value={xTitle ?? ""} position="bottom" offset={0} />
        </XAxis>
        <YAxis dataKey="yValue" stroke={chartColor}>
          <Label value={yTitle ?? ""} position="left" offset={0} />
        </YAxis>
        <Tooltip />
        <CartesianGrid stroke={chartColor} />
        <Line type="monotone" dataKey="yValue" stroke={chartColor} />
      </LineChart>
    </div>
  );
}
