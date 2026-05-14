import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const DEFAULT_COLORS = ["#22C55E", "#F59E0B", "#EF4444"];

const PaymentStatusPieChart = ({
  data = [],
  width = "100%",
  height = 320,
  colors = DEFAULT_COLORS,
}) => {
  return (
    <div style={{ width, height }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          {/* Custom Legend */}
          <foreignObject x="20" y="10" width="250" height="40">
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
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
          </foreignObject>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentStatusPieChart;
