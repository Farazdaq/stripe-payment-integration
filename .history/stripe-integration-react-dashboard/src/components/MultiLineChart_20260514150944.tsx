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

  chartColors?: {
    grid?: string;
    axis?: string;
    label?: string;
  };
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
      dot={{ r: 2 }} // smaller dots
      activeDot={{ r: 5, stroke: color }}
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
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as RangeType)}
      style={{
        padding: "5px 9px",
        borderRadius: 6,
        border: "1px solid #ccc",
        fontSize: 12, // smaller text
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

function LegendBox({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div
        style={{
          width: 10,
          height: 10,
          background: color,
          borderRadius: 3,
        }}
      />
      <span style={{ fontSize: 11, color: "#374151" }}>{label}</span>
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
  chartColors = {
    grid: "#e5e7eb",
    axis: "#6b7280",
    label: "#6b7280",
  },
}: MultiLineChartProps) {
  const [range, setRange] = useState<RangeType>("week");

  const data = range === "week" ? (weekData ?? []) : (monthData ?? []);

  const showDropdown =
    (weekData?.length ?? 0) > 0 && (monthData?.length ?? 0) > 0;

  return (
    <div style={{ padding: 16 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <h3 style={{ marginLeft: "8%", fontSize: 14, fontWeight: 600 }}>
          {title}
        </h3>

        <div style={{ display: "flex", gap: 10 }}>
          <LegendBox label={labels.new!} color={lineColors.new} />
          <LegendBox label={labels.netGrowth!} color={lineColors.netGrowth} />
          <LegendBox
            label={labels.cancellations!}
            color={lineColors.cancellations}
          />
        </div>

        {showDropdown && <RangeDropdown value={range} onChange={setRange} />}
      </div>

      {/* CHART */}
      <LineChart width={width} height={height} data={data}>
        {showGrid && (
          <CartesianGrid stroke={chartColors.grid} strokeWidth={0.5} />
        )}

        <XAxis
          dataKey="xValue"
          stroke={chartColors.axis}
          tick={{ fontSize: 11 }} // smaller text
        >
          <Label
            value={xTitle ?? ""}
            position="bottom"
            style={{ fontSize: 11, fill: chartColors.label }}
          />
        </XAxis>

        <YAxis
          stroke={chartColors.axis}
          tick={{ fontSize: 11 }} // smaller text
        >
          <Label
            value={yTitle ?? ""}
            angle={-90}
            position="insideLeft"
            style={{ fontSize: 11, fill: chartColors.label }}
          />
        </YAxis>

        {showTooltip && <Tooltip />}

        <ChartLine dataKey="lineOne" color={lineColors.new} />
        <ChartLine dataKey="lineTwo" color={lineColors.netGrowth} />
        <ChartLine dataKey="lineThree" color={lineColors.cancellations} />
      </LineChart>
    </div>
  );
}
