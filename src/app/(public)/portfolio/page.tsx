'use client';

import { useState, useEffect, useRef } from "react";
import { MediaCard } from "@/components/ui/mediaCard";
import { getPortfolios } from "@/lib/api/portfolio";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type FilterType = "all" | "photo" | "video";
type MediaType = "photo" | "video";

interface Portfolio {
  id: string;
  title: string;
  description: string;
  media_url: string;
  type: MediaType;
}

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>("all");
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const data = await getPortfolios();
        setPortfolios(data.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolios();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
          Vein Production
        </h1>
      </div>
    );
  }

  const filteredPortfolios = filter === "all" 
    ? portfolios 
    : portfolios.filter(portfolio => portfolio.type === filter);

  return (
    <>
      <Header />
      <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
              Our Portfolio
            </h2>
            <p className="text-amber-200/80 text-xl max-w-2xl mx-auto">
              Explore our collection of amazing photos and videos
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              {["all", "photo", "video"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as FilterType)}
                  className={`
                    px-6 py-2 rounded-full transition-all duration-300
                    border border-amber-500/20
                    ${filter === type
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium"
                      : "bg-black/40 text-amber-200/80 hover:bg-amber-500/10 hover:text-amber-400"
                    }
                  `}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {filteredPortfolios.map((portfolio: Portfolio) => (
                <div 
                  key={portfolio.id} 
                  className="flex justify-center"
                >
                  <MediaCard
                    id={portfolio.id}
                    mediaUrl={portfolio.media_url}
                    type={portfolio.type as MediaType}
                    videoRef={el => { if (el) videoRefs.current[portfolio.id] = el }}
                    isPlaying={isPlaying[portfolio.id]}
                    onHover={(isHovering) => {
                      if (portfolio.type === 'video') {
                        if (isHovering) {
                          videoRefs.current[portfolio.id]?.play();
                        } else {
                          videoRefs.current[portfolio.id]?.pause();
                          videoRefs.current[portfolio.id].currentTime = 0;
                        }
                        setIsPlaying(prev => ({ ...prev, [portfolio.id]: isHovering }));
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredPortfolios.length === 0 && (
            <div className="text-center py-20">
              <p className="text-amber-200/80 text-lg">
                No {filter === "all" ? "items" : filter + "s"} found.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
