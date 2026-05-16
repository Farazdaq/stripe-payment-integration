import React, { useState } from "react";

type FilterTextFieldProps = {
  value?: string;
  onChange?: (value: string) => void;

  width?: string | number;
  height?: string | number;

  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;

  textColor?: string;
  placeholderColor?: string;

  borderRadius?: string | number;

  hintText?: string;

  fontSize?: string | number;

  iconColor?: string;
};

const FilterTextField: React.FC<FilterTextFieldProps> = ({
  value = "",
  onChange,

  width = "100%",
  height = "48px",

  backgroundColor = "#ffffff",
  borderColor = "#d1d5db",
  borderWidth = "1px",

  textColor = "#111827",
  placeholderColor = "#9ca3af",

  borderRadius = "12px",

  hintText = "Search...",

  fontSize = "16px",

  iconColor,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const finalIconColor = iconColor || placeholderColor;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <style>
        {`
          .filter-text-field::placeholder {
            color: ${placeholderColor};
          }
        `}
      </style>

      <div
        style={{
          width,
          height,
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Search Icon */}
        <div
          style={{
            position: "absolute",
            left: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: finalIconColor,
            pointerEvents: "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={finalIconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Input */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={hintText}
          className="filter-text-field"
          style={{
            width: "100%",
            height: "100%",
            background: backgroundColor,
            border: `${borderWidth} solid ${borderColor}`,
            borderRadius,
            outline: "none",
            paddingLeft: "46px",
            paddingRight: "16px",
            color: textColor,
            fontSize,
            boxSizing: "border-box",
            transition: "0.2s",
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow = `0 0 0 3px ${borderColor}33`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>
    </>
  );
};

export default FilterTextField;
