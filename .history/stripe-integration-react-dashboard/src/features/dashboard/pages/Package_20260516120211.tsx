import { FaPlus } from "react-icons/fa";
import ContainerComp from "../../../components/ContainerComp";
import Dropdown from "../../../components/Dropdown";
import FilterTextField from "../../../components/FilterTextField";
import { useTheme } from "../../../theme/useTheme";
import { useState } from "react";
import PageControllerBar from "../components/PageControllerBar";
import CustomerTable from "../components/CustomerTable";
import PackageTable from "../components/PackageTable";

export default function Package() {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* ================= FILTER ROW ================= */}
      <div className="flex flex-row gap-2 w-full">
        <ContainerComp
          height={90}
          componentDisplay={
            <div className="flex flex-row gap-10 p-5 w-full">
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

        {/* ADD BUTTON */}
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
                justifyContent: "flex-start",
                gap: 8,
                paddingLeft: 12,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: theme.colors.text,
              }}
            >
              <FaPlus size={22} />
              <span style={{ fontSize: 14, fontWeight: 500 }}>Add</span>
            </button>
          }
        />
      </div>

      {/* ================= TABLE ================= */}
      <ContainerComp
        componentDisplay={
          <PackageTable
            data={Array.from({ length: 15 }, (_, i) => {
              const id = i + 1;

              return {
                id,
                name: `Package ${id}`,
                code: `PKG-${100 + id}`,
                price: `$${(id * 5).toFixed(0)}`,
                type: id % 2 === 0 ? "Monthly" : "Yearly",
                interval: id % 2 === 0 ? "30 days" : "365 days",
                productId: `PROD-${1000 + id}`,
                planId: `PLAN-${2000 + id}`,
                features: [
                  "Basic Support",
                  `${id} User${id > 1 ? "s" : ""}`,
                  "Email Access",
                ],
                description: `This is package ${id} designed for demo users.`,
              };
            })}
            onEdit={(item) => console.log("Edit:", item)}
          />
        }
      />

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-end">
        <PageControllerBar
          currentPage={page}
          totalPages={7}
          backgroundColor={theme.colors.pageControllerBarColor}
          borderColor={theme.colors.borderColor}
          textColor={theme.colors.text}
          activeColor="#22C55E"
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
