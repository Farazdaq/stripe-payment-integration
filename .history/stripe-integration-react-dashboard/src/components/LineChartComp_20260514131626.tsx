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

type RangeType = "week" | "month";

type LineChartCompProps = {
  title: string;
  xTitle?: string;
  yTitle?: string;
  width?: number;
  height?: number;
  chartColor?: string;

  weekData?: ChartData[];
  monthData?: ChartData[];
};

/* ---------------- Dropdown Component ---------------- */
function RangeDropdown({
  options,
  value,
  onChange,
}: {
  options: RangeType[];
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
        background: "#fff",
        fontSize: 13,
        cursor: "pointer",
        outline: "none",
      }}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt === "week" ? "This Week" : "Last Month"}
        </option>
      ))}
    </select>
  );
}

/* ---------------- Main Component ---------------- */
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
  // Determine which options are available
  const availableOptions: RangeType[] = [];

  if (weekData && weekData.length > 0) availableOptions.push("week");
  if (monthData && monthData.length > 0) availableOptions.push("month");

  // Default selected range
  const [range, setRange] = useState<RangeType>(availableOptions[0] || "week");

  // Pick dataset based on selection
  const data = range === "week" ? weekData || [] : monthData || [];

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          marginRight: 30,
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>

        {/* Dropdown only if more than 1 option */}
        {availableOptions.length > 0 && (
          <RangeDropdown
            options={availableOptions}
            value={range}
            onChange={setRange}
          />
        )}
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
