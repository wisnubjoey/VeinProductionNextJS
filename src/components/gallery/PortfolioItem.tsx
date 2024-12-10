// src/components/gallery/PortfolioItem.tsx
interface PortfolioItemProps {
    image: string;
    title: string;
    type: 'photo' | 'video';
    isFeatured?: boolean;
  }
  
  export default function PortfolioItem({ image, title, type, isFeatured }: PortfolioItemProps) {
    return (
      <div className="relative group overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-105"
        />
        
        {/* Type badge */}
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {type}
        </div>
  
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm">
            Featured
          </div>
        )}
  
        {/* Title overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
          <h3 className="text-white p-4">{title}</h3>
        </div>
      </div>
    );
  }