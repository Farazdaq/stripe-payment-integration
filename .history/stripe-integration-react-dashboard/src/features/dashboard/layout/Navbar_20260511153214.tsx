import { useTheme } from "../../../theme/useTheme";
import ThemeSwitch from "../../../components/ThemeSwitch";
import LanguageDropdown from "../../../components/LanguageDropdown";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav
      className="
        w-full
        min-h-[50px]
        md:min-h-[60px]
        lg:min-h-[70px]

        flex
        items-center
        justify-between

        px-4
        md:px-6
        lg:px-8

        py-2
      "
      style={{
        background: theme.colors.navbar,
      }}
    >
      <div className="flex items-center gap-3 md:gap-5 lg:gap-6">
        <ThemeSwitch title="Theme" />
        <LanguageDropdown />
      </div>
    </nav>
  );
}
