// src/components/sections/HeroSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-screen relative flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
      <div className="absolute inset-0">
        <Image
          src="/api/placeholder/1920/1080"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Capture Your Special Moments
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Professional photography and videography services for your events in Bali.
          Create timeless memories with our expert team.
        </p>
        <Link href="/booking">
          <Button size="lg" className="text-lg">
            Book Your Session
          </Button>
        </Link>
      </div>
    </div>
  );
}