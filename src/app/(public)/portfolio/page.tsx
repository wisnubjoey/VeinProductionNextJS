import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Our Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Portfolio items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/api/placeholder/800/600`}
                    alt={`Portfolio ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}