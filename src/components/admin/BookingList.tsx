// src/components/admin/BookingList.tsx
'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Booking, getBookings, updateBookingStatus } from '@/lib/api/bookings';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from 'react';
import BookingDetailModal from './BookingDetailModal';

export default function BookingList() {
  const queryClient = useQueryClient();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings
  });

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      return updateBookingStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    }
  });


  if (isLoading) return <div>Loading...</div>;

  console.log('Raw booking data:', bookings);

  return (
    <>
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
            {bookings?.data?.map((booking: Booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">
                  {booking.client_name}
                </TableCell>
                <TableCell>{new Date(booking.event_date).toLocaleDateString()}</TableCell>
                <TableCell>{booking.event_type}</TableCell>
                <TableCell>{booking.package_type}</TableCell>
                <TableCell>{booking.email}</TableCell>
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
    </>
  );
}