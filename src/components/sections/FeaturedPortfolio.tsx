"use client";

import { useRef, useState } from "react";
import { MediaCard } from "@/components/ui/mediaCard";

const media = [
  {
    id: 1,
    title: "Amazing Video",
    description: "Hover to play the video",
    mediaUrl: "https://utfs.io/f/XjzNbh0ZM35DhcrRGpN3cSU9yLPT0zXJjOslBnQempvh5tN7",
    type: "video"
  },
  {
    id: 2,
    title: "Beautiful Photo 1",
    description: "Hover to see the effect",
    mediaUrl: "https://utfs.io/f/XjzNbh0ZM35D2Hd0Za9Yc79zMD1onOvWGeuKYZ6I3kdUjX8L",
    type: "photo"
  },
  {
    id: 3,
    title: "Beautiful Photo 2",
    description: "Hover to see the effect",
    mediaUrl: "https://utfs.io/f/XjzNbh0ZM35D2Hd0Za9Yc79zMD1onOvWGeuKYZ6I3kdUjX8L",
    type: "photo"
  }
];

export default function FeaturedPortfolio() {
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Works</h2>
          <p className="text-gray-600">
            Explore our latest photography and videography projects
          </p>
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
      </div>
    </section>
  );
}