import axios from 'axios';

const API = axios.create({
  baseURL: 'https://taskmanager-0w9d.onrender.com/api',
});

API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default API;
