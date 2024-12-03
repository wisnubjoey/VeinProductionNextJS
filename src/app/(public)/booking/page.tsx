'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import BookingForm from '@/components/forms/BookingForm';

const packages = [
  {
    id: 'basic',
    title: 'Basic Package',
    features: [/* ... */]
  },
  // ... other packages
];

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState('');

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Book Your Session</h1>

        {!selectedPackage ? (
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Package details */}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <BookingForm 
            packageType={selectedPackage} 
            onBack={() => setSelectedPackage('')}
          />
        )}
      </div>
    </main>
  );
}