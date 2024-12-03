// src/types/portfolio.ts
export interface PortfolioItem {
    id: number;
    title: string;
    type: 'photo' | 'video';
    media_url: string;
    is_featured: boolean;
  }
  
  export interface PortfolioData {
    title: string;
    type: 'photo' | 'video';
    media_url: string;
    is_featured: boolean;
  }