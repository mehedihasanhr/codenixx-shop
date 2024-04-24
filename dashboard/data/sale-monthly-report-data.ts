import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

// Generate random daily sales data for the current month
export function generateDailySalesData() {
  const currentDate = dayjs();
  const currentMonth = currentDate.startOf("month");
  const today = dayjs().format("DD");

  let monthlySalesData = [];

  for (let day = 1; day <= Number(today); day++) {
    const dailySales = {
      date: currentMonth.set("day", day).format("DD MMM"), // Format: MM/DD
      sales: faker.finance.amount(),
      fullDate: currentMonth.set("day", day).toDate(),
    };
    monthlySalesData.push(dailySales);
  }

  return monthlySalesData;
}
