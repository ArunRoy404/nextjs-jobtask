'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
    const pathname = usePathname()

    const links = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/dashboard", label: "Dashboard" },
    ];

    return (
        <>
            {
                links.map((link, i) => {
                    const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                    return <Link
                        key={i}
                        href={link.href}
                        className={`text-sm font-semibold ${isActive ? 'text-indigo-400' : ''}`}>
                        {link.label}
                    </Link>
                })
            }
        </>
    );
};

export default NavLinks;