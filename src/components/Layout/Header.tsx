import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full py-6 bg-black/80 backdrop-blur-sm border-b border-amber-500/10 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-16 h-10 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-black text-xl font-bold">Vein</span>
          </div>
          <span className="text-xl font-bold text-amber-100 group-hover:text-amber-400 transition-all">
            Production
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/portfolio" 
            className="text-amber-200/80 text-lg hover:text-amber-400 transition-colors duration-500"
          >
            Portfolio
          </Link>
          <Link 
            href="/contact" 
            className="text-amber-200/80 text-lg hover:text-amber-400 transition-colors duration-500"
          >
            Contact
          </Link>
        </nav>

        <button className="md:hidden text-amber-200 hover:text-amber-400 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
