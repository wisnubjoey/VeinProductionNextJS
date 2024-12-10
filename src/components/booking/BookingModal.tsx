// src/components/booking/BookingModal.tsx
'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createBooking } from '@/lib/api/bookings';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageType: string;
}

export default function BookingModal({ isOpen, onClose, packageType }: BookingModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      await createBooking({
          client_name: formData.get('name') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
          event_date: formData.get('event_date') as string,
          event_type: formData.get('event_type') as string,
          location: formData.get('location') as string,
          package_type: packageType,
          special_requests: formData.get('special_requests') as string,
          id: 0,
          status: 'pending'
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);

    } catch (error) {
      console.error('Error creating booking:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Book Your Event</DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <p className="text-green-600 font-medium">Booking submitted successfully!</p>
            <p className="text-sm text-gray-500 mt-2">We&apos;ll contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input name="name" required />
            </div>

            <div>
              <Label>Email</Label>
              <Input type="email" name="email" required />
            </div>

            <div>
              <Label>Phone</Label>
              <Input type="tel" name="phone" required />
            </div>

            <div>
              <Label>Event Date</Label>
              <Input type="date" name="event_date" required />
            </div>

            <div>
              <Label>Event Type</Label>
              <Input name="event_type" placeholder="Wedding, Birthday, etc." required />
            </div>

            <div>
              <Label>Location</Label>
              <Input name="location" required />
            </div>

            <div>
              <Label>Special Requests (Optional)</Label>
              <textarea 
                name="special_requests"
                className="w-full p-2 border rounded-md min-h-[100px]"
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Booking'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}