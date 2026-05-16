import CustomerTable from "../components/CustomerTable";
import PageControllerBar from "../components/PageControllerBar";
import { useState } from "react";

import Dropdown from "../../../components/Dropdown";
import FilterTextField from "../../../components/FilterTextField";
import ContainerComp from "../../../components/ContainerComp";
import { useTheme } from "../../../theme/useTheme";
import { FaPlus } from "react-icons/fa";

export default function Customer() {
  const [page, setPage] = useState(1);
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-3 w-full">
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
          <CustomerTable
            textColor={theme.colors.text}
            backgroundColor={theme.colors.containerCopBackgroundColor}
            borderColor={theme.colors.borderColor}
            data={Array.from({ length: 15 }, (_, i) => {
              const id = i + 1;

              return {
                id,
                accountId: `ACC-${1000 + id}`,
                stripeId: `STR-${88000 + id}`,
                name: `Customer ${id}`,
                email: `customer${id}@test.com`,
                phone: `+971 55 ${1000 + id}`,
                country: "UAE",
                paymentMethod: id % 2 === 0,
              };
            })}
            onEdit={(row) => console.log("Edit:", row)}
          />
        }
      />

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-end">
        <PageControllerBar
          currentPage={page}
          totalPages={7}
          backgroundColor="#F1F5F9"
          borderColor="#94A3B8"
          textColor="#0F172A"
          activeColor="#22C55E"
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
