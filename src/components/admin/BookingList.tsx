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

  if (isLoading) return <div className="text-amber-400">Loading...</div>;

  return (
    <>
      <Card className="bg-black/40 border-amber-500/20">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-amber-500/20">
                <TableHead className="text-amber-400">Client Name</TableHead>
                <TableHead className="text-amber-400">Event Date</TableHead>
                <TableHead className="text-amber-400">Event Type</TableHead>
                <TableHead className="text-amber-400">Package</TableHead>
                <TableHead className="text-amber-400">Status</TableHead>
                <TableHead className="text-amber-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings?.data?.map((booking: Booking) => (
                <TableRow 
                  key={booking.id} 
                  className="border-amber-500/20 hover:bg-black/40"
                >
                  <TableCell className="font-medium text-amber-100">
                    {booking.client_name}
                  </TableCell>
                  <TableCell className="text-amber-500">
                    {new Date(booking.event_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-amber-200/80">
                    {booking.event_type}
                  </TableCell>
                  <TableCell className="text-amber-200/80">
                    {booking.package_type}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      booking.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                      booking.status === 'contacted' ? 'bg-blue-500/10 text-blue-500' :
                      booking.status === 'confirmed' ? 'bg-green-500/10 text-green-500' :
                      'bg-gray-500/10 text-gray-400'
                    }`}>
                      {booking.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedBooking(booking);
                      }}
                      className="border-amber-500/20 text-amber-400 hover:bg-black"
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