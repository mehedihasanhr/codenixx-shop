import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "../../../../../../components/ui/separator";
import SalesBarChart from "../charts/sales-bar-chart";

interface IProps {
  className?: string;
  data: {
    date: string;
    sales: string;
    fullDate: Date;
  }[];
}

export default function SalesBarChartWidget(props: IProps) {
  return (
    <Card className={cn("", props.className)}>
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-medium leading-4">
          Sales this month
        </CardTitle>
        <CardDescription>User from all channels</CardDescription>

        <Separator className="bg-transparent py-1.5" />

        <CardTitle className="font-bold">$20,324</CardTitle>
        <CardDescription>Another $25,502 to goal</CardDescription>
      </CardHeader>
      <CardContent className="h-[345px] w-full px-0 py-3">
        <SalesBarChart data={props.data} />
      </CardContent>
    </Card>
  );
}
