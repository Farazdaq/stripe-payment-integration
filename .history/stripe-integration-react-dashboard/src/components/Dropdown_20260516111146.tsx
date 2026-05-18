import React, { useState, useRef, useEffect } from "react";

type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  items: DropdownItem[];

  width?: string | number;
  height?: string | number;

  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  textColor?: string;

  dropdownBackground?: string;
  dropdownBorderColor?: string;
  dropdownTextColor?: string;

  placeholder?: string;

  onSelect?: (item: DropdownItem) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  items,

  width = "100%",
  height = "48px",

  backgroundColor = "#ffffff",
  borderColor = "#d1d5db",
  borderWidth = "1px",
  textColor = "#111827",

  dropdownBackground = "#ffffff",
  dropdownBorderColor = "#d1d5db",
  dropdownTextColor = "#111827",

  placeholder = "Select item",

  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownItem | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelect = (item: DropdownItem) => {
    setSelected(item);
    setOpen(false);

    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        width,
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          height,
          background: backgroundColor,
          border: `${borderWidth} solid ${borderColor}`,
          borderRadius: "12px",
          padding: "0 16px",
          color: textColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        <span>{selected ? selected.label : placeholder}</span>

        <span
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.2s",
          }}
        >
          ▼
        </span>
      </button>

      {/* Dropdown List */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            width: "100%",
            background: dropdownBackground,
            border: `1px solid ${dropdownBorderColor}`,
            borderRadius: "5px",
            overflow: "hidden",
            zIndex: 1000,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {items.map((item) => (
            <div
              key={item.value}
              onClick={() => handleSelect(item)}
              style={{
                padding: "14px 16px",
                cursor: "pointer",
                color: dropdownTextColor,
                borderBottom: `1px solid ${dropdownBorderColor}`,
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
