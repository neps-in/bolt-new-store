import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">AmazonClone</h1>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300">Deals</a>
                <a href="#" className="hover:text-gray-300">Electronics</a>
                <a href="#" className="hover:text-gray-300">Fashion</a>
                <a href="#" className="hover:text-gray-300">Books</a>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-xl px-6">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-white text-gray-900 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search products..."
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center hover:text-gray-300">
              <User className="h-6 w-6" />
              <span className="ml-2">Account</span>
            </button>
            <button className="flex items-center hover:text-gray-300">
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-2">Cart (0)</span>
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Deals</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Electronics</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Fashion</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Books</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Account</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Cart (0)</a>
          </div>
        </div>
      )}
    </header>
  );
}