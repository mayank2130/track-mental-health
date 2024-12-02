"use client";

import { useState } from "react";
import { TimeRangeSelector } from "@/components/dashboard/TimeRangeSelector";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { MeditationChart } from "@/components/dashboard/MeditationChart";
import { getDashboardData } from "@/lib/data";

export default function Home() {
  const [timeRange, setTimeRange] = useState("7d");
  
  const rangeMap: Record<string, number> = {
    "7d": 7,
    "14d": 14,
    "30d": 30,
    "90d": 90,
  };

  const data = getDashboardData(rangeMap[timeRange]);

  return (
    <main className="container mx-auto py-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meditation Analytics</h1>
          <TimeRangeSelector
            selectedRange={timeRange}
            onRangeChange={setTimeRange}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Minutes"
            value={data.stats.totalMinutes}
            description="Minutes spent meditating"
          />
          <StatsCard
            title="Average Focus"
            value={`${data.stats.avgFocusScore}%`}
            description="Average focus score"
          />
          <StatsCard
            title="Total Affirmations"
            value={data.stats.totalAffirmations}
            description="Affirmations completed"
          />
          <StatsCard
            title="Total Sessions"
            value={data.stats.totalSessions}
            description="Meditation sessions"
          />
        </div>

        <MeditationChart data={data.sessions} />
      </div>
    </main>
  );
}