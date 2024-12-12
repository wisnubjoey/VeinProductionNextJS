import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">
              Vein Production
            </h3>
            <p className="text-amber-200/70 leading-relaxed">
              Capturing your precious moments with professional photography and videography services in the heart of Bali.
            </p>
            <div className="flex gap-4 pt-4">
              <Link 
                href="#" 
                className="text-amber-200/60 hover:text-amber-400 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="text-amber-200/60 hover:text-amber-400 transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="text-amber-200/60 hover:text-amber-400 transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-100">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                href="/portfolio" 
                className="block text-amber-200/70 hover:text-amber-400 transition-all hover:translate-x-2 duration-300 flex items-center gap-2"
              >
                <span className="text-amber-500">→</span> Portfolio
              </Link>
              <Link 
                href="/booking" 
                className="block text-amber-200/70 hover:text-amber-400 transition-all hover:translate-x-2 duration-300 flex items-center gap-2"
              >
                <span className="text-amber-500">→</span> Book Now
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-100">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-amber-200/70 hover:text-amber-400 transition-all group cursor-pointer">
                <MapPin className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <p>Bali, Indonesia</p>
              </div>
              <div className="flex items-center gap-3 text-amber-200/70 hover:text-amber-400 transition-all group cursor-pointer">
                <Mail className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <p>contact@photovid.com</p>
              </div>
              <div className="flex items-center gap-3 text-amber-200/70 hover:text-amber-400 transition-all group cursor-pointer">
                <Phone className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <p>+62 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-500/10 mt-12 pt-8 text-center">
          <p className="text-amber-200/50">
            © {new Date().getFullYear()} Vein Production. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
