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
    <div className="flex flex-row">
      <ContainerComp componentDisplay={undefined}></ContainerComp>
      <ContainerComp componentDisplay={undefined}></ContainerComp>
      <ContainerComp componentDisplay={undefined}></ContainerComp>
      <ContainerComp componentDisplay={undefined}></ContainerComp>
        <ContainerComp componentDisplay={undefined}>
        
       </ContainerComp>
         <ContainerComp componentDisplay={undefined}>
        
       </ContainerComp>
      <p>{totalRevenue}</p>
      <p>{activeSubscriptions}</p>
      <p>{invoicesPaid}</p>
      <p>{failedPayments}</p>
      <p>{totalCustomers}</p>
      <p>{topPackage}</p>
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
