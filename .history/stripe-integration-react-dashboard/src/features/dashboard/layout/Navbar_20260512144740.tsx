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
        padding: "0px",
        background: theme.colors.navbar,
      }}
    >
      <div className="flex flex-col  gap-0.5 md:gap-0.5">
        <LineShaper
          color="#000"
          thickness={32}
          marginTop={15}
          length={"9%"}
          radiusRightTop={50}
        />
        <LineDivider thickness="0.8px" />
      </div>
    </div>
  );
}
