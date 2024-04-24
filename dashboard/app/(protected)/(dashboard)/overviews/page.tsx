import { generateDailySalesData } from "../../../../data/sale-monthly-report-data";
import PageHeading from "../_components/page-heading";
import AverageDailyOrderAreaChart from "./_components/charts/average-daily-orders-area-chart";
import AverageDailySalesChart from "./_components/charts/average-daily-sales-chart";
import TotalEarningPieChart from "./_components/charts/total-earning-pie-chart";
import SalesBarChartWidget from "./_components/widgets/sales-widget";
import WidgetLayout from "./_components/widgets/widget-layout";

export default function DashboardOverview() {
  return (
    <section className="px-8 py-6">
      <PageHeading heading="Dashboard" />

      <section className="pt-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6">
            <div className="grid grid-cols-6 gap-5">
              {/* total earning */}
              <WidgetLayout
                className="xl:col-span-3"
                title="Total Earning"
                value="$32,000.00"
                percentage="+2.5%"
                scale="increase"
                range="week"
                graph={
                  <TotalEarningPieChart
                    data={[
                      { name: "Shoes", value: 700 },
                      { name: "Cloths", value: 500 },
                      { name: "Others", value: 1000 },
                    ]}
                  />
                }
              />

              {/* Average daily sales */}
              <WidgetLayout
                className="col-span-3"
                title="Average daily sales"
                value="$2,000.00"
                percentage="-0.2%"
                scale="decrease"
                range="week"
                graph={
                  <AverageDailySalesChart
                    data={[
                      { name: "Sat", value: 2800 },
                      { name: "Sun", value: 2000 },
                      { name: "Mon", value: 2100 },
                      { name: "Tue", value: 1300 },
                      { name: "Wed", value: 3200 },
                      { name: "Thu", value: 2400 },
                      { name: "Fri", value: 2800 },
                      { name: "Sat", value: 2800 },
                      { name: "Sun", value: 2000 },
                      { name: "Mon", value: 2100 },
                      { name: "Tue", value: 1300 },
                      { name: "Wed", value: 3200 },
                      { name: "Thu", value: 2400 },
                      { name: "Fri", value: 2800 },
                    ]}
                  />
                }
              />

              {/* Average daily order */}
              <WidgetLayout
                className="col-span-3"
                title="Average daily orders"
                value="1,699"
                percentage="+0.5%"
                scale="increase"
                range="week"
                graph={
                  <AverageDailyOrderAreaChart
                    data={[
                      { name: "Sat", value: 2800 },
                      { name: "Sun", value: 2000 },
                      { name: "Mon", value: 2100 },
                      { name: "Tue", value: 1300 },
                      { name: "Wed", value: 3200 },
                      { name: "Thu", value: 2400 },
                      { name: "Fri", value: 2800 },
                      { name: "Sat", value: 2800 },
                      { name: "Sun", value: 2000 },
                      { name: "Mon", value: 2100 },
                      { name: "Tue", value: 1300 },
                      { name: "Wed", value: 3200 },
                      { name: "Thu", value: 2400 },
                      { name: "Fri", value: 2800 },
                      { name: "Fri", value: 2800 },
                      { name: "Sat", value: 2800 },
                      { name: "Sun", value: 2000 },
                      { name: "Mon", value: 2100 },
                      { name: "Tue", value: 1300 },
                      { name: "Wed", value: 3200 },
                      { name: "Thu", value: 2400 },
                      { name: "Fri", value: 2800 },
                    ]}
                  />
                }
              />

              {/* Average daily order */}
              <WidgetLayout
                className="col-span-3"
                title="New customers"
                value="125"
                percentage="+3.5%"
                scale="increase"
                range="week"
                graph={
                  <AverageDailyOrderAreaChart
                    data={[
                      { name: "Sat", value: 2800 },
                      { name: "Sun", value: 2000 },
                      { name: "Mon", value: 2100 },
                      { name: "Tue", value: 1300 },
                      { name: "Wed", value: 3200 },
                      { name: "Thu", value: 2400 },
                      { name: "Fri", value: 2800 },
                      { name: "Sat", value: 2800 },
                      { name: "Sun", value: 2000 },
                      { name: "Mon", value: 2100 },
                      { name: "Tue", value: 1300 },
                      { name: "Wed", value: 3200 },
                      { name: "Thu", value: 2400 },
                      { name: "Fri", value: 2800 },
                      { name: "Fri", value: 2800 },
                      { name: "Sat", value: 2800 },
                      { name: "Sun", value: 2000 },
                      { name: "Mon", value: 2100 },
                      { name: "Tue", value: 1300 },
                      { name: "Wed", value: 3200 },
                      { name: "Thu", value: 2400 },
                      { name: "Fri", value: 2800 },
                    ]}
                  />
                }
              />
            </div>
          </div>

          <div className="col-span-6">
            <SalesBarChartWidget
              className="h-full"
              data={[...generateDailySalesData()]}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
