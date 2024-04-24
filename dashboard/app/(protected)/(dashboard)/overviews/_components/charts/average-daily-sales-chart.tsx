"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

export default function AverageDailySalesChart({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={150}
        height={40}
        data={data}
        margin={{
          top: 0,
          right: 24,
          left: 10,
          bottom: 20,
        }}
      >
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Bar
          dataKey="value"
          className="fill-primary/70 drop-shadow-lg"
          barSize={15}
          radius={10}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 backdrop-blur-2xl rounded-lg border">
        <p className="text-sm">{payload[0].payload.name}</p>
        <p className="font-semibold text-base">
          ${Number(payload[0].payload.value).toFixed(2)}
        </p>
      </div>
    );
  }
}
