import api from './api';

export const studentService = {
  // Page A: Talent Profile & Dashboard
  getProfile: async () => {
    const response = await api.get('/students/profile');
    return response.data;
  },

  // Page B: Submission Center (Submit)
  submitAchievement: async (data: any) => {
    const response = await api.post('/students/achievements', data);
    return response.data;
  },

  // Page B: Submission Center (History)
  getAchievements: async () => {
    const response = await api.get('/students/achievements');
    return response.data;
  },

  // Page C: Gamification Leaderboard
  getLeaderboard: async () => {
    const response = await api.get('/students/leaderboard');
    return response.data;
  },

  // Page D: Reward Catalog (Fetch catalog)
  getRewards: async () => {
    const response = await api.get('/rewards');
    return response.data;
  },

  // Page D: Reward Catalog (Claim request)
  claimReward: async (rewardId: string) => {
    const response = await api.post('/students/rewards/claim', { reward_id: rewardId });
    return response.data;
  },
};
