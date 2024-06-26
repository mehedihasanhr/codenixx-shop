"use client";

import { Currency } from "@/lib/utils";
import dayjs from "dayjs";
import _ from "lodash";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SalesBarChart({
  data,
}: {
  data: {
    date: string;
    sales: number;
    fullDate: Date;
    orders: number;
    refund: number;
  }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
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
        <CartesianGrid
          strokeDasharray="3"
          vertical={false}
          stroke="hsl(var(--accent-foreground))"
          strokeOpacity={0.2}
        />
        <XAxis
          dataKey="date"
          axisLine={{
            stroke: "hsl(var(--primary))",
            strokeOpacity: 0.3,
          }}
          tickLine={false}
          label={{
            value: dayjs().format("MMM, YYYY"),
            position: "insideBottom",
            offset: -16,
            fill: "hsl(var(--accent-foreground))",
            fillOpacity: 0.8,
            fontSize: "14px",
          }}
          style={{ fontSize: 12 }}
        />
        <YAxis
          axisLine={{
            stroke: "hsl(var(--primary))",
            strokeOpacity: 0.1,
          }}
          domain={[0, "dataMax + 200"]}
          tickLine={false}
          tickCount={10}
          scale="sequential"
          tick={<CustomYAxisTick />}
        />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Bar
          dataKey="sales"
          stackId="salesId"
          className="fill-primary/70 drop-shadow-lg"
          barSize={20}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (
    active !== undefined &&
    payload !== undefined &&
    _.isArray(payload) &&
    payload.length > 0
  ) {
    return (
      <div className="rounded-lg border bg-white/30 p-3 backdrop-blur-2xl">
        <p className="mb-2 text-sm">
          {dayjs(payload[0].payload.date).format("MMM DD")}
        </p>
        <p className="text-xs font-semibold">
          <span>Sales: </span>
          <span className="text-right">
            {new Currency("USD").format(Number(payload[0].payload.sales))}
          </span>
        </p>
      </div>
    );
  }
}

const formatCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  if (value >= 1000000) {
    return formatter.format(value / 1000000) + "M";
  } else if (value >= 1000) {
    return formatter.format(value / 1000) + "K";
  } else {
    return formatter.format(value);
  }
};

const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={10} textAnchor="end" fill="#666" fontSize={12}>
        {formatCurrency(payload.value)}
      </text>
    </g>
  );
};
