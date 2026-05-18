import { FaPlus } from "react-icons/fa";
import ContainerComp from "../../../components/ContainerComp";
import Dropdown from "../../../components/Dropdown";
import FilterTextField from "../../../components/FilterTextField";
import { useTheme } from "../../../theme/useTheme";
import { useState } from "react";
import PageControllerBar from "../components/PageControllerBar";
import TransactionTable from "../components/TransactionTable";
import Exporter from "../components/Exporter";

export default function Transaction() {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-1 w-full">
      {/* ================= FILTER ROW ================= */}
      <div className="flex flex-col lg:flex-row gap-3 w-full">
        {/* FILTER CONTAINER */}
        <div className="w-full lg:w-[88%]">
          <ContainerComp
            height="100%"
            componentDisplay={
              <div className="flex flex-col lg:flex-row gap-3 p-4 w-full">
                {/* FILTER INPUT */}
                <div className="w-full lg:w-[40%]">
                  <FilterTextField
                    width="100%"
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
                </div>

                {/* DROPDOWN 1 */}
                <div className="w-full sm:w-[48%] lg:w-[22%]">
                  <Dropdown
                    width="100%"
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
                </div>

                {/* DROPDOWN 2 */}
                <div className="w-full sm:w-[48%] lg:w-[18%]">
                  <Dropdown
                    width="100%"
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

                {/* EXPORTER */}
                <div className="w-full sm:w-[48%] lg:w-[12%]">
                  <Exporter
                    width="100%"
                    height={50}
                    color={theme.colors.borderColor}
                    backgroundColor={theme.colors.containerCopBackgroundColor}
                    borderColor={theme.colors.borderColor}
                    borderWidth={1}
                    type="excel"
                    fileName="users-data"
                    columns={[
                      { key: "name", header: "Name" },
                      { key: "email", header: "Email" },
                    ]}
                    data={[
                      { name: "John", email: "john@test.com" },
                      { name: "Sarah", email: "sarah@test.com" },
                    ]}
                  />
                </div>
              </div>
            }
          />
        </div>

        {/* ADD BUTTON */}
        <div className="w-full lg:w-[12%]">
          <ContainerComp
            height="100%"
            border={true}
            componentDisplay={
              <button
                style={{
                  width: "100%",
                  minHeight: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: theme.colors.text,
                }}
              >
                <FaPlus size={20} />
                <span style={{ fontSize: 14, fontWeight: 500 }}>
                  Add
                </span>
              </button>
            }
          />
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <ContainerComp
        componentDisplay={
          <div className="w-full overflow-x-auto">
            <TransactionTable
              data={Array.from({ length: 15 }, (_, i) => {
                const id = i + 1;

                const statuses = ["paid", "pending", "failed"] as const;
                const methods = ["Stripe Card", "PayPal", "Apple Pay"] as const;

                const status = statuses[i % statuses.length];
                const paymentMethod = methods[i % methods.length];

                const isPaid = status === "paid";

                return {
                  id,
                  invoiceId: `INV-${1000 + id}`,
                  customerId: `CUST-${String(id).padStart(3, "0")}`,
                  description:
                    i % 3 === 0
                      ? "Monthly subscription payment"
                      : i % 3 === 1
                      ? "Plan upgrade payment"
                      : "Service renewal transaction",

                  paymentMethod,
                  amount: ((i * 7) % 150) + 20,
                  status,
                  paymentIntent: `pi_${Math.random()
                    .toString(36)
                    .substring(2, 10)
                    .toUpperCase()}XYZ`,
                  paidAt: isPaid
                    ? `2026-05-${(10 + (i % 18))
                        .toString()
                        .padStart(2, "0")}`
                    : "",
                };
              })}
              textColor={theme.colors.text}
              backgroundColor={theme.colors.containerCopBackgroundColor}
              borderColor={theme.colors.borderColor}
              onView={(row) => console.log("View transaction:", row)}
            />
          </div>
        }
      />

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center lg:justify-end w-full">
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