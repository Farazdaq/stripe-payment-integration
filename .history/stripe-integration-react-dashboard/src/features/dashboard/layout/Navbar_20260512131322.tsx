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
          color="#ef4444"
          thickness={8}
          radiusTopLeft={999}
          radiusTopRight={999}
          radiusBottomLeft={999}
          radiusBottomRight={999}
        />
        <ThemeSwitch title="Theme" />
        <LanguageDropdown />
      </div>
    </div>
  );
}
