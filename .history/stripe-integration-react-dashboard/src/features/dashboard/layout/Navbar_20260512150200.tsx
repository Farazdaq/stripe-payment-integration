import { useTheme } from "../../../theme/useTheme";
import ThemeSwitch from "../../../components/ThemeSwitch";
import LanguageDropdown from "../../../components/LanguageDropdown";
import LineShaper from "../../../components/LineShaper";
import LineDivider from "../../../components/LineDivider";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <div
      className="w-screen h-[40px] md:h-[50px] lg:h-[70px]"
      style={{
        paddingTop: "10px",
        background: theme.colors.navbar,
      }}
    >
      <div className="flex flex-col  gap-1 md:gap-1">
        <LineDivider thickness="0.8px" points={[{ x: 1, y: 1 }]} />
        <LineShaper
          color="#000"
          thickness={32}
          marginTop={2}
          length={"9%"}
          radiusRightTop={50}
        />
        <LineDivider thickness="0.8px" />
        <LineDivider thickness="0.8px" />
      </div>
    </div>
  );
}
