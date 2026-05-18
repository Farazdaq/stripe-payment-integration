import  { useState } from "react";

type ImgViewerProps = {
  src: string;
  alt?: string;

  width?: string | number;
  height?: number;

  borderColor?: string;
  borderWidth?: number;

  backgroundColor?: string;

  objectFit?: "cover" | "contain" | "fill";

  showLoading?: boolean;
};

export default function ImgViewer({
  src,
  alt = "image",

  width = "100%",
  height = 300,

  borderColor = "#CBD5E1",
  borderWidth = 2,

  backgroundColor = "#F8FAFC",

  objectFit = "cover",

  showLoading = true,
}: ImgViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width,
        height,
        backgroundColor,
        border: `${borderWidth}px solid ${borderColor}`,
      }}
    >
      {/* Loading State */}
      {loading && showLoading && !error && (
        <div className="absolute text-sm text-gray-500 animate-pulse">
          Loading...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-sm text-red-500">Failed to load image</div>
      )}

      {/* Image */}
      {!error && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full"
          style={{
            objectFit,
            display: loading ? "none" : "block",
          }}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      )}
    </div>
  );
}
