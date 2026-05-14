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
        border: "1px solid rgba(255,255,255,0.5)",
        borderRadius: 8,
        padding: "8px 14px",
        width: 140,
        color: "white",
        background: "transparent",
        cursor: "pointer",
        outline: "none",
        fontWeight: 500,
      }}
    >
      {options.map((opt) => (
        <option
          key={opt}
          value={opt}
          style={{ color: "black" }} // options list stays readable
        >
          {opt === "week" ? "📅 This Week" : "📊 Last Month"}
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
  width = 600,
  height = 300,
  chartColor = "#ff7300",
  weekData,
  monthData,
}: LineChartCompProps) {
  // Available options
  const availableOptions: RangeType[] = [];

  if (weekData?.length) availableOptions.push("week");
  if (monthData?.length) availableOptions.push("month");

  const [range, setRange] = useState<RangeType>(availableOptions[0] || "week");

  const data = range === "week" ? weekData || [] : monthData || [];

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER aligned with chart width */}
      <div
        style={{
          width: width,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>

        {availableOptions.length > 0 && (
          <RangeDropdown
            options={availableOptions}
            value={range}
            onChange={setRange}
          />
        )}
      </div>

      {/* CHART */}
      <LineChart width={width} height={height} data={data}>
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
