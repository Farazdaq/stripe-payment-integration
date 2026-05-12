import { useTranslation } from "react-i18next";
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";

function MockComponent() {
  return <div>Test</div>;
}
export default function Overview() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1.5 md:gap-1.5 pt-[0.3px] md:pt-[0.3px]">
      {/* Top containers */}
      <ContainerComp height={100} componentDisplay={<MockComponent />} />

      {/* Bottom horizontal containers */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-5 pb-1">
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
    </div>
  );
}
