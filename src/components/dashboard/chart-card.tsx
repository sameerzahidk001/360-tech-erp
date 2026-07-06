"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ChartDataPoint } from "@/types";

const COLORS = ["#f97316", "#fb923c", "#fdba74", "#ffffff", "#a3a3a3", "#525252"];

interface ChartCardProps {
  title: string;
  data: ChartDataPoint[];
  type: "bar" | "line" | "pie";
  dataKeys?: string[];
  height?: number;
}

export function ChartCard({ title, data, type, dataKeys = ["value"], height = 300 }: ChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid var(--border)" }} />
              <Legend />
              {dataKeys.map((key, i) => (
                <Bar key={key} dataKey={key} fill={COLORS[i % COLORS.length]} radius={[4, 4, 0, 0]} />
              ))}
            </BarChart>
          ) : type === "line" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid var(--border)" }} />
              <Legend />
              {dataKeys.map((key, i) => (
                <Line key={key} type="monotone" dataKey={key} stroke={COLORS[i % COLORS.length]} strokeWidth={2} dot={{ r: 4 }} />
              ))}
            </LineChart>
          ) : (
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid var(--border)" }} />
              <Legend />
            </PieChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
