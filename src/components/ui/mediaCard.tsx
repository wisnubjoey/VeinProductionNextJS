"use client";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,

} from "@/components/ui/animated-modal";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      {({ setOpen }) => (
        <>
          <ModalTrigger className="w-full max-w-[384px]">
            <div 
              className="w-full h-full"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
            >
              <div
                className={cn(
                  "group cursor-pointer overflow-hidden relative card h-[450px] rounded-xl shadow-xl mx-auto flex flex-col justify-end p-6 border border-amber-500 hover:border-amber-300",
                  "transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-100"
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
            <ModalContent className="bg-black/95 border border-amber-500/20 p-6 max-w-5xl mx-auto">
              <div className="space-y-6">
                {/* Media Display */}
                <div className="relative rounded-lg overflow-hidden bg-black/40">
                  {type === 'video' ? (
                    <video
                      src={mediaUrl}
                      className="w-full h-auto max-h-[80vh] mx-auto object-contain"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <Image
                        src={mediaUrl}
                        alt="Media content"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                    </div>
                  )}
                </div>

                {/* Description */}
                
              </div>

              <ModalFooter className="flex justify-end gap-4 pt-6 border-t border-amber-500/20">
                <Button 
                  className="px-4 py-2 border border-amber-500/20 hover:bg-amber-500/10 text-amber-400"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
                <Button 
                  className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-medium"
                >
                  Share
                </Button>
              </ModalFooter>
            </ModalContent>
          </ModalBody>
        </>
      )}
    </Modal>
  );
}
