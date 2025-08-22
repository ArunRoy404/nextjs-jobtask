'use client'

import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavActions from "./NavActions";
import NavLinks from "./NavLinks";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="py-3 fixed top-0 w-full backdrop-blur-2xl z-[1000]">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center relative">

                {/* Left section: Mobile menu + Logo */}
                <div className="flex items-center gap-4">
                    {/* Mobile Hamburger - only visible on small screens */}
                    <div className="lg:hidden relative">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-200 hover:bg-gray-700 transition"
                        >
                            {isMenuOpen ? (
                                <span className="text-2xl font-bold">×</span>
                            ) : (
                                <span className="text-2xl font-bold">☰</span>
                            )}
                        </button>

                        {/* Mobile menu dropdown */}
                        {isMenuOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg flex flex-col p-2 space-y-2 z-50">
                                <NavLinks />
                            </div>
                        )}
                    </div>

                    {/* Logo */}
                    <Logo />
                </div>

                {/* Desktop Links + Actions */}
                <div className="flex items-center gap-10">
                    <ul className="hidden lg:flex font-semibold space-x-10">
                        <NavLinks />
                    </ul>
                    <NavActions />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
