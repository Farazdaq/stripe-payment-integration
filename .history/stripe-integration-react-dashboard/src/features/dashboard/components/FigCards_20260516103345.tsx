import ContainerComp from "../../../components/ContainerComp";
import { useTheme } from "../../../theme/useTheme";
import { useEffect, useState } from "react";

/* ---------------- Types ---------------- */

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

/* ---------------- Count Up Hook ---------------- */

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * target);

      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return value;
}

/* ---------------- Stats Card ---------------- */

function StatsCard({ value, title }: CardItemProps) {
  const { theme } = useTheme();

  const animatedValue = useCountUp(value);

  return (
    <ContainerComp
      radiusAll={6}
      width={250}
      height={80}
      border={true}
      borderColor={theme.colors.borderColor}
      componentDisplay={
        <div className="flex flex-col items-center justify-center text-center gap-1">
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              margin: 0,
              color: theme.colors.text,
              transition: "all 0.2s ease",
            }}
          >
            {animatedValue.toLocaleString()}
          </p>

          <h3
            style={{
              fontSize: 13,
              fontWeight: 500,
              margin: 0,
              opacity: 0.8,
              color: theme.colors.text,
            }}
          >
            {title}
          </h3>
        </div>
      }
    />
  );
}

/* ---------------- Main Component ---------------- */

export default function FigCards({
  totalRevenue,
  activeSubscriptions,
  invoicesPaid,
  failedPayments,
  totalCustomers,
  topPackage,
}: FigCardsProps) {
  const cards = [
    { title: "Total Revenue", value: totalRevenue },
    { title: "Active Subscriptions", value: activeSubscriptions },
    { title: "Invoices Paid", value: invoicesPaid },
    { title: "Failed Payments", value: failedPayments },
    { title: "Total Customers", value: totalCustomers },
    { title: "Top Package", value: topPackage },
  ];

  return (
    <div
      data-testid="figCards"
      className="flex flex-row items-center justify-center p-4 text-center gap-7 flex-wrap"
    >
      {cards.map((card) => (
        <StatsCard key={card.title} value={card.value} title={card.title} />
      ))}
    </div>
  );
}
