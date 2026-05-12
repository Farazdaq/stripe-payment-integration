import { useTranslation } from "react-i18next";
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";
import LineShaper from "../../../components/LineShaper";

function MockComponent() {
  return <div>Test</div>;
}
export default function Overview() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 md:gap-3 pt-[0.3px] md:pt-[0.3px]">
      {/* Top containers */}
      <ContainerComp
        height={100}
        componentDisplay={
          <LineShaper
            color="#2563eb"
            strokeWidth={6}
            rotate={0}
            width="100%"
            height="100%"
            points={[
              { x: 20, y: 20 },

              // horizontal
              { x: 150, y: 20 },

              // vertical down
              { x: 150, y: 120 },

              // horizontal right
              { x: 300, y: 120 },

              // vertical down
              { x: 300, y: 220 },

              // final horizontal
              { x: 380, y: 220 },
            ]}
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
