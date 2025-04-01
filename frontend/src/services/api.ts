import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Адреса бекенду

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Додаємо токен авторизації до кожного запиту
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
