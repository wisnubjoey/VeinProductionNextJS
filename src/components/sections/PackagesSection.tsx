// src/components/sections/PackagesSection.tsx
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import BookingModal from '@/components/booking/BookingModal';

const packages = [
  {
    id: 'basic',
    title: "Basic Package",
    price: "2.500K",
    description: "Perfect for small events and portraits",
    features: [
      "Max 100 photos",
      "5 video highlights",
      "1 photographer + 1 videographer",
      "Basic editing",
      "7 days delivery"
    ],
    popular: false
  },
  {
    id: 'premium',
    title: "Premium Package",
    price: "5.000K",
    description: "Ideal for weddings and special events",
    features: [
      "Max 200 photos",
      "10 video highlights",
      "2 photographers + 2 videographers",
      "Advanced editing",
      "5 days delivery"
    ],
    popular: true
  },
  {
    id: 'ultimate',
    title: "Ultimate Package",
    price: "8.000K",
    description: "Complete coverage for luxury events",
    features: [
      "Unlimited photos",
      "Full video coverage",
      "3 photographers + 3 videographers",
      "Premium editing",
      "3 days delivery"
    ],
    popular: false
  }
];

export default function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
          <p className="text-gray-600">
            Select the perfect package for your needs. All packages include high-resolution photos and videos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'border-purple-500 shadow-lg' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">Rp {pkg.price}</span>
                  <span className="text-gray-600">/session</span>
                </div>
                <p className="text-gray-600 mt-2">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <Check size={14} className="text-purple-500" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-purple-500 hover:bg-purple-600' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  Choose {pkg.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>All packages include basic equipment setup and location scouting.</p>
          <p>Need a custom package? <button className="text-purple-500 hover:underline">Contact us</button></p>
        </div>
      </div>

      <BookingModal 
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        packageType={selectedPackage || ''}
      />
    </section>
  );
}