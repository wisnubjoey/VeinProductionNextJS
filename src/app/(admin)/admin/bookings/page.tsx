// src/app/(admin)/admin/bookings/page.tsx
'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Booking, getBookings, updateBookingStatus } from '@/lib/api/bookings';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import BookingDetailModal from '@/components/admin/BookingDetailModal';

export default function BookingsPage() {
  const queryClient = useQueryClient();
  
  const [selectedStatus, setSelectedStatus] = useState('all');

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      return updateBookingStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    }
  });

  // Fetch bookings
  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings
  });

  // Filter by status
  const filteredBookings = selectedStatus === 'all' 
    ? bookings 
    : bookings?.filter(booking => booking.status === selectedStatus);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bookings Management</h1>
        
        <select 
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border rounded-md p-2"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="contacted">Contacted</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Event Date</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings?.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">
                    {booking.client_name}
                  </TableCell>
                  <TableCell>{booking.event_date}</TableCell>
                  <TableCell>{booking.event_type}</TableCell>
                  <TableCell>{booking.package_type}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      booking.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {booking.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedBooking(booking);
                      }}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <BookingDetailModal 
  booking={selectedBooking}
  isOpen={!!selectedBooking}
  onClose={() => setSelectedBooking(null)}
  onUpdateStatus={(status) => {
    if (selectedBooking) {
      updateStatusMutation.mutate({
        id: selectedBooking.id,
        status
      });
    }
  }}
/>
    </div>
  );
}