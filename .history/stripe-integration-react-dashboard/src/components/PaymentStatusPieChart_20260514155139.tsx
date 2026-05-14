import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type ChartItem = {
  name: string;
  value: number;
};

type PaymentStatusPieChartProps = {
  data?: ChartItem[];
  width?: string | number;
  height?: number;
  colors?: string[];
};

const DEFAULT_COLORS = ["#22C55E", "#F59E0B", "#EF4444"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: 14,
        fontWeight: 600,
      }}
    >
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

const PaymentStatusPieChart: React.FC<PaymentStatusPieChartProps> = ({
  data = [],
  width = "100%",
  height = 320,
  colors = DEFAULT_COLORS,
}) => {
  return (
    <div style={{ width }}>
      {/* Centered Legend Above Chart */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginBottom: 16,
          flexWrap: "wrap",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        {data.map((item, index) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: colors[index % colors.length],
                display: "inline-block",
              }}
            />
            {item.name}
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={45}
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentStatusPieChart;
