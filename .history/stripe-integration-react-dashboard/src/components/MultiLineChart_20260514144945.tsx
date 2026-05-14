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

  width?: number;
  height?: number;

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

  // ✅ NEW
  chartTextColor?: string;
};

// ==========================================
// Line config helper
// ==========================================

function ChartLine({ dataKey, color }: { dataKey: string; color: string }) {
  return (
    <Line
      type="monotone"
      dataKey={dataKey}
      stroke={color}
      strokeWidth={0.8}
      dot={{ r: 3 }}
      activeDot={{ r: 6, stroke: color }}
    />
  );
}

// ==========================================
// Dropdown (UNCHANGED TEXT)
// ==========================================

function RangeDropdown({
  value,
  onChange,
}: {
  value: RangeType;
  onChange: (v: RangeType) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as RangeType)}
      style={{
        padding: "6px 10px",
        borderRadius: 6,
        border: "1px solid #ccc",
        fontSize: 13,
      }}
    >
      <option value="week">This Week</option>
      <option value="month">Last Month</option>
    </select>
  );
}

// ==========================================
// KPI Legend Box
// ==========================================

function LegendBox({
  label,
  color,
  textColor,
}: {
  label: string;
  color: string;
  textColor: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div
        style={{
          width: 10,
          height: 10,
          background: color,
          borderRadius: 2,
        }}
      />
      <span style={{ fontSize: 11, color: textColor }}>{label}</span>
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
  width = 600,
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
  chartTextColor = "#374151", // ✅ default
}: MultiLineChartProps) {
  const [range, setRange] = useState<RangeType>("week");

  const data = range === "week" ? (weekData ?? []) : (monthData ?? []);

  const showDropdown =
    (weekData?.length ?? 0) > 0 && (monthData?.length ?? 0) > 0;

  return (
    <div style={{ padding: 20, color: chartTextColor }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        {/* TITLE */}
        <h3
          style={{
            margin: 0,
            fontSize: 14, // ✅ smaller text
            color: chartTextColor,
          }}
        >
          {title}
        </h3>

        {/* LEGEND */}
        <div style={{ display: "flex", gap: 10 }}>
          <LegendBox
            label={labels.new!}
            color={lineColors.new}
            textColor={chartTextColor}
          />
          <LegendBox
            label={labels.netGrowth!}
            color={lineColors.netGrowth}
            textColor={chartTextColor}
          />
          <LegendBox
            label={labels.cancellations!}
            color={lineColors.cancellations}
            textColor={chartTextColor}
          />
        </div>

        {showDropdown && <RangeDropdown value={range} onChange={setRange} />}
      </div>

      {/* CHART */}
      <LineChart width={width} height={height} data={data}>
        {showGrid && <CartesianGrid stroke="#e5e7eb" strokeWidth={0.5} />}

        <XAxis
          dataKey="xValue"
          stroke={chartTextColor}
          tick={{ fontSize: 11 }} // ✅ smaller text
        >
          <Label
            value={xTitle ?? ""}
            position="bottom"
            fill={chartTextColor}
            style={{ fontSize: 11 }}
          />
        </XAxis>

        <YAxis
          stroke={chartTextColor}
          tick={{ fontSize: 11 }} // ✅ smaller text
        >
          <Label
            value={yTitle ?? ""}
            angle={-90}
            position="insideLeft"
            fill={chartTextColor}
            style={{ fontSize: 11 }}
          />
        </YAxis>

        <ChartLine dataKey="lineOne" color={lineColors.new} />
        <ChartLine dataKey="lineTwo" color={lineColors.netGrowth} />
        <ChartLine dataKey="lineThree" color={lineColors.cancellations} />
      </LineChart>
    </div>
  );
}
