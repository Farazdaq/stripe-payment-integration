import {
  CartesianGrid,
  Line,
  XAxis,
  LineChart,
  Tooltip,
  YAxis,
  Label,
} from "recharts";
import { useMemo, useState } from "react";
import { useTheme } from "../theme/useTheme";

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

/* ---------------- Dropdown ---------------- */
function RangeDropdown({
  options,
  value,
  onChange,
}: {
  options: RangeType[];
  value: RangeType;
  onChange: (val: RangeType) => void;
}) {
  const { theme } = useTheme();

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as RangeType)}
      style={{
        border: `1px solid ${theme.colors.text}`,
        borderRadius: 3,
        padding: "3px 5px",
        marginRight: "7%",
        background: theme.colors.containerCopBackgroundColor,
        color: theme.colors.text,
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
  width = 500,
  height = 300,
  chartColor,
  weekData,
  monthData,
}: LineChartCompProps) {
  const { theme } = useTheme();

  const availableOptions: RangeType[] = useMemo(
    () =>
      [
        weekData?.length ? "week" : null,
        monthData?.length ? "month" : null,
      ].filter(Boolean) as RangeType[],
    [weekData, monthData],
  );

  const [range, setRange] = useState<RangeType>(
    () => availableOptions[0] || "week",
  );

  const data = range === "week" ? (weekData ?? []) : (monthData ?? []);

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
        <h3 style={{ marginLeft: "8%", color: chartColor }}>{title}</h3>

        {availableOptions.length > 1 && (
          <RangeDropdown
            options={availableOptions}
            value={range}
            onChange={setRange}
          />
        )}
      </div>

      {/* CHART */}
      <LineChart width={width} height={height} data={data}>
        <CartesianGrid stroke={chartColor} strokeWidth={0.8} />

        <XAxis dataKey="xValue" stroke={chartColor}>
          <Label value={xTitle ?? ""} position="bottom" fill={chartColor} />
        </XAxis>

        <YAxis stroke={chartColor}>
          <Label value={yTitle ?? ""} position="left" fill={chartColor} />
        </YAxis>

        <Tooltip contentStyle={{ color: "#2A5269" }} />

        <Line
          type="monotone"
          dataKey="yValue"
          stroke="#fcfc3f"
          strokeWidth={0.8}
          dot={{ fill: chartColor, r: 3 }}
        />
      </LineChart>
    </div>
  );
}
