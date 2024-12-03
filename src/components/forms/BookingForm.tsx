'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function BookingForm({ 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  packageType, 
  onBack 
}: { 
  packageType: string;
  onBack: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement form submission
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Full Name</label>
        <Input name="client_name" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input type="email" name="email" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Phone</label>
        <Input type="tel" name="phone" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Event Date</label>
        <Input type="date" name="event_date" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Event Type</label>
        <Input name="event_type" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Location</label>
        <Input name="location" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Special Requests</label>
        <textarea 
          name="special_requests"
          className="w-full p-2 border rounded-md min-h-[100px]"
        />
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Book Now'}
        </Button>
      </div>
    </form>
  );
}