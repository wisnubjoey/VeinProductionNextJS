// src/app/(admin)/admin/bookings/page.tsx
'use client';

import BookingList from '@/components/admin/BookingList';
import { motion } from 'framer-motion';
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

export default function BookingsPage() {
  return (
    <AdminLayout>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show" 
      className="space-y-6"
    >
      <motion.div 
        variants={item}
        className="flex justify-between items-center"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
          Bookings Management
        </h1>
      </motion.div>
      
      <motion.div variants={item}>
        <BookingList />
      </motion.div>
    </motion.div>
    </AdminLayout>
  );
}