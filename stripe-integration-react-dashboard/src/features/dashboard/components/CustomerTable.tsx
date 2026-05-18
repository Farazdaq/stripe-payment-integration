import React from "react";

type Customer = {
  id: string | number;
  accountId: string;
  stripeId: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  paymentMethod: boolean;
};

type CustomerTableProps = {
  data: Customer[];

  width?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  onEdit?: (customer: Customer) => void;
};

export default function CustomerTable({
  data,

  width = "100%",
  backgroundColor = "#FFFFFF",
  borderColor = "#E2E8F0",
  textColor = "#0F172A",

  onEdit,
}: CustomerTableProps) {
  return (
    <div
      className="overflow-x-auto"
      style={{
        width,
        backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <table className="min-w-[1000px] w-full text-sm">
        {/* HEADER */}
        <thead>
          <tr style={{ color: textColor }} className="text-center">
            <th className="p-3 border-b" style={{ borderColor }}>
              ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Account ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Stripe ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Name
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Email
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Phone
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Country
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Payment Method
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
              <td className="p-3 border-b" style={{ borderColor }}>
                {item.id}
              </td>

              <td className="p-3 border-b" style={{ borderColor }}>
                {item.accountId}
              </td>

              <td className="p-3 border-b" style={{ borderColor }}>
                {item.stripeId}
              </td>

              <td className="p-3 border-b font-medium" style={{ borderColor }}>
                {item.name}
              </td>

              <td className="p-3 border-b" style={{ borderColor }}>
                {item.email}
              </td>

              <td className="p-3 border-b" style={{ borderColor }}>
                {item.phone}
              </td>

              <td className="p-3 border-b" style={{ borderColor }}>
                {item.country}
              </td>

              {/* PAYMENT BADGE */}
              <td className="p-3 border-b" style={{ borderColor }}>
                <span
                  className="px-2 py-1 text-xs font-semibold rounded"
                  style={{
                    backgroundColor: item.paymentMethod ? "#DCFCE7" : "#FEE2E2",
                    color: item.paymentMethod ? "#16A34A" : "#DC2626",
                  }}
                >
                  {item.paymentMethod ? "YES" : "NO"}
                </span>
              </td>

              {/* ACTION */}
              <td className="p-3 border-b" style={{ borderColor }}>
                <button
                  onClick={() => onEdit?.(item)}
                  className="underline text-white hover:text-white"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
