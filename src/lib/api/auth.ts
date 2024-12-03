// src/lib/api/auth.ts
import api from './axios';

export async function login(username: string, password: string) {
  const response = await api.post('/login', { username, password });
  return response.data;
}

export async function logout() {
  return api.post('/logout');
}