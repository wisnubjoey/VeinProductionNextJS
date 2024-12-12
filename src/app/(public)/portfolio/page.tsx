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
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500" /><br></br>
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
    <section className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 mb-8">
            Explore our collection of amazing photos and videos
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "all"
                  ? "bg-amber-500 text-white"
                  : "bg-white text-gray-600 hover:bg-amber-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("photo")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "photo"
                  ? "bg-amber-500 text-white"
                  : "bg-white text-gray-600 hover:bg-amber-100"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setFilter("video")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "video"
                  ? "bg-amber-500 text-white"
                  : "bg-white text-gray-600 hover:bg-amber-100"
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {filteredPortfolios.map((portfolio: Portfolio) => (
              <div key={portfolio.id} className="flex justify-center">
                <MediaCard
                  id={portfolio.id}
                  title={portfolio.title}
                  description={portfolio.description}
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
      </div>
    </section>
    <Footer />
    </>
  );
}
