import { useTheme } from "../../../theme/useTheme";
import ThemeSwitch from "../../../components/ThemeSwitch";
import LanguageDropdown from "../../../components/LanguageDropdown";
import LineShaper from "../../../components/LineShaper";
import LineDivider from "../../../components/LineDivider";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <div
      className="relative w-screen h-[40px] md:h-[50px] lg:h-[70px]"
      style={{
        paddingTop: "10px",
        background: theme.colors.navbar,
      }}
    >
      {/* Title */}
      <p
        className="absolute right-4 top-1 text-xs md:text-sm lg:text-base tracking-wide"
        style={{ color: "#E0E0DD" }}
      >
        YOUR TITLE
      </p>

      <div className="flex flex-col gap-1 md:gap-1">
        <div style={{ height: "3px", overflow: "visible" }}>
          <LineDivider
            color="#E0E0DD"
            thickness="1px"
            points={[{ x: 0, y: 0 }, { x: 170, y: 0 }, { d: 35 }]}
          />

          <div className="ml-[9.5%] mb-1">
            <LineDivider color="#E0E0DD" thickness="1px" />
          </div>
        </div>

        <LineShaper
          color="#E0E0DD"
          thickness={30}
          length={"9%"}
          radiusRightTop={50}
        />

        <LineDivider color="#E0E0DD" thickness="0.9px" />
        <LineDivider color="#E0E0DD" thickness="0.9px" />
      </div>
    </div>
  );
}
