import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  Label,
} from "recharts";

import { useMemo, useState } from "react";
import { useTheme } from "../theme/useTheme";

/* ---------------- Types ---------------- */

type ChartData = {
  month: string;
  customers: number;
  subscribers: number;
};

type RangeType = "week" | "month";

type CustomerGrowthBarChartProps = {
  title?: string;

  xTitle?: string;
  yTitle?: string;

  width?: number | string;
  height?: number;

  customerBarColor?: string;
  subscriberBarColor?: string;

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
        padding: "5px 10px",
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

export default function CustomerGrowthBarChart({
  title = "Customer Growth",

  xTitle = "Months",
  yTitle = "Users",

  width = "100%",
  height = 350,

  customerBarColor = "#3b82f6",
  subscriberBarColor = "#10b981",

  weekData,
  monthData,
}: CustomerGrowthBarChartProps) {
  const { theme } = useTheme();

  const chartTextSize = 11;

  /* Available Dropdown Options */
  const availableOptions: RangeType[] = useMemo(
    () =>
      [
        weekData?.length ? "week" : null,
        monthData?.length ? "month" : null,
      ].filter(Boolean) as RangeType[],
    [weekData, monthData],
  );

  /* Selected Range */
  const [range, setRange] = useState<RangeType>(
    () => availableOptions[0] || "month",
  );

  /* Current Data */
  const data = range === "week" ? (weekData ?? []) : (monthData ?? []);

  return (
    <div
      style={{
        width,
        padding: 20,
        borderRadius: 16,
        background: theme.colors.containerCopBackgroundColor,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 600,
            color: theme.colors.text,
          }}
        >
          {title}
        </h3>

        {/* SAME DROPDOWN STYLE LIKE LINE CHART */}
        {availableOptions.length > 1 && (
          <RangeDropdown
            options={availableOptions}
            value={range}
            onChange={setRange}
          />
        )}
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 20,
          }}
          barGap={12}
        >
          {/* GRID */}
          <CartesianGrid
            stroke={theme.colors.text}
            strokeOpacity={0.1}
            vertical={false}
          />

          {/* X AXIS */}
          <XAxis
            dataKey="month"
            stroke={theme.colors.text}
            tick={{ fontSize: chartTextSize }}
          >
            <Label
              value={xTitle}
              position="bottom"
              fill={theme.colors.text}
              style={{
                fontSize: chartTextSize,
              }}
            />
          </XAxis>

          {/* Y AXIS */}
          <YAxis stroke={theme.colors.text} tick={{ fontSize: chartTextSize }}>
            <Label
              value={yTitle}
              angle={-90}
              position="insideLeft"
              fill={theme.colors.text}
              style={{
                fontSize: chartTextSize,
              }}
            />
          </YAxis>

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{
              background: theme.colors.containerCopBackgroundColor,
              border: `1px solid ${theme.colors.text}`,
              borderRadius: 10,
              color: theme.colors.text,
            }}
          />

          {/* LEGEND */}
          <Legend />

          {/* CUSTOMERS BAR */}
          <Bar
            dataKey="customers"
            name="Customers"
            fill={customerBarColor}
            radius={[10, 10, 0, 0]}
            barSize={30}
          />

          {/* SUBSCRIBERS BAR */}
          <Bar
            dataKey="subscribers"
            name="Subscribers"
            fill={subscriberBarColor}
            radius={[10, 10, 0, 0]}
            barSize={5}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
