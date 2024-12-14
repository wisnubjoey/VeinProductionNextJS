'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function BookingForm({ onBack }: { packageType: string; onBack: () => void; }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement form submission
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
      <div className="space-y-2">
        <label className="text-amber-200 text-sm font-medium">Full Name</label>
        <Input 
          name="client_name" 
          required 
          className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <label className="text-amber-200 text-sm font-medium">Email</label>
        <Input 
          type="email" 
          name="email" 
          required 
          className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-amber-200 text-sm font-medium">Phone</label>
        <Input 
          type="tel" 
          name="phone" 
          required 
          className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
          placeholder="+62 xxx xxxx xxxx"
        />
      </div>

      <div className="space-y-2">
        <label className="text-amber-200 text-sm font-medium">Event Date</label>
        <Input 
          type="date" 
          name="event_date" 
          required 
          className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100"
        />
      </div>

      <div className="space-y-2">
        <label className="text-amber-200 text-sm font-medium">Event Type</label>
        <Input 
          name="event_type" 
          required 
          className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
          placeholder="Wedding, Birthday, etc."
        />
      </div>

      <div className="space-y-2">
        <label className="text-amber-200 text-sm font-medium">Location</label>
        <Input 
          name="location" 
          required 
          className="bg-black/40 border-amber-500/20 focus:border-amber-500/40 text-amber-100 placeholder:text-amber-200/30"
          placeholder="Event location"
        />
      </div>

      <div className="space-y-2">
        <label className="text-amber-200 text-sm font-medium">Special Requests</label>
        <textarea 
          name="special_requests"
          className="w-full p-3 bg-black/40 border border-amber-500/20 focus:border-amber-500/40 rounded-md min-h-[100px] text-amber-100 placeholder:text-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          placeholder="Any special requests or additional information..."
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onBack}
          className="flex-1 border-amber-500/20 hover:bg-amber-500/10 text-amber-400"
        >
          Back
        </Button>
        <Button 
          type="submit" 
          disabled={loading}
          className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-medium"
        >
          {loading ? 'Submitting...' : 'Book Now'}
        </Button>
      </div>
    </form>
  );
}