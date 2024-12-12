"use client"

// src/components/sections/HeroSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useEffect } from "react";

type MediaType = "video" | "photo";

interface MediaItem {
  id: number;
  mediaUrl: string;
  type: MediaType;
}

const media: MediaItem[] = [
  {
    id: 1,
    mediaUrl: "https://utfs.io/f/XjzNbh0ZM35D1uXyU09TVh7fkRuxUr4saqOdKlvAgbIy3HZp",
    type: "video" as MediaType
  },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-amber-100 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-amber-200 rounded-full">
            <span className="text-amber-600 font-medium">Premium Photography Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Capture Your{" "}
            <span className="text-amber-400">Special Moments</span>{" "}
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
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-lg px-8"
              >
                Book Now
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 bg-white text-black hover:bg-amber-100"
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

        {/* Right Content */}
        <div className="relative">
          {/* Main Video */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              src={media[0].mediaUrl}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
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