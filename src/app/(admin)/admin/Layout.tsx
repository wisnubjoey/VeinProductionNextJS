// src/app/(admin)/admin/layout.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/context/auth-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Calendar, 
  LogOut,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/admin/Login') {
      router.push('/admin/Login');
    }
  }, [isAuthenticated, router, pathname]);

  if (!isAuthenticated && pathname !== '/admin/Login') {
    return null;
  }

  const menuItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/bookings', label: 'Bookings', icon: Calendar },
    { href: '/admin/portfolio', label: 'Portfolio', icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-sm border-r border-amber-500/20">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
            Admin Panel
          </h1>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-amber-400 bg-amber-500/10 border-r-2 border-amber-500' 
                      : 'text-amber-200/60 hover:text-amber-400 hover:bg-amber-500/5'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-black/40 backdrop-blur-sm border-b border-amber-500/20">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-semibold text-amber-100">
              {menuItems.find(item => item.href === pathname)?.label || 'Dashboard'}
            </h2>
            
            <Button 
              onClick={logout}
              variant="ghost"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}