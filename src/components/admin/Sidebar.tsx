import Link from 'next/link';
import { LayoutDashboard, Calendar, Image, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-8">PhotoVid Admin</h1>
        
        <nav className="space-y-2">
          <Link 
            href="/admin/dashboard" 
            className="flex items-center gap-2 p-3 hover:bg-gray-800 rounded-lg"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          
          <Link 
            href="/admin/bookings" 
            className="flex items-center gap-2 p-3 hover:bg-gray-800 rounded-lg"
          >
            <Calendar size={20} />
            Bookings
          </Link>
          
          <Link 
            href="/admin/portfolio" 
            className="flex items-center gap-2 p-3 hover:bg-gray-800 rounded-lg"
          >
            <Image size={20} />
            Portfolio
          </Link>
        </nav>
      </div>

      <div className="absolute bottom-0 w-full p-6">
        <button className="flex items-center gap-2 p-3 hover:bg-gray-800 rounded-lg w-full">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}