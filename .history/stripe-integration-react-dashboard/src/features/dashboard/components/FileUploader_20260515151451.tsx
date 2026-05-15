import React, { useRef } from "react";
import { Upload } from "lucide-react";

type FileUploaderProps = {
  width?: string | number;
  height?: number;

  borderColor?: string;
  backgroundColor?: string;

  borderWidth?: number;

  iconColor?: string;
  textColor?: string;

  text?: string;

  onChange?: (files: FileList | null) => void;
};

export default function FileUploader({
  width = "100%",
  height = 220,

  borderColor = "#CBD5E1",
  backgroundColor = "#F8FAFC",

  borderWidth = 2,

  iconColor = "#2563EB",
  textColor = "#475569",

  text = "Upload Files",

  onChange,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.files);
  };

  return (
    <div
      onClick={handleClick}
      className="
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        transition-all
        duration-300
        hover:opacity-90
        overflow-hidden
      "
      style={{
        width,
        height,
        backgroundColor,
        border: `${borderWidth}px solid ${borderColor}`,
      }}
    >
      {/* Upload Icon */}
      <Upload size={42} color={iconColor} strokeWidth={2.2} />

      {/* Text Below Icon */}
      <span
        className="
          mt-3
          text-sm
          md:text-base
          font-medium
          text-center
          px-4
        "
        style={{
          color: textColor,
        }}
      >
        {text}
      </span>

      {/* Hidden File Input */}
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
}
