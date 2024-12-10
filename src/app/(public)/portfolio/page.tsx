'use client';

import PortfolioItem from "@/components/gallery/PortfolioItem";
import { getPortfolios } from "@/lib/api/portfolio";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>("all");

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 interface Portfolio {
  id: number;
  media_url: string;
  title: string;
  type: 'photo' | 'video';
  is_featured: boolean;
}

// Mapper function dengan type yang benar
const mapToPortfolioItem = (item: Portfolio) => ({
  image: item.media_url,
  title: item.title,
  type: item.type,
  isFeatured: item.is_featured
});

type FilterType = 'all' | 'photo' | 'video';
  
  const filteredPortfolios = filter === "all" ? portfolios : portfolios.filter((item: Portfolio) => item.type === filter );

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold mb-12">Our Portfolio</h1>
        
        <select value={filter} onChange={(e) => setFilter(e.target.value as FilterType)} className="border-2 border-gray-300 rounded-md p-2">
          <option value="all">All</option>
          <option value="photo">Photo</option>
          <option value="video">Video</option>
        
        </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolios.map((item) => (
              <PortfolioItem
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              key={(item as any).id}
              {...mapToPortfolioItem(item)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
