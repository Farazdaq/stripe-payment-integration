import AccountController from "../../../../components/AccountController";
import LineShaper from "../../../../components/LineShaper";
import { useTheme } from "../../../../theme/useTheme";
import { sidebarItems } from "./sidebar.config";

type SidebarItem = {
  key: string;
  label: string;
  icon: React.ElementType;
};

type SidebarProps = {
  active: string;
  setActive: (key: string) => void;
};

export default function Sidebar({ active, setActive }: SidebarProps) {
  const { theme } = useTheme();

  return (
    <div
      className="w-[80px] md:w-[220px] min-h-screen pt-[4vh] mt-[0.4vh] py-2.5 transition-all duration-300 shrink-0"
      style={{ background: theme.colors.sidebar }}
    >
      <LineShaper
        color="#E0E0DD"
        thickness={20}
        length={"50%"}
        marginBottom={4}
        radiusRightTop={50}
      />

      {sidebarItems.map((item: SidebarItem) => {
        const isActive = active === item.key;

        // Dynamic icon component
        const Icon = item.icon;

        return (
          <div key={item.key} className="flex">
            <button
              onClick={() => setActive(item.key)}
              className="w-full mb-2 cursor-pointer flex items-center justify-center md:justify-start gap-0 md:gap-2 p-3 md:p-4 transition-all duration-200"
              style={{
                background: isActive ? theme.colors.bg : "transparent",
                color: isActive
                  ? theme.colors.textSideBarItemSelected
                  : theme.colors.textSideBarItem,
                fontWeight: isActive ? "600" : "400",
              }}
            >
              {/* Icon */}
              <span className="text-2xl md:text-xl lg:text-2xl flex items-center justify-center w-full md:w-auto">
                <Icon />
              </span>

              {/* Label */}
              <div className="hidden md:inline text-base lg:text-lg">
                {item.label}
              </div>
            </button>
          </div>
        );
      })}

      <div className="mt-[100%] flex justify-center">
        <AccountController
          isLogIn={true}
          direction="column"
          imagePosition="top"
        />
      </div>
    </div>
  );
}
