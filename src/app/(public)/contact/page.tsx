'use client';

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="w-8 h-8" />,
    href: "https://instagram.com/yourhandle",
    username: "@veinproduction",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "WhatsApp",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    href: "https://wa.me/yourphone",
    username: "+62 123 456 789",
    color: "from-green-500 to-green-600"
  },
  {
    name: "Email",
    icon: <Mail className="w-8 h-8" />,
    href: "mailto:your@email.com",
    username: "contact@veinproduction.com",
    color: "from-amber-400 to-amber-500"
  },
  {
    name: "TikTok",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-6.95a8.16 8.16 0 004.65 1.46v-3.28a4.84 4.84 0 01-1.2-.62z"/>
      </svg>
    ),
    href: "https://tiktok.com/@yourhandle",
    username: "@veinproduction",
    color: "from-pink-500 to-purple-500"
  }
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black relative min-h-screen">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
              Get in Touch
            </h2>
            <p className="text-amber-200/80 text-xl max-w-2xl mx-auto">
              Connect with us through any of these platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social) => (
              <Link 
                key={social.name}
                href={social.href}
                target="_blank"
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                
                <div className="relative flex items-center gap-6 p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-amber-500/10 hover:border-amber-500/20 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${social.color} p-4 rounded-xl text-white`}>
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-amber-100 font-semibold text-lg mb-1">
                      {social.name}
                    </h3>
                    <p className="text-amber-200/80">
                      {social.username}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      <svg 
                        className="w-4 h-4 text-amber-400 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-amber-200/60 max-w-2xl mx-auto">
              Available for photography and videography services in Bali and surrounding areas.
              Feel free to reach out for inquiries and bookings!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
