'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Image as ImageIcon, Film, Pencil, Trash2 } from "lucide-react";
import AddPortfolioModal from "@/components/admin/AddPortfolioModal";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPortfolioItems, deletePortfolioItem } from '@/lib/api/portfolio';
import { PaginatedResponse, PortfolioItem } from "@/types/portfolio";
import { motion } from 'framer-motion';
import AdminLayout from '../Layout';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function PortfolioPage() {
  const queryClient = useQueryClient();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const { data: portfolioItems, error } = useQuery<PaginatedResponse<PortfolioItem>>({
    queryKey: ['portfolio'],
    queryFn: getPortfolioItems
  });

  const deleteMutation = useMutation({
    mutationFn: deletePortfolioItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    }
  });

  const filteredItems = selectedType === 'all' 
    ? portfolioItems?.data
    : portfolioItems?.data?.filter(item => item.type === selectedType);

  if (error) return <div className="text-red-400">Error loading portfolio items</div>;
  
  return (
    <AdminLayout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6 p-6"
      >
        <motion.div 
          variants={item}
          className="flex justify-between items-center"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
            Portfolio Management
          </h1>
          
          <div className="flex gap-4">
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-black/40 border border-amber-500/20 rounded-md p-2 text-amber-100 focus:outline-none focus:border-amber-500"
            >
              <option value="all">All Types</option>
              <option value="photo">Photos</option>
              <option value="video">Videos</option>
            </select>

            <Button 
              onClick={() => setIsAddModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-600 text-black"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems?.map((item) => (
              <Card key={item.id} className="group relative overflow-hidden bg-black/40 border-amber-500/20">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    {item.type === 'photo' ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={item.media_url}
                          alt={item.title || 'Portfolio image'}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <video
                        src={item.media_url}
                        className="w-full h-full object-cover"
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 flex items-center justify-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="text-white"
                          onClick={() => {
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

                    <div className="absolute top-2 right-2">
                      {item.type === 'photo' ? (
                        <ImageIcon className="h-5 w-5 text-white" />
                      ) : (
                        <Film className="h-5 w-5 text-white" />
                      )}
                    </div>

                    {item.is_featured && (
                      <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium text-amber-100">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <AddPortfolioModal 
          isOpen={isAddModalOpen} 
          onClose={() => {
            setIsAddModalOpen(false);
            setSelectedItem(null);
          }}
          item={selectedItem || undefined}
        />
      </motion.div>
    </AdminLayout>
  );
}