"use client";

import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "./chart";

const data = [
  { name: "Styczeń", value: 400 },
  { name: "Luty", value: 300 },
  { name: "Marzec", value: 500 },
  { name: "Kwiecień", value: 700 },
  { name: "Maj", value: 600 },
];

const chartConfig = {
  value: {
    label: "Przychody",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-2))",
    },
  },
};

export function BarChartComponent() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="hsl(var(--chart-1))" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
