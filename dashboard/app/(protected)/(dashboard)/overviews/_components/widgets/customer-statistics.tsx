import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import CustomerStatisticsPie from "../charts/customer-statistics-pie";

interface IProps {
  className?: string;
}

export default function CustomerStatistics(props: IProps) {
  return (
    <Card className={cn("relative", props.className)}>
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-medium leading-5">
          Customer Statistics
        </CardTitle>
        <CardDescription>User from all channels</CardDescription>
      </CardHeader>
      <CardContent className="h-[345px] flex-col px-0 pb-3">
        <div className="h-3/4 px-6">
          <CustomerStatisticsPie
            data={[
              { name: "Total Visitor", value: 800 },
              { name: "New Visitor", value: 500 },
              { name: "Old visitor", value: 300 },
            ]}
          />
        </div>

        <div className="border-t border-dashed py-2.5">
          <div className="flex items-center justify-between border-b border-dashed border-border/70 px-6 hover:bg-accent">
            <span className="text-sm">Total Visitor</span>
            <span> 800 </span>
          </div>

          <div className="flex items-center justify-between border-b border-dashed border-border/70 px-6 hover:bg-accent">
            <span className="text-sm"> New Visitor</span>
            <span> 500 </span>
          </div>

          <div className="flex items-center justify-between border-b border-dashed border-border/70 px-6 hover:bg-accent">
            <span className="text-sm"> Old Visitor</span>
            <span> 300 </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
