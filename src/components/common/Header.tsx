import React from 'react';
import Link from 'next/link';
import { Menu, ShoppingBag, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu Icon */}
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl font-serif hover:opacity-80">
            FASHION STORE
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products/donna" className="text-gray-600 hover:text-black">
              Donna
            </Link>
            <Link href="/products/uomo" className="text-gray-600 hover:text-black">
              Uomo
            </Link>
            <Link href="/products/accessori" className="text-gray-600 hover:text-black">
              Accessori
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;