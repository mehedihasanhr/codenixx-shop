"use client";

import _ from "lodash";
import {
  Cell,
  Legend,
  LegendProps,
  Pie,
  PieChart as PieChartComponent,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#84CC16", "#3B82F6", "#F43F5E"];

export default function TotalEarningPieChart({
  data,
}: {
  data: { value: number; name: string }[];
}) {
  const style = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    lineHeight: "24px",
    fontSize: "14px",
  };
  return (
    <ResponsiveContainer width="100%" height="100%" className="px-6">
      <PieChartComponent>
        <Legend
          iconSize={5}
          iconType="circle"
          layout="vertical"
          wrapperStyle={style}
          content={<CustomLegend />}
        />
        <Pie
          data={data}
          cx={40}
          cy={45}
          innerRadius={30}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              fillOpacity={0.7}
              style={{
                filter: `drop-shadow(0px 3px 3px rgb(0 0 0 / 20%))`,
              }}
              stroke="0"
            />
          ))}
        </Pie>
      </PieChartComponent>
    </ResponsiveContainer>
  );
}

export function CustomLegend(props: LegendProps) {
  if (!props.payload) return null;

  return (
    <ul>
      {_.map(props.payload, (payload, index) => (
        <li
          key={index}
          className="flex items-center justify-start gap-1 w-full"
        >
          <span
            style={{
              width: props.iconSize,
              height: props.iconSize,
              background: payload.color,
            }}
            className="block rounded-full"
          />

          <span className="flex-1 pr-3">{payload.value}</span>
          <span className="ml-auto text-right font-medium text-accent-foreground">
            ${payload.payload?.value}
          </span>
        </li>
      ))}
    </ul>
  );
}
