import API from './api';

export const register = async (data) => {
  return API.post('/auth/register', data);
};

export const login = async (data) => {
  return API.post('/auth/login', data);
};

export const refreshToken = async (data) => {
  return API.post('/auth/refresh-token', data);
};
