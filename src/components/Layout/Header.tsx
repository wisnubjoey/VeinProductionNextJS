import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed w-full py-6 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">P</span>
          </div>
          <span className="text-xl font-bold">PhotoVid</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-purple-500 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/portfolio" 
            className="text-gray-600 hover:text-purple-500 transition-colors"
          >
            Portfolio
          </Link>
          <Link href="/booking">
            <Button 
              className="bg-purple-500 hover:bg-purple-600 transition-colors"
            >
              Book Now
            </Button>
          </Link>
        </nav>

        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  )
}
