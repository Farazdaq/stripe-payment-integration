import { useTranslation } from "react-i18next";
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";

function MockComponent() {
  return <div>Test</div>;
}
export default function Overview() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1.5 md:gap-1.5 pt-0.3 md:pt-[3px] ">
      {/* Top containers */}
      <ContainerComp height={100} componentDisplay={<MockComponent />} />

      {/* Bottom horizontal containers */}
      <div className="flex flex-col md:flex-row gap-1.5 md:gap-1.5">
        <div className="flex-1">
          <ContainerComp height={120} componentDisplay={<MockComponent />} />
        </div>

        <div className="flex-1">
          <ContainerComp height={120} componentDisplay={<MockComponent />} />
        </div>
      </div>
    </div>
  );
}
