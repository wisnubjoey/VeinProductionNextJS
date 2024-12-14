"use client"

// src/components/sections/HeroSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

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

  const scrollToPackages = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const packagesSection = document.querySelector('#packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-black via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20"
          >
            <span className="text-amber-400 font-medium">Premium Photography Services</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-tight text-amber-100"
          >
            Capture Your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
              Special Moments
            </span>{" "}
            Forever
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-amber-200/80 max-w-lg"
          >
            Professional photography and videography services in Bali. 
            Let us help you create timeless memories with our expert team.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#packages" onClick={scrollToPackages}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black text-lg px-8 transition-all duration-300"
              >
                Book Now
              </Button>
            </a>
            <Link href="/portfolio">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 bg-transparent border border-amber-500/20 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/40"
              >
                View Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-8 flex items-center gap-8"
          >
            <div>
              <h4 className="text-3xl font-bold text-amber-100">50+</h4>
              <p className="text-amber-200/80">Clients</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-100">86</h4>
              <p className="text-amber-200/80">Projects</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Main Video */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/30">
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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-amber-500/20"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400">★★★★★</span>
              <span className="font-medium text-amber-100">5.0</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-amber-500/20"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400">📸</span>
              <span className="font-medium text-amber-100">Kevin Zaidan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}