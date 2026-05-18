import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import { useMemo, useState } from "react";
import { useTheme } from "../../../theme/useTheme";

/* ---------------- Types ---------------- */

type ChartData = {
  month: string;
  customers: number;
  subscribers: number;
};

type RangeType = "week" | "month";

type CustomerGrowthBarChartProps = {
  title?: string;

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

  width = "100%",
  height = 350,

  customerBarColor = "#3b82f6",
  subscriberBarColor = "#10b981",

  weekData,
  monthData,
}: CustomerGrowthBarChartProps) {
  const { theme } = useTheme();

  const chartTextSize = 11;

  /* Dropdown Options */
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
      {/* HEADER ROW */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE: TITLE + TAGS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          {/* TITLE */}
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

          {/* TAGS */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            {/* Customers */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: customerBarColor,
                }}
              />
              <span style={{ fontSize: 13, color: theme.colors.text }}>
                Customers
              </span>
            </div>

            {/* Subscribers */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: subscriberBarColor,
                }}
              />
              <span style={{ fontSize: 13, color: theme.colors.text }}>
                Subscribers
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: DROPDOWN */}
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
            right: 10,
            left: -15,
            bottom: 10,
          }}
          barGap={10}
        >
          <CartesianGrid
            stroke={theme.colors.text}
            strokeOpacity={1}
            vertical={false}
          />
          <XAxis
            dataKey="month"
            stroke={theme.colors.text}
            tick={{ fontSize: chartTextSize }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke={theme.colors.text}
            tick={{ fontSize: chartTextSize }}
            axisLine={false}
            tickLine={false}
          />
          {/* 
          <Tooltip
            contentStyle={{
              background: theme.colors.containerCopBackgroundColor,
              border: `1px solid ${theme.colors.text}`,
              borderRadius: 10,
              color: theme.colors.text,
            }}
          />
           */}
          <Bar
            dataKey="customers"
            fill={customerBarColor}
            radius={[0, 0, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="subscribers"
            fill={subscriberBarColor}
            radius={[0, 0, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
