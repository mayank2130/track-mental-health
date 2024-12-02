"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MeditationSession } from "@/lib/types";
import { format, parseISO } from "date-fns";

interface MeditationChartProps {
  data: MeditationSession[];
}

export function MeditationChart({ data }: MeditationChartProps) {
  const chartData = data.map((session) => ({
    ...session,
    formattedDate: format(parseISO(session.date), "MMM d"),
  })).reverse();

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Meditation Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="formattedDate" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="duration"
                stroke="hsl(var(--chart-1))"
                name="Duration (min)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="focusScore"
                stroke="hsl(var(--chart-2))"
                name="Focus Score"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}