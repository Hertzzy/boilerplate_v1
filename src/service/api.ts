// src/api/axios.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://suaapi.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Adicionar o token de autenticação a todas as requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
