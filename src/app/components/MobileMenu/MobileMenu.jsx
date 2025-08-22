'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isHomeActive = pathname === '/';
  const isProductsActive = pathname.startsWith('/products');
  const isDashboardActive = pathname.startsWith('/dashboard') && pathname !== '/dashboard/add-product';
  const isAddProductActive = pathname.startsWith('/dashboard/add-product');

  return (
    <div className="lg:hidden relative">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-gray-200 hover:bg-gray-700 transition"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Links */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg flex flex-col p-2 space-y-2 z-50">
          <Link
            href="/"
            className={`text-sm font-semibold ${isHomeActive ? 'text-indigo-400' : 'text-gray-200'} hover:text-indigo-300`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`text-sm font-semibold ${isProductsActive ? 'text-indigo-400' : 'text-gray-200'} hover:text-indigo-300`}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/dashboard"
            className={`text-sm font-semibold ${isDashboardActive ? 'text-indigo-400' : 'text-gray-200'} hover:text-indigo-300`}
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            href="/dashboard/add-product"
            className={`text-sm font-semibold ${isAddProductActive ? 'text-indigo-400' : 'text-gray-200'} hover:text-indigo-300`}
            onClick={() => setIsOpen(false)}
          >
            Add Product
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
