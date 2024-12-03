"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing"; // Perbaikan import
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPortfolioItem, updatePortfolioItem } from '@/lib/api/portfolio';
import Image from "next/image";

// Tambahkan interface untuk props
interface AddPortfolioModalProps {
 isOpen: boolean;
 onClose: () => void;
 item?: {
   id: number;
   title: string;
   type: 'photo' | 'video';
   media_url: string;
   is_featured: boolean;
 };
}

// Tambahkan interface untuk data
interface PortfolioData {
 title: string;
 type: 'photo' | 'video';
 media_url: string;
 is_featured: boolean;
}

export default function AddPortfolioModal({
 isOpen,
 onClose,
 item
}: AddPortfolioModalProps) {
 const queryClient = useQueryClient();
 const [uploadedUrl, setUploadedUrl] = useState(item?.media_url || "");
 const [uploadError, setUploadError] = useState<string>(""); // Tambahkan state untuk error

 const createMutation = useMutation<unknown, Error, PortfolioData>({
   mutationFn: createPortfolioItem,
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['portfolio'] });
     onClose();
   }
 });

 const updateMutation = useMutation<unknown, Error, {id: number, data: PortfolioData}>({
   mutationFn: ({ id, data }) => updatePortfolioItem(id, data),
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['portfolio'] });
     onClose();
   }
 });

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   const formData = new FormData(e.currentTarget);
   const data: PortfolioData = {
     title: formData.get('title') as string,
     type: formData.get('type') as 'photo' | 'video',
     media_url: uploadedUrl,
     is_featured: formData.get('is_featured') === 'on'
   };

   if (item) {
     updateMutation.mutate({ id: item.id, data });
   } else {
     createMutation.mutate(data);
   }
 };

 return (
   <Dialog open={isOpen} onOpenChange={onClose}>
     <DialogContent className="max-w-md">
       <DialogHeader>
         <DialogTitle>{item ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}</DialogTitle>
       </DialogHeader>

       <form onSubmit={handleSubmit} className="space-y-4">
         <div className="space-y-2">
           <Label>Title</Label>
           <Input name="title" defaultValue={item?.title} required />
         </div>

         <div className="space-y-2">
           <Label>Type</Label>
           <select 
             name="type" 
             className="w-full border rounded-md p-2"
             defaultValue={item?.type || 'photo'}
           >
             <option value="photo">Photo</option>
             <option value="video">Video</option>
           </select>
         </div>

         <div className="space-y-2">
           <Label>Media</Label>
           {!uploadedUrl ? (
             <UploadDropzone
             endpoint="mediaUploader"
             onUploadBegin={() => {
               console.log("Upload dimulai");
             }}
             onClientUploadComplete={(res) => {
               // Log lebih detail
               console.log("Upload selesai, response lengkap:", res);
               try {
                 if (!res?.[0]?.url) {
                   console.warn("URL tidak ditemukan dalam response");
                   return;
                 }
                 console.log("URL yang didapat:", res[0].url);
                 setUploadedUrl(res[0].url);
                 setUploadError("");
               } catch (e) {
                 console.error("Error processing upload response:", e);
               }
             }}
             onUploadError={(error: Error) => {
               console.error("Upload error detail:", error);
               setUploadError(error.message);
             }}
             config={{
               // Tambahkan config untuk debug
               mode: "auto",
             }}
           />
           ) : (
             <div className="relative">
               {uploadedUrl.includes('video') ? (
                 <video 
                   src={uploadedUrl} 
                   className="w-full rounded"
                   controls
                 />
               ) : (
                 <Image 
                   src={uploadedUrl} 
                   alt="Uploaded media"
                   width={500}
                   height={300}
                   className="w-full rounded"
                 />
               )}
               <Button
                 type="button"
                 variant="outline"
                 size="sm"
                 className="absolute top-2 right-2"
                 onClick={() => setUploadedUrl("")}
               >
                 Change
               </Button>
             </div>
           )}
           {uploadError && (
             <p className="text-sm text-red-500 mt-1">{uploadError}</p>
           )}
         </div>

         <div className="flex items-center gap-2">
           <input
             type="checkbox"
             name="is_featured"
             defaultChecked={item?.is_featured}
           />
           <Label>Featured Item</Label>
         </div>

         <div className="flex justify-end gap-2">
           <Button type="button" variant="outline" onClick={onClose}>
             Cancel
           </Button>
           <Button 
             type="submit" 
             disabled={
               createMutation.isPending || 
               updateMutation.isPending || 
               !uploadedUrl
             }
           >
             {createMutation.isPending || updateMutation.isPending 
               ? 'Saving...' 
               : 'Save'}
           </Button>
         </div>
       </form>
     </DialogContent>
   </Dialog>
 );
}