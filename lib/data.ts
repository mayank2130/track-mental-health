import { MeditationSession } from './types';
import { subDays, format } from 'date-fns';

export const generateDummyData = (days: number): MeditationSession[] => {
  return Array.from({ length: days }).map((_, index) => ({
    date: format(subDays(new Date(), index), 'yyyy-MM-dd'),
    duration: Math.floor(Math.random() * 30) + 10,
    focusScore: Math.floor(Math.random() * 40) + 60,
    affirmations: Math.floor(Math.random() * 10) + 5,
    mood: ['calm', 'neutral', 'stressed'][Math.floor(Math.random() * 3)] as MeditationSession['mood'],
  }));
};

export const getDashboardData = (range: number) => {
  const data = generateDummyData(range);
  
  const totalMinutes = data.reduce((acc, session) => acc + session.duration, 0);
  const avgFocusScore = Math.round(
    data.reduce((acc, session) => acc + session.focusScore, 0) / data.length
  );
  const totalAffirmations = data.reduce((acc, session) => acc + session.affirmations, 0);
  
  return {
    sessions: data,
    stats: {
      totalMinutes,
      avgFocusScore,
      totalAffirmations,
      totalSessions: data.length,
    },
  };
};