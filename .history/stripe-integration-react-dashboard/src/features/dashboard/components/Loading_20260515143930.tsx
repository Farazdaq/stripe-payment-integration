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
    <>
      <style>
        {`
          @keyframes slide-horizontal {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .loading-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 14px;
            justify-content: center;
          }

          .loading-line {
            position: relative;
            overflow: hidden;
            width: 100%;
            border-radius: 999px;
          }

          .loading-line::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 40%;
            border-radius: 999px;
            animation: slide-horizontal linear infinite;
          }

          .line-1::before {
            animation-duration: ${speed}s;
          }

          .line-2::before {
            animation-duration: ${speed + 0.6}s;
          }

          @media (max-width: 768px) {
            .loading-container {
              gap: 10px;
            }
          }
        `}
      </style>

      <div
        className="loading-container"
        style={{
          height,
        }}
      >
        {/* Line 1 */}
        <div
          className="loading-line line-1"
          style={{
            height: lineHeight,
            backgroundColor,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        {/* Line 2 */}
        <div
          className="loading-line line-2"
          style={{
            height: lineHeight,
            backgroundColor,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <style>
          {`
            .loading-line::before {
              background-color: ${lineColor};
            }
          `}
        </style>
      </div>
    </>
  );
}
