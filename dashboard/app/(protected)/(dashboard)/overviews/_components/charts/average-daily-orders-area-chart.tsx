"use client";

import { Area, AreaChart, ResponsiveContainer } from "recharts";

export default function AverageDailyOrderAreaChart({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              style={{
                stopColor: "hsl(var(--primary))",
              }}
              stopOpacity={1}
            />
            <stop
              offset="99%"
              stopOpacity={0.1}
              style={{
                stopColor: "hsl(var(--primary))",
              }}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="hsl(var(--primary))"
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
