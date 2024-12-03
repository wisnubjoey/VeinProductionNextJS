// src/lib/api/portfolio.ts
import api from './axios';
import { PortfolioItem, PortfolioData } from '@/types/portfolio';

export async function getPortfolioItems() {
  const response = await api.get<PortfolioItem[]>('/portfolio');
  return response.data;
}

export async function createPortfolioItem(data: PortfolioData) {
  const response = await api.post<PortfolioItem>('/portfolio', data);
  return response.data;
}

export async function updatePortfolioItem(id: number, data: PortfolioData) {
  const response = await api.put<PortfolioItem>(`/portfolio/${id}`, data);
  return response.data;
}

export async function deletePortfolioItem(id: number) {
  const response = await api.delete(`/portfolio/${id}`);
  return response.data;
}