import api from './api';

export const adminService = {
  // Page E: Dashboard Statistics
  getDashboardStats: async () => {
    const response = await api.get('/admin/stats');
    return response.data;
  },

  // Page F: Talent Pool Directory
  getStudents: async (skill?: string, minPoints?: number) => {
    const params = new URLSearchParams();
    if (skill) params.append('skill', skill);
    if (minPoints !== undefined) params.append('min_points', minPoints.toString());

    const response = await api.get(`/admin/students?${params.toString()}`);
    return response.data;
  },

  // Page G: Verification Center (Pending items)
  getPendingSubmissions: async () => {
    const response = await api.get('/admin/submissions/pending');
    return response.data;
  },

  // Page G: Verification Center (Verify item)
  verifySubmission: async (id: string, status: 'APPROVED' | 'REJECTED', pointsAwarded: number = 0) => {
    const response = await api.put(`/admin/submissions/${id}/verify`, {
      status,
      points_awarded: pointsAwarded,
    });
    return response.data;
  },

  // Page H: Reward Management (CRUD)
  getRewards: async () => {
    const response = await api.get('/admin/rewards');
    return response.data;
  },

  createReward: async (data: any) => {
    const response = await api.post('/admin/rewards', data);
    return response.data;
  },

  updateReward: async (id: string, data: any) => {
    const response = await api.put(`/admin/rewards/${id}`, data);
    return response.data;
  },

  deleteReward: async (id: string) => {
    const response = await api.delete(`/admin/rewards/${id}`);
    return response.data;
  },
};
