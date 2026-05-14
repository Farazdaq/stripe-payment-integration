import { useTranslation } from "react-i18next";
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";
import FigCards from "../components/FigCards";
import { useTheme } from "../../../theme/useTheme";
import MultiLineChart from "../../../components/MultiLineChart";
import CustomTable from "../../../components/CustomTable";
import PaymentStatusPieChart from "../../../components/PaymentStatusPieChart";

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

export default function Overview() {
  const { t } = useTranslation();
  const { theme } = useTheme();
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
            componentDisplay={
              <LineChartComp
                title="Revenue Chart"
                chartColor={theme.colors.chartColor}
                width={750}
                height={220}
                weekData={[
                  { xValue: "Mon", yValue: 1200 },
                  { xValue: "Tue", yValue: 1800 },
                  { xValue: "Wed", yValue: 1400 },
                  { xValue: "Thu", yValue: 2200 },
                  { xValue: "Fri", yValue: 2600 },
                  { xValue: "Sat", yValue: 3000 },
                  { xValue: "Sun", yValue: 2500 },
                ]}
                monthData={[
                  { xValue: "Week 1", yValue: 8000 },
                  { xValue: "Week 2", yValue: 9500 },
                  { xValue: "Week 3", yValue: 11000 },
                  { xValue: "Week 4", yValue: 10500 },
                ]}
              />
            }
          />
        </div>

        <div className="flex-1">
          <ContainerComp
            radiusLeftBottom={50}
            height={300}
            componentDisplay={
              <MultiLineChart
                chartColors={{
                  grid: theme.colors.borderColor,
                  axis: theme.colors.borderColor,
                  label: theme.colors.text,
                }}
                showTooltip={false}
                height={220}
                width={750}
                title="Subscription Growth"
                xTitle="Time"
                yTitle="Users"
                weekData={[
                  { xValue: "Mon", lineOne: 120, lineTwo: 80, lineThree: 40 },
                  { xValue: "Tue", lineOne: 150, lineTwo: 100, lineThree: 50 },
                  { xValue: "Wed", lineOne: 170, lineTwo: 120, lineThree: 50 },
                  { xValue: "Thu", lineOne: 200, lineTwo: 140, lineThree: 60 },
                  { xValue: "Fri", lineOne: 220, lineTwo: 160, lineThree: 60 },
                  { xValue: "Sat", lineOne: 180, lineTwo: 130, lineThree: 50 },
                  { xValue: "Sun", lineOne: 160, lineTwo: 110, lineThree: 50 },
                ]}
                monthData={[
                  {
                    xValue: "Week 1",
                    lineOne: 600,
                    lineTwo: 420,
                    lineThree: 180,
                  },
                  {
                    xValue: "Week 2",
                    lineOne: 750,
                    lineTwo: 520,
                    lineThree: 230,
                  },
                  {
                    xValue: "Week 3",
                    lineOne: 820,
                    lineTwo: 580,
                    lineThree: 240,
                  },
                  {
                    xValue: "Week 4",
                    lineOne: 900,
                    lineTwo: 650,
                    lineThree: 250,
                  },
                ]}
                lineColors={{
                  new: "#39C872",
                  netGrowth: "#37C7C2",
                  cancellations: "#B06060",
                }}
                labels={{
                  new: "New",
                  netGrowth: "Net Growth",
                  cancellations: "Cancellations",
                }}
              />
            }
          />
        </div>
      </div>
      <ContainerComp
        radiusLeftTop={50}
        height={456}
        componentDisplay={
          <div className="flex flex-row gp-20 p-7">
            <CustomTable
              headers={[
                "Transaction ID",
                "Customer",
                "Amount ($)",
                "Status",
                "Date",
              ]}
              rows={[
                ["TXN-1001", "John Doe", "$120.50", "Completed", "2026-05-01"],
                ["TXN-1002", "Sarah Smith", "$89.99", "Pending", "2026-05-02"],
                [
                  "TXN-1003",
                  "Michael Johnson",
                  "$450.00",
                  "Failed",
                  "2026-05-03",
                ],
                [
                  "TXN-1004",
                  "Emma Wilson",
                  "$230.75",
                  "Completed",
                  "2026-05-04",
                ],
                ["TXN-1005", "David Brown", "$99.49", "Refunded", "2026-05-05"],
                [
                  "TXN-1006",
                  "Olivia Davis",
                  "$310.20",
                  "Completed",
                  "2026-05-06",
                ],
              ]}
              width="800px"
              headerBg={theme.colors.containerCopBackgroundColor}
              headerTextColor={theme.colors.borderColor}
              rowTextColor={theme.colors.borderColor}
              borderColor={theme.colors.borderColor}
              lineWidth={1}
              fontSize={12}
              onViewAll={() => console.log("View all clicked")}
            />
            <div className="gap-10 md:gap-10">
              <ContainerComp
                height={400}
                width={700}
                border={true}
                borderColor={theme.colors.borderColor}
                componentDisplay={
                  <PaymentStatusPieChart
                    data={[
                      { name: "Paid", value: 65 },
                      { name: "Pending", value: 25 },
                      { name: "Failed", value: 10 },
                    ]}
                  />
                }
              ></ContainerComp>
            </div>
          </div>
        }
      />
    </div>
  );
}
