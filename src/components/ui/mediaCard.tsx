"use client";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

interface MediaCardProps {
  id: string | number;
  mediaUrl: string;
  type: 'photo' | 'video';
  videoRef?: (el: HTMLVideoElement | null) => void;
  isPlaying?: boolean;
  onHover: (isHovering: boolean) => void;
}

export function MediaCard({ 
  mediaUrl, 
  type,
  videoRef,
  onHover
}: MediaCardProps) {
  return (
    <Modal>
      <ModalTrigger className="w-full max-w-[384px]">
        <div 
          className="w-full h-full"
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          <div
            className={cn(
              "group cursor-pointer overflow-hidden relative card h-[450px] rounded-xl shadow-xl mx-auto flex flex-col justify-end p-6 border border-transparent hover:border-purple-500/50",
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
              
            </div>
          </div>
        </div>
      </ModalTrigger>

      <ModalBody>
        <ModalContent>
          <div className="space-y-4">
     
            
            {/* Media Display */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              {type === 'video' ? (
                <video
                  src={mediaUrl}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                />
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${mediaUrl})` }}
                />
              )}
            </div>

            {/* Description */}
           
          </div>
        </ModalContent>
        <ModalFooter className="gap-4">
          <button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm">
            Close
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md text-sm">
            Share
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
