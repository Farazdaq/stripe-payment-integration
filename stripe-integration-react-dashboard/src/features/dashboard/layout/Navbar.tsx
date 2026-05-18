import { useTheme } from "../../../theme/useTheme";
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
        className="absolute right-10 top-5 text-[25px] underline underline-offset-1 decoration-[1px] tracking-wide font-['Chonburi']"
        style={{ color: theme.colors.text}}
      >
        ATPAY
      </p>

      <div className="flex flex-col gap-1 md:gap-1">
        <div style={{ height: "3px", overflow: "visible" }}>
          <LineDivider
            color= {theme.colors.lineDivider }
            thickness="1px"
            points={[{ x: 0, y: 0 }, { x: 160, y: 0 }, { d: 35 }]}
          />

          <div className="ml-[9.9%] mb-1">
            <LineDivider color={theme.colors.lineDivider } thickness="1px" />
          </div>
        </div>

        <LineShaper
          color={theme.colors.lineDivider }
          thickness={30}
          length={"9%"}
          radiusRightTop={50}
        />

        <LineDivider color={theme.colors.lineDivider } thickness="0.9px" />
        <LineDivider color={theme.colors.lineDivider } thickness="0.9px" />
      </div>
    </div>
  );
}
