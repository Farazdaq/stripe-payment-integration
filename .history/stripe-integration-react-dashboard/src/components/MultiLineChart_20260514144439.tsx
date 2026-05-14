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
      strokeWidth={3}
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
// KPI Box Legend (NEW)
// ==========================================

function LegendBox({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div
        style={{
          width: 12,
          height: 12,
          background: color,
          borderRadius: 3,
        }}
      />
      <span style={{ fontSize: 12, color: "#374151" }}>{label}</span>
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
}: MultiLineChartProps) {
  const [range, setRange] = useState<RangeType>("week");

  const data = range === "week" ? (weekData ?? []) : (monthData ?? []);

  const showDropdown =
    (weekData?.length ?? 0) > 0 && (monthData?.length ?? 0) > 0;

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 5,
          }}
        >
          <LegendBox label={labels.new!} color={lineColors.new} />
          <LegendBox label={labels.netGrowth!} color={lineColors.netGrowth} />
          <LegendBox
            label={labels.cancellations!}
            color={lineColors.cancellations}
          />
        </div>

        {showDropdown && <RangeDropdown value={range} onChange={setRange} />}
      </div>

      {/* CUSTOM LEGEND BOXES */}

      {/* CHART */}
      <LineChart width={width} height={height} data={data}>
        {showGrid && <CartesianGrid stroke="#e5e7eb" />}

        <XAxis dataKey="xValue" stroke="#6b7280" strokeWidth={0.5}>
          <Label value={xTitle ?? ""} position="bottom" />
        </XAxis>

        <YAxis stroke="#6b7280" strokeWidth={0.5}>
          <Label value={yTitle ?? ""} angle={-90} position="insideLeft" />
        </YAxis>

        {showTooltip && <Tooltip />}

        <ChartLine dataKey="lineOne" color={lineColors.new} />
        <ChartLine dataKey="lineTwo" color={lineColors.netGrowth} />
        <ChartLine dataKey="lineThree" color={lineColors.cancellations} />
      </LineChart>
    </div>
  );
}
