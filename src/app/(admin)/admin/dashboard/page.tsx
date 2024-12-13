'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  Users,
  Star
} from 'lucide-react';
import AdminLayout from '../Layout';

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
  return (
    <AdminLayout>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.h1 
        variants={item}
        className="text-2xl font-bold text-amber-100"
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
              <p className="text-2xl font-bold text-amber-100">12</p>
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
              <p className="text-2xl font-bold text-amber-100">3</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20 hover:border-amber-500/40 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-amber-200/80 flex items-center gap-2">
                <Users size={18} className="text-amber-400" />
                Active Clients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-100">45</p>
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
            {/* Add recent bookings table */}
            <div className="text-amber-200/60 text-sm">
              No recent bookings to display
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
    </AdminLayout>
  );
}