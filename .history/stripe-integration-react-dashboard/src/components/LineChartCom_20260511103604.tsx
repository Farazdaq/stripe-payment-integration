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

type LineChartComProps = {
  title: string;
  xTitle?: string;
  yTitle?: string;
  data: ChartData[];
  width?: number;
  height?: number;
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
      <h3 style={{ textAlign: "center", marginBottom: 8 }}>
        {title ?? "set title about"}
      </h3>
      <LineChart width={width ?? 400} height={height ?? 400} data={data}>
        <XAxis dataKey="xValue">
          <Label value={xTitle ?? ""} position="bottom" offset={0} />
        </XAxis>
        <YAxis dataKey="yValue">
          <Label value={yTitle ?? ""} position="left" offset={0} />
        </YAxis>
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="yValue" stroke="#ff7300" />
      </LineChart>
    </div>
  );
}
