import { useTranslation } from "react-i18next";
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";

export default function Overview() {
  const { t } = useTranslation();
const MockComponent = () => <div data-testid="mock">Test</div>;
  return (
    <div className="flex flex-col items-left">
      <ContainerComp
        componentDisplay={<LineChartComp width={200} height={200} title={""} data={[]} />}
      />
    </div>
  );
}
