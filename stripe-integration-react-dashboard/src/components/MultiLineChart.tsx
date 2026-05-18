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
import { useState } from "react";
import { useTheme } from "../theme/useTheme";

// ==========================================
// Types
// ==========================================

type ChartData = {
  xValue: string;
  lineOne: number;
  lineTwo: number;
  lineThree: number;
};

type RangeType = "week" | "month";

type MultiLineChartProps = {
  title: string;

  xTitle?: string;
  yTitle?: string;

  /* Responsive sizes */
  width?: string | number;
  height?: string | number;

  weekData?: ChartData[];
  monthData?: ChartData[];

  showGrid?: boolean;
  showTooltip?: boolean;

  lineColors?: {
    new: string;
    netGrowth: string;
    cancellations: string;
  };

  labels?: {
    new?: string;
    netGrowth?: string;
    cancellations?: string;
  };

  chartColors?: {
    grid?: string;
    axis?: string;
    label?: string;
  };
};

// ==========================================
// Line config helper
// ==========================================

function ChartLine({
  dataKey,
  color,
}: {
  dataKey: string;
  color: string;
}) {
  return (
    <Line
      type="monotone"
      dataKey={dataKey}
      stroke={color}
      strokeWidth={2}
      dot={{ r: 3 }}
      activeDot={{ r: 6, stroke: color }}
    />
  );
}

// ==========================================
// Dropdown
// ==========================================

function RangeDropdown({
  value,
  onChange,
}: {
  value: RangeType;
  onChange: (v: RangeType) => void;
}) {
  const { theme } = useTheme();

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as RangeType)}
      style={{
        background: theme.colors.containerCopBackgroundColor,
        color: theme.colors.text,
        padding: "4px 8px",
        borderRadius: 6,
        border: `1px solid ${theme.colors.borderColor}`,
        fontSize: 13,
        cursor: "pointer",
        outline: "none",
      }}
    >
      <option value="week">This Week</option>
      <option value="month">Last Month</option>
    </select>
  );
}

// ==========================================
// Legend Box
// ==========================================

function LegendBox({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          background: color,
          borderRadius: 999,
        }}
      />

      <span
        style={{
          fontSize: 11,
          color: theme.colors.text,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ==========================================
// Main Component
// ==========================================

export default function MultiLineChart({
  title,
  xTitle,
  yTitle,

  /* Responsive defaults */
  width = "100%",
  height = 350,

  weekData,
  monthData,

  showGrid = true,
  showTooltip = true,

  lineColors = {
    new: "#2563eb",
    netGrowth: "#16a34a",
    cancellations: "#dc2626",
  },

  labels = {
    new: "New",
    netGrowth: "Net Growth",
    cancellations: "Cancellations",
  },

  chartColors = {
    grid: "#e5e7eb",
    axis: "#6b7280",
    label: "#6b7280",
  },
}: MultiLineChartProps) {
  const [range, setRange] = useState<RangeType>("week");

  const data = range === "week" ? (weekData ?? []) : (monthData ?? []);

  const showDropdown =
    (weekData?.length ?? 0) > 0 &&
    (monthData?.length ?? 0) > 0;

  return (
    <div
      style={{
        width: "100%",
        height,
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {/* TITLE */}
        <h3
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {title}
        </h3>

        {/* LEGENDS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <LegendBox
            label={labels.new!}
            color={lineColors.new}
          />

          <LegendBox
            label={labels.netGrowth!}
            color={lineColors.netGrowth}
          />

          <LegendBox
            label={labels.cancellations!}
            color={lineColors.cancellations}
          />
        </div>

        {/* DROPDOWN */}
        {showDropdown && (
          <RangeDropdown
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
          minHeight: 250,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {showGrid && (
              <CartesianGrid
                stroke={chartColors.grid}
                strokeWidth={0.5}
                strokeDasharray="3 3"
              />
            )}

            <XAxis
              dataKey="xValue"
              stroke={chartColors.axis}
              tick={{ fontSize: 11 }}
            >
              <Label
                value={xTitle ?? ""}
                position="bottom"
                style={{
                  fontSize: 11,
                  fill: chartColors.label,
                }}
              />
            </XAxis>

            <YAxis
              stroke={chartColors.axis}
              tick={{ fontSize: 11 }}
            >
              <Label
                value={yTitle ?? ""}
                angle={-90}
                position="insideLeft"
                style={{
                  fontSize: 11,
                  fill: chartColors.label,
                }}
              />
            </YAxis>

            {showTooltip && <Tooltip />}

            <ChartLine
              dataKey="lineOne"
              color={lineColors.new}
            />

            <ChartLine
              dataKey="lineTwo"
              color={lineColors.netGrowth}
            />

            <ChartLine
              dataKey="lineThree"
              color={lineColors.cancellations}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}