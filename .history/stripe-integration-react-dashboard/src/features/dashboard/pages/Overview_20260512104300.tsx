import { useTranslation } from "react-i18next";
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";

function MockComponent() {
  return <div>Test</div>;
}
export default function Overview() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 md:gap-6 p-2 md:p-1">
      {/* Top containers */}
      <ContainerComp height={100} componentDisplay={<MockComponent />} />

      <ContainerComp height={100} componentDisplay={<MockComponent />} />

      {/* Bottom horizontal containers */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
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
