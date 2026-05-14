import ContainerComp from "../../../../components/ContainerComp";

type FigCardsProps = {
  totalRevenue: number;
  activeSubscriptions: number;
  invoicesPaid: number;
  failedPayments: number;
  totalCustomers: number;
  topPackage: number;
};

type CardItemProps = {
  value: number;
  title: string;
};

// ==========================================
// Reusable statistics card
// ==========================================
function StatsCard({ value, title }: CardItemProps) {
  return (
    <ContainerComp
      radiusAll={3}
      width={200}
      height={70}
      border={true}
      borderColor=""
      componentDisplay={
        <div className="flex flex-col items-center justify-center text-center">
          <p>{value}</p>
          <h3>{title}</h3>
        </div>
      }
    />
  );
}

// ==========================================
// Main Figure Cards Component
// ==========================================
export default function FigCards({
  totalRevenue,
  activeSubscriptions,
  invoicesPaid,
  failedPayments,
  totalCustomers,
  topPackage,
}: FigCardsProps) {
  const cards = [
    {
      title: "Total Revenue",
      value: totalRevenue,
    },
    {
      title: "Active Subscriptions",
      value: activeSubscriptions,
    },
    {
      title: "Invoices Paid",
      value: invoicesPaid,
    },
    {
      title: "Failed Payments",
      value: failedPayments,
    },
    {
      title: "Total Customers",
      value: totalCustomers,
    },
    {
      title: "Top Package",
      value: topPackage,
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center p-4 text-center gap-20 flex-wrap">
      {cards.map((card) => (
        <StatsCard key={card.title} value={card.value} title={card.title} />
      ))}
    </div>
  );
}
