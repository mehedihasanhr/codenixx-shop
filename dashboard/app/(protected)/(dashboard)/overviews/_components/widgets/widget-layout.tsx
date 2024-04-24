import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import clsx from "clsx";

type TProps = {
  className?: string;
  title: string;
  value: string;
  percentage: string;
  scale: "increase" | "decrease";
  graph?: React.ReactNode;
  range: "day" | "week" | "month" | "year";
};

export default function WidgetLayout(props: TProps) {
  return (
    <Card className={cn("", props.className)}>
      <CardHeader className="p-6">
        <span className="font-semibold block text-sm mb-2 text-card-foreground/70">
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
      <CardContent className="w-full h-28 px-0 py-0">{props.graph}</CardContent>
    </Card>
  );
}
