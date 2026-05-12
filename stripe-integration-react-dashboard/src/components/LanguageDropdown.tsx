import { useEffect, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { changeLanguage } from "../i18n/changeLanguage";
import { useTheme } from "../theme/useTheme";


// Contoler language accross all dashboard
type Language = {
  code: string;
  label: string;
  countryCode: string;
};

type Props = {
  width?: string;
  height?: string;
};

const languages: Language[] = [
  { code: "en", label: "English", countryCode: "GB" },
  { code: "ar", label: "Arabic", countryCode: "SA" },
];

export default function LanguageDropdown({
  width = "w-40",
  height = "h-10",
}: Props) {
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(languages[0]);

  const ref = useRef<HTMLDivElement>(null);

  const filtered = languages.filter((lang) =>
    lang.label.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (lang: Language) => {
    setSelected(lang);
    changeLanguage(lang.code);
    setOpen(false);
    setSearch("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          ${width} ${height}
          flex items-center justify-between
          px-3
          border rounded-md
          transition
        `}
        style={{
          background: theme.colors.navbar,
          borderColor: theme.colors.border,
          color: theme.colors.text,
        }}
      >
        <div className="flex items-center gap-2">
          <ReactCountryFlag
            countryCode={selected.countryCode}
            svg
            style={{ width: "1.3em", height: "1.3em" }}
          />
          <span className="text-sm md:text-base">
            {selected.code.toUpperCase()}
          </span>
        </div>

        <span>▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute mt-2
            w-full
            border rounded-md
            shadow-lg
            z-50
          "
          style={{
            background: theme.colors.sidebar,
            borderColor: theme.colors.border,
            color: theme.colors.text,
          }}
        >
          {/* Search */}
          <input
            type="text"
            placeholder="Search language..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              px-3 py-2
              text-sm
              border-b
              outline-none
              bg-transparent
            "
            style={{
              borderColor: theme.colors.border,
              color: theme.colors.text,
            }}
          />

          {/* List */}
          <div className="max-h-60 overflow-y-auto">
            {filtered.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className="
                  w-full
                  flex items-center gap-2
                  px-3 py-2
                  text-left
                  transition
                "
                style={{
                  color: theme.colors.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme.colors.border + "33";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <ReactCountryFlag
                  countryCode={lang.countryCode}
                  svg
                  style={{ width: "1.3em", height: "1.3em" }}
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
