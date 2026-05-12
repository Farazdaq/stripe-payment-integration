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
      <div className="flex flex-col gap-1 md:gap-1">
        {/* FIX: Wrap angled divider in a fixed-height container */}
        <div style={{ height: "12px", overflow: "visible" }}>
          <div>
            <LineDivider
              thickness="1px"
              points={[{ x: 0, y: 0 }, { x: 150, y: 0 }, { d: 48 }]}
            />

            {/* This one starts exactly at y=48 */}
          </div>
        </div>

        <LineShaper
          color="#000"
          thickness={32}
          marginTop={0}
          length={"9%"}
          radiusRightTop={50}
        />

        <LineDivider thickness="0.9px" />
        <LineDivider thickness="0.9px" />
      </div>
    </div>
  );
}
