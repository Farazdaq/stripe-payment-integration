import { FaPlus } from "react-icons/fa";
import ContainerComp from "../../../components/ContainerComp";
import Dropdown from "../../../components/Dropdown";
import FilterTextField from "../../../components/FilterTextField";
import { useTheme } from "../../../theme/useTheme";
import { useState } from "react";
import PageControllerBar from "../components/PageControllerBar";
import CustomerTable from "../components/CustomerTable";
import TransactionTable from "../components/TransactionTable";
import Exporter from "../components/Exporter";
export default function Transaction() {
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
                width="300px"
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
              <Exporter
                width={70}
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
                paymentIntent: `pi_${Math.random().toString(36).substring(2, 10).toUpperCase()}XYZ`,
                paidAt: isPaid
                  ? `2026-05-${(10 + (i % 18)).toString().padStart(2, "0")}`
                  : "",
              };
            })}
            textColor={theme.colors.text}
            backgroundColor={theme.colors.containerCopBackgroundColor}
            borderColor={theme.colors.borderColor}
            onView={(row) => console.log("View transaction:", row)}
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
