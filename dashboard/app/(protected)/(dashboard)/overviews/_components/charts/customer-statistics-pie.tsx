"use client";

import _ from "lodash";
import {
  Cell,
  Legend,
  type LegendProps,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = ["#84CC16", "#3B82F6", "#F43F5E"];

export default function CustomerStatisticsPie({
  data,
}: {
  data: { value: number; name: string }[];
}) {
  const style = {
    lineHeight: "24px",
    fontSize: "14px",
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Legend
          iconSize={5}
          iconType="circle"
          align="right"
          layout="vertical"
          verticalAlign="top"
          wrapperStyle={style}
          content={<CustomLegend />}
        />
        <Tooltip contentStyle={{ fontSize: 14 }} />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="90%"
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
      </PieChart>
    </ResponsiveContainer>
  );
}

function CustomLegend(props: LegendProps) {
  if (props.payload === null) return null;

  return (
    <ul>
      {_.map(props.payload, (payload, index) => (
        <li
          key={index}
          className="flex w-full items-center justify-start gap-1 text-sm opacity-80"
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
