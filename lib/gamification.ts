const GAMIFICATION_KEY = "jsapps-gamification";

export interface GamificationState {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  achievements: string[];
  totalStepsCompleted: number;
  totalProjectsCompleted: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (state: GamificationState) => boolean;
}

export const XP_PER_STEP = 15;
export const XP_PER_PROJECT = 100;

export const LEVEL_THRESHOLDS = [
  { level: 1, minXp: 0, title: "Beginner" },
  { level: 2, minXp: 100, title: "Apprentice" },
  { level: 3, minXp: 300, title: "Coder" },
  { level: 4, minXp: 600, title: "Developer" },
  { level: 5, minXp: 1000, title: "Architect" },
  { level: 6, minXp: 1600, title: "Master" },
  { level: 7, minXp: 2400, title: "Legend" },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-step", title: "First Steps", description: "Complete your first lesson step", icon: "👣", condition: (s) => s.totalStepsCompleted >= 1 },
  { id: "first-project", title: "Project Master", description: "Complete your first project", icon: "🏆", condition: (s) => s.totalProjectsCompleted >= 1 },
  { id: "five-projects", title: "Code Warrior", description: "Complete 5 projects", icon: "⚔️", condition: (s) => s.totalProjectsCompleted >= 5 },
  { id: "all-projects", title: "JS Legend", description: "Complete all projects", icon: "👑", condition: (s) => s.totalProjectsCompleted >= 15 },
  { id: "streak-3", title: "Streak Starter", description: "3-day learning streak", icon: "🔥", condition: (s) => s.streak >= 3 },
  { id: "streak-7", title: "Streak Machine", description: "7-day learning streak", icon: "💪", condition: (s) => s.streak >= 7 },
  { id: "ten-steps", title: "Dedicated Learner", description: "Complete 10 lesson steps", icon: "📚", condition: (s) => s.totalStepsCompleted >= 10 },
  { id: "fifty-steps", title: "Code Machine", description: "Complete 50 lesson steps", icon: "🤖", condition: (s) => s.totalStepsCompleted >= 50 },
  { id: "level-3", title: "Getting Serious", description: "Reach level 3", icon: "⭐", condition: (s) => s.level >= 3 },
  { id: "level-5", title: "Elite Coder", description: "Reach level 5", icon: "💎", condition: (s) => s.level >= 5 },
];

export function loadGamification(): GamificationState {
  if (typeof window === "undefined") {
    return { xp: 0, level: 1, streak: 0, lastActiveDate: "", achievements: [], totalStepsCompleted: 0, totalProjectsCompleted: 0 };
  }
  try {
    const raw = localStorage.getItem(GAMIFICATION_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { xp: 0, level: 1, streak: 0, lastActiveDate: "", achievements: [], totalStepsCompleted: 0, totalProjectsCompleted: 0 };
}

function saveGamification(state: GamificationState): void {
  try {
    localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(state));
  } catch { /* ignore */ }
}

export function getLevel(xp: number): { level: number; title: string } {
  let result = LEVEL_THRESHOLDS[0];
  for (const t of LEVEL_THRESHOLDS) {
    if (xp >= t.minXp) result = t;
    else break;
  }
  return result;
}

function updateStreak(state: GamificationState): GamificationState {
  const today = new Date().toISOString().split("T")[0];
  if (state.lastActiveDate === today) return state;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const newStreak = state.lastActiveDate === yesterday ? state.streak + 1 : 1;
  return { ...state, streak: newStreak, lastActiveDate: today };
}

function checkNewAchievements(state: GamificationState): string[] {
  const earned: string[] = [];
  for (const a of ACHIEVEMENTS) {
    if (!state.achievements.includes(a.id) && a.condition(state)) {
      earned.push(a.id);
    }
  }
  if (earned.length > 0) {
    return Array.from(new Set([...state.achievements, ...earned]));
  }
  return state.achievements;
}

export function awardStepXP(): { state: GamificationState; newAchievements: Achievement[]; xpGained: number } {
  const state = loadGamification();
  const updated = updateStreak(state);
  const newXp = updated.xp + XP_PER_STEP;
  const newLevel = getLevel(newXp);
  const newState: GamificationState = {
    ...updated,
    xp: newXp,
    level: newLevel.level,
    totalStepsCompleted: updated.totalStepsCompleted + 1,
  };
  const oldAchievements = newState.achievements.length;
  newState.achievements = checkNewAchievements(newState);
  const newAchievements = newState.achievements.slice(oldAchievements).map(id => ACHIEVEMENTS.find(a => a.id === id)!).filter(Boolean);
  saveGamification(newState);
  return { state: newState, newAchievements, xpGained: XP_PER_STEP };
}

export function awardProjectXP(): { state: GamificationState; newAchievements: Achievement[]; xpGained: number } {
  const state = loadGamification();
  const updated = updateStreak(state);
  const newXp = updated.xp + XP_PER_PROJECT;
  const newLevel = getLevel(newXp);
  const newState: GamificationState = {
    ...updated,
    xp: newXp,
    level: newLevel.level,
    totalProjectsCompleted: updated.totalProjectsCompleted + 1,
  };
  const oldAchievements = newState.achievements.length;
  newState.achievements = checkNewAchievements(newState);
  const newAchievements = newState.achievements.slice(oldAchievements).map(id => ACHIEVEMENTS.find(a => a.id === id)!).filter(Boolean);
  saveGamification(newState);
  return { state: newState, newAchievements, xpGained: XP_PER_PROJECT };
}

export function recordVisit(): { state: GamificationState; newAchievements: Achievement[] } {
  const state = loadGamification();
  const updated = updateStreak(state);
  const newLevel = getLevel(updated.xp);
  const newState: GamificationState = { ...updated, level: newLevel.level };
  const oldCount = newState.achievements.length;
  newState.achievements = checkNewAchievements(newState);
  const newAchievements = newState.achievements.slice(oldCount).map(id => ACHIEVEMENTS.find(a => a.id === id)!).filter(Boolean);
  saveGamification(newState);
  return { state: newState, newAchievements };
}
