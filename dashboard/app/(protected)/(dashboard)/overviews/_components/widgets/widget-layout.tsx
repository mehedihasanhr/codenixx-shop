import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import clsx from "clsx";

interface IProps {
  className?: string;
  title: string;
  value: string;
  percentage: string;
  scale: "increase" | "decrease";
  graph?: React.ReactNode;
  range: "day" | "week" | "month" | "year";
}

export default function WidgetLayout(props: IProps) {
  return (
    <Card className={cn("", props.className)}>
      <CardHeader className="p-6">
        <span className="mb-2 block text-sm font-semibold text-card-foreground/70">
          {props.title}
        </span>
        <CardTitle className="font-bold">{props.value}</CardTitle>
        <CardDescription>
          <span
            className={clsx(
              "font-medium",
              props.scale === "increase" && "text-green-500",
              props.scale === "decrease" && "text-red-500"
            )}
          >
            {props.percentage}
          </span>
          {` from last ${props.range}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-28 w-full px-0 py-0">{props.graph}</CardContent>
    </Card>
  );
}
