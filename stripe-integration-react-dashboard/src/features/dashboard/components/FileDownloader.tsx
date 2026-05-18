import { useState } from "react";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Document, Packer, Paragraph, Table, TableRow, TableCell } from "docx";

import { FiDownload } from "react-icons/fi";
import { Check } from "lucide-react";

type Column = {
  key: string;
  header: string;
};

type FileDownloaderProps = {
  width?: string | number;
  height?: number;
  color?: string;
  backgroundColor?: string;

  fileName?: string;
  type?: "pdf" | "docx";

  title?: string;
  generatedAt?: string;

  columns: Column[];
  data: Record<string, any>[];

  // ✅ NEW OPTIONAL PROP
  iconSize?: number;
};

export default function FileDownloader({
  width = 80,
  height = 80,
  color = "#2563EB",
  backgroundColor = "#E5E7EB",

  fileName = "report",
  type = "pdf",

  title = "Generated Report",
  generatedAt = new Date().toLocaleString(),

  columns,
  data,

  iconSize = 26, // ✅ default size
}: FileDownloaderProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "downloading" | "done">("idle");

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
      }, 120);
    });
  };

  const generatePDF = async () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(title, 14, 20);

    doc.setFontSize(11);
    doc.text(`Generated At: ${generatedAt}`, 14, 30);

    autoTable(doc, {
      startY: 40,
      head: [columns.map((c) => c.header)],
      body: data.map((row) => columns.map((c) => row[c.key])),
    });

    doc.save(`${fileName}.pdf`);
  };

  const generateDOCX = async () => {
    const rows = [
      new TableRow({
        children: columns.map(
          (c) =>
            new TableCell({
              children: [new Paragraph(c.header)],
            }),
        ),
      }),

      ...data.map(
        (row) =>
          new TableRow({
            children: columns.map(
              (c) =>
                new TableCell({
                  children: [new Paragraph(String(row[c.key] ?? ""))],
                }),
            ),
          }),
      ),
    ];

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph(title),
            new Paragraph(`Generated At: ${generatedAt}`),
            new Table({ rows }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${fileName}.docx`);
  };

  const handleDownload = async () => {
    try {
      setStatus("downloading");
      setProgress(0);

      await simulateProgress();

      if (type === "pdf") await generatePDF();
      else await generateDOCX();

      setStatus("done");

      setTimeout(() => {
        setStatus("idle");
        setProgress(0);
      }, 2500);
    } catch (err) {
      console.error(err);
      setStatus("idle");
      setProgress(0);
    }
  };

  const radius = 32;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      onClick={handleDownload}
      className="relative flex items-center justify-center rounded-full transition-all duration-300"
      style={{
        width,
        height,
        backgroundColor,
      }}
    >
      {/* Progress Circle */}
      {status === "downloading" && (
        <svg
          className="absolute rotate-[-90deg]"
          width="100%"
          height="100%"
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
        <FiDownload
          size={iconSize} // ✅ dynamic size
          color={color}
          className="z-10 animate-bounce"
        />
      )}

      {/* DOWNLOADING */}
      {status === "downloading" && (
        <span className="text-sm font-semibold z-10" style={{ color }}>
          {progress}%
        </span>
      )}

      {/* DONE */}
      {status === "done" && (
        <Check size={iconSize} color={color} className="z-10" />
      )}
    </button>
  );
}
