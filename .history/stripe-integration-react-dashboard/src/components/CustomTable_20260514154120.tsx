import { useTheme } from "../theme/useTheme";

type TableRow = (string | number)[];

type TableProps = {
  headers: string[];
  rows: TableRow[];

  width?: string | number;

  headerBg?: string;
  headerTextColor?: string;

  rowTextColor?: string;
  borderColor?: string;

  lineWidth?: number;

  showViewAll?: boolean;
  onViewAll?: () => void;

  fontSize?: number;
};

export default function CustomTable({
  headers,
  rows,

  width = "100%",

  headerBg = "#1f2937",
  headerTextColor = "#ffffff",

  rowTextColor = "#374151",
  borderColor = "#d1d5db",

  lineWidth = 1,

  showViewAll = true,
  onViewAll,

  fontSize = 12,
}: TableProps) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        width,
        border: `${lineWidth}px solid ${borderColor}`,
        borderTopLeftRadius: 10,

        overflow: "hidden",
        background: theme.colors.containerCopBackgroundColor,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        {/* HEADER */}
        <thead>
          <tr
            style={{
              background: headerBg,
            }}
          >
            {headers.map((header, index) => (
              <th
                key={index}
                style={{
                  padding: "10px",
                  textAlign: "left",
                  color: headerTextColor,
                  fontSize,
                  fontWeight: 600,
                  borderBottom: `${lineWidth}px solid ${borderColor}`,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    padding: "10px",
                    fontSize,
                    color: rowTextColor,
                    borderBottom: `${lineWidth}px solid ${borderColor}`,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}

          {/* VIEW ALL ROW */}
          {showViewAll && (
            <tr>
              <td
                colSpan={headers.length}
                style={{
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                <button
                  onClick={onViewAll}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 6,
                    border: `${lineWidth}px solid ${borderColor}`,
                    background: "transparent",
                    cursor: "pointer",
                    fontSize,
                    color: rowTextColor,
                  }}
                >
                  View All
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
