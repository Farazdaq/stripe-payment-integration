import { useTheme } from "../../../theme/useTheme";
import ThemeSwitch from "../../../components/ThemeSwitch";
import LanguageDropdown from "../../../components/LanguageDropdown";
import { LineDivider } from "../../../components/LineShaper";

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
        <LineDivider
          width={300}
          height={100}
          points={[
            { x: 10, y: 50 },
            { x: 290, y: 50 },
          ]}
          color="#22c55e"
          thickness={2}
        />
        <ThemeSwitch title="Theme" />
        <LanguageDropdown />
      </div>
    </div>
  );
}
