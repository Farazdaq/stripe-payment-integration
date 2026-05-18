
import ContainerComp from "../../../components/ContainerComp";
import LineChartComp from "../../../components/LineChartComp";
import FigCards from "../components/FigCards";
import { useTheme } from "../../../theme/useTheme";
import MultiLineChart from "../../../components/MultiLineChart";
import CustomTable from "../../../components/CustomTable";
import PaymentStatusPieChart from "../components/PaymentStatusPieChart";
import CustomerGrowthBarChart from "../components/CustomerGrowthBarChart";

export default function Overview() {

  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-2 pl-0.1 md:pl-0.1 w-full">
      {/* Top Cards */}
      <ContainerComp
        width="100%"
        componentDisplay={
          <FigCards
            totalRevenue={100.0}
            activeSubscriptions={244}
            invoicesPaid={400}
            failedPayments={10}
            totalCustomers={1000}
            topPackage={20}
          />
        }
      />

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
        {/* Revenue Chart */}
        <ContainerComp
          radiusRightTop={50}
          width="100%"
          componentDisplay={
            <div className="w-full min-h-[350px]">
              <LineChartComp
                title="Revenue Chart"
                chartColor={theme.colors.chartColor}
                width={500}
                height={350}
                weekData={[
                  { xValue: "Mon", yValue: 1200 },
                  { xValue: "Tue", yValue: 200 },
                  { xValue: "Wed", yValue: 1400 },
                  { xValue: "Thu", yValue: 1500 },
                  { xValue: "Fri", yValue: 2600 },
                  { xValue: "Sat", yValue: 1000 },
                  { xValue: "Sun", yValue: 2500 },
                ]}
                monthData={[
                  { xValue: "Week 1", yValue: 6000 },
                  { xValue: "Week 2", yValue: 300 },
                  { xValue: "Week 3", yValue: 11000 },
                  { xValue: "Week 4", yValue: 10500 },
                ]}
              />
            </div>
          }
        />

        {/* Subscription Growth */}
        <ContainerComp
          radiusLeftBottom={50}
          width="100%"
          componentDisplay={
            <div className="w-full min-h-[350px]">
              <MultiLineChart
                chartColors={{
                  grid: theme.colors.borderColor,
                  axis: theme.colors.borderColor,
                  label: theme.colors.text,
                }}
                showTooltip={false}
                width={500}
                height={350}
                title="Subscription Growth"
                xTitle="Time"
                yTitle="Users"
                weekData={[
                  { xValue: "Mon", lineOne: 120, lineTwo: 10, lineThree: 200 },
                  { xValue: "Tue", lineOne: 150, lineTwo: 50, lineThree: 50 },
                  { xValue: "Wed", lineOne: 90, lineTwo: 120, lineThree: 50 },
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
            </div>
          }
        />
      </div>

      {/* Bottom Analytics Section */}
      <ContainerComp
        radiusLeftTop={50}
        width="100%"
        componentDisplay={
          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 p-4 w-full">
            {/* Table */}
            <div className="2xl:col-span-2 overflow-x-auto">
              <CustomTable
                headers={[
                  "Transaction ID",
                  "Customer",
                  "Amount ($)",
                  "Status",
                  "Date",
                ]}
                rows={[
                  [
                    "TXN-1001",
                    "John Doe",
                    "$120.50",
                    "Completed",
                    "2026-05-01",
                  ],
                  [
                    "TXN-1002",
                    "Sarah Smith",
                    "$89.99",
                    "Pending",
                    "2026-05-02",
                  ],
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
                  [
                    "TXN-1005",
                    "David Brown",
                    "$99.49",
                    "Refunded",
                    "2026-05-05",
                  ],
                  [
                    "TXN-1006",
                    "Olivia Davis",
                    "$310.20",
                    "Completed",
                    "2026-05-06",
                  ],
                ]}
                width="100%"
                headerBg={theme.colors.containerCopBackgroundColor}
                headerTextColor={theme.colors.borderColor}
                rowTextColor={theme.colors.borderColor}
                borderColor={theme.colors.borderColor}
                lineWidth={1}
                fontSize={12}
                onViewAll={() => console.log("View all clicked")}
              />
            </div>

            {/* Right Side Charts */}
            <div className="flex flex-col gap-4">
              {/* Customer Growth */}
              <ContainerComp
                border={true}
                borderColor={theme.colors.borderColor}
                width="100%"
                componentDisplay={
                  <CustomerGrowthBarChart
                    width="100%"
                    height={250}
                    customerBarColor="#3b82f6"
                    subscriberBarColor="#22c55e"
                    weekData={[
                      {
                        month: "Mon",
                        customers: 120,
                        subscribers: 80,
                      },
                      {
                        month: "Tue",
                        customers: 180,
                        subscribers: 130,
                      },
                      {
                        month: "Wed",
                        customers: 220,
                        subscribers: 170,
                      },
                      {
                        month: "Thu",
                        customers: 260,
                        subscribers: 210,
                      },
                      {
                        month: "Fri",
                        customers: 310,
                        subscribers: 260,
                      },
                    ]}
                    monthData={[
                      {
                        month: "Jan",
                        customers: 500,
                        subscribers: 300,
                      },
                      {
                        month: "Feb",
                        customers: 700,
                        subscribers: 420,
                      },
                      {
                        month: "Mar",
                        customers: 920,
                        subscribers: 600,
                      },
                      {
                        month: "Apr",
                        customers: 1100,
                        subscribers: 760,
                      },
                    ]}
                  />
                }
              />

              {/* Pie Chart */}
              <ContainerComp
                border={true}
                borderColor={theme.colors.borderColor}
                width="100%"
                componentDisplay={
                  <div className="flex items-center justify-center py-6">
                    <PaymentStatusPieChart
                      data={[
                        { name: "Paid", value: 65 },
                        { name: "Pending", value: 25 },
                        { name: "Failed", value: 10 },
                      ]}
                    />
                  </div>
                }
              />
            </div>
          </div>
        }
      />
    </div>
  );
}