import {
  CartesianGrid,
  Line,
  XAxis,
  LineChart,
  Tooltip,
  YAxis,
  Label,
} from "recharts";
import { useState } from "react";

type ChartData = {
  xValue: string;
  yValue: number;
};

type RangeType = "week" | "month" | "both";

type LineChartCompProps = {
  title: string;
  xTitle?: string;
  yTitle?: string;
  width?: number;
  height?: number;
  chartColor?: string;

  weekData: ChartData[];
  monthData: ChartData[];
};

function RangeDropdown({
  value,
  onChange,
}: {
  value: RangeType;
  onChange: (val: RangeType) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as RangeType)}
      style={{
        border: "1px solid #ccc",
        borderRadius: 6,
        padding: "6px 10px",
        cursor: "pointer",
        background: "#fff",
        fontSize: 13,
        outline: "none",
      }}
    >
      <option value="week">This Week</option>
      <option value="month">Last Month</option>
      <option value="both">Both</option>
    </select>
  );
}

export default function LineChartComp({
  title,
  xTitle,
  yTitle,
  width,
  height,
  chartColor = "#ff7300",
  weekData,
  monthData,
}: LineChartCompProps) {
  const [range, setRange] = useState<RangeType>("week");

  // 🔥 Decide what data to show
  const getData = (): ChartData[] => {
    if (range === "week") return weekData;

    if (range === "month") return monthData;

    // BOTH → merge datasets (simple concat or customize if needed)
    return [
      ...weekData.map((d) => ({ ...d, xValue: `W-${d.xValue}` })),
      ...monthData.map((d) => ({ ...d, xValue: `M-${d.xValue}` })),
    ];
  };

  const data = getData();

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>

        <RangeDropdown value={range} onChange={setRange} />
      </div>

      {/* CHART */}
      <LineChart width={width ?? 500} height={height ?? 300} data={data}>
        <XAxis dataKey="xValue" stroke="#d81c1c">
          <Label value={xTitle ?? ""} position="bottom" />
        </XAxis>

        <YAxis stroke="#d81c1c">
          <Label value={yTitle ?? ""} position="left" />
        </YAxis>

        <Tooltip />
        <CartesianGrid stroke="#eee" />

        <Line
          type="monotone"
          dataKey="yValue"
          stroke={chartColor}
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
}
