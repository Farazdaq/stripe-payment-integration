import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PageControllerBarProps = {
  width?: string | number;
  height?: number;

  currentPage: number;
  totalPages: number;

  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  activeColor?: string;

  onPageChange?: (page: number) => void;
};

export default function PageControllerBar({
  width = "100%",
  height = 60,

  currentPage,
  totalPages,

  backgroundColor = "#F8FAFC",
  borderColor = "#CBD5E1",
  textColor = "#0F172A",

  activeColor = "#2563EB",

  onPageChange,
}: PageControllerBarProps) {
  const getPages = () => Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
      }}
      className="flex items-center justify-center gap-2 px-3"
    >
      {/* LEFT */}
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          width: 36,
          height: 36,
          border: `1px solid ${borderColor}`,
          color: textColor,
          opacity: currentPage === 1 ? 0.4 : 1,
        }}
        className="flex items-center justify-center rounded-md"
      >
        <ChevronLeft size={18} />
      </button>

      {/* PAGES */}
      <div className="flex items-center gap-2">
        {getPages().map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange?.(page)}
              style={{
                width: 36,
                height: 36,
                border: `1px solid ${isActive ? activeColor : borderColor}`,
                color: isActive ? activeColor : textColor,
                backgroundColor: isActive ? `${activeColor}15` : "transparent",
              }}
              className="flex items-center justify-center text-sm font-medium rounded-md"
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* RIGHT */}
      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          width: 36,
          height: 36,
          border: `1px solid ${borderColor}`,
          color: textColor,
          opacity: currentPage === totalPages ? 0.4 : 1,
        }}
        className="flex items-center justify-center rounded-md"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
