import { useTheme } from "../../../../theme/useTheme";
import { sidebarItems } from "./sidebar.config";

type SidebarItem = {
  key: string;
  label: string;
};

type SidebarProps = {
  active: string;
  setActive: (key: string) => void;
};

export default function Sidebar({ active, setActive }: SidebarProps) {
  const { theme } = useTheme();

  return (
    <div
      className="w-[80px] md:w-[220px] min-h-screen pt-[10vh] mt-[7vh] py-2.5 transition-all duration-300 shrink-0"
      style={{ background: theme.colors.sidebar }}
    >
      {sidebarItems.map((item: SidebarItem) => {
        const isActive = active === item.key;

        return (
          <div key={item.key} className="flex">
            <button
              onClick={() => setActive(item.key)}
              className="w-full mb-2 cursor-pointer flex items-center justify-center md:justify-start gap-0 md:gap-2 p-3 md:p-4 transition-all duration-200"
              style={{
                background: isActive ? theme.colors.border : "transparent",
                color: theme.colors.text,
                fontWeight: isActive ? "600" : "400",
              }}
            >
              {/* Icon */}
              <span className="text-2xl md:text-lg flex items-center justify-center w-full md:w-auto">
                📦
              </span>

              {/* Label */}
              <div className="hidden md:inline text-base lg:text-lg">
                {item.label}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
