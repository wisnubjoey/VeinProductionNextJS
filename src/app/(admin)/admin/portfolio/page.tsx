'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Image, Film, Pencil, Trash2 } from "lucide-react";
import AddPortfolioModal from "@/components/admin/AddPortfolioModal";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPortfolioItems, deletePortfolioItem } from '@/lib/api/portfolio';
import { PortfolioItem } from "@/types/portfolio";

export default function PortfolioPage() {
  const queryClient = useQueryClient();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Fetch portfolio items
  const { data: portfolioItems, isLoading, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: getPortfolioItems
  });

  console.log('Portfolio data:', portfolioItems);

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: deletePortfolioItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    }
  });

  // Filter items based on selected type
  const filteredItems = selectedType === 'all' 
  ? portfolioItems?.data
  : portfolioItems?.data?.filter(item => item.type === selectedType);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading portfolio items</div>;
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio Management</h1>
        
        <div className="flex gap-4">
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border rounded-md p-2"
          >
            <option value="all">All Types</option>
            <option value="photo">Photos</option>
            <option value="video">Videos</option>
          </select>

          <Button onClick={() => setIsAddModalOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems?.map((item) => (
          <Card key={item.id} className="group relative overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <img
                  src={item.media_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="text-white"
                      onClick={() => {
                        // TODO: Handle edit
                        setSelectedItem(item);
                        setIsAddModalOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="text-white"
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this item?')) {
                          deleteMutation.mutate(item.id);
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Type badge */}
                <div className="absolute top-2 right-2">
                  {item.type === 'photo' ? (
                    <Image className="h-5 w-5 text-white" />
                  ) : (
                    <Film className="h-5 w-5 text-white" />
                  )}
                </div>

                {/* Featured badge */}
                {item.is_featured && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-medium">{item.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AddPortfolioModal 
        isOpen={isAddModalOpen} 
        onClose={() => {
          setIsAddModalOpen(false);
          setSelectedItem(null);
        }}
        item={selectedItem || undefined}
      />
    </div>
  );
}