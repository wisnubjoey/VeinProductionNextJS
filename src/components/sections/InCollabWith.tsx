'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const collaborators = [
  {
    name: "copicop.works",
    role: "Videographer",
    image: "https://utfs.io/f/XjzNbh0ZM35D1UmjUv9TVh7fkRuxUr4saqOdKlvAgbIy3HZp",
    instagram: "@veinproduction",
    link: "https://utfs.io/f/XjzNbh0ZM35D1UmjUv9TVh7fkRuxUr4saqOdKlvAgbIy3HZp"
  },
  {
    name: "Sweet AIM",
    role: "Model",
    image: "https://utfs.io/f/XjzNbh0ZM35D1UmjUv9TVh7fkRuxUr4saqOdKlvAgbIy3HZp",
    instagram: "@johndoe",
    link: "https://utfs.io/f/XjzNbh0ZM35D1UmjUv9TVh7fkRuxUr4saqOdKlvAgbIy3HZp"
  },
];

export default function InCollabWith() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
            In Collaboration With
          </h2>
          <p className="text-amber-200/80 text-xl">
            Working together with talented professionals to deliver exceptional results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {collaborators.map((collab, index) => (
            <motion.div
              key={collab.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={collab.link} target="_blank" className="block group">
                <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={collab.image}
                    alt={collab.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {collab.name}
                    </h3>
                    <p className="text-amber-300 font-medium mb-2">
                      {collab.role}
                    </p>
                    <p className="text-amber-100/80">
                      {collab.instagram}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-amber-200/80 text-lg">
            Want to collaborate with us? {" "}
            <Link 
              href="/contact" 
              className="text-amber-400 hover:text-amber-300 transition-colors font-bold border-b-2 border-amber-400/20 hover:border-amber-400"
            >
              Let&apos;s talk
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
