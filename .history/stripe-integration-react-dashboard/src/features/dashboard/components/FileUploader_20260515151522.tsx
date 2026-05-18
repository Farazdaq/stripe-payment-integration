import React, { useRef } from "react";
import { Upload } from "lucide-react";

type FileUploaderProps = {
  width?: string | number;
  height?: number;

  borderColor?: string;
  backgroundColor?: string;

  borderWidth?: number;
  borderStyle?: "solid" | "dashed" | "dotted";

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
  borderStyle = "dashed",

  iconColor = "#2563EB",
  textColor = "#475569",

  text = "Click or Drag files to upload",

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
        gap-3
        cursor-pointer
        transition-all
        duration-300
        hover:opacity-90
        w-full
      "
      style={{
        width,
        height,
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle,
      }}
    >
      {/* Upload Icon */}
      <Upload size={40} color={iconColor} strokeWidth={2.2} />

      {/* Text */}
      <p
        className="
          text-center
          text-sm
          md:text-base
          font-medium
          px-4
          break-words
        "
        style={{
          color: textColor,
        }}
      >
        {text}
      </p>

      {/* Hidden Input */}
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
