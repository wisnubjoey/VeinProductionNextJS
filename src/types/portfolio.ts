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
  
  export interface PaginatedResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  }