import React from 'react';
import Link from 'next/link';

const Button = ({ children, to, onclick }) => {
    return (
        <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background  hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base px-4 sm:px-5 sm:w-auto py-1"
            href={to}
            onclick={onclick}
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    );
};

export default Button;