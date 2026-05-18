

type LoadingProps = {
  width?: string | number;
  lineColor?: string;
  backgroundColor?: string;
  height?: number;
  lineHeight?: number;
  speed?: number;
};

export default function Loading({
  width = "100%",
  lineColor = "#3B82F6",
  backgroundColor = "#E5E7EB",
  height = 80,
  lineHeight = 6,
  speed = 2,
}: LoadingProps) {
  return (
    <div
      className="flex flex-col justify-center gap-[1px] overflow-hidden"
      style={{
        width,
        height,
      }}
    >
      {[0, 1].map((line) => (
        <div
          key={line}
          className="relative w-full overflow-hidden"
          style={{
            height: lineHeight,
            backgroundColor,
          }}
        >
          <div
            className="absolute top-0 left-0 h-full animate-slide"
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
