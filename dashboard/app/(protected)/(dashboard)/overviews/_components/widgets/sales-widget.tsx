import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { IconDots } from "@tabler/icons-react";
import SalesBarChart from "../charts/sales-bar-chart";

interface IProps {
  className?: string;
  data: {
    date: string;
    sales: number;
    fullDate: Date;
    orders: number;
    refund: number;
  }[];
}

export default function SalesBarChartWidget(props: IProps) {
  return (
    <Card className={cn("relative", props.className)}>
      <CardHeader className="p-6">
        <div className="flex w-full justify-between">
          <div>
            <CardTitle className="text-xl font-medium leading-5">
              Sales this month
            </CardTitle>
            <CardDescription>User from all channels</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <ThreeDotMenu className="" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[345px] w-full px-0 py-3">
        <SalesBarChart data={props.data} />
      </CardContent>
    </Card>
  );
}

// options dropdown
const ThreeDotMenu = (props: { className?: string }) => {
  return (
    <div className={props.className}>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md px-2.5 py-2.5 text-foreground/70 hover:bg-accent data-[state=open]:bg-accent">
          <IconDots size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem> Daily </DropdownMenuItem>
          <DropdownMenuItem> Weekly </DropdownMenuItem>
          <DropdownMenuItem> Monthly </DropdownMenuItem>
          <DropdownMenuItem> Yearly </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
