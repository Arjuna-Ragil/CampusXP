import axios from 'axios';
import { getSession } from 'next-auth/react';

const api = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach Auth Token
api.interceptors.request.use(async (config: any) => {
  if (typeof window !== 'undefined') {
    const session = await getSession();
    const token = (session as any)?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error: any) => {
  return Promise.reject(error);
});

export default api;
