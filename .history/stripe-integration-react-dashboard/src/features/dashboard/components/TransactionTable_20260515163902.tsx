import React from "react";

type Transaction = {
  id: string | number;
  invoiceId: string;
  customerId: string;
  description: string;
  paymentMethod: string;
  amount: string | number;
  status: "paid" | "pending" | "failed";
  paymentIntent: string;
  paidAt?: string;
};

type TransactionTableProps = {
  data: Transaction[];

  width?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  onView?: (item: Transaction) => void;
};

export default function TransactionTable({
  data,

  width = "100%",
  backgroundColor = "#FFFFFF",
  borderColor = "#E2E8F0",
  textColor = "#0F172A",

  onView,
}: TransactionTableProps) {
  return (
    <div
      className="overflow-x-auto"
      style={{
        width,
        backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <table className="min-w-[1200px] w-full text-sm">
        {/* HEADER */}
        <thead>
          <tr
            className="text-center font-semibold"
            style={{ color: textColor }}
          >
            <th className="p-3 border-b" style={{ borderColor }}>
              ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Invoice ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Customer ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Description
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Payment Method
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Amount
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Status
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Payment Intent
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Paid At
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              #
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center" style={{ borderColor }}>
              <td className="p-3 border-b">{item.id}</td>
              <td className="p-3 border-b">{item.invoiceId}</td>
              <td className="p-3 border-b">{item.customerId}</td>
              <td className="p-3 border-b">{item.description}</td>
              <td className="p-3 border-b">{item.paymentMethod}</td>

              <td className="p-3 border-b font-semibold">${item.amount}</td>

              {/* STATUS */}
              <td className="p-3 border-b">
                <span
                  className="px-2 py-1 text-xs font-semibold rounded"
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

              <td className="p-3 border-b">{item.paymentIntent}</td>
              <td className="p-3 border-b">{item.paidAt || "-"}</td>

              {/* VIEW ACTION */}
              <td className="p-3 border-b">
                <button
                  onClick={() => onView?.(item)}
                  className="underline text-blue-600 hover:text-blue-800"
                >
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
