import Image from 'next/image';

export default function AboutSection() {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="text-gray-600">
                We are a passionate team of photographers and videographers based in Bali. 
                With years of experience capturing special moments, we understand how to 
                create timeless memories for our clients.
              </p>
              <p className="text-gray-600">
                Our approach combines technical expertise with artistic vision to 
                deliver stunning visuals that tell your unique story.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/api/placeholder/800/600"
                alt="About Us"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }