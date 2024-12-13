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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gray-700">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-amber-400">
            Booking Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div>
            <label className="text-sm font-medium text-amber-200/80">Client Name</label>
            <p className="mt-1 text-amber-100">{booking.client_name}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-amber-200/80">Email</label>
            <p className="mt-1 text-amber-100">{booking.email}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-amber-200/80">Phone</label>
            <p className="mt-1 text-amber-100">{booking.phone}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-amber-200/80">Event Date</label>
            <p className="mt-1 text-amber-100">{booking.event_date}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-amber-200/80">Event Type</label>
            <p className="mt-1 text-amber-100">{booking.event_type}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-amber-200/80">Package</label>
            <p className="mt-1 text-amber-100">{booking.package_type}</p>
          </div>
          
          <div className="col-span-2">
            <label className="text-sm font-medium text-amber-200/80">Special Requests</label>
            <p className="mt-1 text-amber-100">{booking.special_requests || '-'}</p>
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium text-amber-200/80">Update Status</label>
          <div className="mt-2 flex gap-2">
            <Button 
              variant={booking.status === 'pending' ? 'default' : 'outline'}
              onClick={() => onUpdateStatus('pending')}
              className={booking.status === 'pending' 
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'border-amber-500/20 text-amber-400 hover:bg-amber-500/10'
              }
            >
              Pending
            </Button>
            <Button 
              variant={booking.status === 'contacted' ? 'default' : 'outline'}
              onClick={() => onUpdateStatus('contacted')}
              className={booking.status === 'contacted'
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'border-amber-500/20 text-amber-400 hover:bg-amber-500/10'
              }
            >
              Contacted
            </Button>
            <Button 
              variant={booking.status === 'confirmed' ? 'default' : 'outline'}
              onClick={() => onUpdateStatus('confirmed')}
              className={booking.status === 'confirmed'
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'border-amber-500/20 text-amber-400 hover:bg-amber-500/10'
              }
            >
              Confirmed
            </Button>
            <Button 
              variant={booking.status === 'completed' ? 'default' : 'outline'}
              onClick={() => onUpdateStatus('completed')}
              className={booking.status === 'completed'
                ? 'bg-amber-500 hover:bg-amber-600 text-black'
                : 'border-amber-500/20 text-amber-400 hover:bg-amber-500/10'
              }
            >
              Completed
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}