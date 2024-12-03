import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PhotoVid</h3>
            <p className="text-gray-400">
              Professional photography and videography services in Bali.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/portfolio" className="block hover:text-white">
                Portfolio
              </Link>
              <Link href="/booking" className="block hover:text-white">
                Book Now
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Bali, Indonesia</p>
              <p>contact@photovid.com</p>
              <p>+62 123 456 789</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 PhotoVid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
