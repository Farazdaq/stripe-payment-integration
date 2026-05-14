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

  lineColors?: {
    new: string;
    netGrowth: string;
    cancellations: string;
  };
};

// ==========================================
// Line Component
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
      }}
    >
      <option value="week">This Week</option>
      <option value="month">Last Month</option>
    </select>
  );
}

// ==========================================
// RIGHT SIDE LEGEND (NEW)
// ==========================================

function SideLegend({
  colors,
}: {
  colors: {
    new: string;
    netGrowth: string;
    cancellations: string;
  };
}) {
  const Item = ({ label, color }: { label: string; color: string }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 12,
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: 2,
          background: color,
        }}
      />
      <span style={{ fontSize: 13, color: "#374151" }}>{label}</span>
    </div>
  );

  return (
    <div
      style={{
        minWidth: 160,
        paddingLeft: 20,
      }}
    >
      <Item label="New Subscriptions" color={colors.new} />
      <Item label="Net Growth" color={colors.netGrowth} />
      <Item label="Cancellations" color={colors.cancellations} />
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
  lineColors = {
    new: "#2563eb",
    netGrowth: "#16a34a",
    cancellations: "#dc2626",
  },
}: MultiLineChartProps) {
  const [range, setRange] = useState<RangeType>("week");

  const data = range === "week" ? (weekData ?? []) : (monthData ?? []);

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>

        <RangeDropdown value={range} onChange={setRange} />
      </div>

      {/* CHART + SIDE LEGEND */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* CHART */}
        <LineChart width={width} height={height} data={data}>
          {/* ❌ removed dashed grid */}
          <CartesianGrid stroke="#e5e7eb" />

          <XAxis dataKey="xValue" stroke="#6b7280">
            <Label value={xTitle ?? ""} position="bottom" />
          </XAxis>

          <YAxis stroke="#6b7280">
            <Label value={yTitle ?? ""} angle={-90} position="insideLeft" />
          </YAxis>

          <Tooltip />

          <ChartLine dataKey="lineOne" color={lineColors.new} />
          <ChartLine dataKey="lineTwo" color={lineColors.netGrowth} />
          <ChartLine dataKey="lineThree" color={lineColors.cancellations} />
        </LineChart>

        {/* RIGHT SIDE LEGEND */}
        <SideLegend colors={lineColors} />
      </div>
    </div>
  );
}
