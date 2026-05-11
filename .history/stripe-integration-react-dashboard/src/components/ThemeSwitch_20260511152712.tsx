import { useTheme } from "../theme/useTheme";

type ThemeSwitchProps = {
  title?: string;
};

export default function ThemeSwitch({
  title = "Toggle Theme",
}: ThemeSwitchProps) {
  const { mode, setMode } = useTheme();

  const isDark = mode === "light";

  return (
    <div className="flex items-center gap-2">
      {/* Title */}
      <span className="text-xs md:text-sm lg:text-base">{title}</span>

      {/* Switch */}
      <button
        onClick={() => setMode(isDark ? "dark" : "light")}
        className={`
          relative
          w-10 md:w-12 lg:w-14
          h-5 md:h-6 lg:h-7
          flex items-center
          rounded-full
          transition-colors duration-300
          ${isDark ? "bg-gray-700" : "bg-gray-300"}
        `}
      >
        {/* Knob */}
        <div
          className={`
            absolute
            w-4 md:w-5 lg:w-6
            h-4 md:h-5 lg:h-6
            bg-white
            rounded-full
            shadow-md
            transform transition-transform duration-300
            ${isDark ? "translate-x-5 md:translate-x-6 lg:translate-x-7" : "translate-x-1"}
          `}
        />
      </button>

      {/* Mode label */}
      <span className="text-xs md:text-sm lg:text-base">{mode}</span>
    </div>
  );
}
