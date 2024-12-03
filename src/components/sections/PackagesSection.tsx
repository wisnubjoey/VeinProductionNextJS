import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Basic Package",
    features: [
      "100 edited photos",
      "5 video highlights",
      "1 photographer + 1 videographer",
      "Basic editing",
      "7 days delivery"
    ]
  },
  {
    title: "Premium Package",
    features: [
      "200 edited photos",
      "10 video highlights",
      "2 photographers + 2 videographers",
      "Advanced editing",
      "5 days delivery"
    ]
  },
  // ... add more packages
];

export default function PackagesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Packages
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}