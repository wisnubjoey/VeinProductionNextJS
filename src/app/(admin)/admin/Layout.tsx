// src/app/(admin)/admin/layout.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/context/auth-context';
import { Button } from '@/components/ui/button';

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

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <Button onClick={logout} className="bg-red-500 hover:bg-red-600">
          Logout
        </Button>
      </header>
      {children}
    </div>
  );
}