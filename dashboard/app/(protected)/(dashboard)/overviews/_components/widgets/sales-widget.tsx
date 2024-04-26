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
  }[];
}

export default function SalesBarChartWidget(props: IProps) {
  return (
    <Card className={cn("relative", props.className)}>
      <ThreeDotMenu className="absolute right-2.5 top-2.5" />
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-medium leading-4">
          Sales this month
        </CardTitle>
        <CardDescription>User from all channels</CardDescription>
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
          <DropdownMenuItem> Edit </DropdownMenuItem>
          <DropdownMenuItem> Remove </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
