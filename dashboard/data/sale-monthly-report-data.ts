import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

// Generate random daily sales data for the current month
export function generateDailySalesData() {
  const currentDate = dayjs();
  const currentMonth = currentDate.startOf("month");
  const endDayOfCurrentMonth = dayjs().endOf("month").format("DD");

  const monthlySalesData = [];

  for (let day = 1; day <= Number(endDayOfCurrentMonth); day++) {
    const dailySales = {
      date: currentMonth.set("day", day).format("DD MMM"),
      sales: Number(faker.finance.amount({ symbol: "" })) * 3,
      fullDate: currentMonth.set("day", day).toDate(),
      orders: Number(Math.floor(Math.random() * 9 + 10)),
      refund: Number(faker.finance.amount({ symbol: "" })),
    };
    monthlySalesData.push(dailySales);
  }

  return monthlySalesData;
}
