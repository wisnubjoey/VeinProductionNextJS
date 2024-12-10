// src/components/sections/HeroSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
            <span className="text-purple-600 font-medium">Premium Photography Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Capture Your{" "}
            <span className="text-purple-500">Special Moments</span>{" "}
            Forever
          </h1>
          
          <p className="text-xl text-gray-600 max-w-lg">
            Professional photography and videography services in Bali. 
            Let us help you create timeless memories with our expert team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/booking">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-lg px-8"
              >
                Book Now
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-8"
              >
                View Portfolio
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex items-center gap-8">
            <div>
              <h4 className="text-3xl font-bold">100+</h4>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold">5.0</h4>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image/Illustration */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/Kevin.PNG" // Ganti dengan gambar Anda
              alt="Photography Service"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="font-medium">5.0</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-purple-500">📸</span>
              <span className="font-medium">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}