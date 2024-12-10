"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface MediaCardProps {
  id: string | number;
  title: string;
  description: string;
  mediaUrl: string;
  type: 'photo' | 'video';
  videoRef?: (el: HTMLVideoElement | null) => void;
  isPlaying?: boolean;
  onHover: (isHovering: boolean) => void;
}

export function MediaCard({ 
  title, 
  description, 
  mediaUrl, 
  type,
  videoRef,
  onHover
}: MediaCardProps) {
  return (
    <div 
      className="w-full max-w-sm"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div
        className={cn(
          "group cursor-pointer overflow-hidden relative card h-[420px] rounded-xl shadow-xl mx-auto flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
          "transition-all duration-500"
        )}
      >
        {type === 'video' ? (
          <video
            ref={videoRef}
            src={mediaUrl}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            style={{ backgroundImage: `url(${mediaUrl})` }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30" />

        {/* Content */}
        <div className="text relative z-50">
          <h1 className="font-bold text-2xl text-gray-50 relative mb-2">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-200 relative">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
