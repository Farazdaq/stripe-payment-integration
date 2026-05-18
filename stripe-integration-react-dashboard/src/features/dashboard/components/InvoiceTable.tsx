import React from "react";
import FileDownloader from "./FileDownloader";
import { useTheme } from "../../../theme/useTheme";

type InvoiceItem = {
  id: string | number;
  invoiceId: string;
  customer: string;
  package: string;
  billing: string;
  amount: string | number;
  status: "paid" | "pending" | "failed";
  dueDate: string;
  paidDate?: string;
};

type InvoiceTableProps = {
  data: InvoiceItem[];

  width?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
};

export default function InvoiceTable({
  data,
  width = "100%",
  backgroundColor = "#FFFFFF",
  borderColor = "#E2E8F0",
  textColor = "#0F172A",
}: InvoiceTableProps) {
  const { theme } = useTheme();

  return (
    <div
      className="overflow-x-auto"
      style={{
        width,
        backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <table className="min-w-[1100px] w-full text-sm border-collapse">
        {/* HEADER */}
        <thead>
          <tr
            className="text-center font-semibold"
            style={{ color: textColor }}
          >
            {[
              "ID",
              "Invoice ID",
              "Customer",
              "Package",
              "Billing",
              "Amount",
              "Status",
              "Due Date",
              "Paid Date",
              "Invoice",
              "#",
            ].map((h) => (
              <th key={h} className="p-3 border-b" style={{ borderColor }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center" style={{ borderColor }}>
              <td className="p-3 border-b">{item.id}</td>
              <td className="p-3 border-b">{item.invoiceId}</td>
              <td className="p-3 border-b font-medium">{item.customer}</td>
              <td className="p-3 border-b">{item.package}</td>
              <td className="p-3 border-b">{item.billing}</td>
              <td className="p-3 border-b font-semibold">${item.amount}</td>

              {/* STATUS */}
              <td className="p-3 border-b">
                <span
                  className="px-2 py-1 text-xs rounded font-semibold"
                  style={{
                    backgroundColor:
                      item.status === "paid"
                        ? "#DCFCE7"
                        : item.status === "pending"
                          ? "#FEF9C3"
                          : "#FEE2E2",
                    color:
                      item.status === "paid"
                        ? "#16A34A"
                        : item.status === "pending"
                          ? "#CA8A04"
                          : "#DC2626",
                  }}
                >
                  {item.status.toUpperCase()}
                </span>
              </td>

              <td className="p-3 border-b">{item.dueDate}</td>
              <td className="p-3 border-b">{item.paidDate || "-"}</td>

              {/* INVOICE DOWNLOAD (FIXED) */}
              <td className="p-3 border-b">
                <div className="flex justify-center">
                  <FileDownloader
                    iconSize={20}
                    width={50}
                    height={50}
                    color={theme.colors.borderColor}
                    backgroundColor={theme.colors.containerCopBackgroundColor}
                    fileName={`invoice-${item.invoiceId}`}
                    type="pdf"
                    title={`Invoice ${item.invoiceId}`}
                    columns={[
                      { key: "customer", header: "Customer" },
                      { key: "package", header: "Package" },
                      { key: "amount", header: "Amount" },
                      { key: "status", header: "Status" },
                    ]}
                    data={[
                      {
                        customer: item.customer,
                        package: item.package,
                        amount: item.amount,
                        status: item.status,
                      },
                    ]}
                  />
                </div>
              </td>

              {/* ACTION */}
              <td className="p-3 border-b text-center">
                <button className="underline text-white hover:text-white text-sm">
                  VIEW
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
