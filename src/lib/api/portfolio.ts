// src/lib/api/portfolio.ts
import api from './axios';
import { PortfolioItem, PortfolioData, PaginatedResponse } from '@/types/portfolio';

export async function getPortfolioItems(): Promise<PaginatedResponse<PortfolioItem>> {
  const response = await api.get('/portfolio');
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

export async function getPortfolios() {
  const response = await api.get('/portfolio');
  return response.data;
}

export async function getPortfolio(id: number) {
  const response = await api.get(`/portfolio/${id}`);
  return response.data;
}