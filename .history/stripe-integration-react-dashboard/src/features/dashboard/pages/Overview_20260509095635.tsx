import { useTranslation } from "react-i18next";

export default function Overview() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <h1>{t("dashboard.title")}</h1>
      <p>Welcome to your dashboard overview.</p>
    </div>
  );
}
