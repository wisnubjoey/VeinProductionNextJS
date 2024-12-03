// src/app/(admin)/layout.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/context/auth-context';
import Sidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/Header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/admin/Login') {
      router.push('/admin/Login');
    }
  }, [isAuthenticated, router, pathname]);

  if (pathname === '/admin/Login') {
    return children;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <AdminHeader />
      <main className="pl-64 pt-16">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}