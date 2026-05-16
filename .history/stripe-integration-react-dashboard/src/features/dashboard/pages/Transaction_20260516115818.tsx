import { FaPlus } from "react-icons/fa";
import ContainerComp from "../../../components/ContainerComp";
import Dropdown from "../../../components/Dropdown";
import FilterTextField from "../../../components/FilterTextField";
import { useTheme } from "../../../theme/useTheme";

export default function Transaction() {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-row gap-2 md:gap-2 w-full flex-1">
      <ContainerComp
        height={90}
        componentDisplay={
          <div className="flex flex-row  gap-10 md:gap-10 p-5 ">
            <FilterTextField
              width="660px"
              height="50px"
              hintText="Filter items..."
              backgroundColor={theme.colors.containerCopBackgroundColor}
              borderColor={theme.colors.borderColor}
              borderWidth="1px"
              textColor={theme.colors.text}
              placeholderColor="#9ca3af"
              borderRadius="3px"
              fontSize="16px"
              onChange={(value) => console.log(value)}
            />
            <Dropdown
              width="400px"
              height="50px"
              backgroundColor={theme.colors.containerCopBackgroundColor}
              borderColor={theme.colors.borderColor}
              borderWidth="1px"
              textColor={theme.colors.text}
              dropdownBackground={theme.colors.containerCopBackgroundColor}
              dropdownBorderColor={theme.colors.borderColor}
              dropdownTextColor={theme.colors.text}
              placeholder="Choose option"
              items={[
                { label: "React", value: "react" },
                { label: "Vue", value: "vue" },
                { label: "Angular", value: "angular" },
              ]}
              onSelect={(item) => console.log(item)}
            />
            <Dropdown
              width="400px"
              height="50px"
              backgroundColor={theme.colors.containerCopBackgroundColor}
              borderColor={theme.colors.borderColor}
              borderWidth="1px"
              textColor={theme.colors.text}
              dropdownBackground={theme.colors.containerCopBackgroundColor}
              dropdownBorderColor={theme.colors.borderColor}
              dropdownTextColor={theme.colors.text}
              items={[
                { label: "React", value: "react" },
                { label: "Vue", value: "vue" },
                { label: "Angular", value: "angular" },
              ]}
              onSelect={(item) => console.log(item)}
            />
          </div>
        }
      />

      <ContainerComp
        height={90}
        width={100}
        border={true}
        componentDisplay={
          <button
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start", // 👈 move icon to left
              gap: 8,
              paddingLeft: 12,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {/* PLUS ICON */}
            <FaPlus size={22} />

            {/* OPTIONAL TEXT */}
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Add
            </span>
          </button>
        }
      />
    </div>
  );
}
