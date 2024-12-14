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
    created_at: string;
    updated_at: string;
  }
  
  export interface BookingStats {
    total_bookings: number;
    pending_bookings: number;
    completed_projects: number;
  }