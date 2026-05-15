import React from "react";

type Customer = {
  id: string | number;
  accountId: string;
  stripeId: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  paymentMethod: boolean; // true = YES, false = NO
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
          <tr style={{ color: textColor }} className="text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Account ID</th>
            <th className="p-3">Stripe ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Country</th>
            <th className="p-3">Payment Method</th>
            <th className="p-3 text-center">#</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t" style={{ borderColor }}>
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.accountId}</td>
              <td className="p-3">{item.stripeId}</td>
              <td className="p-3 font-medium">{item.name}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">{item.phone}</td>
              <td className="p-3">{item.country}</td>

              {/* PAYMENT METHOD BADGE */}
              <td className="p-3">
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
              <td className="p-3 text-center">
                <button
                  onClick={() => onEdit?.(item)}
                  className="underline text-blue-600 hover:text-blue-800"
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
