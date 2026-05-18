import { FaPlus } from "react-icons/fa";
import ContainerComp from "../../../components/ContainerComp";
import Dropdown from "../../../components/Dropdown";
import FilterTextField from "../../../components/FilterTextField";
import { useTheme } from "../../../theme/useTheme";
import { useState } from "react";
import PageControllerBar from "../components/PageControllerBar";
import CustomerTable from "../components/CustomerTable";
export default function Subscription() {
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
          <SubscriptionTable
            data={Array.from({ length: 15 }, (_, i) => {
              const id = i + 1;

              const statuses = ["active", "paused", "canceled"] as const;
              const plans = [
                "Starter Plan",
                "Pro Plan",
                "Enterprise Plan",
              ] as const;
              const intervals = ["Monthly", "Yearly"] as const;

              const status = statuses[i % statuses.length];
              const plan = plans[i % plans.length];
              const interval = intervals[i % intervals.length];

              const startYear = 2025 + (i % 2);
              const endYear = startYear + 1;

              return {
                id,
                subscriptionId: `SUB-${1000 + id}`,
                customerId: `CUST-${String(id).padStart(3, "0")}`,
                plan,
                price:
                  plan === "Enterprise Plan"
                    ? 99
                    : plan === "Pro Plan"
                      ? 29
                      : 9,
                interval,
                status,
                startDate: `${startYear}-0${(i % 9) + 1}-01`,
                endDate:
                  status === "active"
                    ? `${endYear}-12-31`
                    : status === "canceled"
                      ? `${startYear}-12-31`
                      : "",
              };
            })}
            backgroundColor="#F8FAFC"
            borderColor="#CBD5E1"
            textColor="#0F172A"
            onView={(row) => console.log("View subscription:", row)}
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
