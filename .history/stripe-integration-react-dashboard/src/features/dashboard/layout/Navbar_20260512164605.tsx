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
        <div style={{ height: "3px", overflow: "visible" }}>
          <div className="ml-[95%] mb-[5%]">
            <p>ATPAY</p>
          </div>
          <LineDivider
            color="#E0E0DD"
            thickness="1px"
            points={[
              { x: 0, y: 0 }, // start
              { x: 170, y: 0 }, // go straight 500px
              { d: 35 }, // go down 20px
            ]} // go to end of screen
          />

          <div className="ml-[9.5%] mb-1">
            <LineDivider color="#E0E0DD" thickness="1px" />
          </div>
        </div>

        <LineShaper
          color="#E0E0DD"
          thickness={32}
          length={"9%"}
          radiusRightTop={50}
        />

        <LineDivider color="#E0E0DD" thickness="0.9px" />
        <LineDivider color="#E0E0DD" thickness="0.9px" />
      </div>
    </div>
  );
}
