import React, { useState } from "react";
import { UploadCloud, Check } from "lucide-react";
import * as XLSX from "xlsx";

type Column = {
  key: string;
  header: string;
};

type ExporterProps = {
  width?: string | number;
  height?: number;

  color?: string;
  backgroundColor?: string;

  borderColor?: string;
  borderWidth?: number;

  type?: "csv" | "excel";
  fileName?: string;

  columns: Column[];
  data: Record<string, any>[];

  speed?: number;
};

export default function Exporter({
  width = 100,
  height = 100,

  color = "#2563EB",
  backgroundColor = "#EFF6FF",

  borderColor = "#CBD5E1",
  borderWidth = 2,

  type = "excel",
  fileName = "export",

  columns,
  data,

  speed = 100,
}: ExporterProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "exporting" | "done">("idle");

  const simulateProgress = () => {
    return new Promise<void>((resolve) => {
      let current = 0;

      const interval = setInterval(() => {
        current += 10;

        if (current >= 100) {
          current = 100;
          clearInterval(interval);
          setProgress(100);

          setTimeout(() => resolve(), 300);
        }

        setProgress(current);
      }, speed);
    });
  };

  const exportCSV = () => {
    const headers = columns.map((c) => c.header);
    const rows = data.map((row) => columns.map((c) => row[c.key]));

    const csvContent = [
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${fileName}.csv`;
    link.click();
  };

  const exportExcel = () => {
    const formattedData = data.map((row) => {
      const newRow: Record<string, any> = {};

      columns.forEach((c) => {
        newRow[c.header] = row[c.key];
      });

      return newRow;
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExport = async () => {
    try {
      setStatus("exporting");
      setProgress(0);

      await simulateProgress();

      if (type === "csv") {
        exportCSV();
      } else {
        exportExcel();
      }

      setStatus("done");

      setTimeout(() => {
        setStatus("idle");
        setProgress(0);
      }, 2000);
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setProgress(0);
    }
  };

  const radius = 32;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      onClick={handleExport}
      className="relative flex flex-col items-center justify-center transition-all duration-300"
      style={{
        width,
        height,
        backgroundColor,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: 6,
        padding: 10, // ✅ added padding
      }}
    >
      {/* PROGRESS */}
      {status === "exporting" && (
        <svg
          className="absolute rotate-[-90deg]"
          width="80%"
          height="80%"
          viewBox="0 0 80 80"
        >
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#D1D5DB"
            strokeWidth="5"
            fill="transparent"
          />

          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke={color}
            strokeWidth="5"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
          />
        </svg>
      )}

      {/* IDLE */}
      {status === "idle" && (
        <div className="flex flex-col items-center gap-0.5">
          <UploadCloud size={30} color={color} />
          <span className="text-xs font-medium leading-none" style={{ color }}>
            Export
          </span>
        </div>
      )}

      {/* PROGRESS TEXT */}
      {status === "exporting" && (
        <span className="text-sm font-semibold z-10" style={{ color }}>
          {progress}%
        </span>
      )}

      {/* DONE */}
      {status === "done" && <Check size={30} color={color} />}
    </button>
  );
}
