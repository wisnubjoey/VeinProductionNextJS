// src/components/sections/PackagesSection.tsx
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import BookingModal from '@/components/booking/BookingModal';
import { BackgroundLines } from '@/components/ui/background-lines';
import Link from 'next/link';

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
    <BackgroundLines className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6 z-10" id="packages">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
            Choose Your Package
          </h2>
          <p className="text-amber-200/80 text-xl">
            Select the perfect package for your needs. All packages include high-resolution photos and videos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative hover:shadow-xl transition-all duration-300 bg-black/40 backdrop-blur-sm border-amber-500/20 hover:border-amber-500/40 ${
                pkg.popular ? 'border-amber-500 shadow-lg shadow-amber-500/10' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-4 py-1 rounded-xl text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl text-amber-100">{pkg.title}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-amber-400">Rp {pkg.price}</span>
                  <span className="text-amber-200/60">/session</span>
                </div>
                <p className="text-amber-200/80 mt-2">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-xl bg-amber-500/10 flex items-center justify-center">
                        <Check size={14} className="text-amber-400" />
                      </div>
                      <span className="text-amber-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black' 
                      : 'bg-black border border-amber-500/20 hover:border-amber-500/40 text-amber-400 hover:bg-amber-500/10'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  Choose {pkg.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-amber-200/80">
          <p>All packages include basic equipment setup and location scouting.</p>
          <p>Need a custom package? {" "}
            <Link href="/contact" className="text-amber-400 hover:text-amber-300 transition-colors font-bold border-b-2 border-amber-400/20 hover:border-amber-400">
              Contact us
            </Link>
          </p>
        </div>
      </div>

      <BookingModal 
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        packageType={selectedPackage || ''}
      />
    </BackgroundLines>
  );
}