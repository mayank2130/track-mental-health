export interface MeditationSession {
  date: string;
  duration: number; // in minutes
  focusScore: number; // 0-100
  affirmations: number;
  mood: 'calm' | 'neutral' | 'stressed';
}

export type TimeRange = '7d' | '14d' | '30d' | '90d';