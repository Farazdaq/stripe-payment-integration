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

  const chartTextSize = 11;

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
    <div style={{ padding: 20, position: "relative" }}>
      {/* LEFT SIDE LABEL */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          fontSize: 12,
          color: chartColor,
          marginRight: "2%",
        }}
      >
        Revenue
      </div>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginLeft: "8%",
            color: chartColor,
          }}
        >
          {title}
        </h3>

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
        <CartesianGrid stroke={chartColor} strokeWidth={0.5} />

        <XAxis
          dataKey="xValue"
          stroke={chartColor}
          tick={{ fontSize: chartTextSize }}
        >
          <Label
            value={xTitle ?? ""}
            position="bottom"
            fill={chartColor}
            style={{ fontSize: chartTextSize }}
          />
        </XAxis>

        <YAxis stroke={chartColor} tick={{ fontSize: chartTextSize }}>
          <Label
            value={yTitle ?? ""}
            position="left"
            fill={chartColor}
            style={{ fontSize: chartTextSize }}
          />
        </YAxis>
        {/*<Tooltip /> */}

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
