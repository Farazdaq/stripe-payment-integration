import {
  CartesianGrid,
  Line,
  XAxis,
  LineChart,
  Tooltip,
  YAxis,
  Label,
  ResponsiveContainer,
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

  /* Responsive sizes */
  width?: string | number;
  height?: string | number;

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
        borderRadius: 6,
        padding: "4px 8px",
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

  /* Responsive defaults */
  width = "100%",
  height = 320,

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
    <div
      style={{
        width: "100%",
        height,
        padding: 16,
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT SIDE LABEL */}
      <div
        style={{
          position: "absolute",
          left: -10,
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          fontSize: 12,
          color: chartColor,
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
          marginBottom: 16,
          paddingLeft: 20,
        }}
      >
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: chartColor,
            margin: 0,
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

      {/* RESPONSIVE CHART */}
      <div
        style={{
          width: "100%",
          height: "calc(100% - 60px)",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              stroke={chartColor}
              strokeWidth={0.5}
              strokeDasharray="3 3"
            />

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

            <YAxis
              stroke={chartColor}
              tick={{ fontSize: chartTextSize }}
            >
              <Label
                value={yTitle ?? ""}
                angle={-90}
                position="insideLeft"
                fill={chartColor}
                style={{ fontSize: chartTextSize }}
              />
            </YAxis>
  {/*  <Tooltip />*/}
           

            <Line
              type="monotone"
              dataKey="yValue"
              stroke="#fcfc3f"
              strokeWidth={2}
              dot={{ fill: chartColor, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}