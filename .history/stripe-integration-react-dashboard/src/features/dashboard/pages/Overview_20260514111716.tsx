import { useTranslation } from "react-i18next";
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";

function MockComponent() {
  return <div>Test</div>;
}

type FigCardsProps = {
  totalRevenue: number;
  activeSubscriptions: number;
  invoicesPaid: number;
  failedPayments: number;
  totalCustomers: number;
  topPackage: number;
};
function FigCards({
  totalRevenue,
  activeSubscriptions,
  invoicesPaid,
  failedPayments,
  totalCustomers,
  topPackage,
}: FigCardsProps) {
  return (
    <div className="flex flex-row items-center justify-center p-4 text-center gap-20">
      <ContainerComp
        radiusAll={3}
        width={200}
        height={70}
        border={true}
        borderColor=""
        componentDisplay={
          <div className="flex flex-col items-center justify-center text-center">
            <p>{totalRevenue}</p>
            <h3>Total Revenue</h3>
          </div>
        }
      ></ContainerComp>
      <ContainerComp
        width={200}
        height={70}
        border={true}
        borderColor=""
        componentDisplay={
          <div className="flex flex-col items-center justify-center text-center">
            <p>{activeSubscriptions}</p>
            <h3>Active Subscriptions</h3>
          </div>
        }
      ></ContainerComp>
      <ContainerComp
        width={200}
        height={70}
        border={true}
        borderColor=""
        componentDisplay={
          <div className="flex flex-col items-center justify-center text-center">
            <p>{invoicesPaid}</p>
            <h3>Invoices Paid</h3>
          </div>
        }
      ></ContainerComp>
      <ContainerComp
        width={200}
        height={70}
        border={true}
        borderColor=""
        componentDisplay={
          <div className="flex flex-col items-center justify-center text-center">
            <p>{failedPayments}</p>
            <h3>Failed Payments</h3>
          </div>
        }
      ></ContainerComp>
      <ContainerComp
        width={200}
        height={70}
        border={true}
        borderColor=""
        componentDisplay={
          <div className="flex flex-col items-center justify-center text-center">
            <p>{totalCustomers}</p>
            <h3>Total Customers</h3>
          </div>
        }
      ></ContainerComp>
      <ContainerComp
        width={200}
        height={70}
        border={true}
        borderColor=""
        componentDisplay={
          <div className="flex flex-col items-center justify-center text-center">
            <p>{topPackage}</p>
            <h3>Top Package</h3>
          </div>
        }
      ></ContainerComp>
    </div>
  );
}
export default function Overview() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 md:gap-3 pt-[0.3px] md:pt-[0.3px]">
      {/* Top containers */}
      <ContainerComp
        height={100}
        componentDisplay={
          <FigCards
            totalRevenue={0}
            activeSubscriptions={0}
            invoicesPaid={0}
            failedPayments={0}
            totalCustomers={0}
            topPackage={0}
          />
        }
      />

      {/* Bottom horizontal containers */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-3">
        <div className="flex-1">
          <ContainerComp
            radiusRightTop={50}
            height={300}
            componentDisplay={<MockComponent />}
          />
        </div>

        <div className="flex-1">
          <ContainerComp
            radiusLeftBottom={50}
            height={300}
            componentDisplay={<MockComponent />}
          />
        </div>
      </div>
      <ContainerComp
        radiusLeftTop={50}
        height={456}
        componentDisplay={<MockComponent />}
      />
    </div>
  );
}
