import React from "react";

type LoadingProps = {
  lineColor?: string;
  backgroundColor?: string;
  height?: number;
  lineHeight?: number;
  speed?: number;
};

export default function Loading({
  lineColor = "#3B82F6",
  backgroundColor = "#E5E7EB",
  height = 80,
  lineHeight = 6,
  speed = 2,
}: LoadingProps) {
  return (
    <div
      className="w-full flex flex-col justify-center gap-3 md:gap-4 overflow-hidden"
      style={{ height }}
    >
      {[0, 1].map((line) => (
        <div
          key={line}
          className="relative w-full overflow-hidden rounded-full"
          style={{
            height: lineHeight,
            backgroundColor,
          }}
        >
          <div
            className="absolute top-0 left-0 h-full rounded-full animate-slide"
            style={{
              width: "40%",
              backgroundColor: lineColor,
              animationDuration: `${speed + line * 0.5}s`,
            }}
          />
        </div>
      ))}

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(300%);
            }
          }

          .animate-slide {
            animation-name: slide;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </div>
  );
}
