import { useTheme } from "../../../theme/useTheme";
import ThemeSwitch from "../../../components/ThemeSwitch";
import LanguageDropdown from "../../../components/LanguageDropdown";
import LineShaper from "../../../components/LineShaper";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <div
      className="w-screen h-[40px] md:h-[50px] lg:h-[70px]"
      style={{
        padding: "10px",
        background: theme.colors.navbar,
      }}
    >
      <div className="flex items-center gap-3 md:gap-5">
        <LineShaper
          width="200px"
          height="30px"
          radiusTopRight={20}
          color="black"
          strokeWidth={4}
          startX={0}
          startY={4}
          endX={200}
          endY={4}
          points={[]}
        />
        <ThemeSwitch title="Theme" />
        <LanguageDropdown />
      </div>
    </div>
  );
}
