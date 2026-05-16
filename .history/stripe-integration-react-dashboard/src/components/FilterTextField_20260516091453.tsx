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
}) => {
  const [inputValue, setInputValue] = useState(value);

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

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={hintText}
        className="filter-text-field"
        style={{
          width,
          height,
          background: backgroundColor,
          border: `${borderWidth} solid ${borderColor}`,
          borderRadius,
          outline: "none",
          padding: "0 16px",
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
    </>
  );
};

export default FilterTextField;
