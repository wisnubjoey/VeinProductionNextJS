'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  Star,
  CheckCircle2
} from 'lucide-react';
import AdminLayout from '../Layout';
import { useQuery } from '@tanstack/react-query';
import { getBookingStats, getRecentBookings } from '@/lib/api/bookings';
import type { Booking } from '@/types/booking';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DashboardPage() {
  // Fetch booking stats
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['bookingStats'],
    queryFn: getBookingStats
  });

  // Fetch recent bookings
  const { data: recentBookings, isLoading: bookingsLoading } = useQuery({
    queryKey: ['recentBookings'],
    queryFn: getRecentBookings
  });

  return (
    <AdminLayout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6 p-6"
      >
        <motion.h1 
          variants={item}
          className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text"
        >
          Dashboard
        </motion.h1>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div variants={item}>
            <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20 hover:border-amber-500/40 transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-amber-200/80 flex items-center gap-2">
                  <Calendar size={18} className="text-amber-400" />
                  Total Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-amber-100">
                  {statsLoading ? "..." : stats?.total_bookings || 0}
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20 hover:border-amber-500/40 transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-amber-200/80 flex items-center gap-2">
                  <Clock size={18} className="text-amber-400" />
                  Pending Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-amber-100">
                  {statsLoading ? "..." : stats?.pending_bookings || 0}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20 hover:border-amber-500/40 transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-amber-200/80 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-amber-400" />
                  Completed Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-amber-100">
                  {statsLoading ? "..." : stats?.completed_projects || 0}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20 hover:border-amber-500/40 transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-amber-200/80 flex items-center gap-2">
                  <Star size={18} className="text-amber-400" />
                  Average Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-amber-100">4.9</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={item}>
          <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-amber-100">
                Recent Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              {bookingsLoading ? (
                <div className="text-amber-200/60 text-sm">Loading...</div>
              ) : recentBookings?.length ? (
                <div className="space-y-4">
                  {recentBookings.map((booking: Booking) => (
                    <div key={booking.id} className="flex justify-between items-center text-sm">
                      <div>
                        <p className="text-amber-100 font-medium">{booking.client_name}</p>
                        <p className="text-amber-200/60">{booking.event_type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-amber-100">{new Date(booking.event_date).toLocaleDateString()}</p>
                        <p className="text-amber-400 capitalize">{booking.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-amber-200/60 text-sm">
                  No recent bookings to display
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}