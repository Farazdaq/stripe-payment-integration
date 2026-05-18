

type Subscription = {
  id: string | number;
  subscriptionId: string;
  customerId: string;
  plan: string;
  price: string | number;
  interval: string;
  status: "active" | "paused" | "canceled";
  startDate: string;
  endDate?: string;
};

type SubscriptionTableProps = {
  data: Subscription[];

  width?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  onView?: (item: Subscription) => void;
};

export default function SubscriptionTable({
  data,

  width = "100%",
  backgroundColor = "#FFFFFF",
  borderColor = "#E2E8F0",
  textColor = "#0F172A",

  onView,
}: SubscriptionTableProps) {
  return (
    <div
      className="overflow-x-auto"
      style={{
        width,
        backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <table className="min-w-[1100px] w-full text-sm">
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
              Subscription ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Customer ID
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Plan
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Price
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Interval
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Status
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              Start Date
            </th>
            <th className="p-3 border-b" style={{ borderColor }}>
              End Date
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
              <td className="p-3 border-b">{item.subscriptionId}</td>
              <td className="p-3 border-b">{item.customerId}</td>
              <td className="p-3 border-b font-medium">{item.plan}</td>
              <td className="p-3 border-b">${item.price}</td>
              <td className="p-3 border-b">{item.interval}</td>

              {/* STATUS */}
              <td className="p-3 border-b">
                <span
                  className="px-2 py-1 text-xs font-semibold rounded"
                  style={{
                    backgroundColor:
                      item.status === "active"
                        ? "#DCFCE7"
                        : item.status === "paused"
                          ? "#FEF9C3"
                          : "#FEE2E2",
                    color:
                      item.status === "active"
                        ? "#16A34A"
                        : item.status === "paused"
                          ? "#CA8A04"
                          : "#DC2626",
                  }}
                >
                  {item.status.toUpperCase()}
                </span>
              </td>

              <td className="p-3 border-b">{item.startDate}</td>
              <td className="p-3 border-b">{item.endDate || "-"}</td>

              {/* ACTION */}
              <td className="p-3 border-b">
                <button
                  onClick={() => onView?.(item)}
                  className="underline text-white hover:text-white"
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
