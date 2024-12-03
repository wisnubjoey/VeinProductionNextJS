import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed w-full py-4 px-6 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          PhotoVid
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-blue-600">
            Portfolio
          </Link>
          <Link href="/booking">
            <Button>Book Now</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
