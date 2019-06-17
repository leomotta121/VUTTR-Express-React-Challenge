import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

api.interceptors.request.use(async param => {
  const config = param;
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;