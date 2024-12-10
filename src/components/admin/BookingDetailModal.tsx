// src/components/admin/BookingDetailModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Booking } from "@/lib/api/bookings";

interface BookingDetailModalProps {
  booking: Booking | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateStatus: (status: string) => void;
}

export default function BookingDetailModal({
  booking,
  isOpen,
  onClose,
  onUpdateStatus
}: BookingDetailModalProps) {
  if (!booking) return null;

  console.log('Booking data:', booking);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Booking Details</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div>
            <label className="text-sm font-medium text-gray-500">Client Name</label>
            <p className="mt-1">{booking.client_name}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Email</label>
            <p className="mt-1">{booking.email}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Phone</label>
            <p className="mt-1">{booking.phone}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Event Date</label>
            <p className="mt-1">{booking.event_date}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Event Type</label>
            <p className="mt-1">{booking.event_type}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Package</label>
            <p className="mt-1">{booking.package_type}</p>
          </div>
          
          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-500">Special Requests</label>
            <p className="mt-1">{booking.special_requests || '-'}</p>
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium text-gray-500">Update Status</label>
          <div className="mt-2 flex gap-2">
            <Button 
              variant={booking.status === 'pending' ? 'default' : 'outline'}
              onClick={() => onUpdateStatus('pending')}
            >
              Pending
            </Button>
            <Button 
              variant={booking.status === 'contacted' ? 'default' : 'outline'}
              onClick={() => onUpdateStatus('contacted')}
            >
              Contacted
            </Button>
            <Button 
              variant={booking.status === 'confirmed' ? 'default' : 'outline'}
              onClick={() => onUpdateStatus('confirmed')}
            >
              Confirmed
            </Button>
            <Button 
              variant={booking.status === 'completed' ? 'default' : 'outline'}
              onClick={() => onUpdateStatus('completed')}
            >
              Completed
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}