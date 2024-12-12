import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-100 text-transparent bg-clip-text">
              Vein Production
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Capturing your precious moments with professional photography and videography services in the heart of Bali.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                href="/portfolio" 
                className="block hover:text-amber-400 transition-colors hover:translate-x-2 duration-300 flex items-center gap-2"
              >
                → Portfolio
              </Link>
              <Link 
                href="/booking" 
                className="block hover:text-amber-400 transition-colors hover:translate-x-2 duration-300 flex items-center gap-2"
              >
                → Book Now
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                <MapPin className="w-5 h-5" />
                <p>Bali, Indonesia</p>
              </div>
              <div className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
                <p>contact@photovid.com</p>
              </div>
              <div className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5" />
                <p>+62 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} PhotoVid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
