"use client";

import { Button } from "@/components/ui/button";

interface TimeRangeSelectorProps {
  selectedRange: string;
  onRangeChange: (range: string) => void;
}

const ranges = [
  { label: "7 Days", value: "7d" },
  { label: "2 Weeks", value: "14d" },
  { label: "30 Days", value: "30d" },
  { label: "90 Days", value: "90d" },
];

export function TimeRangeSelector({
  selectedRange,
  onRangeChange,
}: TimeRangeSelectorProps) {
  return (
    <div className="flex gap-2">
      {ranges.map((range) => (
        <Button
          key={range.value}
          variant={selectedRange === range.value ? "default" : "outline"}
          onClick={() => onRangeChange(range.value)}
          className="px-4"
        >
          {range.label}
        </Button>
      ))}
    </div>
  );
}