'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
  const pathname = usePathname();

  const isHomeActive = pathname === '/';
  const isProductsActive = pathname.startsWith('/products');
  const isDashboardActive = pathname.startsWith('/dashboard') && pathname !== '/dashboard/add-product';
  const isAddProductActive = pathname.startsWith('/dashboard/add-product');

  return (
    <>
      <Link
        href="/"
        className={`text-sm font-semibold ${isHomeActive ? 'text-indigo-400' : ''}`}
      >
        Home
      </Link>

      <Link
        href="/products"
        className={`text-sm font-semibold ${isProductsActive ? 'text-indigo-400' : ''}`}
      >
        Products
      </Link>

      <Link
        href="/dashboard"
        className={`text-sm font-semibold ${isDashboardActive ? 'text-indigo-400' : ''}`}
      >
        Dashboard
      </Link>

      <Link
        href="/dashboard/add-product"
        className={`text-sm font-semibold ${isAddProductActive ? 'text-indigo-400' : ''}`}
      >
        Add Product
      </Link>
    </>
  );
};

export default NavLinks;
