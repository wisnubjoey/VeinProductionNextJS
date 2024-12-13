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
      }, 5000);

    } catch (error) {
      console.error('Error creating booking:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-black/95 border border-amber-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
            Book Your Event
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-amber-400 font-medium text-xl">Booking submitted successfully!</p>
            <p className="text-amber-200/80">We&apos;ll contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-amber-200">Full Name</Label>
              <Input 
                name="name" 
                required 
                className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label className="text-amber-200">Email</Label>
              <Input 
                type="email" 
                name="email" 
                required 
                className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label className="text-amber-200">Phone</Label>
              <Input 
                type="tel" 
                name="phone" 
                required 
                className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
                placeholder="+62 xxx xxxx xxxx"
              />
            </div>

            <div>
              <Label className="text-amber-200">Event Date</Label>
              <Input 
                type="date" 
                name="event_date" 
                required 
                className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100"
              />
            </div>

            <div>
              <Label className="text-amber-200">Event Type</Label>
              <Input 
                name="event_type" 
                required 
                className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
                placeholder="Wedding, Birthday, etc."
              />
            </div>

            <div>
              <Label className="text-amber-200">Location</Label>
              <Input 
                name="location" 
                required 
                className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
                placeholder="Event location"
              />
            </div>

            <div>
              <Label className="text-amber-200">Special Requests (Optional)</Label>
              <textarea 
                name="special_requests"
                className="w-full p-3 bg-black/40 border border-amber-500/20 focus:border-amber-500/40 rounded-md min-h-[100px] text-amber-100 placeholder:text-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                placeholder="Any special requests or additional information..."
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="border-amber-500/20 hover:bg-gray-400 text-black"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-medium"
              >
                {loading ? 'Submitting...' : 'Submit Booking'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}