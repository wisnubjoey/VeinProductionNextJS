import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function FeaturedPortfolio() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/api/placeholder/800/600`}
                    alt={`Portfolio ${item}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}