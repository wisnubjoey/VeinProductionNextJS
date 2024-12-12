"use client";

import { useRef, useState } from "react";
import { MediaCard } from "@/components/ui/mediaCard";
import Link from "next/link";

type MediaType = "video" | "photo";

interface MediaItem {
  id: number;
  mediaUrl: string;
  type: MediaType;
}

const media: MediaItem[] = [
  {
    id: 1,
    mediaUrl: "https://utfs.io/f/XjzNbh0ZM35DhcrRGpN3cSU9yLPT0zXJjOslBnQempvh5tN7",
    type: "video"
  },
  {
    id: 2,
    mediaUrl: "https://utfs.io/f/XjzNbh0ZM35D1uXyU09TVh7fkRuxUr4saqOdKlvAgbIy3HZp",
    type: "video"
  },
  {
    id: 3,
    mediaUrl: "https://utfs.io/f/XjzNbh0ZM35D1UmjUv9TVh7fkRuxUr4saqOdKlvAgbIy3HZp",
    type: "photo"
  }
];

export default function FeaturedPortfolio() {
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black relative">
      <div className="absolute inset-0 " />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
            Hasil Photo dan Video
          </h2>
          
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {media.map((item) => (
              <div key={item.id} className="flex justify-center">
                <MediaCard
                  {...item}
                  videoRef={el => { if (el) videoRefs.current[item.id] = el }}
                  isPlaying={isPlaying[item.id]}
                  onHover={(isHovering) => {
                    if (item.type === 'video') {
                      if (isHovering) {
                        videoRefs.current[item.id]?.play();
                      } else {
                        videoRefs.current[item.id]?.pause();
                        videoRefs.current[item.id].currentTime = 0;
                      }
                      setIsPlaying(prev => ({ ...prev, [item.id]: isHovering }));
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
            
        <div className="text-center mt-10">
          <p className="text-amber-200/80 text-xl max-w-2xl mx-auto">
            Ingin melihat lebih banyak hasil photo dan video saya?{" "}
            <Link href="/portfolio">
              <span className="text-amber-400 font-bold hover:text-amber-300 transition-colors cursor-pointer border-b-2 border-amber-400/20 hover:border-amber-400">
                Gallery
              </span>
            </Link>
          </p>
        </div>
        
      </div>
    </section>
  );
}