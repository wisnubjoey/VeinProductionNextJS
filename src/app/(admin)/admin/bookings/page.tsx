// src/app/(admin)/admin/bookings/page.tsx
'use client';

import BookingList from '@/components/admin/BookingList';

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bookings Management</h1>
      </div>
      <BookingList />
    </div>
  );
}