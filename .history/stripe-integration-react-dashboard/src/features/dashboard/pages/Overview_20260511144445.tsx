import { useTranslation } from "react-i18next";
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";

export default function Overview() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <ContainerComp componentDisplay={LineChartComp} />
    </div>
  );
}
