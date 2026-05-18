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

type CustomerGrowthChartProps = {
  title?: string;

  xTitle?: string;
  yTitle?: string;

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
        borderRadius: 8,
        padding: "6px 10px",
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

  height = 350,

  customerBarColor = "#3b82f6",
  subscriberBarColor = "#10b981",

  weekData,
  monthData,
}: CustomerGrowthChartProps) {
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
    () => availableOptions[0] || "month",
  );

  const data = range === "week" ? (weekData ?? []) : (monthData ?? []);

  return (
    <div
      style={{
        width: "100%",
        padding: 20,
        borderRadius: 16,
        background: theme.colors.containerCopBackgroundColor,
        position: "relative",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 600,
            color: theme.colors.text,
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
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 10,
            bottom: 20,
          }}
          barGap={8}
        >
          <CartesianGrid
            stroke={theme.colors.text}
            strokeOpacity={0.1}
            vertical={false}
          />

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

          <Tooltip
            contentStyle={{
              background: theme.colors.containerCopBackgroundColor,
              border: `1px solid ${theme.colors.text}`,
              borderRadius: 10,
              color: theme.colors.text,
            }}
          />

          <Legend />

          {/* Customers Bar */}
          <Bar
            dataKey="customers"
            name="Customers"
            fill={customerBarColor}
            radius={[8, 8, 0, 0]}
          />

          {/* Subscribers Bar */}
          <Bar
            dataKey="subscribers"
            name="Subscribers"
            fill={subscriberBarColor}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
