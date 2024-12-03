// src/lib/api/bookings.ts
import api from './axios';

export interface Booking {
  id: number;
  client_name: string;
  email: string;
  phone: string;
  event_date: string;
  event_type: string;
  location: string;
  package_type: string;
  special_requests?: string;
  status: 'pending' | 'contacted' | 'confirmed' | 'completed';
}

export async function getBookings() {
  const response = await api.get<Booking[]>('/bookings');
  return response.data;
}

export async function updateBookingStatus(id: number, status: string) {
  const response = await api.patch(`/bookings/${id}/status`, { status });
  return response.data;
}
