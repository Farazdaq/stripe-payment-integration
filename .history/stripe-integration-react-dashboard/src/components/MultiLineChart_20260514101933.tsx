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
// Types
// ==========================================

type ChartData = {
  xValue: string;
  lineOne: number;
  lineTwo: number;
  lineThree: number;
};

type MultiLineChartProps = {
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

type ChartLineProps = {
  dataKey: string;
  color: string;
  label: string;
};

// ==========================================
// Constants
// ==========================================

const lineConfigs = [
  {
    dataKey: "lineOne",
    color: "#2563eb",
  },
  {
    dataKey: "lineTwo",
    color: "#16a34a",
  },
  {
    dataKey: "lineThree",
    color: "#dc2626",
  },
];

// ==========================================
// Helpers
// ==========================================

function ChartLine({ dataKey, color, label }: ChartLineProps) {
  return (
    <Line
      type="monotone"
      dataKey={dataKey}
      stroke={color}
      strokeWidth={3}
      name={label}
    />
  );
}

function OptionalGrid({ enabled }: { enabled: boolean }) {
  return enabled ? (
    <CartesianGrid stroke="#d1d5db" strokeDasharray="3 3" />
  ) : null;
}

function OptionalTooltip({ enabled }: { enabled: boolean }) {
  return enabled ? <Tooltip /> : null;
}

function OptionalLegend({ enabled }: { enabled: boolean }) {
  return enabled ? <Legend /> : null;
}

function getLabels({
  lineOneLabel,
  lineTwoLabel,
  lineThreeLabel,
}: Pick<
  MultiLineChartProps,
  "lineOneLabel" | "lineTwoLabel" | "lineThreeLabel"
>) {
  return [
    lineOneLabel ?? "Line One",
    lineTwoLabel ?? "Line Two",
    lineThreeLabel ?? "Line Three",
  ];
}

// ==========================================
// Main Component
// ==========================================

export default function MultiLineChart(props: MultiLineChartProps) {
  const {
    title,
    xTitle,
    yTitle,
    width = 500,
    height = 350,
    data,
    showGrid = true,
    showTooltip = true,
    showLegend = true,
  } = props;

  const labels = getLabels(props);

  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
        <OptionalGrid enabled={showGrid} />

        <XAxis dataKey="xValue" stroke="#6b7280">
          <Label value={xTitle ?? ""} position="bottom" offset={0} />
        </XAxis>

        <YAxis stroke="#6b7280">
          <Label value={yTitle ?? ""} angle={-90} position="insideLeft" />
        </YAxis>

        <OptionalTooltip enabled={showTooltip} />

        <OptionalLegend enabled={showLegend} />

        {lineConfigs.map((line, index) => (
          <ChartLine
            key={line.dataKey}
            dataKey={line.dataKey}
            color={line.color}
            label={labels[index]}
          />
        ))}
      </LineChart>
    </div>
  );
}
