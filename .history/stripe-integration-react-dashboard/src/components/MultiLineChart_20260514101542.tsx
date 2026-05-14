import {
  CartesianGrid,
  Line,
  XAxis,
  LineChart,
  Tooltip,
  YAxis,
  Label,
  Legend,
} from "recharts";

// ==========================================
// MultiLineAnalyticsChart
// ------------------------------------------
// Reusable chart component supporting
// multiple trend lines.
//
// Designed for dashboards, analytics,
// reports, and KPI visualizations.
// ==========================================

type ChartData = {
  xValue: string;

  // multiple lines
  lineOne: number;
  lineTwo: number;
  lineThree: number;
};

type MultiLineAnalyticsChartProps = {
  title: string;

  xTitle?: string;
  yTitle?: string;

  data: ChartData[];

  width?: number;
  height?: number;

  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;

  lineOneLabel?: string;
  lineTwoLabel?: string;
  lineThreeLabel?: string;
};

export default function MultiLineAnalyticsChart({
  title,
  xTitle,
  yTitle,
  width = 500,
  height = 350,
  data,
  showGrid = true,
  showTooltip = true,
  showLegend = true,

  lineOneLabel = "Line One",
  lineTwoLabel = "Line Two",
  lineThreeLabel = "Line Three",
}: MultiLineAnalyticsChartProps) {
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Chart Title */}
      <h3
        style={{
          textAlign: "left",
          marginBottom: 10,
          width: "100%",
        }}
      >
        {title}
      </h3>

      <LineChart width={width} height={height} data={data}>
        {/* Grid */}
        {showGrid && <CartesianGrid stroke="#d1d5db" strokeDasharray="3 3" />}

        {/* X Axis */}
        <XAxis dataKey="xValue" stroke="#6b7280">
          <Label value={xTitle ?? ""} position="bottom" offset={0} />
        </XAxis>

        {/* Y Axis */}
        <YAxis stroke="#6b7280">
          <Label value={yTitle ?? ""} angle={-90} position="insideLeft" />
        </YAxis>

        {/* Tooltip */}
        {showTooltip && <Tooltip />}

        {/* Legend */}
        {showLegend && <Legend />}

        {/* Line 1 */}
        <Line
          type="monotone"
          dataKey="lineOne"
          stroke="#2563eb"
          strokeWidth={3}
          name={lineOneLabel}
        />

        {/* Line 2 */}
        <Line
          type="monotone"
          dataKey="lineTwo"
          stroke="#16a34a"
          strokeWidth={3}
          name={lineTwoLabel}
        />

        {/* Line 3 */}
        <Line
          type="monotone"
          dataKey="lineThree"
          stroke="#dc2626"
          strokeWidth={3}
          name={lineThreeLabel}
        />
      </LineChart>
    </div>
  );
}
